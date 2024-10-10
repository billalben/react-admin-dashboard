import Header from "@/components/common/Header";
import StatCard from "@/components/common/StatCard";
import { OVERVIEW_STATS } from "@/data";
import { motion } from "framer-motion";

const OverviewPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Overview" />

      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {OVERVIEW_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default OverviewPage;
