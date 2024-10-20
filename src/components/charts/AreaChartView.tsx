import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

type TProps = {
  title: string;
  chartData: {
    month: string;
    sales?: number;
    revenue?: number;
    target?: number;
  }[];
  dataKey: string[];
};

const AreaChartView = ({ title, chartData, dataKey }: TProps) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("week");

  return (
    <motion.div
      className="mb-8 rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 p-6 shadow-lg backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mb-4 text-xl font-semibold text-gray-100">{title}</h2>

        <select
          className="rounded-md bg-gray-700 px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={dataKey[0]} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey={dataKey[1]}
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            {dataKey[2] && (
              <Area
                type="monotone"
                dataKey={dataKey[2]}
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default AreaChartView;
