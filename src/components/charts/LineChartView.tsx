import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

type TProps = {
  title: string;
  dataKey: string[];
  strokes: string[];
  salesData: {
    month?: string;
    name?: string;
    users?: number;
    sales?: number;
  }[];
};

const LineChartView = ({ title, salesData, dataKey, strokes }: TProps) => {
  return (
    <motion.div
      className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="mb-4 text-lg font-medium text-gray-100">{title}</h2>

      <div className="h-full min-h-80 max-h-96">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke={strokes[0]} />
            <XAxis dataKey={dataKey[0]} stroke={strokes[1]} />
            <YAxis stroke={strokes[2]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey={dataKey[1]}
              stroke={strokes[3]}
              strokeWidth={2}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default LineChartView;
