import * as React from 'react';
import { Card, CardContent } from '../components/ui/card';

/**
 * AboutPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
        About Me
      </h2>

      <Card>
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

            {/* 프로필 사진 영역 */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-dashed border-muted-foreground/40 bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground/50 text-sm text-center px-2">
                  프로필 사진
                </span>
              </div>
              <p className="text-xs text-muted-foreground/50">사진을 추가해보세요</p>
            </div>

            {/* 소개 내용 영역 */}
            <div className="flex-1 flex flex-col gap-5 text-center md:text-left">

              {/* 이름 / 직함 */}
              <div>
                <div className="h-8 rounded-md bg-muted/60 mb-2 flex items-center px-3">
                  <span className="text-muted-foreground/50 text-sm">이름</span>
                </div>
                <div className="h-6 rounded-md bg-muted/40 flex items-center px-3">
                  <span className="text-muted-foreground/40 text-xs">직함 / 역할</span>
                </div>
              </div>

              {/* 구분선 */}
              <hr className="border-border" />

              {/* 소개글 */}
              <div>
                <p className="text-xs text-muted-foreground/50 mb-2 font-medium uppercase tracking-wide">
                  소개
                </p>
                <div className="space-y-2">
                  <div className="h-4 rounded bg-muted/50 w-full" />
                  <div className="h-4 rounded bg-muted/50 w-5/6" />
                  <div className="h-4 rounded bg-muted/50 w-4/6" />
                </div>
              </div>

              {/* 연락처 / 링크 */}
              <div>
                <p className="text-xs text-muted-foreground/50 mb-2 font-medium uppercase tracking-wide">
                  링크
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="h-7 w-20 rounded-full bg-muted/60" />
                  <div className="h-7 w-20 rounded-full bg-muted/60" />
                  <div className="h-7 w-20 rounded-full bg-muted/60" />
                </div>
              </div>

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutPage;
