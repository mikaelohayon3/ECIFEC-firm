'use client';
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

export default function ServiceFAQ({ faq, serviceTitle }) {
  if (!faq || faq.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <SectionTitle
          title="Questions fréquentes"
          subtitle={`Tout ce que vous devez savoir sur ${serviceTitle}`}
        />

        <Box sx={{ mt: 4 }}>
          {faq.map((item, index) => (
            <FadeInSection key={index} delay={index * 80} direction="up">
              <Accordion
                defaultExpanded={index === 0}
                sx={{
                  mb: 2,
                  '&:before': { display: 'none' },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&:hover': {
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                    py: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: '1.05rem',
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 3, pb: 4, px: 4 }}>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </FadeInSection>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
