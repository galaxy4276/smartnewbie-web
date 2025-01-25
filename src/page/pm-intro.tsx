'use client';

import { Skill } from "@/features/recruit";
import { Button } from "@/shared/ui";
import { openGoogleRecruitForm } from "@/shared/utils";

export default function PmIntroPage() {

  return (
    <aside className="grid grid-cols-1 gap-x-[60px] md:grid-cols-[70%_30%]">
    <article>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">우리는 이런 팀이에요.</h2>
      <div className="text-gray-700 mb-4 space-y-2">
        <span className="block">대전 지역 대학생들이 연합하여 결성한 대학생 개발팀입니다.
        저희 팀은 2024년부터 청년 취업의 어려움을 해결하고자 대전 지역의 청년 채용 플랫폼 <a href="https://internmate.co.kr" className="text-primary-default">인턴메이트</a>를 개발하여 성공적으로 론칭하였습니다!</span>
        <span className="block">이 첫 프로젝트를 계기로 다양한 혁신적인 아이디어를 실현하며, 지역 사회와 청년들의 성장에 기여하기 위해 꾸준히 노력하고 있습니다.</span>
        <span className="block">우리 팀은 각 팀원이 다른 학교와 학업 스케줄을 병행하는 가운데, 협업 도구와 체계를 적극적으로 활용해 비동기 방식으로 업무를 효율적으로 진행하고 있으며,</span>
        <span className="block">최신 기술 트렌드에 대한 관심과 학습을 통해 빠르게 변화하는 기술 시장에서 희소가치 있는 인재로 거듭나는 것을 목표로 합니다. 팀원 모두가 함께 공부하고 성장하며, 이를 프로젝트에 적용해 실질적인 성과를 만들어내는 것을 중요하게 생각합니다.</span>
        <span className="block">또한, 프로젝트 진행 중 발생하는 문제에 대해 팀원 간 공유하고 해결방안을 찾아 다양한 문제상황을 해결합니다.</span>
        <span className="block">학업과 도전을 병행하며 끊임없이 성장하고 변화하는 저희 팀은, 대전의 대학생 개발팀을 넘어 청년 개발 문화와 혁신을 이끄는 팀으로 자리 잡기 위해 최선을 다하고 있습니다.</span>

        <div className="py-2 gap-y-1.5 flex flex-col">
          <a className="underline text-slate-400" href="https://ruby-composer-6d2.notion.site/17d1bbec5ba1804db6e2fea787ba7402?pvs=4">스마트 뉴비팀에 대해 더 궁금하다면?</a>
          <a className="underline text-slate-400" href="https://2jdxd.channel.io/home">직무에 대해 문의사항이 있나요?</a>
        </div>
      </div>
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

      <div className="flex items-center gap-x-2.5">
          <span className="font-bold">업무 관리:</span>
          <div className="flex gap-x-1">
            <Skill skillName="jira" />
          </div>
        </div>  

      <div className="flex items-center gap-x-2.5">
          <span className="font-bold">문서 작성 및 관리:</span>
          <div className="flex gap-x-1">
            <Skill skillName="confluence" />
            <Skill skillName="notion" />
          </div>
        </div>  

        <div className="flex items-center gap-x-2.5">
          <span className="font-bold">커뮤니케이션:</span>
          <div className="flex gap-x-1">
            <Skill skillName="slack" />
          </div>
        </div>    
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">함류하면 함께 할 업무에요</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>프로덕트에 대해서 예산과 시간, 기술비용을 측정하고 기획해요.</li>
        <li>프로덕트 일정을 관리하고 개발자와 고객 간 커뮤니케이션을 진행해요.</li>
        <li>업무 관련 내용을 정리해요.</li>
      </ul>
    </section>
    </article>
      <Button onClick={openGoogleRecruitForm} className="min-w-[230px]" size="lg">
        지원하기
      </Button>
    </aside>
  );
}
