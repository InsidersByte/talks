import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Link, Slide, List, ListItem, CodePane, Heading, ComponentPlayground, Appear } from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import IntroductionSlide from './IntroductionSlide';
import Title from './Title';
import { simpleJsx, simpleJs, props, state, lifecycles } from './codeExamples';

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
      <Title>Jsx</Title>
    </Slide>

    <Slide>
      <CodePane lang="jsx" textSize="2rem" source={simpleJsx} />

      <Appear><Heading caps size={3} textColor="tertiary" margin="1rem 0">⬇️</Heading></Appear>

      <Appear><CodePane lang="js" textSize="2rem" source={simpleJs} /></Appear>
    </Slide>

    <Slide>
      <Title>Props</Title>
    </Slide>

    <Slide maxWidth="90%">
      <ComponentPlayground code={props} />
    </Slide>

    <Slide>
      <Title>State</Title>
    </Slide>

    <Slide maxWidth="90%">
      <ComponentPlayground code={state} />
    </Slide>

    <Slide>
      <Title>Demo Time</Title>
    </Slide>

    <Slide>
      <Title>Component Lifecycles</Title>
    </Slide>

    <Slide>
      <Title>Mounting</Title>

      <List textColor="tertiary">
        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          constructor&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          componentWillUnmount&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          render&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          componentDidMount&#40;&#41;
        </ListItem>
      </List>
    </Slide>

    <Slide>
      <Title>Updating</Title>

      <List textColor="tertiary">
        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          componentWillReceiveProps&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          shouldComponentUpdate&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          componentWillUpdate&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          render&#40;&#41;
        </ListItem>

        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          componentDidUpdate&#40;&#41;
        </ListItem>
      </List>
    </Slide>

    <Slide>
      <Title>Unmounting</Title>

      <List textColor="tertiary">
        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          componentWillUnmount&#40;&#41;
        </ListItem>
      </List>
    </Slide>

    <Slide maxWidth="90%">
      <ComponentPlayground code={lifecycles} />
    </Slide>

    <Slide>
      <Title>Developer Experience</Title>
    </Slide>

    <Slide>
      <Title>This Presentation is written in React</Title>
    </Slide>

    <Slide>
      <Title margin="0 0 0.5em">What's Next?</Title>

      <List textColor="tertiary">
        <ListItem margin="0 0 0.5em" textSize="2.45rem">
          Coming Soon
        </ListItem>
      </List>
    </Slide>

    <Slide>
      <Title margin="0 0 0.5em">Links</Title>

      <List textColor="tertiary">
        <ListItem margin="0 0 0.5em" textSize="2.3rem">
          This Presentation:&nbsp;

          <Link href="http://bit.ly/IntroductionToReactPresentation" target="_blank" textColor="tertiary">
            http://bit.ly/IntroductionToReactPresentation
          </Link>
        </ListItem>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;
