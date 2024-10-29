import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Tháng 1",
    uv: 1,
  },
  {
    name: "Tháng 2",
    uv: 10,
  },
  {
    name: "Tháng 3",
    uv: 13,
  },
  {
    name: "Tháng 4",
    uv: 2,
  },
  {
    name: "Tháng 5",
    uv: 9,
  },
  {
    name: "Tháng 6",
    uv: 22,
  },
  {
    name: "Tháng 7",
    uv: 1,
  },
  {
    name: "Tháng 8",
    uv: 1,
  },
  {
    name: "Tháng 9",
    uv: 5,
  },
  {
    name: "Tháng 10",
    uv: 5,
  },
  {
    name: "Tháng 11",
    uv: 3,
  },
  {
    name: "Tháng 12",
    uv: 2,
  },
];

const StudentChart = () => {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default StudentChart;
