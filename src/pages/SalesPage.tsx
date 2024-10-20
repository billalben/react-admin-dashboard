import { Header } from "@/components/common";
import { motion } from "framer-motion";
import StatCard from "@/components/common/StatCard";
import { COLORS, monthlySalesData, SALE_STATS, salesByCategory } from "@/data";
import DailySalesTrend from "@/components/sales/DailySalesTrend";
import { AreaChart, PieChart } from "@/components/charts";

const SalesPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Sales Dashboard" />

      <main className="px-4 py-6 mx-auto mt-20 max-w-7xl lg:px-8">
        <motion.div
          className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {SALE_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>

        <AreaChart title="Sales Overview" chartData={monthlySalesData} dataKey={["month", "sales"]} />

        <div className="grid gap-8 mb-8 lg:grid-cols-2">
          <PieChart
            title="Sales by Category"
            chartData={salesByCategory}
            COLORS={COLORS}
          />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
