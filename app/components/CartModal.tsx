'use client';

import { theme } from '@/app/styles/theme';

export default function CartModal() {
  return (
    <div
      style={{
        background: theme.colors.deep,
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <style>{`
        .cart-loader-container {
          position: absolute;
          inset: 0;
          zoom: 0.5;
        }
        .loader {
          top: calc(50% - 200px);
          left: calc(50% - 200px);
          animation: girar 8s linear infinite;
          width: 400px;
          height: 400px;
          position: absolute;
          transform-style: preserve-3d;
          perspective: 10000px;
        }
        .sphere, .item {
          width: 400px;
          height: 400px;
          position: absolute;
          transform-style: preserve-3d;
          perspective: 10000px;
          top: 0;
          left: 0;
        }
        .sphere1 { --bg: #f008; }
        .sphere2 { --bg: #f0f8; }
        .sphere3 { --bg: #ff08; }
        .sphere4 { --bg: #0f08; }
        .sphere5 { --bg: #0ff8; }
        .sphere6 { --bg: #00f8; }
        .sphere7 { --bg: #dc1ddf88; }
        .sphere8 { --bg: #e5b2ca88; }
        .item {
          border-radius: 50%;
          background: var(--bg);
        }
        @keyframes girar {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
      <div className="cart-loader-container">
        <div className="loader">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`sphere sphere${i + 1}`}
              style={{
                transform: `rotate(${i * 45}deg)`
              }}
            >
              <div
                className="item"
                style={{
                  transform: `rotateY(${i * 40}deg)`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 