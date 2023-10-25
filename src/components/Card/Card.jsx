import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, picture, title, category, textColor, bgColor, btnColor } = card;
  return (
    <Link to={`/card/${id}`}>
      <div
        className="relative flex flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="w-full" src={picture} alt="ui/ux review check" />
        </div>
        <div className={`p-6`}>
          <h2
            className={`px-2 py-1 w-max rounded text-sm`}
            style={{
              backgroundColor: btnColor,
              color: textColor,
            }}
          >
            {category}
          </h2>
          <h2
            className="mt-3 block font-sans text-xl font-semibold leading-relaxed antialiased truncate "
            style={{ color: textColor }}
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
