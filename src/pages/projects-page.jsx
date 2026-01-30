import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

/**
 * ProjectsPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center text-muted-foreground">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-16 text-center">
          <p className="text-muted-foreground">
            Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectsPage;
