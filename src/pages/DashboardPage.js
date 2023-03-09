import React from "react";
import Statistic from "../components/Statistic";
import Wrapper from "../components/Wrapper";
import GameStatsDataType from "../components/GameStatsDataType";
import GeneralSales from "../components/GeneralSales";
import BlockDashboard from "../components/BlockDashboard";
import GameStatsLocation from "../components/GameStatsLocation";

import DashboardState from "../context/DashboardState";
// import useDashboardData from "../hooks/useDashboardData";

function DashboardPage(params) {

  return (
    <DashboardState>
      <Wrapper>
        <Statistic />
        <Wrapper box>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flexGrow: 3 }}>
              <BlockDashboard height="344px">
                <GameStatsDataType />
              </BlockDashboard>
            </div>

            <div style={{ flexGrow: 1 }}>
              <BlockDashboard>
                <GameStatsLocation />
              </BlockDashboard>
            </div>
          </div>
        </Wrapper>
        <Wrapper box>
          <div style={{ flexGrow: 4 }}>
            <BlockDashboard height="480px">
              <GeneralSales />
            </BlockDashboard>
          </div>
        </Wrapper>
      </Wrapper>
    </DashboardState>
  );
}

export default DashboardPage;
