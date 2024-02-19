import React, { useState } from "react";

const Transactions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage] = useState(12); // Number of transactions per page
    const transactionDetails = [
      {
          "bookingId": 1,
          "userName": "John Doe",
          "parkingName": "Parking Lot A",
          "parkingLocation": "123 Main Street",
          "parkingTime": "2024-02-08T09:00:00",
          "transaction": {
              "transactionId": "TRX001",
              "transactionAmount": 20,
              "transactionTime": "2024-02-08T09:15:00",
              "transactionMethod": "Credit Card"
          }
      },
      {
          "bookingId": 2,
          "userName": "Jane Smith",
          "parkingName": "Parking Lot B",
          "parkingLocation": "456 Elm Street",
          "parkingTime": "2024-02-08T10:00:00",
          "transaction": {
              "transactionId": "TRX002",
              "transactionAmount": 25,
              "transactionTime": "2024-02-08T10:30:00",
              "transactionMethod": "Debit Card"
          }
      },
      {
          "bookingId": 3,
          "userName": "Alice Johnson",
          "parkingName": "Parking Lot C",
          "parkingLocation": "789 Oak Street",
          "parkingTime": "2024-02-08T11:00:00",
          "transaction": {
              "transactionId": "TRX003",
              "transactionAmount": 30,
              "transactionTime": "2024-02-08T11:20:00",
              "transactionMethod": "Cash"
          }
      },
      {
          "bookingId": 4,
          "userName": "Alice Johnson",
          "parkingName": "Parking Lot C",
          "parkingLocation": "789 Oak Street",
          "parkingTime": "2024-02-08T11:00:00",
          "transaction": {
              "transactionId": "TRX003",
              "transactionAmount": 30,
              "transactionTime": "2024-02-08T11:20:00",
              "transactionMethod": "Cash"
          }
      },
      {
          "bookingId": 5,
          "userName": "Alice Johnson",
          "parkingName": "Parking Lot C",
          "parkingLocation": "789 Oak Street",
          "parkingTime": "2024-02-08T11:00:00",
          "transaction": {
              "transactionId": "TRX003",
              "transactionAmount": 30,
              "transactionTime": "2024-02-08T11:20:00",
              "transactionMethod": "Cash"
          }
      },
      {
          "bookingId": 6,
          "userName": "Alice Johnson",
          "parkingName": "Parking Lot C",
          "parkingLocation": "789 Oak Street",
          "parkingTime": "2024-02-08T11:00:00",
          "transaction": {
              "transactionId": "TRX003",
              "transactionAmount": 30,
              "transactionTime": "2024-02-08T11:20:00",
              "transactionMethod": "Cash"
          }
      },
      {
          "bookingId":7 ,
          "userName": "Alice Johnson",
          "parkingName": "Parking Lot C",
          "parkingLocation": "789 Oak Street",
          "parkingTime": "2024-02-08T11:00:00",
          "transaction": {
              "transactionId": "TRX003",
              "transactionAmount": 30,
              "transactionTime": "2024-02-08T11:20:00",
              "transactionMethod": "Cash"
          }
      },
      {
          "bookingId": 8,
          "userName": "Alice Johnson",
          "parkingName": "Parking Lot C",
          "parkingLocation": "789 Oak Street",
          "parkingTime": "2024-02-08T11:00:00",
          "transaction": {
              "transactionId": "TRX003",
              "transactionAmount": 30,
              "transactionTime": "2024-02-08T11:20:00",
              "transactionMethod": "Cash"
          }
      },
      {
        "bookingId": 9,
        "userName": "Alice Johnson",
        "parkingName": "Parking Lot C",
        "parkingLocation": "789 Oak Street",
        "parkingTime": "2024-02-08T11:00:00",
        "transaction": {
            "transactionId": "TRX003",
            "transactionAmount": 30,
            "transactionTime": "2024-02-08T11:20:00",
            "transactionMethod": "Cash"
        }
    },
    {
      "bookingId": 10,
      "userName": "Alice Johnson",
      "parkingName": "Parking Lot C",
      "parkingLocation": "789 Oak Street",
      "parkingTime": "2024-02-08T11:00:00",
      "transaction": {
          "transactionId": "TRX003",
          "transactionAmount": 30,
          "transactionTime": "2024-02-08T11:20:00",
          "transactionMethod": "Cash"
      }
  },
  {
    "bookingId": 11,
    "userName": "Alice Johnson",
    "parkingName": "Parking Lot C",
    "parkingLocation": "789 Oak Street",
    "parkingTime": "2024-02-08T11:00:00",
    "transaction": {
        "transactionId": "TRX003",
        "transactionAmount": 30,
        "transactionTime": "2024-02-08T11:20:00",
        "transactionMethod": "Cash"
    }
},
{
  "bookingId": 12,
  "userName": "Alice Johnson",
  "parkingName": "Parking Lot C",
  "parkingLocation": "789 Oak Street",
  "parkingTime": "2024-02-08T11:00:00",
  "transaction": {
      "transactionId": "TRX003",
      "transactionAmount": 30,
      "transactionTime": "2024-02-08T11:20:00",
      "transactionMethod": "Cash"
  }
},
{
  "bookingId": 13,
  "userName": "Alice Johnson",
  "parkingName": "Parking Lot C",
  "parkingLocation": "789 Oak Street",
  "parkingTime": "2024-02-08T11:00:00",
  "transaction": {
      "transactionId": "TRX003",
      "transactionAmount": 30,
      "transactionTime": "2024-02-08T11:20:00",
      "transactionMethod": "Cash"
  }
},
{
  "bookingId": 14,
  "userName": "Alice Johnson",
  "parkingName": "Parking Lot C",
  "parkingLocation": "789 Oak Street",
  "parkingTime": "2024-02-08T11:00:00",
  "transaction": {
      "transactionId": "TRX003",
      "transactionAmount": 30,
      "transactionTime": "2024-02-08T11:20:00",
      "transactionMethod": "Cash"
  }
},
{
  "bookingId": 15,
  "userName": "Alice Johnson",
  "parkingName": "Parking Lot C",
  "parkingLocation": "789 Oak Street",
  "parkingTime": "2024-02-08T11:00:00",
  "transaction": {
      "transactionId": "TRX003",
      "transactionAmount": 30,
      "transactionTime": "2024-02-08T11:20:00",
      "transactionMethod": "Cash"
  }
},
{
  "bookingId": 16,
  "userName": "Alice Johnson",
  "parkingName": "Parking Lot C",
  "parkingLocation": "789 Oak Street",
  "parkingTime": "2024-02-08T11:00:00",
  "transaction": {
      "transactionId": "TRX003",
      "transactionAmount": 30,
      "transactionTime": "2024-02-08T11:20:00",
      "transactionMethod": "Cash"
  }
}
  ];
    // Get current transactions
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactionDetails.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="flex justify-between  my-8">
                <div className="text-3xl font-semibold px-8  text-gray-700">Transaction Details</div>
                <div className="flex p-1 bg-yellow-300  rounded-tl-md rounded-bl-md w-[600px]">
                    <div className=" text-white p-1 rounded-lg">
