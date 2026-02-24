import * as React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * AboutSection 컴포넌트 (Ethical Sourcing 섹션)
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection({ className }) {
  const navigate = useNavigate();

  return (
    <section className={`flex flex-col md:flex-row min-h-[60vh] ${className || ''}`}>
      {/* 좌측: 텍스트 */}
      <div
        className="w-full md:w-1/2 flex items-center p-12 md:p-20"
        style={{ backgroundColor: '#F2EDE4' }}
      >
        <div className="max-w-sm">
          <h2
            className="text-2xl md:text-3xl font-light tracking-widest text-stone-900 uppercase mb-6"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', letterSpacing: '0.2em' }}
          >
            Ethical Sourcing
          </h2>
          <p
            className="text-[10px] tracking-widest text-stone-500 uppercase leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            All of the raw materials used in our products<br />
            and workshops are sourced locally and sustainably.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="text-[10px] tracking-[0.2em] uppercase px-6 py-2 border border-stone-500 text-stone-600 hover:bg-stone-800 hover:text-stone-100 hover:border-stone-800 transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: 'transparent' }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* 우측: 작업실 이미지 */}
      <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-full overflow-hidden">
        <img
          src="/bg-home.png"
          alt="Studio"
          className="w-full h-full object-cover"
          style={{ minHeight: '40vh' }}
        />
      </div>
    </section>
  );
}

export default AboutSection;
