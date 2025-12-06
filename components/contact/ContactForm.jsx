'use client';
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  requestType: z.enum(['devis', 'rendez-vous', 'question'], {
    errorMap: () => ({ message: 'Veuillez sélectionner un type de demande' }),
  }),
  sector: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
});

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      requestType: '',
      sector: '',
      message: '',
      rgpd: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Sanitizer les données pour éviter les injections HTML/XSS
      const sanitizedData = {
        name: DOMPurify.sanitize(data.name, { ALLOWED_TAGS: [] }),
        email: DOMPurify.sanitize(data.email, { ALLOWED_TAGS: [] }),
        phone: DOMPurify.sanitize(data.phone, { ALLOWED_TAGS: [] }),
        requestType: data.requestType,
        sector: DOMPurify.sanitize(data.sector || '', { ALLOWED_TAGS: [] }),
        message: DOMPurify.sanitize(data.message, { ALLOWED_TAGS: [] }),
        rgpd: data.rgpd,
      };

      // Get CSRF token from cookie
      const csrfToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrf-token='))
        ?.split('=')[1];

      // Envoyer la requête à l'API sécurisée
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken || '',
        },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Gérer le rate limiting (429)
        if (response.status === 429 && result.retryAfter) {
          const minutes = Math.ceil(result.retryAfter / 60);
          const seconds = result.retryAfter % 60;
          const timeMsg = minutes > 0
            ? `${minutes} minute${minutes > 1 ? 's' : ''}`
            : `${seconds} seconde${seconds > 1 ? 's' : ''}`;

          throw new Error(`Trop de tentatives. Veuillez patienter ${timeMsg} avant de réessayer.`);
        }

        throw new Error(result.error || result.message || 'Erreur lors de l\'envoi');
      }

      // Rediriger vers la page de confirmation
      router.push('/contact/confirmation');
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Contact form error:', error);
      }

      let errorMessage = 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.';

      if (error.message.includes('CSRF') || error.message.includes('Invalid CSRF token')) {
        errorMessage = 'Erreur de sécurité. Veuillez rafraîchir la page et réessayer.';
      } else if (error.message.includes('Trop de tentatives')) {
        errorMessage = error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Nom / Prénom */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nom / Prénom"
                required
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                required
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          {/* Téléphone */}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Téléphone"
                type="tel"
                required
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />

          {/* Type de demande */}
          <Controller
            name="requestType"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth required error={!!errors.requestType}>
                <InputLabel>Type de demande</InputLabel>
                <Select {...field} label="Type de demande">
                  <MenuItem value="devis">Demander un devis</MenuItem>
                  <MenuItem value="rendez-vous">Prendre rendez-vous</MenuItem>
                  <MenuItem value="question">Question générale</MenuItem>
                </Select>
                {errors.requestType && (
                  <FormHelperText>{errors.requestType.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />

          {/* Secteur d'activité */}
          <Controller
            name="sector"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Secteur d'activité (optionnel)</InputLabel>
                <Select {...field} label="Secteur d'activité (optionnel)">
                  <MenuItem value="">Non spécifié</MenuItem>
                  <MenuItem value="btp">BTP</MenuItem>
                  <MenuItem value="liberal">Professions Libérales</MenuItem>
                  <MenuItem value="restauration">Restauration</MenuItem>
                  <MenuItem value="autre">Autre</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          {/* Message */}
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                required
                fullWidth
                multiline
                rows={6}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />

          {/* RGPD Checkbox */}
          <Controller
            name="rgpd"
            control={control}
            render={({ field }) => (
              <FormControl error={!!errors.rgpd} component="fieldset">
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      color="primary"
                    />
                  }
                  label={
                    <span>
                      J'accepte la{' '}
                      <Link
                        href="/politique-confidentialite"
                        style={{ color: '#043033', textDecoration: 'underline' }}
                      >
                        politique de confidentialité
                      </Link>
                      *
                    </span>
                  }
                />
                {errors.rgpd && (
                  <FormHelperText>{errors.rgpd.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            disabled={isSubmitting}
            sx={{
              py: 1.5,
              fontSize: '1rem',
            }}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </Button>
        </Box>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
