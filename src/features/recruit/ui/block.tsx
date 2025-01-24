import Link from 'next/link';

interface RecruitBlockProps {
  title: string;
  description: string;
  position: string;
}

export default function RecruitBlock({ title, description, position }: RecruitBlockProps) {
  return (
    <section className="flex flex-col p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <Link href={`/recruit/${position}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4">
          상세보기
        </button>
      </Link>
    </section>
  );
}
