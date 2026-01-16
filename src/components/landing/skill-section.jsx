import * as React from 'react';
import { Card, CardContent } from '../ui/card';

/**
 * SkillSection 컴포넌트
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <SkillSection />
 */
function SkillSection({ className }) {
  return (
    <section className={`py-12 md:py-24 ${className || ''}`}>
      <Card className="border-dashed">
        <CardContent className="p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Skill Tree Section
          </h2>
          <p className="mt-4 text-muted-foreground">
            여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default SkillSection;
