import { Header } from "@/components/common";
import { motion } from "framer-motion";
import StatCard from "@/components/common/StatCard";
import { SALE_STATS } from "@/data";

const SalesPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Sales Dashboard" />

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <motion.div
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {SALE_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default SalesPage;
