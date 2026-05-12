'use client';

const brands = [
  'vuori', 'DESIGN BY HUMANS', 'THREAD BEAST', 'SENNHEISER',
  'brooklinen', 'CARIUMA', 'vuori', 'DESIGN BY HUMANS',
];

export default function LogoStrip() {
  return (
    <section style={{
      padding: '60px 0',
      background: 'transparent',
    }}>
      <div className="container-main">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '40px',
          opacity: 0.6
        }}>
          {brands.slice(0, 6).map((brand, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.1em',
                color: 'var(--text-tertiary)',
                textTransform: i === 1 || i === 2 || i === 3 ? 'uppercase' : 'lowercase',
                cursor: 'default',
                userSelect: 'none',
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
