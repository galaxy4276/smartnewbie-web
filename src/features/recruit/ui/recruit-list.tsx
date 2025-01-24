'use client';

import { currentRecruits } from "../data";
import { Recruit } from "..";

export default function RecruitList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1920px] mb-[300px]">
      {currentRecruits.map(data => <Recruit key={data.title} {...data} />)}
    </div>
  );
}
