import AIPoweredInsights from "@/components/analytics/AIPoweredInsights";
import CustomerSegmentation from "@/components/analytics/CustomerSegmentation";
import OverviewCards from "@/components/analytics/OverviewCards";
import ProductPerformance from "@/components/analytics/ProductPerformance";
import { AreaChart, LineChart, PieChart } from "@/components/charts";
import { Header } from "@/components/common";
import {
  channelData,
  COLORS,
  INSIGHTS,
  overviewData,
  revenueData,
  userRetentionData,
} from "@/data";

const AnalyticsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto bg-gray-900">
      <Header title={"Analytics Dashboard"} />

      <main className="px-4 py-6 mx-auto mt-20 max-w-7xl lg:px-8">
        <OverviewCards overviewData={overviewData} />
        <AreaChart
          title="Revenue vs Target"
          chartData={revenueData}
          dataKey={["month", "revenue", "target"]}
        />

        <div className="grid gap-8 mb-8 lg:grid-cols-2">
          <PieChart
            title="Channel Performance"
            COLORS={COLORS}
            chartData={channelData}
          />
          <ProductPerformance />
          <LineChart
            title="User Retention"
            chartData={userRetentionData}
            dataKey={["name", "retention"]}
            strokes={["#374151", "#9CA3AF", "#9CA3AF", "#8B5CF6"]}
          />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights DATA={INSIGHTS} title="AI-Powered Insights" />
      </main>
    </div>
  );
};
export default AnalyticsPage;
