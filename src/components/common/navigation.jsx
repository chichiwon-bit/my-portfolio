import * as React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation 컴포넌트
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <Navigation />
 */
function Navigation({ className }) {
  const linkClass = 'text-[10px] tracking-[0.2em] font-light text-stone-600 hover:text-stone-900 transition-colors uppercase';

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-stone-300 ${className || ''}`}
      style={{ backgroundColor: '#F2EDE4' }}
    >
      <div className="flex h-12 items-center justify-between px-6 md:px-12">
        {/* 좌측 */}
        <div className="flex items-center space-x-6 md:space-x-8 w-1/3">
          <NavLink to="/projects" className={linkClass}>Shop</NavLink>
          <NavLink to="/about" className={linkClass}>Studio</NavLink>
        </div>

        {/* 중앙 로고 */}
        <div className="flex justify-center w-1/3">
          <NavLink
            to="/"
            className="text-xs md:text-sm tracking-[0.25em] font-light text-stone-900 hover:text-stone-600 transition-colors uppercase"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1rem', letterSpacing: '0.3em' }}
          >
            Togok Pottery
          </NavLink>
        </div>

        {/* 우측 */}
        <div className="flex items-center justify-end space-x-6 md:space-x-8 w-1/3">
          <NavLink to="/about" className={linkClass}>Philosophy</NavLink>
          <a href="#" className={linkClass}>Cart</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
