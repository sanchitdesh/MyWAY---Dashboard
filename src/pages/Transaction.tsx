import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

// Columns - Data Types Declaration
const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },

  {
    Header: "Amount",
    accessor: "amount",
  },

  {
    Header: "Discount",
    accessor: "discount",
  },

  {
    Header: "Quantity",
    accessor: "quantity",
  },

  {
    Header: "Status",
    accessor: "status",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Sanchit",
    amount: 4500,
    discount: 500,
    quantity: 5,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/abcd">Manage</Link>,
  },

  {
    user: "Sanchit",
    amount: 4500,
    discount: 500,
    quantity: 5,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/abcd">Manage</Link>,
  },

  {
    user: "Avinya",
    amount: 55000,
    discount: 500,
    quantity: 7,
    status: <span className="purple">Returned</span>,
    action: <Link to="/admin/transaction/efgh">Manage</Link>,
  },
];
const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true //True is for pagination
    ),
    []
  );
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
