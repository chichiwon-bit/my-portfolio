import * as React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

/**
 * AboutSection 컴포넌트
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
    <section className={`py-12 md:py-24 ${className || ''}`}>
      <Card className="border-dashed">
        <CardContent className="p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            About Me Section
          </h2>
          <p className="mt-4 text-muted-foreground">
            여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => navigate('/about')}
          >
            더 알아보기
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
