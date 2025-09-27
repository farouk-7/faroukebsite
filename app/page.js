"use client";
import { useEffect, useState } from "react";
import CursorSpotlight from "./components/CursorSpotlight";
import { FaBars, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { HiArrowDownRight } from "react-icons/hi2";
import Image from "next/image";
import Card from "./components/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoCloseSharp } from "react-icons/io5";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="scroll-smooth">
      {/* <nav className="flex justify-between items-center border-b-[2px] py-5 px-50 border-b-[#c2c2c2]">
        <div>PORTFOLIO</div>
        <div className="flex items-center ">
          <div className="border-1 cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 w-fit text-sm">
            HOME
          </div>
          <a
            href="#about"
            className="border-1 cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 w-fit text-sm"
          >
            ABOUT
          </a>
          <div className="border-1 cursor-pointer text-[#464545] font-semibold  border-[#c2c2c2] rounded-full px-5 py-1 w-fit text-sm">
            SERVICES
          </div>
          <div className="border-1 cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 w-fit text-sm">
            PROJECTS
          </div>
        </div>
        <div className="flex items-center ">
          <div className="border-1 cursor-pointer border-[#c2c2c2] rounded-full px-1 py-1 w-fit text-sm">
            <FaLinkedinIn color={"#464545"} size={18} />
          </div>
          <div className="border-1 cursor-pointer border-[#c2c2c2] rounded-full px-1 py-1 w-fit text-sm">
            <FaXTwitter color={"#464545"} size={18} />
          </div>
          <div className="border-1 cursor-pointer border-[#c2c2c2] rounded-full px-1 py-1 w-fit text-sm">
            <FiGithub color={"#464545"} size={18} />
          </div>
          <div className="border-1 cursor-pointer border-[#c2c2c2] rounded-full px-1 py-1 w-fit text-sm">
            <FaInstagram color={"#464545"} size={18} />
          </div>
        </div>
      </nav> */}
    <nav className="flex justify-between items-center border-b-2 py-4 px-6 md:px-12 border-b-[#c2c2c2] relative">
     
      <div className="text-lg font-bold">PORTFOLIO</div>

      <div className="hidden md:flex items-center gap-4">
        <div className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm">
          HOME
        </div>
        <a
          href="#about"
          className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm"
        >
          ABOUT
        </a>
        <div className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm">
          SERVICES
        </div>
        <div className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm">
          PROJECTS
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <div className="border cursor-pointer border-[#c2c2c2] rounded-full p-2">
          <FaLinkedinIn color={"#464545"} size={16} />
        </div>
        <div className="border cursor-pointer border-[#c2c2c2] rounded-full p-2">
          <FaXTwitter color={"#464545"} size={16} />
        </div>
        <div className="border cursor-pointer border-[#c2c2c2] rounded-full p-2">
          <FiGithub color={"#464545"} size={16} />
        </div>
        <div className="border cursor-pointer border-[#c2c2c2] rounded-full p-2">
          <FaInstagram color={"#464545"} size={16} />
        </div>
      </div>
      <button
        className="md:hidden text-[#464545] z-20 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-[#c2c2c2] flex flex-col items-center gap-4 py-6 md:hidden z-10">
          <div className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm">
            HOME
          </div>
          <a
            href="#about"
            className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm"
          >
            ABOUT
          </a>
          <div className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm">
            SERVICES
          </div>
          <div className="border cursor-pointer text-[#464545] font-semibold border-[#c2c2c2] rounded-full px-5 py-1 text-sm">
            PROJECTS
          </div>

          <div className="flex items-center gap-4 mt-4">
            <FaLinkedinIn color={"#464545"} size={18} />
            <FaXTwitter color={"#464545"} size={18} />
            <FiGithub color={"#464545"} size={18} />
            <FaInstagram color={"#464545"} size={18} />
          </div>
        </div>
      )}
    </nav>
      <div className="py-5 px-6 md:px-50">
        <p className="text-center text-[55px] leading-20 md:text-[150px] md:leading-40 tracking-widest ">
          EXPLORE MY PORTFOLIO{" "}
        </p>
        <div className="flex flex-col items-center mt-5 justify-center md:flex-row md:justify-between md:items-start md:mt-10">
          <div>
            <p className="text-xl text-[#464545] font-semibold">
              DEVELOPER EST.2000
            </p>

            <div className="border-1 w-fit border-[#c2c2c2] p-5 rounded-full mt-10">
              <HiArrowDownRight size={40} color="#464545" />
            </div>
          </div>
          <div className="-mt-35">
            <Image
              src={"/pic2.png"}
              width={500}
              height={500}
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="max-w-[300px]">
            <div>
              <p className="text-center md:text-end text-md text-[#464545] font-semibold">
                I AM PASSIONATE ABOUT CREATING WEBSITES AND WEBAPPS THAT STANDS
                OUT FROM THE CROWD
              </p>
            </div>
            <div className="text-center mt-10 md:text-end text-lg text-[#464545] font-semibold md:mt-20">
              <p>WEB DEVELOPMENT </p>
              <p className="py-3">LANDING PAGES</p>
              <p>WEB-APP DEVELOPMENT </p>
              <p className="py-3">EXPERT WEBFLOW</p>
              <p>REACT NATIVE</p>
            </div>
          </div>
        </div>

        <section
          id="about"
          className="mt-10 flex flex-col md:flex-row items-center md:mt-20 justify-between "
        >
          <p className="text-[50px] md:text-[100px]">ABOUT</p>
          <p className="text-lg text-center md:text-xl max-w-[500px] md:text-start justify-between items-center text-[#464545] font-semibold">
            Farouk Oyedeji is Nextjs and React Frontend developer with over Two
            years of experience based in Lagos, Nigeria.
          </p>
        </section>
        <div className="flex flex-col md:flex-row justify-between items-center border-1 border-[#c2c2c2] mt-5 px-10">
          <div>
            <p className="text-5xl font-semibold">5M+</p>
            <p className="font-semibold text-[#464545] pt-3">SUCCESS PROJECT</p>
          </div>

          <div className="h-50 w-[1px] mx-10 bg-[#c2c2c2]"></div>

          <div>
            <p className="text-5xl font-semibold">3k+</p>
            <p className="font-semibold text-[#464545] pt-3">
              PRODUCT LAUNCHES
            </p>
          </div>

          <div className="h-50 w-[1px] mx-10 bg-[#c2c2c2]"></div>

          <div>
            <p className="text-5xl font-semibold">24+</p>
            <p className="font-semibold text-[#464545] pt-3">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>

        <section id="about" className="mt-20 items-center justify-center">
          <p className="text-[50px] leading-20 md:text-[100px] md:leading-40 text-center pb-10 ">
            FEATURED PROJECTS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card
              title={"Teevill"}
              description={
                "Teevil is a recruiting platform where clients get to hire talent for a service."
              }
              image={"/teeveil.png"}
              technologies={[
                "Next JS",
                "Chakra UI",
                "Tanstack Query",
                "Axios",
                "MongoDB",
              ]}
              demoUrl={"http://teevil-next.vercel.app/"}
              githubUrl={"https://github.com/farouk-7/teevil__next.git"}
            />
            <Card
              title={"Eventree"}
              description={
                "Eventree is a website for an event management that helps cater for your event, from getting vendors, setting up the event hall and event providing props SPRAYA for your events. Our appication also help to send invitations to your selected guests."
              }
              image={"/eventree.png"}
              technologies={[
                "React",
                "Chakra UI",
                "Axios",
                "AOS",
                "Framer motion ",
              ]}
              demoUrl={"https://eventreelandingpage.netlify.app/"}
              githubUrl={
                "https://github.com/Zillight-Innovation-Labs/Event-management-langing.git"
              }
            />
            <Card
              title={"Lead Capital"}
              description={
                "Lead Capital is a logistic company that helps to move your goods not just within the country but across countries"
              }
              image={"/leadCapital.png"}
              technologies={[
                "React",
                "Chakra UI",
                "Axios",
                "AOS",
                "Framer motion ",
              ]}
              demoUrl={"https://leadcapital.netlify.app/"}
              githubUrl={
                "https://github.com/Zillight-Innovation-Labs/leadcapital-website.git"
              }
            />
            <Card
              title={"Divvicson Academy Website"}
              description={
                "Divvicson Academy is an online learning platform that provides courses on various topics, including web development, programming, and design. The website is built with React and Chakra ui."
              }
              image={"/divicsion.png"}
              technologies={["React", "Chakra", "AOS"]}
              demoUrl={"https://divvicson.netlify.app/"}
              githubUrl={
                "https://github.com/Zillight-Innovation-Labs/leadcapital-website.git"
              }
            />
            <Card
              title={"Task Naija"}
              description={
                "Task Naija is an application where you get to hire skilled workers who are ready to render their services. Services ranging from cleaning, driving, carpentary, e.tc"
              }
              image={"/tasknaij.png"}
              technologies={["React", "Chakra", "AOS"]}
              demoUrl={"https://task-naija.netlify.app/"}
              githubUrl={"https://github.com/farouk-7/tasknaija.app.git"}
            />
          </div>
        </section>

        <section id="about" className="mt-20 items-center justify-center">
          <p className="text-[50px] leading-20 md:text-[100px] md:leading-40 text-center pb-1">
            THE SERVICE I OFFER
          </p>
          <p className="text-lg md:text-xl max-w-[800px] m-auto text-center justify-center text-[#464545] font-semibold">
            CREATING VISUALLY APPEALING AND FUNCTIONAL WEBSITES TAILORED TO THE
            CLIENT'S NEEDS AND GOALS. PROVIDING A CONSISTENTUSER EXPERIENCE
            ACROSS PLATFORMS.
          </p>

          <div className="my-10 text-[#464545]">
            <p className="text-center text-xl md:text-2xl font-semibold px-10 py-5 border-2 border-[#c2c2c2] rounded-full">
              WEBSITE DEVELOPMENT
            </p>
            <p className="text-center text-xl md:text-2xl font-semibold px-10 py-5 border-2 border-[#c2c2c2] rounded-full my-10">
              WEB APPLICATION
            </p>
            <p className="text-center text-xl md:text-2xl font-semibold px-10 py-5 border-2 border-[#c2c2c2] rounded-full">
              REACT NATIVE MOBILE APPLICATION
            </p>
          </div>
        </section>
      </div>
      <div className="bg-black px-6 text-white py-10 md:py-20 md:px-50">
        <p className="text-[50px] leading-20 md:text-[100px] md:leading-40">LET'S TALK</p>
        <p className="text-lg md:text-xl text-[#f7f4f4] font-semibold">
          Have a project, website or an idea in mind and you want to bring it to
          live, feel free to reach out to me. I am here to help you accomplish
          your dream.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-between">
          <div className="flex-1">
            <div>
              <p className="text-lg font-semibold py-1">Lagos, Nigeria</p>
              <p className="text-lg font-semibold">2025</p>
            </div>

            <div className="mt-5 mb-10 md:mt-10">
              <p className="text-lg font-semibold ">Office hours</p>
              <p className="text-lg font-semibold py-1">Monday - Saturday</p>
              <p className="text-lg font-semibold">24/7</p>
            </div>
          </div>

          <div className="flex-1">
            <div>
              <Label htmlFor="name" className="pb-2">
                Name
              </Label>
              <Input type="text" className={"bg-white"} id="name" placeholder="Name" />
            </div>
            <div className="my-5">
              <Label htmlFor="email" className="pb-2">
                Email
              </Label>
              <Input type="email" className={"bg-white"} id="email" placeholder="Email" />
            </div>
            <div>
              <Label className="pb-2">Message</Label>
              <Textarea className={"bg-white text-black h-[200px]"} placeholder="Enter Message" />
            </div>
            <div className="flex mt-5 justify-end md:mt-10">
              <button className="bg-white px-10 rounded-md py-1 hover:bg-blue-400 hover:text-white font-semibold text-black cursor-pointer">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
