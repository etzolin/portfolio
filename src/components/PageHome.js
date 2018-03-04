import React from 'react';
import './PageHome.scss';
import Header from './Header.js';
import Footer from './Footer.js';
import MainContent from './MainContent.js';
import TextSection from './TextSection.js';
import JobItem from './JobItem.js';

export default class PageHome extends React.Component {
  render() {
    return (
      [
        <Header title="Portfolio" />,
        <MainContent>
          <TextSection>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing
             elit. Vivamus porttitor dapibus neque ac tristique. Curabitur
             accumsan egestas nunc sed blandit. Donec ac nisl a nibh pharetra
             fringilla.
            </p>
          </TextSection>
          <TextSection title="Heading 2">
            <JobItem title="Sub-heading 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing
             elit. Vivamus porttitor dapibus neque ac tristique.
            </JobItem>
          </TextSection>
        </MainContent>,
        <Footer />
      ]
    );
  }
}
