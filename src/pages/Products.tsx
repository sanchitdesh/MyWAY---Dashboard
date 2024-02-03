import React, { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

// Columns - Data Types Declaration
const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },

  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Price",
    accessor: "price",
  },

  {
    Header: "Stock",
    accessor: "stock",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

// Images
const img =
  "https://images.pexels.com/photos/18936583/pexels-photo-18936583/free-photo-of-hand-holding-red-gerbera-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
const img2 =
  "https://images.pexels.com/photos/11385649/pexels-photo-11385649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

// Array with Dummy Data
const arr: DataType[] = [
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 999,
    stock: 111,
    action: <Link to="/admin/products/img">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Images" />,
    name: "Nature Image with beautiful surrounding",
    price: 1199,
    stock: 11,
    action: <Link to="/admin/products/image">Manage</Link>,
  },
];
const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
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
      <Link to="/admin/products/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
