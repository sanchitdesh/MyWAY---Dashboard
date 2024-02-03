import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";
const userImg =
  "https://w7.pngwing.com/pngs/522/396/png-transparent-computer-icons-profile-miscellaneous-logo-profile-thumbnail.png";
const Dashboard = () => {
  return (
    // Below adminContainer & AdminSidebar tag are mandatory on every page
    <div className="adminContainer">
      <AdminSidebar />

      {/* Main Dashboard Right Hand  */}
      <main className="dashboard">
        {/* Bar */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />{" "}
          {/* Added a space after commas */}
          <FaRegBell />
          <img src={userImg} alt="" /> {/* Fixed image import */}
        </div>

        {/* Section  for Pie*/}
        <section className="widget-container">
          <WidgetItem
            percent={40}
            value={34000}
            // amount={true}
            heading="Revenue"
            color="rgb(0,115,255)"
          />

          <WidgetItem
            percent={-17}
            value={34000}
            // amount={false}
            heading="Users"
            color="rgb(76 0 255)"
          />

          <WidgetItem
            percent={60}
            value={34000}
            // amount={true}
            heading="Products"
            color="rgb(255,225,0)"
          />

          <WidgetItem
            percent={0}
            value={34000}
            // amount={false}
            heading="Transactions"
            color="rgb(255,196,0)"
          />
        </section>
        {/* ============================================================ */}
        {/* Section for Graphs */}
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue and Transaction</h2>
            {/* Graphs */}
            <BarChart
              data_1={[200, 444, 556, 778, 237, 343, 990]}
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,243,0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* ==================================================
             Section for Gender Ratio & Top Transaction
       ======================================================*/}
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* Chart */}
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* Table */}
          <Table data={data.transaction} />
          <div className="allTransactions"></div>
        </section>
      </main>
    </div>
  );
};

// Widget Function
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      {/* \u20B9 - ₹ symbol*/}
      <h4>{amount ? `\u20B9${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255,255,255) 0
         )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  heading: string;
  value: number;
}
const CategoryItem = ({ color, heading, value }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);
export default Dashboard;
