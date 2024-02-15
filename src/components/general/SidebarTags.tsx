import Title from "./Title";

const SidebarTags = () => {
  const MockUpdates = [
    {
      flag: "/indo.png",
      title: "Besok Pemilu Siapa Akan Menang",
      time: "a minute ago",
    },
    {
      flag: "/indo.png",
      title: "Besok Pemilu Siapa Akan Menang",
      time: "a minute ago",
    },
    {
      flag: "/indo.png",
      title: "Besok Pemilu Siapa Akan Menang",
      time: "a minute ago",
    },
    {
      flag: "/indo.png",
      title: "Besok Pemilu Siapa Akan Menang",
      time: "a minute ago",
    },
  ];
  // ! nanti dibenerin
  return (
    <>
      <div>
        <Title>News Updates</Title>
        {MockUpdates.map((update, index) => (
          <div key={index} className="flex items-center gap-4 ">
            <img src={update.flag} alt="flag" className=" w-12 " />
            <div className=" ">
              <p className=" font-semibold leading-5">{update.title}</p>
              <p className="text-xs text-primaryDarkGray">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Title>Trending Tags</Title>
        {MockUpdates.map((update, index) => (
          <div key={index} className="flex items-center gap-4 ">
            <img src={update.flag} alt="flag" className=" w-12 " />
            <div className=" ">
              <p className=" font-semibold leading-5">{update.title}</p>
              <p className="text-xs text-primaryDarkGray">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SidebarTags;
