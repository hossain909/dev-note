import Trending from "./Trending";
import CategoryList from "./CategoryList";
import Footer from "./Footer";
import Related from "./Related";

export default function Menu({ trend }) {
  return (
    <section className="col-span-4 hidden lg:block">
      <div className="flex flex-col gap-5">
        {trend && <Related />}
        {!trend && <Trending />}
        <CategoryList />
        <Footer />
      </div>
    </section>
  );
}
