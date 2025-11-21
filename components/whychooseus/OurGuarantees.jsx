'use client';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import SpeedIcon from '@mui/icons-material/Speed';
import GavelIcon from '@mui/icons-material/Gavel';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const GUARANTEES = [
  {
    title: 'Confidentialité absolue',
    description: 'Respect strict du secret professionnel et de la confidentialité de vos données. Vos informations sont protégées et ne seront jamais divulguées.',
    icon: LockIcon,
    color: '#043033',
  },
  {
    title: 'Réactivité garantie',
    description: 'Réponse sous 24h ouvrées maximum à toutes vos demandes. Un interlocuteur dédié disponible et à votre écoute.',
    icon: SpeedIcon,
    color: '#C7B376',
  },
  {
    title: 'Conformité assurée',
    description: 'Respect scrupuleux de toutes les obligations légales, fiscales et sociales. Veille réglementaire permanente pour votre sérénité.',
    icon: GavelIcon,
    color: '#065a5e',
  },
  {
    title: 'Disponibilité permanente',
    description: 'Accompagnement continu tout au long de l\'année. Présence lors des moments clés : bilans, déclarations, contrôles.',
    icon: SupportAgentIcon,
    color: '#043033',
  },
];

export default function OurGuarantees() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Nos garanties"
          description="Des engagements concrets pour votre tranquillité d'esprit"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {GUARANTEES.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <FadeInSection delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: 4,
                      backgroundColor: 'white',
                      borderLeft: '4px solid',
                      borderColor: guarantee.color,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          backgroundColor: `${guarantee.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent
                          sx={{ fontSize: 32, color: guarantee.color }}
                        />
                      </Box>

                      {/* Content */}
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 1.5,
                            color: 'primary.main',
                          }}
                        >
                          {guarantee.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.8,
                          }}
                        >
                          {guarantee.description}
                        </Typography>
                      </Box>
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
