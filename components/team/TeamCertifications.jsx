'use client';
import { Box, Container, Grid, Typography, Paper, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const CERTIFICATIONS = [
  {
    icon: VerifiedIcon,
    title: 'Experts-comptables diplômés',
    description: "Tous nos associés sont inscrits à l'Ordre des Experts-Comptables. Ils sont titulaires du Diplôme d'Expertise Comptable (DEC), plus haut diplôme de la profession.",
    certifications: ['DEC', 'OEC'],
  },
  {
    icon: SchoolIcon,
    title: 'Formation continue obligatoire',
    description: "L'ensemble de notre équipe suit une formation continue annuelle pour rester à jour sur les évolutions législatives, fiscales et sociales. Nous consacrons plus de 40 heures par an par collaborateur à la formation.",
    certifications: ['40h/an minimum', 'Veille juridique', 'Formations certifiantes'],
  },
  {
    icon: MenuBookIcon,
    title: 'Spécialisations sectorielles',
    description: "Nos collaborateurs développent des expertises spécifiques par secteur d'activité (BTP, professions libérales, commerce, restauration, etc.) pour vous apporter un conseil véritablement adapté.",
    certifications: ['BTP', 'Professions libérales', 'Commerce', 'Restauration'],
  },
];

export default function TeamCertifications() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Formations et certifications"
          subtitle="Des compétences reconnues et sans cesse actualisées"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <FadeInSection delay={index * 120} direction="up">
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: 3,
                      border: '2px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 32, color: 'white' }} />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      {cert.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        mb: 3,
                      }}
                    >
                      {cert.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {cert.certifications.map((certification, idx) => (
                        <Chip
                          key={idx}
                          label={certification}
                          size="small"
                          sx={{
                            backgroundColor: 'secondary.lighter',
                            color: 'secondary.dark',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
