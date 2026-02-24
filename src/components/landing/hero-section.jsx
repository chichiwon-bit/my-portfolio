import * as React from 'react';
import profileImg from '../../assets/profile.jpg';

/**
 * HeroSection 컴포넌트
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection({ className }) {
  return (
    <section className={`flex flex-col md:flex-row min-h-[88vh] ${className || ''}`}>
      {/* 좌측: 도자기 이미지 */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full overflow-hidden">
        <img
          src={profileImg}
          alt="Togok Pottery"
          className="w-full h-full object-cover"
          style={{ minHeight: '50vh' }}
        />
      </div>

      {/* 우측: 브랜드 카피 */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-20"
        style={{ backgroundColor: '#F2EDE4' }}
      >
        <div className="text-center max-w-xs">
          <h1
            className="text-3xl md:text-4xl font-light tracking-widest text-stone-900 uppercase mb-4"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', letterSpacing: '0.25em' }}
          >
            Manifestation
          </h1>
          <p
            className="text-[10px] tracking-widest text-stone-500 uppercase leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Our Philosophy : What you can visualise in<br />
            your mind, you can hold in your hands.
          </p>
          <button
            className="text-[10px] tracking-[0.2em] uppercase px-6 py-2 border border-stone-500 text-stone-600 hover:bg-stone-800 hover:text-stone-100 hover:border-stone-800 transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: 'transparent' }}
          >
            New Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
