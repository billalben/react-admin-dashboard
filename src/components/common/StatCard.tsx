import { LucideIcon } from "lucide-react";

type TProps = {
  name: string;
  icon: LucideIcon;
  value: string;
  color: string;
};

const StatCard = ({ name, icon: Icon, value, color }: TProps) => {
  return (
    <div className="overflow-hidden transition-colors bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg shadow-lg cursor-pointer backdrop-blur-md hover:bg-slate-800">
      <div className="px-4 py-2 sm:p-6">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-400">
          <Icon size={20} style={{ color }} />
          {name}
        </span>
        <p className="mt-2 text-2xl font-semibold text-gray-100">{value}</p>
      </div>
    </div>
  );
};
export default StatCard;
