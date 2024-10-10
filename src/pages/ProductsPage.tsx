import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import StatCard from "@/components/common/StatCard";
import { PRODUCT_STATS } from "@/data";

const ProductsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Products" />

      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {PRODUCT_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default ProductsPage;
