import { Header } from "@/components/common";
import StatCard from "@/components/common/StatCard";
import { motion } from "framer-motion";

import { dailyOrdersData, ORDER_STATS, orderStatusData } from "@/data";
import OrdersTable from "@/components/orders/OrdersTable";
import { LineChart, PieChart } from "@/components/charts";

const OrdersPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title={"Orders"} />

      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {ORDER_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>

        <div className="grid gap-8 mb-8 lg:grid-cols-2">
          <LineChart
            chartData={dailyOrdersData}
            title="Daily Orders"
            strokes={["#374151", "#9CA3AF", "#9CA3AF", "#4B5563"]}
            dataKey={["date", "orders"]}
          />
          <PieChart
            title="Order Status Distribution"
            chartData={orderStatusData}
            COLORS={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"]}
          />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
