import * as React from 'react';
import profileImg from '../../assets/profile.jpg';

/** 샘플 상품 데이터 */
const products = [
  { id: 1, name: 'VASE 001', price: '£40', image: profileImg },
  { id: 2, name: 'VASE 002', price: '£44', image: profileImg },
  { id: 3, name: 'VASE 003', price: '£40', image: profileImg },
];

/**
 * ProjectsSection 컴포넌트 (SHOP 섹션)
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection({ className }) {
  return (
    <section
      className={`py-16 md:py-24 px-8 md:px-16 ${className || ''}`}
      style={{ backgroundColor: '#F2EDE4' }}
    >
      <h2
        className="text-center font-light text-stone-900 text-base md:text-lg tracking-[0.4em] uppercase mb-12 md:mb-16"
        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
      >
        Shop
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="cursor-pointer group">
            <div className="aspect-square overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p
              className="text-[10px] tracking-[0.2em] text-stone-900 uppercase mb-1"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {product.name}
            </p>
            <p
              className="text-[10px] text-stone-500"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
