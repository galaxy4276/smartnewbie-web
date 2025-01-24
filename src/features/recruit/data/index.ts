type RecruitDetails = {
  status: string;
  title: string;
  descriptions: string[];
  link: string;
  videoLink: string;
};

export const currentRecruits: RecruitDetails[] = [
  {
    status: "모집중",
    title: 'Frontend Developer',
    descriptions: [
      'Next.js 를 활용한 리액트 웹 개발',
      'Ionic(Capacitor) 를 활용한 앱 개발',
    ],
    link: '/recruit/frontend',
    videoLink: '/frontend-intro.mp4',
  },
  {
    status: "모집중",
    title: 'Backend Developer',
    descriptions: [
      'Spring Boot 를 활용한 백엔드 개발',
      'Node.js 를 활용한 백엔드 개발',
    ],
    link: '/recruit/backend',
    videoLink: '/backend-intro.mp4',
  },
  {
    status: "모집중",
    title: 'Project Manager',
    descriptions: [
      '프로젝트 일정 관리 및 기술 지표 수립',
      '프로젝트 문서화, 성과 및 진행도 보고 작성',
    ],
    link: '/recruit/pm',
    videoLink: '/pm_intro.mp4',
  },
]