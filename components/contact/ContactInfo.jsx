'use client';
import { Box, Typography, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CABINET_INFO } from '@/lib/data/navigation';

export default function ContactInfo() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: 3,
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Nos coordonnées
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Adresse */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <LocationOnIcon sx={{ fontSize: 28, flexShrink: 0 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Adresse
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95 }}>
                {CABINET_INFO.address.street}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95 }}>
                {CABINET_INFO.address.postal} {CABINET_INFO.address.city}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95, mt: 1 }}>
                Zone d'intervention : {CABINET_INFO.zone}
              </Typography>
            </Box>
          </Box>

          {/* Téléphone */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <PhoneIcon sx={{ fontSize: 28, flexShrink: 0 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Téléphone
              </Typography>
              <Typography
                component="a"
                href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {CABINET_INFO.contact.phone}
              </Typography>
              <Typography
                component="a"
                href={`tel:${CABINET_INFO.contact.phone2.replace(/\s/g, '')}`}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  mt: 0.5,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {CABINET_INFO.contact.phone2}
              </Typography>
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <EmailIcon sx={{ fontSize: 28, flexShrink: 0 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Email
              </Typography>
              <Typography
                component="a"
                href={`mailto:${CABINET_INFO.contact.email}`}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {CABINET_INFO.contact.email}
              </Typography>
            </Box>
          </Box>

          {/* Horaires */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <AccessTimeIcon sx={{ fontSize: 28, flexShrink: 0 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Horaires d'ouverture
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95 }}>
                {CABINET_INFO.contact.hours}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Additional Info */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          backgroundColor: 'secondary.main',
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
          Premier contact gratuit
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
          Le premier rendez-vous est gratuit et sans engagement. Il nous permet de
          comprendre vos besoins et de vous proposer un accompagnement sur-mesure.
        </Typography>
      </Paper>
    </Box>
  );
}
