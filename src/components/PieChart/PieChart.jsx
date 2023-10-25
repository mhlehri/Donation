import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="text-3xl font-bold"
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PiesChart = () => {
  const allCards = useLoaderData();
  const storedCards = JSON.parse(localStorage.getItem("donate"));
  const total = allCards?.reduce(
    (pastV, presentV) => pastV + parseFloat(presentV.price),
    0
  );
  const yourDonationTotal =
    storedCards?.reduce(
      (pastV, presentV) => pastV + parseFloat(presentV.price),
      0
    ) || 0;
  const remaining = total - yourDonationTotal;
  const data = [
    { name: "first", value: remaining || 0 },
    { name: "second", value: yourDonationTotal || 0 },
  ];
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PiesChart;
