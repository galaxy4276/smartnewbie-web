import Layout from "@/features/layout";
import { Button } from "@/shared/ui";

export default function PMRecruitPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Project Manager (PM)</h1>


      <aside className="grid grid-cols-1 md:grid-cols-[70%_30%]">
      <article>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">우리는 이런 팀이에요.</h2>
        <p className="text-gray-700 mb-4">
          대전 내 대학교 연합 학생 개발팀입니다.<br />
          2024년부터 청년취업연 이태윤을 핵결하기위해 대전 내 청년채용플랫폼의<br />
          인터페이스를 개발했으며 첫 프로젝트 성공을 계기로 다양한 아이디어를<br />
          실현하고자 노력하고 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">우리는 이렇게 일해요.</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>각자 워킹스케줄이 다르므로 비동기 업무방식을 채택했어요.</li>
          <li>데일리 스크럼을 통해 팀원 간 업무 현황을 주적하고 문제를 해결해요.</li>
          <li>업무 관리 시스템과 자동화를 통해 효율적인 커뮤니케이션을 수행해요.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">우리는 이런 도구를 사용해요</h2>
        <div className="space-y-4">
          <p><span className="font-bold">코어:</span> React, TypeScript, Next.js, Ionic</p>
          <p><span className="font-bold">상태관리:</span> Zustand, Tanstack Query, Recoil</p>
          <p><span className="font-bold">스타일링:</span> tailwindCSS, Emotion</p>
          <p><span className="font-bold">패키지 매니저:</span> yarn berry</p>
          <p><span className="font-bold">빌드:</span> SWC, Vite, Turbopack</p>
          <p><span className="font-bold">CI/CD:</span> Github Actions, Jenkins</p>
          <p><span className="font-bold">테스트:</span> Storybook, Testing Library, MSW</p>
          <p><span className="font-bold">커뮤니케이션:</span> Slack, Jira, Notion</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">함류하면 함께 할 업무에요</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>고객에게 수수한은 신규 제품을 개발하거나 유지보수해요.</li>
          <li>개발팀 내 디자인시스템을 개발하고 문서화해요.</li>
          <li>자체 솔루션의 신규 기능을 개발하고 유지보수해요.</li>
        </ul>
      </section>
      </article>
        <Button className="min-w-[230px]" size="lg">
          지원하기
        </Button>
      </aside>

    </Layout>
  );
}
