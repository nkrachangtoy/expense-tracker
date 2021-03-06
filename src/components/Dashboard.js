import React from "react";

// Components
import Card from "./UI/Card";
import SideNav from "./SideNav";
import ExpenseOverview from "./Expense/ExpenseOverview";

const Dashboard = () => {
  return (
    <Card className="dashboard">
      <SideNav />
      <ExpenseOverview />
    </Card>
  );
};

export default Dashboard;
