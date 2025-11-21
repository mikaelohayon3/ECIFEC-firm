'use client';
import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Tab, Tabs, Alert } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import PageHead from '@/components/shared/PageHead';

export default function SimulateursPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const simulateurs = [
    {
      title: 'Simulateur Auto-entrepreneur',
      description: 'Calculez vos cotisations et votre revenu net en régime micro-entrepreneur',
      url: 'https://mon-entreprise.urssaf.fr/simulateurs/auto-entrepreneur',
    },
    {
      title: 'Simulateur de cotisations pour travailleurs indépendants',
      description: 'Estimez vos cotisations sociales en tant que travailleur indépendant hors micro-entreprise (TNS, professions libérales)',
      url: 'https://mon-entreprise.urssaf.fr/simulateurs/indépendant',
    },
    {
      title: 'Simulateur du coût d\'embauche d\'un salarié',
      description: 'Calculez le coût total d\'une embauche : salaire brut, cotisations patronales et aides possibles',
      url: 'https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net',
    },
    {
      title: 'Simulateur de revenus pour dirigeant d\'EURL',
      description: 'Estimez votre rémunération nette et vos cotisations en tant que gérant majoritaire d\'EURL',
      url: 'https://mon-entreprise.urssaf.fr/simulateurs/eurl',
    },
    {
      title: 'Simulateur de cessation d\'activité pour indépendants',
      description: 'Calculez vos dernières cotisations et démarches à effectuer lors de la cessation de votre activité indépendante',
      url: 'https://mon-entreprise.urssaf.fr/simulateurs/cessation-activit%C3%A9',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <PageHead
        title="Simulateurs URSSAF - Cabinet ECIFEC"
        description="Accédez aux simulateurs officiels URSSAF : auto-entrepreneur, indépendant, SASU, EURL, salaires. Estimez vos cotisations sociales facilement."
      />
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <CalculateIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Simulateurs en ligne
            </Typography>
            <Typography
              variant="h5"
              sx={{
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Accédez aux simulateurs officiels de l'URSSAF pour estimer vos cotisations sociales et charges
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contenu Principal */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ mb: 4 }}>
          Ces simulateurs sont fournis par l'URSSAF (Union de Recouvrement des cotisations de Sécurité Sociale et d'Allocations Familiales).
          Les résultats sont donnés à titre indicatif. Pour une analyse personnalisée de votre situation et une optimisation de vos cotisations,
          n'hésitez pas à nous contacter.
        </Alert>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontSize: { xs: '0.85rem', md: '1rem' },
                textTransform: 'none',
                fontWeight: 600,
              },
            }}
          >
            {simulateurs.map((sim, index) => (
              <Tab key={index} label={sim.title} />
            ))}
          </Tabs>
        </Box>

        {/* Simulateur actif */}
        {simulateurs.map((sim, index) => (
          <Box
            key={index}
            role="tabpanel"
            hidden={currentTab !== index}
            sx={{ display: currentTab === index ? 'block' : 'none' }}
          >
            {currentTab === index && (
              <Box>
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {sim.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {sim.description}
                    </Typography>
                  </CardContent>
                </Card>

                <Box
                  sx={{
                    width: '100%',
                    height: '800px',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                  }}
                >
                  <iframe
                    src={sim.url}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title={sim.title}
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  />
                </Box>
              </Box>
            )}
          </Box>
        ))}

        {/* Section d'aide */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Besoin d'aide pour interpréter les résultats ?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Nos experts-comptables sont à votre disposition pour vous accompagner dans l'analyse de vos simulations
            et vous conseiller sur les meilleures options pour votre situation.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
