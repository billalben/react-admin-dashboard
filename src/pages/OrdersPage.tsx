import { Header } from "@/components/common";
import StatCard from "@/components/common/StatCard";
import { motion } from "framer-motion";

import { ORDER_STATS } from "@/data";

const OrdersPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title={"Orders"} />

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <motion.div
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {ORDER_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default OrdersPage;
