import { ReactNode } from "react"
import Header from "@/features/header";
import Footer from "../footer";

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <article className="min-h-screen flex flex-col">
      <Header />
      <article className="relative px-14 h-[300px] px-0 md:px-[142px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/copration-0.mp4" type="video/mp4" />
        </video>
        <div className="right-10 md:left-0 relative z-20">
          <div className="flex flex-col gap-2 py-[60px] px-[24px] md:px-[146px]">
            <div className="flex items-center gap-2 w-fit px-1.5 px-[32px] py-[14px] bg-black/80">
              <span 
                className="text-[22px] md:text-[32px] whitespace-nowrap font-bold text-white overflow-hidden border-r-4 border-white typing-effect"
              >
                작은 아이디어도 현실이 되는 공간.
              </span>
            </div>
          </div>
        </div>
      </article>

      <section className="flex-1 px-4 my-[58px] flex justify-center w-full md:px-[142px]">
        <article className="w-full md:max-w-[1400px]">
        {children}
        </article>
      </section>

      <Footer />
    </article>
  )
}
