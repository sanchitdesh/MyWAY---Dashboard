import React, { ReactElement, useState, useCallback } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";
interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

// Columns - Data Types Declaration
const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },

  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Email",
    accessor: "email",
  },

  {
    Header: "Gender",
    accessor: "gender",
  },

  {
    Header: "Role",
    accessor: "role",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
const img2 =
  "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg";
const img3 =
  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914838/woman-icon-md.png";

const arr: DataType[] = [
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img} alt="Shoes" />,
    name: "Sanchit Deshmukh",
    email: "sanchit@gmail.com",
    gender: "Male",
    role: "Admin",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />,
    name: "Avinya Deshmukh",
    email: "avinya@gmail.com",
    gender: "Female",
    role: "Admin",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img3} alt="Shoes" />,
    name: "Emily Palmer",
    email: "satya@gmail.com",
    gender: "Female",
    role: "User",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];
const Customers = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
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

export default Customers;
