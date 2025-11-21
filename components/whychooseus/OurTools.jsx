'use client';
import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import DevicesIcon from '@mui/icons-material/Devices';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const TOOLS_CATEGORIES = [
  {
    title: 'Logiciels comptables professionnels',
    description: 'Solutions certifiées et conformes aux normes en vigueur',
    icon: IntegrationInstructionsIcon,
    tools: ['Sage'],
  },
  {
    title: 'GED & Dématérialisation',
    description: 'Gestion Électronique de Documents pour simplifier vos échanges',
    icon: DescriptionIcon,
    tools: ['Coffre-fort numérique', 'Signature électronique', 'OCR automatique'],
  },
  {
    title: 'Transmission instantanée',
    description: 'Envoyez vos documents en toute sécurité via email',
    icon: CloudIcon,
    tools: ['Espace personnel', 'Tableaux de bord', 'Documents en ligne'],
  },
  {
    title: 'Sécurité des données',
    description: 'Protection maximale de vos informations sensibles',
    icon: SecurityIcon,
    tools: ['Hébergement certifié', 'Conformité RGPD'],
  },
  {
    title: 'Accès au site',
    description: 'Suivi de nos services et nouveautés à tout moment',
    icon: DevicesIcon,
    tools: ['Site responsive', 'Maintenance régulière'],
  },
  {
    title: 'Point de situation régulier',
    description: 'Demandez votre situation mensuelle en version PDF (SIG, rapports)',
    icon: DashboardIcon,
    tools: ['Graphiques dynamiques', 'Exports Excel'],
  },
];

export default function OurTools() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Nos outils et technologies"
          description="L'alliance de l'expertise humaine et des technologies modernes pour votre réussite"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {TOOLS_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FadeInSection delay={index * 100} direction="up">
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(4, 48, 51, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: 2,
                          backgroundColor: 'secondary.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <IconComponent
                          sx={{ fontSize: 36, color: 'primary.main' }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: 'primary.main',
                          minHeight: 56,
                        }}
                      >
                        {category.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          mb: 2,
                        }}
                      >
                        {category.description}
                      </Typography>

                      {/* Tools Tags */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {category.tools.map((tool, idx) => (
                          <Chip
                            key={idx}
                            label={tool}
                            size="small"
                            sx={{
                              backgroundColor: 'background.paper',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>

        {/* Additional Note */}
        <FadeInSection delay={600} direction="up">
          <Box
            sx={{
              mt: 6,
              p: 4,
              backgroundColor: 'background.paper',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
            >
              Une technologie au service de l'humain
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Nos outils digitaux sont là pour simplifier votre quotidien et vous faire gagner du temps,
              mais c'est toujours notre expertise humaine qui guide nos conseils et décisions.
              Vous bénéficiez ainsi du meilleur des deux mondes : efficacité technologique et conseil personnalisé.
            </Typography>
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
}
