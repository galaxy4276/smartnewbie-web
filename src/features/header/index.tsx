'use client';

import { Button } from "@/shared/ui";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Header() {
  const onClickHeader = () => redirect('/');

  return (
    <header 
      className="h-[72px] min-w-screen py-[14px] px-[24px] md:px-[48px] flex justify-between items-center bg-white drop-shadow-md cursor-pointer"
      onClick={onClickHeader}
    >
      <section className="flex items-center gap-x-4">
        <Image src="/images/header_logo.png" alt="header_logo" width={36} height={44} />
        <div className="flex items-center gap-x-1.5">
          <span className="font-bold text-slate-900">스마트뉴비</span>
          <span className="font-bold text-primary-default">Careers</span>
        </div>
      </section>
      <section>
        <Button onClick={() => window.open('https://2jdxd.channel.io/home', '_blank')}>
          문의하기
        </Button>
      </section>
    </header>
  );
}
