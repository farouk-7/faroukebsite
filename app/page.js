"use client";
import { useEffect, useState } from "react";
import CursorSpotlight from "./components/CursorSpotlight";
import { BsDashLg } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { portData } from "./components/data";
import Image from "next/image";
import Link from "next/link";

const sections = ["farouk","about", "experience", "projects", "technologies"];

export default function Home() {
  const [active, setActive] = useState("farouk");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col px-[px] py-0 gap-0 md:flex-row h-full justify-center bg-[#010916] md:px-[120px] md:py-[40px] md:gap-[20px] ">
      <CursorSpotlight />

      <div className={`md:hidden sticky top-0 z-50 text-white text-center py-2 text-lg font-semibold transition-all duration-300 ease-in-out ${
    active === "about" ? "bg-white/10 backdrop-blur-sm opacity-100" : "bg-white/10 backdrop-blur-sm opacity-100"
  }`}>
        {active.charAt(0).toUpperCase() + active.slice(1)}
      </div>


      <aside id="farouk" className="flex-2 p-6 self-start h-full text-white md:sticky md:top-10">
        <nav className="space-y-4 flex-col ">
          <h1 className="text-[30px] text-center md:text-[50px] md:text-start font-extrabold">
            Oyedeji Opeoluwa Farouk
          </h1>
          <p className="text-center md:text-start md:text-[20px] py-[10px] font-bold">Frontend Developer</p>
          <p className="text-center md:text-start md:pb-[20px] font-semibold text-[18px]">
            I build user friendly and responsive websites and web app that meets
            both the user and business needs. I am passionate about creating
            scalable and maintainable code, and I am always eager to learn new
            technologies and improve my skills.
          </p>
          <div className="hidden md:block">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block uppercase text-[15px] transition-colors duration-200 ease-in-out  ${
                  active === section ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                <div className="flex gap-5 items-center">
                  {active === section ? (
                    <div className="w-[70px] h-[2px] bg-white"></div>
                  ) : (
                    <div className="w-[35px] h-[2px] bg-gray-400"></div>
                  )}

                  {section}
                </div>
              </a>
            ))}
          </div>
        </nav>
        <div className="flex justify-center md:justify-start gap-5 mt-[20px]">
          <Link
            href={"https://www.linkedin.com/in/opeoluwa-oyedeji-445a08245/"}
          >
            <FaLinkedin size={30} className="cursor-pointer" />
          </Link>

          <Link href="https://github.com/farouk-7">
            <FaGithubSquare size={30} className="cursor-pointer" />
          </Link>
          <FaSquareXTwitter size={30} className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center md:items-start   mt-5">
          <p><span style={{fontWeight:"bold"}}>Email:</span> <span>opeoluwaoyedejif@gmail.com</span> </p>
          <p className="py-1">Hotline: 07045097751</p>
        </div>
      </aside>

      
      <main className="mt-[20px] md:flex-2 overflow-y-scroll hide-scrollbar p-6 md:mt-30 space-y-32">
        <section id="about" className="mb-[50px] md:mb-[100px] scroll-mt-20">
          <h2 className="text-center text-3xl md:text-start font-semibold">About</h2>
          <p className="py-5 text-[17px]">
            Hi, welcome to my page. My name is Oyedeji Opeoluwa Farouk, and I am
            a Frontend Web Developer based in Lagos State, Nigeria. I create
            responsive and scalable websites for companies and businesses. A
            graduate of Microbiology from Yaba College of Technology, Fuelled by
            a passion for developing user friendly and scalable products. I have
            a deep to excel and continuously improve in my work.I am passionate,
            posess good communication skill which makes me good with working
            with team members. <br />
            <br />I am also a logical and critical thinker that thinks outside
            the box to get problems solved. I love combining the worlds of logic
            and creative design to make eye-catching, accessible, and
            user-friendly website and applications.When I am not on my laptop
            writing codes, I enjoy my time playing video games and listening to
            music.
          </p>
        </section>

        <section id="experience" className="mb-[50px] md:mb-[100px] scroll-mt-20">
          <h2 className="text-center md:text-start text-3xl font-semibold">Experience</h2>
          {/* <p>Experience content goes here...</p> */}
          <div className="flex flex-col md:flex-row gap-2 mt-[20px] text-[17px]">
            <div className="flex-1">
              <p className="font-bold">Nov 2023 - May 2025</p>
              <p className="italic text-[16px]">Frontend Web Developer</p>
            </div>

            <p className="flex-2 text-[17px]">
              Built and maintained responsive and user-friendly web applications
              using React, Next.js, and Tailwind CSS. I was responsible for the
              development of the UI designs, ensuring they were responsive
              across all screen sizes. I also collaborated with the backend team
              to integrate APIs and ensure seamless functionality across the
              application.
              <br />
              <br />I single-handedly developed a web application for a client,
              which involved gathering requirements, designing the UI, and
              implementing the frontend functionality.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 mt-[40px] text-[17px]">
            <div className="flex-1">
              <p className="font-bold">Feb 2023 - Nov 2023</p>
              <p className="italic text-[16px]">Frontend Intern</p>
            </div>

            <p className="flex-2 text-[17px]">
              Assited in the development of user interfaces for various
              projects, including the developement of admin and users portals
              for different organization,I also collaborated with a team of five
              to design scalable applications for clients.
              <br />
              <br />
              Learnt how to use React, Tailwind CSS, and other frontend
              technologies to build responsive and user-friendly web
              applications. I also gained experience in collaborating with the
              backend team to integrate APIs and ensure seamless functionality
              across the application.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-[50px] md:mb-[150px] scroll-mt-20">
          <h2 className="text-center md:text-start text-3xl font-semibold">Projects</h2>
          <p className="py-5 text-[17px]">
            Below are some of the works I have done as a team and individually.
            You are welcome to go through them.
          </p>
          <div className="mt-[20px]">
            {portData?.map((data) => (
              <Link key={data?.id} href={data?.link}>
                <div
                  // key={}
                  className="flex flex-col md:flex md:flex-row p-[20px] mb-2 rounded-[10px] md:gap-10 hover:bg-white/20 cursor-pointer  transition-colors ease-in duration-300"
                >
                    <Image alt="" src={data?.img} height={200} width={200} />
                  
                  
                  <div>
                    <p className="pt-[20px] md:pt-0 font-bold">{data?.name}</p>
                    <p className="text-sm py-3">{data?.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="technologies" className="mb-[50px] md:mb-[100px] scroll-mt-20">
          <h2 className="text-center md:text-start text-3xl font-semibold">Technology</h2>
          <p className="py-5 text-[17px]">
            Listed below contains the technologies I have worked with and am
            currently working with. I am always eager to learn new technologies
            and improve my skills.
          </p>
          <div className="mt-[20px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <p className="italic">React</p>
              <p className="italic">Next.js</p>
              <p className="italic">Tailwind CSS</p>
              <p className="italic">Shadcn UI</p>
              <p className="italic">Chakra UI</p>
              <p className="italic">JavaScript</p>
              <p className="italic">HTML</p>
              <p className="italic">CSS</p>
              <p className="italic">Git</p>
              <p className="italic">GitHub</p>
              <p className="italic">Figma</p>
              <p className="italic">TypeScript</p>
              <p className="italic">Framer Motion</p>
            </div>
          </div>
        </section>
        <div>
          <p className=" text-gray-400 text-sm hover:text-white transition-colors duration-200 ease-in-out">
            Coded in <span style={{fontWeight:"bold"}}><i>Visual Studio Code</i></span> with love by Oyedeji Opeoluwa Farouk.
            Built with <span style={{fontWeight:"bold"}}><i>Next.js, and Tailwind CSS.</i></span>  Deployed using <span style={{fontWeight:"bold"}}><i>Vercel.</i></span> 
          </p>
        </div>
      </main>
    </div>
  );
}
