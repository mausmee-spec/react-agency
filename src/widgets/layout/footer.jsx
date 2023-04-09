import React from "react";
import PropTypes from "prop-types";
import { Typography, IconButton , Button} from "@material-tailwind/react";
import {ClockIcon, EnvelopeIcon , PhoneIcon , MapPinIcon} from "@heroicons/react/24/outline";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-20 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-4/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-white">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton variant="text">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max lg:mt-0">
          <div className="m-auto text-center mt-5">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" your email"
          className="rounded-tl-[12px] rounded-bl-[12px] bg-[#efd3d7] p-[6px] pr-[20px]"
          onChange={null}
        />
        <Button type="submit" className="rounded-[20px] ml-[-30px] bg-white text-[#eabacf]">Subscribe</Button>
      </div> 
            {menus.map(({ name, items }) => (
              <div key={name}>
                
                <ul className="mt-3">
                  {items.map((item) => (
                    <li className="flex" key={item.name}>
                      {React.createElement(item.icon, {
                  className: "w-5 h-5 text-white",
                })}
                      <Typography
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-white"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "agency.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  socials: [
    {
      color: "white",
      name: "facebook",
      path: "#",
    },
    {
      color: "white",
      name: "twitter",
      path: "#",
    },
    {
      color: "white",
      name: "instagram",
      path: "#",
    },
    {
      color: "white",
      name: "github",
      path: "#",
    },
  ],
  menus: [
    {
      items: [
        {
          name: "+ (123) 456-786 4253",
          icon: PhoneIcon,
        },
        {
          name: "Greenville 24, New York",
          icon: MapPinIcon,
        },
        {
          name: "09:00 AM - 19:00 PM",
          icon: ClockIcon,
        },
        {
          name: "your@email.com",
          icon: EnvelopeIcon,
        },
      ],
    },
  ],
  copyright: (
    <>
      {year} ©  Hogash Studio
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
