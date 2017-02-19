import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Link, Slide, List, ListItem } from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import IntroductionSlide from './IntroductionSlide';
import Title from './Title';

const theme = createTheme({
  primary: '#76a700',
});

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <IntroductionSlide />

    <Slide notes="Objective: To introduce you to React and inspire you to go out there and use it.">
      <Title>An Introduction to React.js</Title>
    </Slide>

    <Slide>
      <Title>What is React?</Title>
    </Slide>

    <Slide>
      <Title>What Isn't React</Title>
    </Slide>

    <Slide>
      <Title>Application State</Title>
    </Slide>

    <Slide>
      <Title>Components</Title>
    </Slide>

    <Slide>
      <Title>Rendering</Title>
    </Slide>

    <Slide>
      <Title>Jsx</Title>
    </Slide>

    <Slide>
      <Title>Props</Title>
    </Slide>

    <Slide>
      <Title>Demo Time</Title>
    </Slide>

    <Slide>
      <Title>That's React</Title>
    </Slide>

    <Slide>
      <Title>Developer Experience</Title>
    </Slide>

    <Slide>
      <Title>This Presentation is written in React</Title>
    </Slide>

    <Slide>
      <Title>Where To Go From Here?</Title>
    </Slide>

    <Slide>
      <Title margin="0 0 0.5em">Links</Title>

      <List textColor="tertiary">
        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          This Presentation:&nbsp;

          <Link href="http://bit.ly/ChartsInReactWithD3Presentation" target="_blank" textColor="tertiary">
            Coming Soon
          </Link>
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          Code Examples:&nbsp;

          <Link href="http://bit.ly/ChartsInReactWithD3Code" target="_blank" textColor="tertiary">
            Coming Soon
          </Link>
        </ListItem>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;
