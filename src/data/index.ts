import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Zap,
  Package,
  AlertTriangle,
  CreditCard,
  UsersIcon,
  UserCheck,
  UserPlus,
  UserX,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

export const ORDER_STATS = [
  {
    id: 1,
    name: "total Orders",
    value: "1,234",
    icon: ShoppingBag,
    color: "#6366f1",
  },
  {
    id: 2,
    name: "Pending Orders",
    value: "56",
    icon: Clock,
    color: "#F59E0B",
  },
  {
    id: 3,
    name: "Completed Orders",
    value: "1,111",
    icon: CheckCircle,
    color: "#10B981",
  },
  {
    id: 4,
    name: "Total Revenue",
    value: "$1,234,567",
    icon: DollarSign,
    color: "#EF4444",
  },
];

export const OVERVIEW_STATS = [
  {
    id: 1,
    name: "Total Sales",
    icon: Zap,
    value: "$1,234,567",
    color: "#6366F1",
  },
  {
    id: 2,
    name: "New Users",
    icon: Users,
    value: "1,234",
    color: "#8B5CF6",
  },
  {
    id: 3,
    name: "Total Products",
    icon: ShoppingBag,
    value: "576",
    color: "#EC4899",
  },
  {
    id: 4,
    name: "Conversion Rate",
    icon: BarChart2,
    value: "12.5%",
    color: "#10B981",
  },
];

export const PRODUCT_STATS = [
  {
    id: 1,
    name: "Total Products",
    icon: Package,
    value: "1234",
    color: "#6366F1",
  },
  {
    id: 2,
    name: "Top Selling",
    icon: TrendingUp,
    value: "56",
    color: "#10B981",
  },
  {
    id: 3,
    name: "Low Stock",
    icon: AlertTriangle,
    value: "23",
    color: "#F59E0B",
  },
  {
    id: 4,
    name: "Total Revenue",
    icon: DollarSign,
    value: "$1,234,567",
    color: "#EF4444",
  },
];

export const SALE_STATS = [
  {
    id: 1,
    name: "Total Revenue",
    icon: DollarSign,
    value: "$1,234,567",
    color: "#6366F1",
  },
  {
    id: 2,
    name: "Avg. Order Value",
    icon: ShoppingCart,
    value: "$78.90",
    color: "#10B981",
  },
  {
    id: 3,
    name: "Conversion Rate",
    icon: TrendingUp,
    value: "3.45%",
    color: "#F59E0B",
  },
  {
    id: 4,
    name: "Sales Growth",
    icon: CreditCard,
    value: "12.3%",
    color: "#EF4444",
  },
];

export const USER_STATS = [
  {
    id: 1,
    name: "Total Users",
    icon: UsersIcon,
    value: "152845",
    color: "#6366F1",
  },
  {
    id: 2,
    name: "Active Users",
    icon: UserCheck,
    value: "98520",
    color: "#6366F1",
  },
  {
    id: 3,
    name: "New Users Today",
    icon: UserPlus,
    value: "234",
    color: "#10B981",
  },
  {
    id: 4,
    name: "Churn Rate",
    icon: UserX,
    value: "2.4%",
    color: "#EF4444",
  },
];
