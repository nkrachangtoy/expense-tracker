import React from "react";

// Components
import Card from "./Card";
import SideNav from "./SideNav";
import ExpenseOverview from "./ExpenseOverview";

const Dashboard = () => {
  return (
    <Card className="dashboard">
      <SideNav />
      <ExpenseOverview />
    </Card>
  );
};

export default Dashboard;
