import * as React from 'react';
import { Card, CardContent } from '../ui/card';

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
    <section className={`py-12 md:py-24 ${className || ''}`}>
      <Card className="border-dashed">
        <CardContent className="p-8 md:p-16 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-muted-foreground">
            Hero Section
          </h1>
          <p className="mt-4 text-muted-foreground">
            여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default HeroSection;