<button type="button" class="text-black bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md duration-700 text-sm px-4 py-1.5 me-2  dark:bg-white hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                    </div>
                    <div className=" text-black p-1  rounded-md">
<button type="1.5utton" class="text-black bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-1.5 me-2  dark:bg-white hover:text-white duration-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                    </div>
                    {/* <div className=" text-black p-1 rounded-lg">
                        <select className="">
                            <option>parking 1</option>
                            <option>parking 2</option>
                            <option>parking 3</option>
                            <option>parking 4</option>
                        </select>
                    </div> */}
                </div>
            </div>

            <div className="overflow-x-auto  rounded-sm">
                <table className="w-full">
                    <thead className="bg-[#edf1f7] p-1">
                        <tr>
                            <th className="px-2 text-sm py-2 font-semibold">Booking ID</th>
                            <th className="px-2 text-sm py-2 font-semibold">User Name</th>
                            <th className="px-2 text-sm py-2 font-semibold">Parking Name</th>
                            <th className="px-2 text-sm py-2 font-semibold">Parking Location</th>
                            <th className="px-2 text-sm py-2 font-semibold">Parking Time</th>
                            <th className="px-2 text-sm py-2 font-semibold">Transaction ID</th>
                            <th className="px-2 text-sm py-2 font-semibold">Transaction Amount</th>
                            <th className="px-2 text-sm py-2 font-semibold">Transaction Time</th>
                            <th className="px-2 text-sm py-2 font-semibold">Transaction Method</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600  ">
                        {currentTransactions.map((transaction, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-200 duration-300' : 'hover:bg-gray-200 duration-300'}>
                                <td className="px-4 text-sm py-2 ">{transaction.bookingId}</td>
                                <td className="px-4 text-sm py-2">{transaction.userName}</td>
                                <td className="px-4 text-sm py-2">{transaction.parkingName}</td>
                                <td className="px-4 text-sm py-2">{transaction.parkingLocation}</td>
                                <td className="px-4 text-sm py-2">{transaction.parkingTime}</td>
                                <td className="px-4 text-sm py-2">{transaction.transaction.transactionId}</td>
                                <td className="px-4 text-sm py-2">{transaction.transaction.transactionAmount}</td>
                                <td className="px-4 text-sm py-2">{transaction.transaction.transactionTime}</td>
                                <td className="px-4 text-sm py-2">{transaction.transaction.transactionMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(transactionDetails.length / transactionsPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 px-3 py-1 rounded-2xl ${currentPage === i + 1 ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{i + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default Transactions;


