import PiesChart from "../../components/PieChart/PieChart";

const Statistics = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <PiesChart></PiesChart>
      </div>
      <div className="flex gap-x-5 justify-center">
        <div className="flex gap-5 items-center">
          <h1 className="font-medium text-xl">You donation</h1>
          <span className="w-[100px] h-[10px] text-[#00c49f] bg-[#00c49f]"></span>
        </div>
        <div className="flex gap-5 items-center ">
          <h1 className="font-medium text-xl">Total donation</h1>
          <span className="w-[100px] h-[10px] text-[#ff444a] bg-[#ff444a] "></span>
        </div>
      </div>
    </>
  );
};

export default Statistics;
