import CardList from '@components/CardList';
import Menu from '@components/Menu';

export default function Feed({ searchParams }) {
  const trend = false;
  const page = parseInt(searchParams.page) || 1;
  return (
    <section className='grid grid-cols-1 md:grid-cols-12 md:px-20 md:gap-10  md:mt-20'>
      <CardList page={page} />
      <Menu trend={trend} />
    </section>
  );
}
