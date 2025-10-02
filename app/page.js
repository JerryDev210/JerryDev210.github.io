'use client'
import About from "./Components/About";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  );
}
