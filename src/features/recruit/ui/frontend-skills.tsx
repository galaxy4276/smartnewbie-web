import Skill from "./skill";

export default function FrontendSkills() {
  return (
    <div className="space-y-4">
    <div className="flex items-center gap-x-2.5">
      <span className="font-bold">코어:</span>
      <div className="flex gap-x-1">
        <Skill skillName="react" />
        <Skill skillName="typescript" />
        <Skill skillName="nextjs" />
        <Skill skillName="ionic" />
      </div>
    </div>
    <p><span className="font-bold">상태관리:</span> Zustand, Tanstack Query, Recoil</p>
    <div className="flex items-center gap-x-2.5">
      <span className="font-bold">스타일링:</span>
      <div className="flex gap-x-1">
        <Skill skillName="emotion" />
        <Skill skillName="tailwindcss" />
      </div>
    </div>

    <div className="flex items-center gap-x-2.5">
      <span className="font-bold">패키지 매니저:</span>
      <div className="flex gap-x-1">
        <Skill skillName="yarn" />
      </div>
    </div>
    <div className="flex items-center gap-x-2.5">
      <span className="font-bold">빌드:</span>
      <div className="flex gap-x-1">
        <Skill skillName="swc" />
        <Skill skillName="vite" />
      </div>
    </div>
    <div className="flex items-center gap-x-2.5">
      <span className="font-bold">CI/CD:</span>
      <div className="flex gap-x-1">
        <Skill skillName="actions" />
        <Skill skillName="jenkins" />
      </div>
    </div>
    <div className="flex items-center gap-x-2.5">
      <span className="font-bold">테스트:</span>
      <div className="flex gap-x-1">
        <Skill skillName="storybook" />
        <Skill skillName="testing-library" />
        <Skill skillName="msw" />
      </div>
    </div>

        <div className="flex items-center gap-x-2.5">
      <span className="font-bold">커뮤니케이션:</span>
      <div className="flex gap-x-1">
        <Skill skillName="slack" />
        <Skill skillName="jira" />
        <Skill skillName="confluence" />
        <Skill skillName="notion" />
      </div>
    </div>    
  </div>
  );
}
