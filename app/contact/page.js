'use client';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import GoogleMap from '@/components/contact/GoogleMap';
import DetailedHours from '@/components/contact/DetailedHours';
import ConfidentialityCommitment from '@/components/contact/ConfidentialityCommitment';

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #065a5f 50%, #043033 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(199, 179, 118, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Contact"
            title="Discutons de votre projet"
            description="Que vous ayez besoin d'un devis, d'un rendez-vous ou simplement d'informations, nous sommes à votre écoute."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Contact Form & Info Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.paper',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(199, 179, 118, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(4, 48, 51, 0.03) 0%, transparent 50%)
          `,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <FadeInSection delay={0} direction="left">
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}
                  >
                    Envoyez-nous un message
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les
                    plus brefs délais.
                  </Typography>

                  <ContactForm />
                </Paper>
              </FadeInSection>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <FadeInSection delay={200} direction="right">
                <ContactInfo />
              </FadeInSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Où nous trouver ?"
            description="Notre cabinet est situé à Sarcelles, avec des interventions possibles dans tout le Bassin Parisien et sur l'ensemble du territoire national."
          />

          <FadeInSection delay={0} direction="up">
            <GoogleMap />
          </FadeInSection>

          <FadeInSection delay={200} direction="up">
            <Box
              sx={{
                mt: 4,
                p: 4,
                backgroundColor: 'background.paper',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                Besoin d'un rendez-vous en personne ?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nous vous accueillons dans nos locaux sur rendez-vous. Pour les clients
                situés en dehors de Sarcelles, nous proposons également des rendez-vous
                en visioconférence pour plus de flexibilité.
              </Typography>
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* Detailed Hours */}
      <DetailedHours />

      {/* Confidentiality Commitment */}
      <ConfidentialityCommitment />
    </>
  );
}
