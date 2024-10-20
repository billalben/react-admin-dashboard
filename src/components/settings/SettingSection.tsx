import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

type TProps = {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
};

const SettingSection = ({ icon: Icon, title, children }: TProps) => {
  return (
    <motion.div
      className="mb-8 rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex items-center">
        <Icon className="mr-4 text-indigo-400" size="24" />
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default SettingSection;
