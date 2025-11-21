'use client';
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import BusinessIcon from '@mui/icons-material/Business';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import OurMethodology from '@/components/services/OurMethodology';
import DigitalTools from '@/components/services/DigitalTools';
import FirstYearTimeline from '@/components/services/FirstYearTimeline';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import PageHead from '@/components/shared/PageHead';
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

export default function ServicesPage() {
  return (
    <>
      <PageHead
        title="Nos Services - Cabinet ECIFEC | Expert-Comptable à Sarcelles"
        description="Découvrez tous nos services d'expertise comptable : création d'entreprise, gestion comptable, fiscale et sociale, audit, conseil, finance d'entreprise. Solutions complètes pour TPE et PME."
      />
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #065a5f 50%, #043033 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(199, 179, 118, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Nos Services"
            title="Un accompagnement complet à chaque étape"
            description="De la création à la croissance de votre entreprise, nous vous accompagnons avec expertise et proximité sur tous les aspects comptables, fiscaux, sociaux et juridiques."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Services Accordion */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.paper',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(199, 179, 118, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(4, 48, 51, 0.03) 0%, transparent 50%)
          `,
        }}
      >
        <Container maxWidth="lg">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <FadeInSection key={service.id} delay={index * 100} direction="up">
                <Accordion
                  id={service.id}
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent sx={{ fontSize: 28, color: 'white' }} />
                      )}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: 'primary.main' }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {service.shortDescription}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 3, pb: 4, px: 4 }}>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
                  >
                    Ce que nous proposons :
                  </Typography>

                  <List>
                    {service.details.map((detail, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.95rem',
                              color: 'text.primary',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 3 }}>
                    <Button
                      component={Link}
                      href={`/services/${service.id}`}
                      variant="contained"
                      color="secondary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        borderRadius: 50,
                        px: 4,
                        py: 1.5,
                      }}
                    >
                      En savoir plus
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
              </FadeInSection>
            );
          })}
        </Container>
      </Box>

      {/* Our Methodology */}
      <OurMethodology />

      {/* Digital Tools */}
      <DigitalTools />

      {/* First Year Timeline */}
      <FirstYearTimeline />

      {/* Services FAQ */}
      <ServicesFAQ />

      {/* CTA Section */}
      <CTASection
        title="Besoin d'un service spécifique ?"
        subtitle="Contactez-nous pour discuter de vos besoins et obtenir une proposition personnalisée."
      />
    </>
  );
}
