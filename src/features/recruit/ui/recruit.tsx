import { Button, Card } from "@/shared/ui";
import { redirect } from 'next/navigation'

interface RecruitProps {
  title: string;
  descriptions: string[];
  link: string;
  videoLink: string;
}

export default function Recruit({ title, descriptions, link, videoLink }: RecruitProps) {
  const onApply = () => redirect(link);

  return (
    <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-[250px]">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoLink} type="video/mp4" />
          </video>
      </div>

      <section className="p-6">
      <div className="mb-4">
        <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full text-sm">
          모집중
        </span>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {descriptions.map((desc, index) => (
          <span key={desc}>
            {desc}
            {index !== descriptions.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className="flex gap-2 mb-4">
        {/* 기술 스택 아이콘들 */}
      </div>
      <Button
        className="w-full font-bold"
        size="lg"
        onClick={onApply}
      >
        상세확인
      </Button>
      </section>

    </Card>
  );
}