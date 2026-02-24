import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

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
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <div className="font-bold text-xl text-primary">토곡도예</div>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
