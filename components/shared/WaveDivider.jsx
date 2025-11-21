export default function WaveDivider({
  flip = false,
  color = '#f5f5f5',
  opacity = 1,
  variant = 'geometric' // 'geometric', 'minimal', 'slant'
}) {
  // Style géométrique professionnel avec lignes diagonales
  if (variant === 'geometric') {
    return (
      <div
        style={{
          lineHeight: 0,
          transform: flip ? 'rotate(180deg)' : 'none',
          marginTop: '-1px',
          marginBottom: '-1px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 35"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        >
          {/* Fond principal */}
          <rect x="0" y="0" width="1440" height="35" fill={color} fillOpacity={opacity} />

          {/* Ligne diagonale principale */}
          <line
            x1="0"
            y1="17.5"
            x2="1440"
            y2="17.5"
            stroke="rgba(199, 179, 118, 0.25)"
            strokeWidth="3"
          />

          {/* Accents dorés plus visibles */}
          <line
            x1="0"
            y1="0"
            x2="200"
            y2="35"
            stroke="rgba(199, 179, 118, 0.18)"
            strokeWidth="5"
          />
          <line
            x1="1240"
            y1="0"
            x2="1440"
            y2="35"
            stroke="rgba(199, 179, 118, 0.18)"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  }

  // Style minimal avec simple dégradé
  if (variant === 'minimal') {
    return (
      <div
        style={{
          height: '3px',
          background: `linear-gradient(90deg, transparent 0%, rgba(199, 179, 118, 0.4) 20%, rgba(199, 179, 118, 0.4) 80%, transparent 100%)`,
          marginTop: '-1px',
          marginBottom: '-1px',
        }}
      />
    );
  }

  // Style avec angle subtil (slant)
  if (variant === 'slant') {
    return (
      <div
        style={{
          lineHeight: 0,
          transform: flip ? 'rotate(180deg)' : 'none',
          marginTop: '-1px',
          marginBottom: '-1px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 25"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        >
          <polygon
            fill={color}
            fillOpacity={opacity}
            points="0,0 1440,12.5 1440,25 0,25"
          />
          {/* Ligne décorative dorée plus visible */}
          <line
            x1="0"
            y1="0"
            x2="1440"
            y2="12.5"
            stroke="rgba(199, 179, 118, 0.3)"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  // Fallback: variante wave originale (plus subtile)
  return (
    <div
      style={{
        lineHeight: 0,
        transform: flip ? 'rotate(180deg)' : 'none',
        marginTop: '-1px',
        marginBottom: '-1px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      >
        <path
          fill={color}
          fillOpacity={opacity}
          d="M0,48L60,45.3C120,43,240,37,360,37.3C480,37,600,43,720,48C840,53,960,57,1080,56C1200,55,1320,49,1380,46L1440,43L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
        />
      </svg>
    </div>
  );
}
