const DonationDetails = ({ card }) => {
  const { id, picture, category, title, price, btnColor, textColor, bgColor } =
    card;
  return (
    <div className="mx-3">
      <div
        className="relative flex w-full max-w-[48rem] h-auto md:h-56 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={picture} alt="image" className="h-full w-full object-fit" />
        </div>
        <div className="p-6">
          <p
            className={`px-2 py-1 w-max rounded text-sm`}
            style={{
              backgroundColor: btnColor,
              color: textColor,
            }}
          >
            {category}
          </p>
          <p className="mt-1 block font-sans  text-sm md:text-xl  lg:text-2xl font-bold leading-relaxed antialiased text-black ">
            {title}
          </p>
          <p
            className="mt-1 block font-sans text-base  font-semibold leading-relaxed antialiased  "
            style={{ color: textColor }}
          >
            ${price}
          </p>

          <button
            className=" my-4 none mr-3 rounded-lg py-1 md:py-3 px-6 font-sans text-xs ms:text-xl font-normal md:font-semibold uppercase text-white shadow-md  transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            style={{ backgroundColor: textColor }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
