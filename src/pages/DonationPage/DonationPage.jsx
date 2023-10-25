import { useState } from "react";
import DonationDetails from "../../components/DonationDetails/DonationDetails";

const Donation = () => {
  const storedCard = JSON.parse(localStorage.getItem("donate"));
  const [isShow, setIsShow] = useState(false);
  const handleC = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-6 my-12 px-6">
        {storedCard.length > 0 && isShow == false
          ? storedCard
              ?.slice(0, 4)
              .map((card) => (
                <DonationDetails key={card.id} card={card}></DonationDetails>
              ))
          : storedCard.map((card) => (
              <DonationDetails key={card.id} card={card}></DonationDetails>
            ))}
      </div>

      <div className="mx-auto max-w-[1320px] flex justify-center">
        {
          <button
            onClick={handleC}
            className={`my-6 none mr-3 rounded-lg py-1  ${
              storedCard.length > 4 && isShow == false ? "" : "hidden"
            }  md:py-3 px-6 font-sans text-xs ms:text-xl font-normal md:font-semibold uppercase bg-lime-800 text-white shadow-md  transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            data-ripple-light="true"
          >
            Show All
          </button>
        }
      </div>
    </>
  );
};

export default Donation;
