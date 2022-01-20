import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="About the author" />
      <Section 
        title="Nikita Rysiev" 
        body={
          <>
            Hej! My name a Nick, and I am a beginner Junior Front End Developer and Junior Manual Software Tester.
            My native language is Russian, but I learn and practice more English language, Polish and some German.
            
            Now I try to study software testing and some coding of simple web applications.
            
            I want to know coding and speaking English very well to be useful in the labor market. 
          </>
          } 
        />
  </Container>
);