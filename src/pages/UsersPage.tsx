import { Header } from "@/components/common";
import { motion } from "framer-motion";
import StatCard from "@/components/common/StatCard";
import {
  COLORS,
  USER_STATS,
  userDemographicsData,
  userGrowthData,
} from "@/data";
import UsersTable from "@/components/users/UsersTable";
import UserActivityHeatmap from "@/components/users/UserActivityHeatmap";
import { LineChart, PieChart } from "@/components/charts";

const UsersPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Users" />

      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {USER_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>

        <UsersTable />

        <div className="grid gap-6 mt-8 lg:grid-cols-2">
          <LineChart
            title="User Growth"
            chartData={userGrowthData}
            strokes={["#374151", "#9CA3AF", "#9CA3AF", "#8B5CF6"]}
            dataKey={["month", "users"]}
          />
          <UserActivityHeatmap />

          <PieChart
            title="User Demographics"
            chartData={userDemographicsData}
            COLORS={COLORS}
            colSpan={true}
          />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
