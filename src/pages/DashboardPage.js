import React from "react";
import Statistic from "../components/Statistic";
import Wrapper from "../components/Wrapper";
import GameStats from "../components/GameStats";
import GeneralSales from "../components/GeneralSales";

function DashboardPage(params) {
  return (
    <Wrapper>
          <Statistic />
          <GameStats />
          <GeneralSales/>
    </Wrapper>
  );
}

export default DashboardPage;
