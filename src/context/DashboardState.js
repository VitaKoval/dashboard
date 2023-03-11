import React from "react";
import useDashboardData from "../hooks/useDashboardData";
import DashboardContext from "./DashboardContext";

const DashboardStateContext = ({ children }) => {
  const { data, error, loading } = useDashboardData();

  return (
    <DashboardContext.Provider value={{ data, error, loading }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardStateContext;
