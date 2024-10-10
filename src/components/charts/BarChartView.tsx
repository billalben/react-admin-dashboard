import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

type TProps = {
  title: string;
  CHART_DATA: {
    name: string;
    value: number;
  }[];
  COLORS: string[];
};

const BarChartView = ({ title, CHART_DATA, COLORS }: TProps) => {
  return (
    <motion.div
      className="rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 p-6 shadow-lg backdrop-blur-md lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="mb-4 text-lg font-medium text-gray-100">{title}</h2>

      <div className="h-full max-h-96 min-h-80">
        <ResponsiveContainer>
          <BarChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {CHART_DATA.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default BarChartView;
