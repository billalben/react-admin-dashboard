import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SIDEBAR_ITEMS } from "@/data";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 transition-all duration-300 ease-out ${
        isSidebarOpen ? "w-52" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="flex flex-col h-full gap-8 p-4 bg-gray-800 bg-opacity-50 border-r border-gray-700 backdrop-blur-md">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 transition-colors rounded-full max-w-fit hover:bg-gray-700"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
                className={cn(
                  "mb-2 flex gap-4 items-center rounded-lg p-4 text-sm font-medium transition-colors hover:bg-gray-700",
                  location.pathname === item.href && "bg-gray-700",
                )}
              >
                <item.icon
                  size={20}
                  style={{ color: item.color }}
                  className={cn("shrink-0 transition-transform", !isSidebarOpen && "-translate-x-1")}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
export default Sidebar;
