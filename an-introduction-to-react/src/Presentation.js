import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Link, Slide, List, ListItem, CodePane, Heading, ComponentPlayground, Appear, Image } from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import IntroductionSlide from './IntroductionSlide';
import Title from './Title';
import { simpleJsx, simpleJs, props, state, lifecycles } from './codeExamples';

const images = {
  mock: require('../public/mock.png'),
  components: require('../public/components.png'),
};

preloader(images);

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
      <Title>Components</Title>
    </Slide>

    <Slide maxHeight={1000}>
      <Image src={images.mock} />

      <Appear><Heading caps size={3} textColor="tertiary" margin="1rem 0">⬇️</Heading></Appear>

      <Appear><Image src={images.components} /></Appear>
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
      <Title>Demo Time!</Title>
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
      <Title>This Presentation is written in React</Title>
    </Slide>

    <Slide maxHeight={1000}>
      <List textColor="tertiary">
        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            react:&nbsp;

            <Link bold href="https://facebook.github.io/react/" target="_blank" textColor="tertiary">
              https://facebook.github.io/react/
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            es6:&nbsp;

            <Link bold href="http://es6-features.org/" target="_blank" textColor="tertiary">
              http://es6-features.org/
            </Link>
          </ListItem>
        </Appear>

        <Appear>
            <ListItem margin="0 0 0.5em" textSize="2rem">
            eslint:&nbsp;

            <Link bold href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank" textColor="tertiary">
              https://www.npmjs.com/package/eslint-config-airbnb
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            redux:&nbsp;

            <Link bold href="http://redux.js.org/" target="_blank" textColor="tertiary">
              http://redux.js.org/
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            css-modules:&nbsp;

            <Link bold href="https://github.com/css-modules/css-modules" target="_blank" textColor="tertiary">
              https://github.com/css-modules/css-modules
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            webpack:&nbsp;

            <Link bold href="https://webpack.js.org/" target="_blank" textColor="tertiary">
              https://webpack.js.org/
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            jest:&nbsp;

            <Link bold href="https://facebook.github.io/jest/" target="_blank" textColor="tertiary">
              https://facebook.github.io/jest/
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            enzyme:&nbsp;

            <Link bold href="http://airbnb.io/enzyme/" target="_blank" textColor="tertiary">
              http://airbnb.io/enzyme/
            </Link>
          </ListItem>
        </Appear>
      </List>

      <Appear>
        <Heading size={1} caps margin="0.5em 0 0.5em">Thanks!</Heading>
      </Appear>

      <List textColor="tertiary">
        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            This Presentation:&nbsp;

            <Link bold href="http://bit.ly/IntroductionToReactPresentation" target="_blank" textColor="tertiary">
              http://bit.ly/IntroductionToReactPresentation
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            Code:&nbsp;

            <Link bold href="http://bit.ly/IntroductionToReactCode" target="_blank" textColor="tertiary">
              http://bit.ly/IntroductionToReactCode
            </Link>
          </ListItem>
        </Appear>

        <Appear>
          <ListItem margin="0 0 0.5em" textSize="2rem">
            Twitter:&nbsp;

            <Link bold href="https://twitter.com/insidersbyte" target="_blank" textColor="tertiary">
              @InsidersByte
            </Link>
          </ListItem>
        </Appear>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;
