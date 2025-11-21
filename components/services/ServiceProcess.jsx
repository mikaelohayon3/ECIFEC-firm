'use client';
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

export default function ServiceProcess({ process, serviceTitle }) {
  if (!process || process.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="md">
        <SectionTitle
          title="Notre processus détaillé"
          subtitle={`Comment nous travaillons sur ${serviceTitle}`}
        />

        <FadeInSection delay={200} direction="up">
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: { xs: 3, md: 5 },
              backgroundColor: 'background.paper',
              borderRadius: 3,
            }}
          >
            <Stepper orientation="vertical" activeStep={-1}>
              {process.map((step, index) => (
                <Step key={index} expanded>
                  <StepLabel
                    StepIconProps={{
                      sx: {
                        color: 'secondary.main',
                        '&.Mui-completed': {
                          color: 'secondary.main',
                        },
                        '&.Mui-active': {
                          color: 'secondary.main',
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: 'primary.main' }}
                    >
                      {step.step}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        pb: 3,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </FadeInSection>
      </Container>
    </Box>
  );
}
