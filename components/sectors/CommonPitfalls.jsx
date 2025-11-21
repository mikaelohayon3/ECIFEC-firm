'use client';
import { Box, Container, Grid, Paper, Typography, Chip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

export default function CommonPitfalls({ pitfalls, sectorTitle }) {
  if (!pitfalls || pitfalls.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Pièges à éviter"
          subtitle={`Erreurs fréquentes dans ${sectorTitle}`}
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {pitfalls.map((pitfall, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FadeInSection delay={index * 120} direction="up">
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: 3,
                    borderLeft: '4px solid',
                    borderColor: 'error.main',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor: 'error.lighter',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <WarningIcon sx={{ fontSize: 24, color: 'error.main' }} />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 2,
                          fontSize: '1.1rem',
                        }}
                      >
                        {pitfall.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 2.5,
                          lineHeight: 1.7,
                        }}
                      >
                        {pitfall.description}
                      </Typography>

                      <Box
                        sx={{
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Chip
                          label={`Impact: ${pitfall.impact}`}
                          size="small"
                          sx={{
                            backgroundColor: 'error.lighter',
                            color: 'error.dark',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            height: 'auto',
                            py: 1,
                            '& .MuiChip-label': {
                              whiteSpace: 'normal',
                              display: 'block',
                            },
                          }}
                        />
                      </Box>
                    </Box>
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
