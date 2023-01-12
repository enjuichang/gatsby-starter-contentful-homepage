import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Section,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Enjui Chang's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium', 'Blog']} />
        <AboutSection sectionId="about" heading="About Enjui" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="tech_projects" heading="Tech Projects" />
        <ProjectsSection sectionId="nontech_projects" heading="Other Projects" />
        <ContactSection sectionId="contact" heading="How to Find Me" />
      </Page>
    </>
  );
}
