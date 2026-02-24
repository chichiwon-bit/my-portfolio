import * as React from 'react';

/**
 * MarqueeBanner 컴포넌트 (skill-section)
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillSection />
 */
function SkillSection() {
  const text = 'Ceramic Studio · Turning Visions Into Reality · TOGOK POTTERY · ';

  return (
    <section
      className="border-t border-b border-stone-300 py-3 overflow-hidden"
      style={{ backgroundColor: '#F2EDE4' }}
    >
      <div className="overflow-hidden">
        <div className="marquee-track">
          <span
            className="text-[10px] tracking-[0.2em] text-stone-500 uppercase"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {text.repeat(10)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
