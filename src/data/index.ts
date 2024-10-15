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

export const salesDataOverview = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];

export const salesDataProducts = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

export const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

export const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1500 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 3000 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 5000 },
];

export const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

export const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

export const userDemographicsData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 30 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

export const PRODUCT_TABLE_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1570549667552-8a73ebf96469?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fExlYXRoZXIlMjBXYWxsZXR8ZW58MHx8MHx8fDA%3D",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFNtYXJ0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    image:
      "https://plus.unsplash.com/premium_photo-1667739346017-fbc9cd35d666?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    image:
      "https://plus.unsplash.com/premium_photo-1661722983090-11783531c332?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

export const USER_TABLE_DATA = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];

export const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

export const salesByCategory = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home & Garden", value: 200 },
  { name: "Books", value: 100 },
  { name: "Others", value: 150 },
];

export const orderStatusData = [
  { name: "Pending", value: 30 },
  { name: "Processing", value: 45 },
  { name: "Shipped", value: 60 },
  { name: "Delivered", value: 120 },
];

export const dailyOrdersData = [
  { date: "07/01", orders: 45 },
  { date: "07/02", orders: 52 },
  { date: "07/03", orders: 49 },
  { date: "07/04", orders: 60 },
  { date: "07/05", orders: 55 },
  { date: "07/06", orders: 58 },
  { date: "07/07", orders: 62 },
];
