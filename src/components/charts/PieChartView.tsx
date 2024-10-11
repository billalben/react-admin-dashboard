import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type TProps = {
  title: string;
  chartData: {
    name: string;
    value: number;
  }[];
  COLORS: string[];
  colSpan?: boolean;
};

const PieChartView = ({
  title,
  chartData,
  COLORS,
  colSpan = false,
}: TProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 p-6 shadow-lg backdrop-blur-md",
        colSpan ? "lg:col-span-2" : "",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-100">{title}</h2>

      <div className="h-full max-h-96 min-h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={chartData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default PieChartView;
