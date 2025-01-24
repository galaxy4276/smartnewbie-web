import Layout from '@/features/layout';
import { RecruitList } from '@/features/recruit';
import { Button } from '@/shared/ui';

export default function Home() {
  return (
    <Layout>
      {/* 메인 콘텐츠 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2">
          스마트 뉴비와 함께 할<br />
          멋진 동료를 찾고 있어요!
        </h2>
        <p className="text-gray-600">
          스마트 뉴비 팀에 지원하고 당신의 가능성을 실현하세요.
        </p>
        <a href='https://ruby-composer-6d2.notion.site/17d1bbec5ba1804db6e2fea787ba7402?pvs=4'>
        <Button className="my-3">
          스마트 뉴비 개발팀이 궁금하다면?
        </Button>
        </a>
      </div>

      {/* 채용 카드 섹션 */}
      <RecruitList />
    </Layout>
  );
}
