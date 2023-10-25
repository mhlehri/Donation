import { Typography } from "@material-tailwind/react";

import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CardDetails = () => {
  const { id } = useParams();
  const allcards = useLoaderData();

  const matchCard = allcards.find((card) => card.id == parseInt(id));
  const handleClick = () => {
    const storedCard = JSON.parse(localStorage.getItem("donate"));
    const storedData = [];
    if (!storedCard) {
      storedData.push(matchCard);
      localStorage.setItem("donate", JSON.stringify(storedData));
      Swal.fire("Good job!", "You clicked the button!", "success");
    } else {
      const isStored = storedCard.find((card) => card.id === parseInt(id));
      if (!isStored) {
        storedData.push(...storedCard, matchCard);
        Swal.fire("Good job!", "", "success");
        localStorage.setItem("donate", JSON.stringify(storedData));
      } else {
        Swal.fire("Already Added!", "", "error");
      }
    }
  };

  return (
    <div className="mx-auto max-w-[1320px] my-12 px-5">
      <figure className="relative">
        <img
          className="h-96 md:h-[700px] w-full rounded-lg object-cover object-center"
          src={matchCard.picture}
          alt="nature image"
        />
        <div className="h-28 w-full bg-black/30 bottom-0 absolute flex items-center">
          <Typography
            as="caption"
            variant="small"
            className="mt-2 text-center font-normal absolute "
          >
            {" "}
            <button
              onClick={handleClick}
              className="ml-10 middle none center mr-3 rounded-lg py-3 px-6 font-sans text-xl font-semibold uppercase text-white shadow-md  transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              style={{ backgroundColor: matchCard.textColor }}
            >
              Donate ${matchCard.price}
            </button>
          </Typography>
        </div>
      </figure>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mt-14 mb-8">
          {matchCard.title}
        </h1>
        <p>{matchCard.description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
