import Card from './Card';
import FeedNavLinks from './FeedNavLinks';
import Pagination from './Pagination';

async function getData(page) {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: 'no-store',
  });
  console.log(res);
  if (!res.ok) {
    throw new Error('Failed to get posts!');
  }
  return res.json();
}

export default async function CardList({ page }) {
  const { posts, count } = await getData(page);
  // console.log(posts);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <section className='col-span-full lg:col-span-8 min-h-min'>
      <div className='flex flex-col gap-6'>
        <FeedNavLinks />
        {posts?.map((item) => {
          return <Card key={item.id} page={page} post={item} />;
        })}
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </section>
  );
}
