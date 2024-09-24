import { useEffect } from "react";
import LatestResults from "./LatestResults";
import BarChart from "./BarChart";
import CardWrapper from "../../../components/Card";
import AnimatedComponent from "../../../components/AnimatedComponent";

import DashboardFilter from "./DashboardFilter";
import { dashboardStore } from "../../../app/dashboardStore";
import TableHeader from "../../../components/TableHeader";

const Dashboard = () => {
  const { fetchData, data } = dashboardStore();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatedComponent>
      <TableHeader
        title={"Dashboard"}
        headerComponents={[<DashboardFilter />]}
      />
      <main className="m-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <CardWrapper data={data} />
        </div>
        <div className="mt-6 grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-4">
          <LatestResults data={data?.lastestResults} />
          <BarChart barChartData={data?.subjectData} />
        </div>
      </main>
    </AnimatedComponent>
  );
};

export default Dashboard;
