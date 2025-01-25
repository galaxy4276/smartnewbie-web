'use client';

import { Button } from "@/shared/ui";
import { openGoogleRecruitForm } from "@/shared/utils";

export default function ApplyButton() {
  return (
    <Button onClick={openGoogleRecruitForm} className="min-w-[230px]" size="lg">
    지원하기
  </Button>
  );
}
