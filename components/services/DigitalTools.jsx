'use client';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const DIGITAL_TOOLS = [
  {
    title: 'Accès à vos documents sur demande',
    description: 'Demandez des documents spécifiques via email ou téléphone, et recevez-les sous 24h.',
    icon: PhonelinkIcon,
  },
  {
    title: 'Transmission rapide de documents',
    description: 'Envoyez vos factures et justificatifs en un clic via email. Vos données sont sécurisées et intégrées à votre dossier comptable.',
    icon: CloudUploadIcon,
  },
  {
    title: 'Tableaux de bord personnalisés',
    description: 'Suivez vos indicateurs clés (CA, trésorerie, charges) avec des graphiques interactifs mis à jour en continu selon votre activité.',
    icon: AssessmentIcon,
  },
  {
    title: 'Alertes et rappels',
    description: 'Recevez des notifications pour les échéances importantes : déclarations fiscales, paiements, assemblées générales.',
    icon: NotificationsActiveIcon,
  },
];

export default function DigitalTools() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #EDF5F2 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Outils digitaux à votre disposition"
          description="La technologie au service de votre efficacité"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {DIGITAL_TOOLS.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <FadeInSection delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
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
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 2,
                            backgroundColor: 'secondary.light',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 32, color: 'primary.main' }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}
                          >
                            {tool.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                          >
                            {tool.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
