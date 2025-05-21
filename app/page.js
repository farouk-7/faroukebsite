"use client";
import { useEffect, useState } from "react";
import CursorSpotlight from "./components/CursorSpotlight";
import { BsDashLg } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const sections = ["about", "experience", "projects"];

export default function Home() {
  const [active, setActive] = useState("about");

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
    <div className="flex h-full justify-center bg-[#010916] px-[120px] py-[50px] gap-[70px] ">
      <CursorSpotlight />
      {/* Sidebar */}
      <aside className="flex-2 p-6 sticky top-30 self-start h-full text-white">
        <nav className="space-y-4 flex-col ">
          <h1 className="text-[50px] font-extrabold">
            Oyedeji Opeoluwa Farouk
          </h1>
          <p className="py-[10px] font-bold text-[20px]">Frontend Developer</p>
          <p className="pt-[10px] pb-[50px] font-semibold text-[18px]">
            I build user friendly and responsive websites and web app
          </p>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`block uppercase transition-colors duration-200 ease-in-out  ${
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
        </nav>
        <div className="flex gap-5 mt-[50px]">
          <FaLinkedin size={30} className="cursor-pointer"/>
          <FaGithubSquare size={30} className="cursor-pointer"/>
          <FaSquareXTwitter size={30} className="cursor-pointer"/>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-3 overflow-y-scroll hide-scrollbar p-6 mt-30 space-y-32">
        <section id="about" className="mb-[100px] scroll-mt-20">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="py-5 text-[20px]">
            Good Morning, welcome to my page. My name is Oyedeji Opeoluwa
            Farouk, and I am a Frontend Web Developer based
            in Lagos State, Nigeria. I create responsive and scalable websites
            for companies and businesses. A graduate of Microbiology from Yaba
            College of Technology, Fuelled by a passion for developing user
            friendly and scalable products. I have a deep to excel and
            continuously improve in my work.I am passionate, posess good
            communication skill which makes me good with working with team
            members. <br/><br/>I am also a logical and critical thinker that thinks
            outside the box to get problems solved. I love combining the worlds
            of logic and creative design to make eye-catching, accessible, and
            user-friendly website and applications.When I am not on my laptop
            writing codes, I enjoy my time playing video games and listening to
            music.
          </p>
        </section>

        <section id="experience" className="mb-[100px] scroll-mt-20">
          <h2 className="text-3xl font-semibold">Experience</h2>
          {/* <p>Experience content goes here...</p> */}
          <div className="flex   mt-[20px] text-[20px]">
            <p className="flex-1">Jan 2023 - May 2025</p>
            <p className="flex-2">
              Contributed to various projects, including the developement of admin and users portals for 
              different organization,I also collaborated with a team of five to design scalable applications for clients.
              <br/>
              I also created a website(E-Learning) website for a client, I was rsponsible for the development of the UI designs
              as well as making it responsive accross all screen size.
              Created the Admin and the Student portal for the users and the company respectively. 
            </p>
          </div>

           <div className="flex   mt-[40px] text-[20px]">
            <p className="flex-1">Jan 2022 - May 2025</p>
            <p className="flex-2">
              Contributed to various projects, including the developement of admin and users portals for 
              different organization,I also collaborated with a team of five to design scalable applications for clients.
              <br/><br/>
              I also created a website(E-Learning) website for a client, I was rsponsible for the development of the UI designs
              as well as making it responsive accross all screen size.
              Created the Admin and the Student portal for the users and the company respectively. 
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen scroll-mt-20">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <p>Projects content goes here...</p>
        </section>
      </main>
    </div>
  );
}
