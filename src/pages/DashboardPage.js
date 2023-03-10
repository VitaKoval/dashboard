import React from "react";
import DashboardStateContext from "../context/DashboardState";

import PageLayoutWrapper from "../components/PageLayoutWrapper";
import SectionLayoutWrapper from "../components/SectionLayoutWrapper";
import Flex from "../components/Flex";
import DashboardStatistics from "../components/DashboardStatistics";
import DashboardCard from "../components/DashboardCard";
import DashboardGameStatsChart from "../components/DashboardGameStatsChart";
import DaschboardGameStatsPieChart from "../components/DaschboardGameStatsPieChart";
import DashboardGeneralSalesTable from "../components/DashboardGeneralSalesTable";

function DashboardPage() {
  return (
    <DashboardStateContext>
      <PageLayoutWrapper>
        <SectionLayoutWrapper>
          <DashboardStatistics />
        </SectionLayoutWrapper>
        <SectionLayoutWrapper>
          <Flex gap={16}>
            <DashboardCard flex={3} height={344}>
              <DashboardGameStatsChart />
            </DashboardCard>
            <DashboardCard flex={1}>
              <DaschboardGameStatsPieChart />
            </DashboardCard>
          </Flex>
        </SectionLayoutWrapper>
        <SectionLayoutWrapper>
          <DashboardCard height={480}>
            <DashboardGeneralSalesTable />
          </DashboardCard>
        </SectionLayoutWrapper>
      </PageLayoutWrapper>
    </DashboardStateContext>
  );
}

export default DashboardPage;
