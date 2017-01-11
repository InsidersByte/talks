/* eslint-disable import/no-webpack-loader-syntax */

import React, { Component } from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Fill, Heading, Layout, Link, Slide, Spectacle, Text } from 'spectacle';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {};

preloader(images);

const theme = createTheme({
  primary: '#76a700',
});

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide>
            <Heading margin="0 0 0.5em">Jonathon Kelly</Heading>

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
      </Spectacle>
    );
  }
}
