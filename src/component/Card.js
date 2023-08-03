import React from "react";

function Card() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-4xl text-center py-5">Featured Products</h1>
      </div>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]">
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src={"/image/2ac7d6a2-fc93-4077-838e-15b85bcbbc2d.jpeg"}
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h3 className="py-2 text-2xl">Nature Scenerio decoration</h3>
          <p className="py-2">Rs 8000 /</p>
        </div>
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src={"/image/mate_bike.jpg"}
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h3 className="py-2 text-2xl">Bike Scenerio decoration</h3>
          <p className="py-2">Rs 6000 /</p>
        </div>
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src={"/image/2ac7d6a2-fc93-4077-838e-15b85bcbbc2d.jpeg"}
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h3 className="py-2 text-2xl">Nature Scenerio decoration</h3>
          <p className="py-2">Rs 8000 /</p>
        </div>
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src={"/image/mate_bike.jpg"}
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h3 className="py-2 text-2xl">Bike Scenerio decoration</h3>
          <p className="py-2">Rs 6000 /</p>
        </div>
      </div>
    </>
  );
}

export default Card;
