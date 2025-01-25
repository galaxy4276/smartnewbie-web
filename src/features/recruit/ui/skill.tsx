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

const getElement = (name: SkillType): ItemReturns => {
  switch (name) {
    case "react":
      return {
        element: <React />,
        link: 'https://react.dev/',
        name: 'React',
      }
    case "typescript":
      return {
        element: <TypeScript />,
        link: 'https://www.typescriptlang.org/',
        name: 'TypeScript',
      }
    case "java":
      return {
        element: <Java />,
        link: 'https://www.java.com/',
        name: 'Java',
      }
    case "confluence":
      return {
        element: <Confluence />,
        link: 'https://www.atlassian.com/software/confluence',
        name: 'Confluence',
      }
    case "fastify":
      return {
        element: <Fastify />,
        link: 'https://fastify.io/',
        name: 'Fastify',
      }
    case "hibernate":
      return {
        element: <Hibernate />,
        link: 'https://hibernate.org/',
        name: 'Hibernate',
      }
    case "jira":
      return {
        element: <Jira />,
        link: 'https://www.atlassian.com/software/jira',
        name: 'Jira',
      }
    case "nodejs":
      return {
        element: <NodeJS />,
        link: 'https://nodejs.org/',
        name: 'Node.js',
      }
    case "notion":
      return {
        element: <Notion />,
        link: 'https://www.notion.so/',
        name: 'Notion',
      }
    case "postgresql":
      return {
        element: <PostgreSQL />,
        link: 'https://www.postgresql.org/',
        name: 'PostgreSQL',
      }
    case "redis":
      return {
        element: <Redis />,
        link: 'https://redis.io/',
        name: 'Redis',
      }
    case "slack":
      return {
        element: <Slack />,
        link: 'https://slack.com/',
        name: 'Slack',
      }
    case "spring":
      return {
        element: <Spring />,
        link: 'https://spring.io/',
        name: 'Spring',
      }
    case "testing-library":
      return {
        element: <TestingLibrary />,
        link: 'https://testing-library.com/',
        name: 'Testing Library',
      }
    case "prisma":
      return {
        element: <Prisma />,
        link: 'https://www.prisma.io/',
        name: 'Prisma',
      }
    case "docker":
      return {
        element: <Docker />,
        link: 'https://www.docker.com/',
        name: 'Docker',
      }
    case "ionic":
      return {
        element: <Ionic />,
        link: 'https://ionicframework.com/',
        name: 'Ionic',
      }
    case "nextjs":
      return {
        element: <NextJS />,
        link: 'https://nextjs.org/',
        name: 'Next.js',
      }
    case "aws":
      return {
        element: <AWS />,
        link: 'https://aws.amazon.com/',
        name: 'AWS',
      }
    case "instagram":
      return {
        element: <Instagram />,
        link: 'https://www.instagram.com/',
        name: 'Instagram',
      }
    case "msw":
      return {
        element: <MSW />,
        link: 'https://mswjs.io/',
        name: 'MSW',
      }
    case "storybook":
      return {
        element: <Storybook />,
        link: 'https://storybook.js.org/',
        name: 'Storybook',
      }
    case "swc":
      return {
        element: <SWC />,
        link: 'https://swc.rs/',
        name: 'SWC',
      }
    case "emotion":
      return {
        element: <Emotion />,
        link: 'https://emotion.sh/',
        name: 'Emotion',
      }
    case "tailwindcss":
      return {
        element: <TailwindCSS />,
        link: 'https://tailwindcss.com/',
        name: 'TailwindCSS',
      }
    case "vite":
      return {
        element: <Vite />,
        link: 'https://vite.dev/',
        name: 'Vite',
      }
    case "yarn":
      return {
        element: <Yarn />,
        link: 'https://yarnpkg.com/',
        name: 'Yarn',
      }
    case "actions":
      return {
        element: <GithubAction />,
        link: 'https://docs.github.com/ko/actions',
        name: 'Github Action',
      }
    case "jenkins":
      return {
        element: <Jenkins />,
        link: 'https://www.jenkins.io/',
        name: 'Jenkins',
      }
    case "mongo":
      return {
        element: <Mongo />,
        link: 'https://www.mongodb.com/ko-kr',
        name: 'MongoDB',
      }
    default:
      throw new Error("no item");
  }
}

export default function Skill({ skillName }: Props) {
  const { element, link, name } = getElement(skillName);

  const handleOpenLink = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
      <TooltipTrigger>
        <Card 
          className="flex gap-x-1 x-[42px] y-[42px] justify-center items-center px-2 py-1.5 w-fit rounded-full cursor-pointer" 
          onClick={handleOpenLink}
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
  );
}

