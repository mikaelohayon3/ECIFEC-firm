'use client';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const PHILOSOPHY_POINTS = [
  {
    icon: FavoriteIcon,
    title: 'Proximité et relation humaine',
    description: "Nous privilégions une relation de proximité avec nos clients. Chaque dossier est géré par un interlocuteur dédié qui vous connaît, comprend votre activité et s'adapte à vos besoins spécifiques.",
  },
  {
    icon: HandshakeIcon,
    title: 'Partenariat sur le long terme',
    description: "Nous ne sommes pas de simples prestataires, mais de véritables partenaires de votre entreprise. Notre objectif est de construire une relation de confiance durable et de vous accompagner à chaque étape de votre développement.",
  },
  {
    icon: TrendingUpIcon,
    title: 'Conseil proactif',
    description: "Nous ne nous contentons pas de produire vos comptes. Notre rôle est d'anticiper les enjeux, de vous alerter sur les opportunités et risques, et de vous conseiller activement pour optimiser la gestion de votre entreprise.",
  },
];

export default function TeamPhilosophy() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Notre philosophie"
          subtitle="L'esprit qui anime notre cabinet au quotidien"
        />

        <FadeInSection delay={200} direction="up">
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.1rem',
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            Depuis notre création en 2007, nous avons construit notre cabinet sur trois piliers
            fondamentaux qui guident chacune de nos actions et définissent notre approche unique
            de l'expertise comptable.
          </Typography>
        </FadeInSection>

        <Grid container spacing={4}>
          {PHILOSOPHY_POINTS.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <FadeInSection delay={index * 120 + 300} direction="up">
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'background.paper',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
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
                        backgroundColor: 'secondary.main',
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
                      {point.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {point.description}
                    </Typography>
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
