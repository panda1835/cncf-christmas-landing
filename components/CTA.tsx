'use client'
import React from 'react'
import Image from 'next/image'

export default function CTA() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Teal Header Section */}
      <div style={{
        background: 'linear-gradient(90deg, #004D40 0%, #00B395 100%)',
        padding: '2rem 2rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontFamily: 'var(--font-lobster)',
          fontWeight: '400',
          wordWrap: 'break-word',
          margin: '0',
          lineHeight: '1.2',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          Be Someone&apos;s Christmas Miracle
        </h1>
      </div>

      {/* Red Gradient Section with Bokeh */}
      <div style={{
        background: 'linear-gradient(180deg, #C41E3A 0%, #E31837 50%, #C41E3A 100%)',
        padding: '3rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
        marginBottom: '-60px'
      }}>
        {/* Enhanced Bokeh Effect - Multiple Layers */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          {/* Large bokeh circles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`bokeh-${i}`}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 192, 203, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, transparent 70%)',
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 120 + 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(2px)',
                opacity: 0.4,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
          {/* Small bokeh circles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`bokeh-small-${i}`}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 192, 203, 0.4) 50%, transparent 70%)',
                width: `${Math.random() * 50 + 20}px`,
                height: `${Math.random() * 50 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
                opacity: 0.5,
                animation: `float ${Math.random() * 8 + 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Subtitle */}
          <p style={{
            color: 'white',
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontFamily: 'var(--font-be-vietnam)',
            fontWeight: '400',
            margin: '0 0 0.5rem 0'
          }}>
            This Christmas, let your kindness shine brighter than ever.
          </p>

          {/* Quote */}
          <p style={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: 'clamp(12px, 2vw, 14px)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto 2.5rem',
            padding: '0 1rem'
          }}>
            {/* Card 1 - Make a Wish */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '32px',
              border: '4px solid #D4AF37',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
            }}>
              <div style={{
                width: '100%',
                height: '160px',
                borderRadius: '20px',
                backgroundColor: '#1a1a1a',
                marginBottom: '1.5rem',
                backgroundImage: 'url(/star-ornament.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.3), rgba(51, 51, 51, 0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '48px'
                }}>
                  ⭐
                </div>
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'var(--font-be-vietnam)',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
              }}>
                Make a Wish Come True
              </h3>
              <button style={{
                background: 'linear-gradient(90deg, #004D40 0%, #00B395 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '0.875rem 1.75rem',
                fontSize: '15px',
                fontFamily: 'var(--font-be-vietnam)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #003830 0%, #009975 100%)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #004D40 0%, #00B395 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                See All Wishes <span style={{ fontSize: '18px' }}>→</span>
              </button>
            </div>

            {/* Card 2 - Give a Gift */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '32px',
              border: '4px solid #D4AF37',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
            }}>
              <div style={{
                width: '100%',
                height: '160px',
                borderRadius: '20px',
                backgroundColor: '#1a1a1a',
                marginBottom: '1.5rem',
                backgroundImage: 'url(/christmas-bauble.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.3), rgba(51, 51, 51, 0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '48px'
                }}>
                  🎄
                </div>
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'var(--font-be-vietnam)',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
              }}>
                Give a $10 Gift
              </h3>
              <button style={{
                background: 'linear-gradient(90deg, #004D40 0%, #00B395 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '0.875rem 1.75rem',
                fontSize: '15px',
                fontFamily: 'var(--font-be-vietnam)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #003830 0%, #009975 100%)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #004D40 0%, #00B395 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Donate Now! <span style={{ fontSize: '18px' }}>→</span>
              </button>
            </div>
          </div>

          {/* Share the Magic Link */}
          <a href="#" style={{
            color: 'white',
            fontSize: '16px',
            fontFamily: 'var(--font-be-vietnam)',
            fontWeight: '500',
            textDecoration: 'underline',
            fontStyle: 'italic',
            transition: 'opacity 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Share the Magic &gt;
          </a>
        </div>
      </div>

      {/* CSS Keyframes for bokeh animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </div>
  )
}
