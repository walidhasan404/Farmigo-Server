import Hero from "../Sections/Hero/Hero";
import Categories from "../Sections/Categories/Categories";
import Blogs from "../Sections/Blogs/Blogs";
import ProductsSections from "../Sections/ProductsSection/ProductsSections";
import useMeta from "../../../common/Hooks/useMeta";
import Ads from "../Sections/Ads Section/Ads";
import FruitCategories from "../Sections/TopCategories/Categories";

const Home = () => {
  useMeta({
    title: "Home - Farmigo",
    description: "Welcome to the home page",
  });
  return (
    <div>
      <Hero />
      <Categories />
      <ProductsSections />
      <Ads />
      <FruitCategories />
      <Blogs />
    </div>
  );
};

export default Home;
