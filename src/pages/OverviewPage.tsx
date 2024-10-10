import { Header } from "@/components/common";
import StatCard from "@/components/common/StatCard";
import { PieChart, BarChart, LineChart } from "@/components/charts";
import {
  OVERVIEW_STATS,
  salesData,
  categoryData,
  COLORS,
  SALES_CHANNEL_DATA,
} from "@/data";
import { motion } from "framer-motion";

const OverviewPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Overview" />

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <motion.div
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {OVERVIEW_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>

        {/* CHART */}
        <div className="grid gap-8 lg:grid-cols-2">
          <LineChart title="Sales Overview" salesData={salesData} />
          <PieChart
            title="Category Distribution"
            categoryData={categoryData}
            COLORS={COLORS}
          />
          <BarChart
            title="Sales by Channel"
            COLORS={COLORS}
            SALES_CHANNEL_DATA={SALES_CHANNEL_DATA}
          />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
