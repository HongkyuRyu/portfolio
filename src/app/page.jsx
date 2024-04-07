import Image from "next/image";

const Homepage = () => {
  return (
    <div
      className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-20 lg:px-20
    xl:px-48"
    >
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hong_circle.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Hello! My name is HongkyuRyu.
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          I dream of becoming a data analyst and data scientist. I majored in
          mechanical engineering, but I am very interested in automobiles and
          finance. And my parents run a shabu-shabu restaurant. Please come
          visit us often.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Go_Shabu_Shabu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
