import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, SearviceCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, serviceData } from "@/data";
import { ClockIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const menus = [
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
]

export function Home() {
  return (
    <>
      <div className="relative flex pb-[18%] content-center items-center justify-center pt-20 bg-[url('/img/bg1.png')] bg-right-top bg-no-repeat">

        <div className="max-w-8xl container relative mx-auto">

          <div className="mt-10 flex flex-wrap items-center">

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Faucibus dolor amet
              </Typography>
              <Typography className="mb-8 font-semibold text-blue-gray-500">
                labore et tempor.
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt unirure dolor.
              </Typography>
              <Button variant="contained" className="rounded-[20px] mt-5 bg-gradient-to-b from-[#dcafe1] to-[#eabec9]">learn more</Button>
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <img
                alt="Card Image"
                src="/img/bg2.png"
                className="h-full w-full"
              />
            </div>

          </div>


        </div>
      </div>
      <section className="-mt-32 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div id="services" className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography
                  variant="h1"
                  color="#000"
                  className="mb-6 font-black"
                >
                  Services
                </Typography>
                <Typography variant="lead" color="#f4f4f4" className="opacity-80 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </Typography>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <img
                alt="Card Image"
                src="/img/video-p.png"
                className="h-full w-full"
              />
            </div>

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Sed Dolore Perspiciatis Unde omnis Iste Natus
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.
              </Typography>
              <Button variant="contained" className="rounded-[20px] bg-gradient-to-b from-[#dcafe1] to-[#eabec9]">learn more</Button>
            </div>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-[40px]">
            {serviceData.map(({ color, title, icon, description }) => (
              <SearviceCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-18">
        <div className="container mx-auto">



          <div className="flex flex-wrap items-center">

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Omnis Iste Natus ut Incidiunt
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </Typography>
              <Button variant="contained" className="rounded-[20px] bg-gradient-to-b from-[#dcafe1] to-[#eabec9]">learn more</Button>
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              {teamData.map(({ img, name }) => (
                <img
                  alt="Card Image"
                  src={img}
                  className="h-full w-full"
                />
              ))}
            </div>

          </div>

          <div className="mt-32 flex flex-wrap items-center">

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">

              <iframe
                title="Map"
                width="500"
                height="500"
                loading="lazy"
                className="rounded-bl-[20px] shadow-lg shadow-[#e8b4cb]"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193580.10722474207!2d-122.51794526098312!3d37.75767933289047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8e1b20940b6d%3A0x8e3ebe6a62c3609e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sph!4v1585872987447!5m2!1sen!2sph"
              ></iframe>
            </div>

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Contact
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </Typography>
              {menus.map(({ name, items }) => (
                <div key={name}>

                  <ul className="mt-3">
                    {items.map((item) => (
                      <li className="flex" key={item.name}>
                        {React.createElement(item.icon, {
                          className: "w-5 h-5",
                        })}
                        <Typography
                          variant="small"
                          className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
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

          <div className="mt-32 items-center">
            <PageTitle heading="Stay updated">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </PageTitle>
            <div className="m-auto text-center mt-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" your email"
                className="rounded-tl-[12px] rounded-bl-[12px] bg-gray-50 p-[6px] pr-[20px]"
                onChange={null}
              />
              <Button variant="gradient" type="submit" className="rounded-[20px] ml-[-30px] bg-gradient-to-b from-[#dcafe1] to-[#eabec9]">Subscribe</Button>
            </div>
          </div>


        </div>
      </section>
      <section className="relative pt-24 px-4 mb-[-60px]">
        <div className="container mx-auto">

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 bg-gradient-to-b from-[#dcafe1] to-[#eabec9] shadow-lg shadow-[#e8b4cb]">
            {contactData.map(({ title, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-white"
              >
                <Typography variant="h5" color="white" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-white">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#eab9c8] to-[#f5d1b9]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
