'use client';

import { Card, Tooltip } from "@/shared/ui";
import React from "@public/icons/react.svg";
import TypeScript from "@public/icons/devicon_typescript.svg";
import Java from "@public/icons/devicon_java.svg";
import Confluence from "@public/icons/devicon_confluence.svg";
import Fastify from "@public/icons/devicon_fastify.svg";
import Hibernate from "@public/icons/devicon_hibernate.svg";
import Jira from "@public/icons/devicon_jira.svg";
import NodeJS from "@public/icons/devicon_nodejs.svg";
import Notion from "@public/icons/devicon_notion.svg";
import PostgreSQL from "@public/icons/devicon_postgresql.svg";
import Redis from "@public/icons/devicon_redis.svg";
import Slack from "@public/icons/devicon_slack.svg";
import Spring from "@public/icons/devicon_spring.svg";
import Prisma from "@public/icons/lineicons_prisma.svg";
import Docker from "@public/icons/logos_docker-icon.svg";
import Ionic from "@public/icons/logos_ionic-icon.svg";
import NextJS from "@public/icons/logos_nextjs-icon.svg";
import AWS from "@public/icons/skill-icons_aws-dark.svg";
import Instagram from "@public/icons/instagram.svg";
import MSW from "@public/icons/logos_msw-icon.svg";
import Storybook from "@public/icons/logos_storybook-icon.svg";
import SWC from "@public/icons/logos_swc.svg";
import Emotion from "@public/icons/skill-icons_emotion-light.svg";
import Vite from "@public/icons/vscode-icons_file-type-vite.svg";
import TailwindCSS from "@public/icons/tailwind.svg";
import Yarn from "@public/icons/devicon_yarn.svg";
import GithubAction from "@public/icons/devicon_githubactions.svg";
import Jenkins from "@public/icons/devicon_jenkins.svg";
import TestingLibrary from "@public/icons/logos_testing-library.svg";
import Mongo from "@public/icons/mongo.svg";

import { ReactElement } from "react";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export type SkillType = 
  | 'react'
  | 'typescript' 
  | 'java'
  | 'confluence'
  | 'fastify'
  | 'hibernate'
  | 'jira'
  | 'nodejs'
  | 'notion'
  | 'postgresql'
  | 'redis'
  | 'slack'
  | 'spring'
  | 'prisma'
  | 'docker'
  | 'ionic'
  | 'nextjs'
  | 'aws'
  | 'instagram'
  | 'msw'
  | 'storybook'
  | 'swc'
  | 'emotion'
  | 'tailwindcss'
  | 'mongo'
  | 'vite'
  | 'actions'
  | 'testing-library'
  | 'jenkins'
  | 'yarn';

type Props = {
  skillName: SkillType;
}

type ItemReturns = {
  element: ReactElement;
  link: string;
  name: string;
}

const elements: Record<SkillType, ItemReturns> = {
  react: {
    element: <React />,
    link: 'https://react.dev/',
    name: 'React',
  },
  typescript: {
    element: <TypeScript />,
    link: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
  },
  java: {
    element: <Java />,
    link: 'https://www.java.com/',
    name: 'Java',
  },
  confluence: {
    element: <Confluence />,
    link: 'https://www.atlassian.com/software/confluence',
    name: 'Confluence',
  },
  fastify: {
    element: <Fastify />,
    link: 'https://fastify.io/',
    name: 'Fastify',
  },
  hibernate: {
    element: <Hibernate />,
    link: 'https://hibernate.org/',
    name: 'Hibernate',
  },
  jira: {
    element: <Jira />,
    link: 'https://www.atlassian.com/software/jira',
    name: 'Jira',
  },
  nodejs: {
    element: <NodeJS />,
    link: 'https://nodejs.org/',
    name: 'Node.js',
  },
  notion: {
    element: <Notion />,
    link: 'https://www.notion.so/',
    name: 'Notion',
  },
  postgresql: {
    element: <PostgreSQL />,
    link: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
  },
  redis: {
    element: <Redis />,
    link: 'https://redis.io/',
    name: 'Redis',
  },
  slack: {
    element: <Slack />,
    link: 'https://slack.com/',
    name: 'Slack',
  },
  spring: {
    element: <Spring />,
    link: 'https://spring.io/',
    name: 'Spring',
  },
  'testing-library': {
    element: <TestingLibrary />,
    link: 'https://testing-library.com/',
    name: 'Testing Library',
  },
  prisma: {
    element: <Prisma />,
    link: 'https://www.prisma.io/',
    name: 'Prisma',
  },
  docker: {
    element: <Docker />,
    link: 'https://www.docker.com/',
    name: 'Docker',
  },
  ionic: {
    element: <Ionic />,
    link: 'https://ionicframework.com/',
    name: 'Ionic',
  },
  nextjs: {
    element: <NextJS />,
    link: 'https://nextjs.org/',
    name: 'Next.js',
  },
  aws: {
    element: <AWS />,
    link: 'https://aws.amazon.com/',
    name: 'AWS',
  },
  instagram: {
    element: <Instagram />,
    link: 'https://www.instagram.com/',
    name: 'Instagram',
  },
  msw: {
    element: <MSW />,
    link: 'https://mswjs.io/',
    name: 'MSW',
  },
  storybook: {
    element: <Storybook />,
    link: 'https://storybook.js.org/',
    name: 'Storybook',
  },
  swc: {
    element: <SWC />,
    link: 'https://swc.rs/',
    name: 'SWC',
  },
  emotion: {
    element: <Emotion />,
    link: 'https://emotion.sh/',
    name: 'Emotion',
  },
  tailwindcss: {
    element: <TailwindCSS />,
    link: 'https://tailwindcss.com/',
    name: 'TailwindCSS',
  },
  vite: {
    element: <Vite />,
    link: 'https://vite.dev/',
    name: 'Vite',
  },
  yarn: {
    element: <Yarn />,
    link: 'https://yarnpkg.com/',
    name: 'Yarn',
  },
  actions: {
    element: <GithubAction />,
    link: 'https://docs.github.com/ko/actions',
    name: 'Github Action',
  },
  jenkins: {
    element: <Jenkins />,
    link: 'https://www.jenkins.io/',
    name: 'Jenkins',
  },
  mongo: {
    element: <Mongo />,
    link: 'https://www.mongodb.com/ko-kr',
    name: 'MongoDB',
  }
};

const getElement = (name: SkillType): ItemReturns => elements[name];

export default function Skill({ skillName }: Props) {
  const { element, link, name } = getElement(skillName);

  if (!element) return null;

  return (
    <a href={link}>
    <TooltipProvider>
      <Tooltip>
      <TooltipTrigger>
        <Card 
          className="flex gap-x-1 x-[42px] y-[42px] justify-center items-center px-2 py-1.5 w-fit rounded-full cursor-pointer" 
        >
          {element}
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <div className="flex bg-slate-800 py-1 mb-2 px-2.5 rounded-md animate-fade-in">
          <span className="text-white text-[12px]">{name}</span>
        </div>
      </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </a>
  );
}
