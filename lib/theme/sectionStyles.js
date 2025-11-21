// Styles réutilisables pour améliorer la hiérarchie visuelle des sections

export const heroGradient = {
  background: 'linear-gradient(135deg, #043033 0%, #065a5f 50%, #043033 100%)',
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
};

export const subtleGradientBg = {
  background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
};

export const patternBg = {
  backgroundImage: `
    radial-gradient(circle at 25% 25%, rgba(199, 179, 118, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(4, 48, 51, 0.03) 0%, transparent 50%)
  `,
};

export const enhancedCard = {
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: 3,
  border: '1px solid',
  borderColor: 'divider',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 10px 20px rgba(0,0,0,0.02)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 16px 32px rgba(4,48,51,0.12)',
    borderColor: 'secondary.main',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #043033, #C7B376)',
    borderRadius: '3px 3px 0 0',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
};

export const glassmorphism = {
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
};
