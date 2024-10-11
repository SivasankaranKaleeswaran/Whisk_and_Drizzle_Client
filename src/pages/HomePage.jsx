import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/birthday", name: "Birthday Cakes", imageUrl: "/birthday.jpg" },
  { href: "/wedding", name: "Wedding Cakes", imageUrl: "/wedding.jpg" },
  { href: "/cupcake", name: "Cupcakes & Mini Cakes", imageUrl: "/cupcake.jpg" },
  {
    href: "/seasonal",
    name: "Seasonal & Holiday Cakes",
    imageUrl: "/season.jpg",
  },
  { href: "/pastries", name: "Pastries & Tarts", imageUrl: "/pastries.jpg" },
  { href: "/cookies", name: "Cookies & Brownies", imageUrl: "/cookies.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Delicious Categories
        </h1>
        <p className="text-center text-xl text-white mb-12">
          Discover the Sweetest Treats & Creations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
