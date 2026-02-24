import * as React from 'react';
import { Card, CardContent } from '../components/ui/card';
import profileImg from '../assets/profile.jpg';

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
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-border">
                <img
                  src={profileImg}
                  alt="토곡포터리 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 소개 내용 영역 */}
            <div className="flex-1 flex flex-col gap-5 text-center md:text-left">

              {/* 이름 */}
              <div>
                <p className="text-2xl font-bold text-foreground">토곡포터리</p>
              </div>

              {/* 구분선 */}
              <hr className="border-border" />

              {/* 소개글 */}
              <div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  대를 이어 유지하고 있는 요 이며, 패밀리 작업방식을 유지하고 있습니다.
                </p>
              </div>

              {/* 링크 */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <a
                  href="https://halfhalf.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  halfhalf.kr
                </a>
              </div>

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutPage;
