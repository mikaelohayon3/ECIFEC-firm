'use client';
import { Box, Container, Typography, Divider } from '@mui/material';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';
import PageHead from '@/components/shared/PageHead';

export default function CGVPage() {
  return (
    <>
      <PageHead
        title="Conditions Générales de Vente - Cabinet ECIFEC"
        description="Conditions Générales de Vente du Cabinet ECIFEC. Modalités de prestations, tarifs, engagement, responsabilités."
      />
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Conditions contractuelles"
            title="Conditions Générales de Vente"
            description="Conditions applicables aux prestations du cabinet ECIFEC."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <FadeInSection delay={0} direction="up">
            {/* Préambule */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre le cabinet ECIFEC, expert-comptable inscrit à l'Ordre des Experts-Comptables de Paris Île-de-France, et ses clients pour toutes prestations de services.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Toute prestation de service implique l'acceptation sans réserve par le client des présentes CGV.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 1 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 1 - Objet
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les présentes conditions générales ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de prestations de services d'expertise comptable, de commissariat aux comptes, de conseil fiscal, juridique et social proposées par le cabinet ECIFEC.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 2 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 2 - Prestations proposées
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Le cabinet ECIFEC propose les prestations suivantes :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Tenue de comptabilité
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Établissement des comptes annuels (bilan, compte de résultat, annexes)
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Déclarations fiscales et sociales
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Conseil en gestion, fiscal et juridique
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Création d'entreprise
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Audit et commissariat aux comptes
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Gestion de la paie et conseil social
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 3 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 3 - Devis et acceptation
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Toute prestation fait l'objet d'un devis préalable gratuit et sans engagement. Le devis est valable pendant une durée de 3 mois à compter de sa date d'émission.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                L'acceptation du devis par le client, matérialisée par sa signature précédée de la mention manuscrite "Bon pour accord", vaut acceptation des présentes conditions générales de vente et formation du contrat.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 4 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 4 - Prix et facturation
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les prix sont établis en fonction de la nature et de la complexité de la mission. Ils peuvent être forfaitaires ou au temps passé selon les modalités définies dans le devis.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les prix sont exprimés en euros hors taxes. La TVA au taux en vigueur (20%) est ajoutée au montant facturé.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Les factures sont établies mensuellement pour les missions récurrentes et à l'achèvement pour les missions ponctuelles.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 5 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 5 - Conditions de paiement
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les factures sont payables à réception par virement bancaire ou prélèvement automatique. Le délai de paiement est de 30 jours à compter de la date d'émission de la facture.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Tout retard de paiement entraîne de plein droit l'application de pénalités de retard égales à trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                En cas de non-paiement, le cabinet se réserve le droit de suspendre ses prestations jusqu'au règlement intégral des sommes dues.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 6 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 6 - Obligations du client
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Le client s'engage à :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Fournir dans les délais convenus tous les documents et informations nécessaires à la réalisation de la mission
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Garantir l'exactitude et la sincérité des informations communiquées
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Respecter les conseils et recommandations du cabinet
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  S'acquitter des honoraires dans les délais convenus
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Le non-respect de ces obligations peut entraîner la suspension ou la résiliation de la mission aux torts du client.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 7 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 7 - Obligations du cabinet
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Le cabinet s'engage à :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Exécuter sa mission avec compétence, selon les règles professionnelles et déontologiques
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Respecter le secret professionnel
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Conseiller le client dans ses démarches et décisions
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: 'text.secondary' }}>
                  Respecter les délais convenus, sauf cas de force majeure ou retard du client
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 8 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 8 - Confidentialité
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Le cabinet est soumis au secret professionnel conformément aux dispositions légales régissant la profession d'expert-comptable. Toutes les informations communiquées par le client sont strictement confidentielles et ne peuvent être divulguées à des tiers sans autorisation expresse, sauf obligation légale.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 9 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 9 - Responsabilité
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                La responsabilité du cabinet ne peut être engagée qu'en cas de faute prouvée dans l'exécution de sa mission. Elle est limitée au montant des honoraires perçus pour la mission concernée, sauf en cas de faute lourde ou intentionnelle.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Le cabinet dispose d'une assurance responsabilité civile professionnelle conforme à la réglementation.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 10 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 10 - Durée et résiliation
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les missions récurrentes sont conclues pour une durée indéterminée. Chaque partie peut y mettre fin par lettre recommandée avec accusé de réception moyennant un préavis de 3 mois.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les missions ponctuelles prennent fin à leur achèvement ou par accord mutuel des parties.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                En cas de résiliation, le client reste redevable des honoraires correspondant aux travaux réalisés jusqu'à la date effective de cessation de la mission.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 11 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 11 - Propriété des documents
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Les documents fournis par le client restent sa propriété. Les documents établis par le cabinet dans le cadre de sa mission sont remis au client qui en devient propriétaire.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Le cabinet conserve une copie des documents pendant la durée légale de conservation (10 ans minimum).
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 12 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 12 - Réclamations et litiges
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                Toute réclamation doit être adressée par écrit dans un délai de 30 jours suivant la prestation concernée.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le litige sera porté devant les tribunaux compétents de Paris.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Article 13 */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Article 13 - Droit applicable
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Les présentes conditions générales de vente sont régies par le droit français, notamment par les dispositions de l'ordonnance n° 45-2138 du 19 septembre 1945 relative au statut des experts-comptables et par le code de déontologie des professionnels de l'expertise comptable.
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 6,
                p: 3,
                backgroundColor: 'background.default',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                Dernière mise à jour : Janvier 2025
              </Typography>
            </Box>
          </FadeInSection>
        </Container>
      </Box>
    </>
  );
}
