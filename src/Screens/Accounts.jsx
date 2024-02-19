import React, { useState } from 'react';

function AccountDetailsPage() {
  // Sample JSON data
  const [accountDetails, setAccountDetails] = useState({
    manager: {
      name: "John Doe",
      accountNumber: "1234567890",
      branch: "Main Branch",
      IFSCCode: "ABCD0123456"
    },
    associateParking: {
      name: "ABC Parking Lot",
      location: "XYZ Street, City",
      capacity: 100,
      pricePerHour: "$5"
    },
    revenue: {
      totalRevenue: "$5000", 
    },
    expenses: {
      guardSalary: "$1000",
      managerSalary: "$1500",
      parkingMaintenanceCost: "$500",
      otherCost: "$200"
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Account Details</h1>

      {/* Manager Info */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Manager Info</h2>
        <p>Name: {accountDetails.manager.name}</p>
        <p>Account Number: {accountDetails.manager.accountNumber}</p>
        <p>Branch: {accountDetails.manager.branch}</p>
        <p>IFSC Code: {accountDetails.manager.IFSCCode}</p>
      </div>

      {/* Associate Parking */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Associate Parking</h2>
        <p>Name: {accountDetails.associateParking.name}</p>
        <p>Location: {accountDetails.associateParking.location}</p>
        <p>Capacity: {accountDetails.associateParking.capacity}</p>
        <p>Price Per Hour: {accountDetails.associateParking.pricePerHour}</p>
      </div>

      {/* Revenue */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Revenue</h2>
        <p>Total Revenue: {accountDetails.revenue.totalRevenue}</p>
        <p>Start Date: {accountDetails.revenue.startDate}</p>
        <p>End Date: {accountDetails.revenue.endDate}</p>
      </div>

      {/* Expenses */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Expenses</h2>
        <p>Guard Salary: {accountDetails.expenses.guardSalary}</p>
        <p>Manager Salary: {accountDetails.expenses.managerSalary}</p>
        <p>Parking Maintenance Cost: {accountDetails.expenses.parkingMaintenanceCost}</p>
        <p>Other Cost: {accountDetails.expenses.otherCost}</p>
      </div>
    </div>
  );
}

export default AccountDetailsPage;
