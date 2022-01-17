import React from "react";
import logo from "../../../assets/sidepanel/logo192.png";
import home_ico from "../../../assets/sidepanel/home_ico.svg";
import inven_ico from "../../../assets/sidepanel/inven_ico.svg";
import atten_ico from "../../../assets/sidepanel/atten_ico.svg";
import logout from "../../../assets/sidepanel/logout.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useLocation } from "react-router-dom";

export const SidePanel = (props) => {
  const location = useLocation();
  const params = [
    {
      route: ROUTES.home,
      ico: logo,
      alt: "home icon",
    },
    {
      route: ROUTES.home,
      ico: home_ico,
      alt: "home icon",
    },
    {
      route: ROUTES.inventory,
      ico: inven_ico,
      alt: "inventory icon",
    },
    {
      route: ROUTES.attendance,
      ico: atten_ico,
      alt: "attendance icon",
    },
  ];

  return (
    <div
      className={`bg-primary lg:fixed lg:h-screen w-full lg:w-16 z-50 ${
        location.pathname === ROUTES.login && " hidden "
      }`}
    >
      <div className="flex lg:flex-col lg:h-full justify-between">
        <div className="flex lg:block">
          {params.map((item, i) => (
            <Link to={item.route} key={i + 999}>
              <img
                src={item.ico}
                alt={item.alt}
                className={`opacity-50 ${
                  props.view === item.route && "opacity-100"
                }  ${
                  !i && "hidden lg:block filter grayscale"
                } p-4 border-white flex items-center hover:opacity-100 justify-center  lg:w-full`}
              />
            </Link>
          ))}
        </div>
        <Link to={ROUTES.home}>
          <img
            src={logout}
            alt="Home icon"
            className="p-4 opacity-50 flex items-center hover:opacity-100 justify-center w-full"
          />
        </Link>
      </div>
    </div>
  );
};
