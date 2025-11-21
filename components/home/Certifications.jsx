'use client';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const CERTIFICATIONS = [
  {
    title: 'Ordre des Experts-Comptables',
    description: 'Membre inscrit à l\'Ordre des Experts-Comptables, garantie de compétence et de déontologie professionnelle.',
    logo: '/images/oec.png',
    hasImage: true,
    icon: VerifiedIcon,
  },
  {
    title: 'Équipe diplômée',
    description: 'Ensemble de l\'équipe diplômée selon sa spécialité : expertise comptable, droit, fiscalité, gestion sociale. Compétences reconnues dans chaque domaine d\'intervention.',
    icon: SchoolIcon,
    hasImage: false,
    color: '#043033',
  },
  {
    title: 'Logiciels certifiés',
    description: 'Utilisation de logiciels professionnels certifiés (Sage) conformes aux normes comptables et fiscales.',
    icon: SecurityIcon,
    hasImage: false,
    color: '#065a5e',
  },
  {
    title: 'Engagement qualité',
    description: 'Formation continue, veille réglementaire permanente et respect des normes professionnelles les plus strictes.',
    icon: EmojiEventsIcon,
    hasImage: false,
    color: '#C7B376',
  },
];

export default function Certifications() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #EDF5F2 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Nos certifications et labels"
          description="Des garanties professionnelles pour votre sérénité"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FadeInSection delay={index * 100} direction="up">
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: 4,
                      textAlign: 'center',
                      backgroundColor: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(4, 48, 51, 0.15)',
                      },
                    }}
                  >
                    {/* Logo or Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        minHeight: 100,
                      }}
                    >
                      {cert.hasImage ? (
                        <Image
                          src={cert.logo}
                          alt={cert.title}
                          width={120}
                          height={120}
                          style={{ objectFit: 'contain' }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            backgroundColor: cert.color
                              ? `${cert.color}15`
                              : 'background.paper',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconComponent
                            sx={{
                              fontSize: 50,
                              color: cert.color || 'primary.main',
                            }}
                          />
                        </Box>
                      )}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      {cert.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {cert.description}
                    </Typography>
                  </Paper>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>

        {/* Additional Trust Indicators */}
        <FadeInSection delay={400} direction="up">
          <Box
            sx={{
              mt: 6,
              p: 4,
              backgroundColor: 'white',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
            >
              Conformité et sécurité
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Respect du secret professionnel, conformité RGPD, sécurisation des données
              avec hébergement certifié, et assurance responsabilité civile professionnelle.
            </Typography>
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
}
