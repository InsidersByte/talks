import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Fill, Heading, Layout, Link, Slide, Text } from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const images = {};

preloader(images);

const theme = createTheme({
  primary: '#76a700',
});

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide notes="Investors and advisors in digitally native financial services">
      <Heading caps margin="0 0 0.5em">Jonathon Kelly</Heading>

      <Layout>
        <Fill>
          <Link href="mailto:jonathon@insidersbyte.com" target="_blank">
            <Text textSize="1.8rem" textColor="tertiary">jonathon@insidersbyte.com</Text>
          </Link>
        </Fill>

        <Fill>
          <Text textSize="1.8rem" textColor="tertiary">|</Text>
        </Fill>

        <Fill>
          <Link href="https://www.insidersbyte.com" target="_blank">
            <Text textSize="1.8rem" textColor="tertiary">insidersbyte.com</Text>
          </Link>
        </Fill>

        <Fill>
          <Text textSize="1.8rem" textColor="tertiary">|</Text>
        </Fill>

        <Fill>
          <Link href="https://twitter.com/InsidersByte" target="_blank">
            <Text textSize="1.8rem" textColor="tertiary">@insidersbyte</Text>
          </Link>
        </Fill>
      </Layout>
    </Slide>
  </Deck>
);

export default Presentation;
