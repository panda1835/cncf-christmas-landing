'use client'
import React from 'react'

export default function CTA() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #C41E3A 0%, #E31837 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background bokeh effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.3,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)',
        backgroundSize: '80px 80px'
      }}></div>

      <div style={{position: 'relative', zIndex: 1}}>
        {/* Main Title */}
        <h1 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '64px',
          fontFamily: 'var(--font-lobster)',
          fontWeight: '400',
          wordWrap: 'break-word',
          margin: '0 0 2rem 0',
          lineHeight: '1.2'
        }}>
          Be Someone&apos;s Christmas Miracle
        </h1>

        {/* Subtitle */}
        <p style={{
          color: 'white',
          fontSize: '24px',
          fontFamily: 'var(--font-be-vietnam)',
          fontWeight: '400',
          margin: '0 0 0.5rem 0'
        }}>
          This Christmas, let your kindness shine brighter than ever.
        </p>

        {/* Quote */}
        <p style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '14px',
          fontFamily: 'var(--font-be-vietnam)',
          fontWeight: '300',
          fontStyle: 'italic',
          margin: '0 0 3rem 0'
        }}>
          &ldquo;No matter where you are, you can make a child feel seen, loved and remembered.&rdquo;
        </p>

        {/* CTA Cards Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          {/* Card 1 - Make a Wish */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            border: '3px solid #FFD700',
            padding: '1.5rem',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '100%',
              height: '150px',
              borderRadius: '16px',
              backgroundColor: '#333',
              marginBottom: '1rem',
              backgroundImage: 'linear-gradient(135deg, #1a1a1a, #333)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '12px'
            }}>
              Image placeholder
            </div>
            <h3 style={{
              color: 'white',
              fontSize: '18px',
              fontFamily: 'var(--font-be-vietnam)',
              fontWeight: '700',
              margin: '1rem 0',
            }}>
              Make a Wish Come True
            </h3>
            <button style={{
              background: '#0B8B6F',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontSize: '14px',
              fontFamily: 'var(--font-be-vietnam)',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#096B5A'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0B8B6F'}>
              See All Wishes <span>→</span>
            </button>
          </div>

          {/* Card 2 - Give a Gift */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            border: '3px solid #FFD700',
            padding: '1.5rem',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '100%',
              height: '150px',
              borderRadius: '16px',
              backgroundColor: '#333',
              marginBottom: '1rem',
              backgroundImage: 'linear-gradient(135deg, #1a1a1a, #333)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '12px'
            }}>
              Image placeholder
            </div>
            <h3 style={{
              color: 'white',
              fontSize: '18px',
              fontFamily: 'var(--font-be-vietnam)',
              fontWeight: '700',
              margin: '1rem 0',
            }}>
              Give a $10 Gift
            </h3>
            <button style={{
              background: '#0B8B6F',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontSize: '14px',
              fontFamily: 'var(--font-be-vietnam)',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#096B5A'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0B8B6F'}>
              Donate Now! <span>→</span>
            </button>
          </div>
        </div>

        {/* Share the Magic Link */}
        <a href="#" style={{
          color: 'white',
          fontSize: '16px',
          fontFamily: 'var(--font-be-vietnam)',
          fontWeight: '500',
          textDecoration: 'underline italic',
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
          Share the Magic &gt;
        </a>
      </div>
    </div>
  )
}
