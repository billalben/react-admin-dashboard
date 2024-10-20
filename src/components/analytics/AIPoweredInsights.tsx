import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type TProps = {
  DATA: {
    insight: string;
    icon: LucideIcon;
    color: string;
  }[];
  title: string;
};

const AIPoweredInsights = ({ DATA, title }: TProps) => {
  return (
    <motion.div
      className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-lg backdrop-filter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-100">{title}</h2>
      <div className="space-y-4">
        {DATA.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`rounded-full p-2 ${item.color} bg-opacity-20`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>
            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default AIPoweredInsights;
