'use client';
import Storefront from '@mui/icons-material/Storefront';
import LocalHospital from '@mui/icons-material/LocalHospital';
import Construction from '@mui/icons-material/Construction';
import Business from '@mui/icons-material/Business';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Restaurant from '@mui/icons-material/Restaurant';
import PrecisionManufacturing from '@mui/icons-material/PrecisionManufacturing';
import LocalShipping from '@mui/icons-material/LocalShipping';

// Map d'icônes disponibles pour les secteurs
const iconMap = {
  Storefront,
  LocalHospital,
  Construction,
  Business,
  BusinessCenter,
  Restaurant,
  PrecisionManufacturing,
  LocalShipping,
};

export default function SectorIcon({ iconName, sx }) {
  const IconComponent = iconMap[iconName] || Business;
  return <IconComponent sx={sx} />;
}
