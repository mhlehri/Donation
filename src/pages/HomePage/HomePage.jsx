import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { useState } from "react";

const HomePage = () => {
  const allCardData = useLoaderData();
  const [allcard, setCard] = useState(allCardData);
  const searchandle = (cardData) => {
    setCard(cardData);
  };
  return (
    <>
      <Banner searchandle={searchandle} allCardData={allCardData}></Banner>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 m-auto max-w-[1320px] px-5">
        {allcard.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </>
  );
};

export default HomePage;
