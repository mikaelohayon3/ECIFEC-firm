'use client';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SpeedIcon from '@mui/icons-material/Speed';
import DescriptionIcon from '@mui/icons-material/Description';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '@/components/shared/SectionTitle';
import SectionDivider from '@/components/shared/SectionDivider';
import FadeInSection from '@/components/shared/FadeInSection';
import { WHY_CHOOSE_US } from '@/lib/data/services';

const iconMap = {
  HeadsetMic: HeadsetMicIcon,
  PersonPin: PersonPinIcon,
  CloudUpload: CloudUploadIcon,
  Speed: SpeedIcon,
  Description: DescriptionIcon,
  Summarize: SummarizeIcon,
};

export default function WhyChooseUsPreview() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.paper',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(199, 179, 118, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(4, 48, 51, 0.03) 0%, transparent 50%)
        `,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Pourquoi nous choisir"
          title="Un cabinet à taille humaine, des résultats à la hauteur"
          description="Découvrez ce qui fait la différence chez ECIFEC."
        />

        <SectionDivider variant="dots" spacing="medium" />

        <Grid container spacing={4}>
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FadeInSection delay={index * 100} direction="up">
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
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
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          backgroundColor: 'secondary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        {IconComponent && (
                          <IconComponent sx={{ fontSize: 36, color: 'white' }} />
                        )}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: 'primary.main',
                          fontSize: '1.1rem',
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </Typography>
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
            href="/pourquoi-nous-choisir"
            variant="outlined"
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
            En savoir plus
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
