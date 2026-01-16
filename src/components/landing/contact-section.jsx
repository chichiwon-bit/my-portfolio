import * as React from 'react';
import { Card, CardContent } from '../ui/card';

/**
 * ContactSection 컴포넌트
 *
 * Props:
 * @param {string} className - 추가 CSS 클래스 [Optional]
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection({ className }) {
  return (
    <section className={`py-12 md:py-24 ${className || ''}`}>
      <Card className="border-dashed">
        <CardContent className="p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Contact Section
          </h2>
          <p className="mt-4 text-muted-foreground">
            여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default ContactSection;
