'use client';
import BusinessIcon from '@mui/icons-material/Business';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';

const iconMap = {
  Business: BusinessIcon,
  Receipt: ReceiptIcon,
  People: PeopleIcon,
  AccountBalance: AccountBalanceIcon,
  Gavel: GavelIcon,
  FindInPage: FindInPageIcon,
  TrendingUp: TrendingUpIcon,
  Assessment: AssessmentIcon,
};

export default function ServiceIcon({ iconName, sx }) {
  const IconComponent = iconMap[iconName] || BusinessIcon;
  return <IconComponent sx={sx} />;
}
