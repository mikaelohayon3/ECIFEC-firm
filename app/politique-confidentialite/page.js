'use client';
import { Box, Container, Typography, Divider } from '@mui/material';
import Link from 'next/link';
import SectionTitle from '@/components/shared/SectionTitle';

import { CABINET_INFO } from '@/lib/data/navigation';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      
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
            subtitle="RGPD & Confidentialité"
            title="Politique de confidentialité"
            description="Protection de vos données personnelles et respect du RGPD."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
            {/* Introduction */}
            <Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                Le Cabinet ECIFEC attache une grande importance à la protection de vos données
                personnelles et s'engage à les traiter de manière confidentielle et sécurisée,
                conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                La présente politique a pour objectif de vous informer sur la manière dont nous
                collectons, utilisons et protégeons vos données personnelles.
              </Typography>
            </Box>

            <Divider />

            {/* Responsable du traitement */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                1. Responsable du traitement des données
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Le responsable du traitement des données personnelles est :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>{CABINET_INFO.name}</strong>
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Adresse : {CABINET_INFO.address.street}, {CABINET_INFO.address.postal} {CABINET_INFO.address.city}
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Email : {CABINET_INFO.contact.email}
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Téléphone : {CABINET_INFO.contact.phone}
                </Typography>
              </Box>
            </Box>

            <Divider />

            {/* Données collectées */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                2. Données personnelles collectées
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                Dans le cadre de l'utilisation de notre site internet et notamment du formulaire de
                contact, nous sommes amenés à collecter les données personnelles suivantes :
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Nom et prénom
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Adresse email
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Numéro de téléphone
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Secteur d'activité (optionnel)
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Contenu du message
                </Typography>
              </Box>
            </Box>

            <Divider />

            {/* Finalité */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                3. Finalité du traitement
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                Les données personnelles collectées sont utilisées exclusivement pour :
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Traiter vos demandes de contact, de devis ou de rendez-vous
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Vous répondre et vous fournir les informations demandées
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Améliorer la qualité de nos services
                </Typography>
              </Box>
            </Box>

            <Divider />

            {/* Base légale */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                4. Base légale du traitement
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Le traitement de vos données personnelles repose sur votre consentement explicite,
                matérialisé par l'acceptation de la case à cocher du formulaire de contact. Ce
                consentement est libre, spécifique, éclairé et univoque.
              </Typography>
            </Box>

            <Divider />

            {/* Destinataires */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                5. Destinataires des données
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Vos données personnelles sont destinées uniquement aux membres autorisés du Cabinet
                ECIFEC. Elles ne sont ni vendues, ni louées, ni cédées à des tiers sans votre
                consentement préalable, sauf obligation légale.
              </Typography>
            </Box>

            <Divider />

            {/* Durée de conservation */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                6. Durée de conservation
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Les données personnelles collectées via le formulaire de contact sont conservées pour
                une durée maximale de 3 ans à compter de votre dernier contact avec notre cabinet.
                Passé ce délai, elles sont supprimées de nos systèmes.
              </Typography>
            </Box>

            <Divider />

            {/* Vos droits */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                7. Vos droits
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
                suivants concernant vos données personnelles :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Droit d'accès :</strong> vous pouvez obtenir la confirmation que vos données
                  sont traitées et accéder à ces données
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Droit de rectification :</strong> vous pouvez demander la correction de vos
                  données inexactes ou incomplètes
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Droit à la limitation :</strong> vous pouvez demander la limitation du traitement
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Droit à la portabilité :</strong> vous pouvez recevoir vos données dans un format
                  structuré
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email{' '}
                <Link href={`mailto:${CABINET_INFO.contact.email}`} style={{ color: '#043033' }}>
                  {CABINET_INFO.contact.email}
                </Link>{' '}
                ou par courrier à l'adresse indiquée ci-dessus.
              </Typography>
            </Box>

            <Divider />

            {/* Sécurité */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                8. Sécurité des données
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès
                non autorisé, la divulgation, l'altération ou la destruction. Notre site utilise le
                protocole HTTPS pour sécuriser les échanges de données.
              </Typography>
            </Box>

            <Divider />

            {/* Cookies */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                9. Cookies
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Notre site n'utilise actuellement pas de cookies de suivi ou de cookies publicitaires.
                Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent
                être utilisés.
              </Typography>
            </Box>

            <Divider />

            {/* Réclamation */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                10. Droit de réclamation
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Si vous estimez que le traitement de vos données personnelles n'est pas conforme à la
                réglementation, vous avez le droit d'introduire une réclamation auprès de la CNIL
                (Commission Nationale de l'Informatique et des Libertés) :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Site web : https://www.cnil.fr
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Adresse : 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Téléphone : 01 53 73 22 22
                </Typography>
              </Box>
            </Box>

            <Divider />

            {/* Modification */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                11. Modification de la politique de confidentialité
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout
                moment. Toute modification sera publiée sur cette page avec une mise à jour de la date
                de dernière révision.
              </Typography>
            </Box>
          </Box>

          {/* Last Update */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              Dernière mise à jour : 25/11/2025
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
