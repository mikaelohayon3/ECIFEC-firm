'use client';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Image from 'next/image';
import { CABINET_INFO, NAVIGATION_LINKS } from '@/lib/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Cabinet Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  mb: 2,
                  display: 'inline-block',
                }}
              >
                <Image
                  src="/images/second-logo.png"
                  alt="Cabinet ECIFEC"
                  width={160}
                  height={160}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  opacity: 0.95,
                  fontWeight: 600,
                  color: 'secondary.main',
                }}
              >
                ECIFEC
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  mb: 2,
                  opacity: 0.85,
                  display: 'block',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                Expertise et Contrôle de l'Information Financière et Comptable
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                {CABINET_INFO.tagline}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href={CABINET_INFO.social.linkedin}
                target="_blank"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    backgroundColor: 'secondary.main',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href={CABINET_INFO.social.facebook}
                target="_blank"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    backgroundColor: 'secondary.main',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, fontSize: '1.1rem' }}
            >
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAVIGATION_LINKS.map((link) => (
                <MuiLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    '&:hover': {
                      opacity: 1,
                      color: 'secondary.main',
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Services rapides */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, fontSize: '1.1rem' }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                component={Link}
                href="/services/creation"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  '&:hover': { opacity: 1, color: 'secondary.main' },
                }}
              >
                Création d'entreprise
              </MuiLink>
              <MuiLink
                component={Link}
                href="/services/comptabilite"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  '&:hover': { opacity: 1, color: 'secondary.main' },
                }}
              >
                Gestion Comptable
              </MuiLink>
              <MuiLink
                component={Link}
                href="/services/social"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  '&:hover': { opacity: 1, color: 'secondary.main' },
                }}
              >
                Gestion Sociale
              </MuiLink>
              <MuiLink
                component={Link}
                href="/services/fiscal"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  '&:hover': { opacity: 1, color: 'secondary.main' },
                }}
              >
                Gestion Fiscale
              </MuiLink>
              <MuiLink
                component={Link}
                href="/services"
                sx={{
                  color: 'secondary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  opacity: 0.95,
                  '&:hover': { opacity: 1 },
                  mt: 1,
                }}
              >
                Tous les services →
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, fontSize: '1.1rem' }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: '1.2rem', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {CABINET_INFO.address.street}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {CABINET_INFO.address.postal} {CABINET_INFO.address.city}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: '1.2rem' }} />
                <MuiLink
                  href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    '&:hover': { opacity: 1, color: 'secondary.main' },
                  }}
                >
                  {CABINET_INFO.contact.phone}
                </MuiLink>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: '1.2rem' }} />
                <MuiLink
                  href={`mailto:${CABINET_INFO.contact.email}`}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    '&:hover': { opacity: 1, color: 'secondary.main' },
                  }}
                >
                  {CABINET_INFO.contact.email}
                </MuiLink>
              </Box>

              <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                {CABINET_INFO.contact.hours}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} {CABINET_INFO.name}. Tous droits réservés.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <MuiLink
              component={Link}
              href="/mentions-legales"
              sx={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                fontSize: '0.875rem',
                '&:hover': { opacity: 1, color: 'secondary.main' },
              }}
            >
              Mentions légales
            </MuiLink>
            <MuiLink
              component={Link}
              href="/politique-confidentialite"
              sx={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                fontSize: '0.875rem',
                '&:hover': { opacity: 1, color: 'secondary.main' },
              }}
            >
              Politique de confidentialité
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
