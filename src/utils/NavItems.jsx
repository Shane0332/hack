// import { Link } from "react-router-dom";

export const navItemsData = [
  {
    // name: "Нүүр хуудас",
    // url: "/",
  },
  // {
  //   name: "Хичээлүүд",
  //   url: "/courses",
  // },
];

const NavItems = ({ activeItem, isMobile }) => {
  return (
    <>
    {/* {isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center py-6">
            <Link to="/"
              className={`text-[25px] font-Poppins font-[500] text-white`}
            >
              SafetyChild
            </Link>
          </div>
          {navItemsData &&
            navItemsData.map((item, index) => (
              <Link to={item.url} key={index}>
                <span
                  className={`${
                    activeItem === index ? "text-[#FFFFFF]" : "text-white"
                  } block py-5 text-[16px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
      )} */}
      {/* <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((item, index) => (
            <Link to={item.url} key={index}>
              <span
                className={`${
                  activeItem === index ? "text-[#FFFFFF]" : "text-white"
                }  text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div> */}
      {/* {isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center py-6">
            <Link to="/"
              className={`text-[25px] font-Poppins font-[500] text-white`}
            >
              SafetyChild
            </Link>
          </div>
          {navItemsData &&
            navItemsData.map((item, index) => (
              <Link to={item.url} key={index}>
                <span
                  className={`${
                    activeItem === index ? "text-[#FFFFFF]" : "text-white"
                  } block py-5 text-[16px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
      )} */}
    </>
  );
};

export default NavItems;
