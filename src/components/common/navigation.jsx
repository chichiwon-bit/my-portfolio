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
  const linkClass = 'text-[8px] md:text-[10px] tracking-[0.08em] md:tracking-[0.2em] font-light text-stone-600 hover:text-stone-900 transition-colors uppercase';

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-stone-300 ${className || ''}`}
      style={{ backgroundColor: '#F2EDE4' }}
    >
      <div className="relative flex h-auto min-h-[3rem] md:h-12 items-center justify-between px-3 md:px-12 py-2 md:py-0">
        {/* 좌측 */}
        <div className="flex items-center space-x-2 md:space-x-8 w-1/3">
          <NavLink to="/projects" className={linkClass}>Shop</NavLink>
          <NavLink to="/about" className={linkClass}>Studio</NavLink>
        </div>

        {/* 중앙 로고 */}
        <div className="w-1/3 flex flex-col justify-center items-center">
          <NavLink
            to="/"
            className="text-[0.65rem] md:text-[1rem] tracking-[0.1em] md:tracking-[0.3em] font-medium md:font-light text-stone-900 hover:text-stone-600 transition-colors uppercase text-center"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            <span className="block md:inline">Togok</span>
            <span className="block md:inline md:ml-1">Pottery</span>
          </NavLink>
        </div>

        {/* 우측 */}
        <div className="flex items-center justify-end space-x-2 md:space-x-8 w-1/3">
          <NavLink to="/about" className={linkClass}>Philosophy</NavLink>
          <a href="#" className={linkClass}>Cart</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
