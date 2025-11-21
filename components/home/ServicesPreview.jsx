'use client';
import { Box, Container, Grid, Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import Link from 'next/link';
import BusinessIcon from '@mui/icons-material/Business';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '@/components/shared/SectionTitle';
import SectionDivider from '@/components/shared/SectionDivider';
import FadeInSection from '@/components/shared/FadeInSection';
import { SERVICES } from '@/lib/data/services';

const iconMap = {
  Business: BusinessIcon,
  Receipt: ReceiptIcon,
  People: PeopleIcon,
  AccountBalance: AccountBalanceIcon,
  Gavel: GavelIcon,
  FindInPage: FindInPageIcon,
  TrendingUp: TrendingUpIcon,
  Assessment: AssessmentIcon,
  Assignment: AssignmentIcon,
};

export default function ServicesPreview() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Nos Services"
          title="Un accompagnement complet pour votre entreprise"
          description="Du démarrage à la croissance, nous vous accompagnons sur tous les aspects de votre gestion."
        />

        <SectionDivider variant="diamond" spacing="medium" />

        <Grid container spacing={3}>
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <FadeInSection delay={index * 100} direction="up">
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      backgroundColor: 'white',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 10px 20px rgba(0,0,0,0.02)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 16px 32px rgba(4,48,51,0.12)',
                        borderColor: 'secondary.main',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #043033, #C7B376)',
                        borderRadius: '3px 3px 0 0',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      },
                    }}
                  >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent sx={{ fontSize: 32, color: 'white' }} />
                      )}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: 'primary.main',
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        mb: 2,
                      }}
                    >
                      {service.shortDescription}
                    </Typography>

                    <Button
                      component={Link}
                      href={`/services/${service.id}`}
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 600,
                        padding: 0,
                        minWidth: 'auto',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/services"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 50,
            }}
          >
            Voir tous nos services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
