import React from "react";
import { HeaderMenu } from "../../Features/HeaderMenu";
import { Head } from "../../Features/Head";
import ScrollReveal from "../../Common/ScrollReveal";
import { Container } from "../../Common/Container";
import { About } from "../../Features/About";
import { Skills } from "../../Features/Skills";
import { Projects } from "../../Features/Projects";
import { Process } from "../../Features/Process";
import { Contact } from "../../Features/Contact";
import { Footer } from "../../Features/Footer";
export const Home = () => {
  return (
    <Container>
      <HeaderMenu />
      <Head />
      <About/>
      <Skills/>
      <Projects/>
      <Process/>
      <Contact/>
      <Footer/>
    </Container>

  );
};
