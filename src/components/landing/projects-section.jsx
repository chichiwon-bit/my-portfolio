import * as React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

/**
 * ProjectsSection 컴포넌트
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection({ className }) {
  const navigate = useNavigate();

  return (
    <section className={`py-12 md:py-24 ${className || ''}`}>
      <Card className="border-dashed">
        <CardContent className="p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Projects Section
          </h2>
          <p className="mt-4 text-muted-foreground">
            여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => navigate('/projects')}
          >
            더 보기
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default ProjectsSection;
