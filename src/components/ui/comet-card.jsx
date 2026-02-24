import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * CometCard 컴포넌트
 * Perplexity Comet에서 볼 수 있는 3D perspective tilt 카드
 *
 * Props:
 * @param {number} rotateDepth - 마우스 이동에 따른 3D 회전 깊이 [Optional, 기본값: 17.5]
 * @param {number} translateDepth - 마우스 이동에 따른 이동 효과 깊이 [Optional, 기본값: 20]
 * @param {string} className - 추가 CSS 클래스 [Optional]
 * @param {React.ReactNode} children - 카드 내부 콘텐츠 [Required]
 *
 * Example usage:
 * <CometCard rotateDepth={17.5} translateDepth={20}>
 *   <img src="..." />
 * </CometCard>
 */
function CometCard({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}) {
  const cardRef = React.useRef(null);
  const [style, setStyle] = React.useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)',
    transition: 'transform 0.4s ease-out',
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    const rotateY = percentX * rotateDepth;
    const rotateX = -percentY * rotateDepth;
    const translateX = percentX * (translateDepth * 0.2);
    const translateY = percentY * (translateDepth * 0.2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)',
      transition: 'transform 0.4s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      className={cn('will-change-transform', className)}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export { CometCard };
