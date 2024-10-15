import { Header } from "@/components/common";
import { motion } from "framer-motion";
import StatCard from "@/components/common/StatCard";
import { categoryData, COLORS, PRODUCT_STATS, salesDataProducts } from "@/data";
import ProductsTable from "@/components/products/ProductsTable";
import { LineChart, PieChart } from "@/components/charts";

const ProductsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Products" />

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <motion.div
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {PRODUCT_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className="grid-col-1 grid gap-8 lg:grid-cols-2">
          <LineChart
            title="Sales Trend"
            chartData={salesDataProducts}
            dataKey={["month", "sales"]}
            strokes={["#374151", "#9CA3AF", "#9CA3AF", "#8B5CF6"]}
          />
          <PieChart
            title="Category Distribution"
            COLORS={COLORS}
            chartData={categoryData}
          />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
