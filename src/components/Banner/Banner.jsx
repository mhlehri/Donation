import InputField from "../Input/InputField";
import "../../index.css";

const Banner = ({ searchandle, allCardData }) => {
  return (
    <div className="h-[70vh]  w-full bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0atgXOgDxcr1bGXUpteMhBuIkya4TOO8MfcVwgykz_UlYNEdaobzxCA1M')] bg-cover bg-center ">
      <div
        className="w-full h-full flex  justify-center items-center 
             bg-white/80  backdrop-brightness-75 "
      >
        <div className="">
          <h1 className="text-5xl text-center font-bold my-4 ">
            I Grow By Helping People In Need
          </h1>
          <div className="flex items-center justify-center my-7 ">
            <InputField
              searchandle={searchandle}
              allCardData={allCardData}
            ></InputField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
