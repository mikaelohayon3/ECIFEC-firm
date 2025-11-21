'use client';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

export default function KeyRatios({ ratios, sectorTitle, disclaimer }) {
  if (!ratios || ratios.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Ratios clés à surveiller"
          subtitle={`Indicateurs de performance pour ${sectorTitle}`}
        />

        {disclaimer && (
          <Box
            sx={{
              mt: 3,
              p: 3,
              backgroundColor: 'info.lighter',
              borderRadius: 2,
              borderLeft: '4px solid',
              borderColor: 'info.main',
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontStyle: 'italic' }}>
              ℹ️ {disclaimer}
            </Typography>
          </Box>
        )}

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {ratios.map((ratio, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FadeInSection delay={index * 100} direction="up">
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 28, color: 'white' }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {ratio.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}
                  >
                    {ratio.description}
                  </Typography>

                  <Box
                    sx={{
                      pt: 2,
                      borderTop: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: 'secondary.main',
                        fontSize: '0.85rem',
                      }}
                    >
                      Benchmark: {ratio.benchmark}
                    </Typography>
                  </Box>
                </Paper>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
