export const StepsBox = () => {
  const steps = [
    {
      id: 1,
      img: "assets/images/service/step_1.png",
      title: "Book a Repair",
      desc: "You can place a repair request from Unboxedkart - Service mobile application or reach our store.",
      link: "/",
    },
    {
      id: 2,
      img: "assets/images/service/step_2.png",
      title: "Submit your device",
      desc: "You can submit the device at our store or one of our representatives can collect it at your doorstep ",
      link: "/",
    },
    {
      id: 3,
      img: "assets/images/service/step_3.png",
      title: "Diagnosis & Repair",
      desc: "Our professionals will diagnose the device to determine the problem and fix it",
      link: "/",
    },
    {
      id: 4,
      img: "assets/images/service/step_4.png",
      title: "Collect your device",
      desc: "Your device will be ready for delivery, you can either pick it up from our store or have a representative deliver it.",
      link: "/",
    },
  ];

  return (
    <>
      <h1 className="mb-4 mt-10 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
        {"Get Your device repaired in 4 simple steps"}
      </h1>
      {steps.map((tour: any, key: any) => (
        <div
          key={key}
          className="flex flex-col items-start mb-0 text-left lg:flex-grow md:w-full lg:pr-24 md:pr-16 md:mb-0"
        >
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
            {" "}
            Step {tour.id}
          </h2>
          <h1 className="mb-4 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
            {tour.title}
          </h1>
          <p className="mb-8 ml-0 text-base leading-relaxed text-left text-blueGray-600 ">
            {tour.desc}
          </p>
          {/* <img
            src={tour.img}
            alt=""
            height={85}
            width={85}
            className="rounded-xl shadow-lg mt-5"
          /> */}
        </div>
      ))}
    </>
  );
};
