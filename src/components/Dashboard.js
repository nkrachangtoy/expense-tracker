import React from "react";

// Components
import Card from "./Card";
import SideNav from "./SideNav";
import ExpenseOverview from "./ExpenseOverview";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <Card className="dashboard">
      <SideNav />
      <ExpenseOverview />
      <Summary />
    </Card>
  );
};

export default Dashboard;
