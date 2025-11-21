'use client';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';
import PageHead from '@/components/shared/PageHead';
import { CABINET_INFO } from '@/lib/data/navigation';

export default function ConfirmationPage() {
  return (
    <>
      <PageHead
        title="Message envoyé - Cabinet ECIFEC"
        description="Votre message a été envoyé avec succès au Cabinet ECIFEC. Nous vous répondrons dans les plus brefs délais."
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          borderRadius: 3,
          background: 'linear-gradient(135deg, #ffffff 0%, #EDF5F2 100%)',
        }}
      >
        {/* Icône de succès */}
        <Box
          sx={{
            display: 'inline-flex',
            p: 3,
            borderRadius: '50%',
            backgroundColor: 'success.light',
            mb: 3,
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: 80,
              color: 'success.main',
            }}
          />
        </Box>

        {/* Titre */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
          }}
        >
          Message envoyé avec succès !
        </Typography>

        {/* Message de confirmation */}
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          Merci de nous avoir contactés. Nous avons bien reçu votre demande et
          notre équipe vous répondra dans les plus brefs délais.
        </Typography>

        {/* Informations supplémentaires */}
        <Box
          sx={{
            backgroundColor: 'white',
            p: 3,
            borderRadius: 2,
            mb: 4,
            border: '2px solid',
            borderColor: 'secondary.main',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              mb: 2,
              fontWeight: 600,
            }}
          >
            En attendant notre réponse :
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            • Vérifiez votre boîte mail (et vos spams) pour notre email de
            confirmation
            <br />
            • Nous vous répondrons sous 24-48 heures
            <br />
            • Pour toute urgence, n'hésitez pas à nous appeler directement
          </Typography>
        </Box>

        {/* Boutons d'action */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Button
            component={Link}
            href="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            sx={{
              borderRadius: 50,
              px: 4,
              py: 1.5,
            }}
          >
            Retour à l'accueil
          </Button>
          <Button
            href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<PhoneIcon />}
            sx={{
              borderRadius: 50,
              px: 4,
              py: 1.5,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            }}
          >
            Appelez-nous
          </Button>
        </Box>

        {/* Contact info */}
        <Box sx={{ mt: 5, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Cabinet ECIFEC
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {CABINET_INFO.contact.phone} | {CABINET_INFO.contact.email}
          </Typography>
        </Box>
      </Paper>
    </Container>
    </>
  );
}
