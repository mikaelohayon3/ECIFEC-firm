'use client';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Premier contact',
    description: 'Un rendez-vous gratuit et sans engagement pour comprendre vos besoins, votre activité et vos objectifs.',
    icon: HandshakeIcon,
    color: '#043033',
  },
  {
    number: '02',
    title: 'Audit & Proposition',
    description: 'Analyse de votre situation et élaboration d\'une proposition personnalisée avec un devis détaillé et transparent.',
    icon: SearchIcon,
    color: '#065a5e',
  },
  {
    number: '03',
    title: 'Accompagnement',
    description: 'Mise en place de nos services avec un interlocuteur dédié qui connaît votre entreprise et ses enjeux.',
    icon: CheckCircleIcon,
    color: '#C7B376',
  },
  {
    number: '04',
    title: 'Suivi & Conseil',
    description: 'Suivi régulier, tableaux de bord personalisés, reporting mensuel et conseil d\'accompagnement dans votre développement.',
    icon: TrendingUpIcon,
    color: '#043033',
  },
];

export default function OurProcess() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Notre processus en 4 étapes"
          description="Un accompagnement structuré et personnalisé pour votre tranquillité d'esprit"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FadeInSection delay={index * 100} direction="up">
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: 4,
                      textAlign: 'center',
                      position: 'relative',
                      border: '2px solid',
                      borderColor: 'background.paper',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(199, 179, 118, 0.2)',
                      },
                    }}
                  >
                    {/* Number Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                        }}
                      >
                        {step.number}
                      </Typography>
                    </Box>

                    {/* Icon */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: 'background.paper',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        mt: 2,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 40, color: step.color }} />
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
                      {step.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </Typography>

                    {/* Connector Line */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <Box
                        sx={{
                          display: { xs: 'none', md: 'block' },
                          position: 'absolute',
                          top: '50%',
                          right: -32,
                          width: 64,
                          height: 2,
                          backgroundColor: 'background.paper',
                          zIndex: 0,
                        }}
                      />
                    )}
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
