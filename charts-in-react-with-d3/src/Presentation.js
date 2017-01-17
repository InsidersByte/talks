/* eslint-disable import/no-webpack-loader-syntax */

import React, { Component } from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Fill, Heading, Layout, Link, Slide, Spectacle, Text, CodePane } from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import BasicPieChart from './BasicPieChart';

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

          <Slide>
            <Heading fit>Charts in React</Heading>
            <Heading>with D3</Heading>
          </Slide>

          <Slide>
            <Heading>Why do we need another way to create charts?</Heading>
          </Slide>

          <Slide>
            <Heading>What options exist out there?</Heading>
          </Slide>

          <Slide>
            <Heading>The solution</Heading>
          </Slide>

          <Slide>
            <Heading>Basic Example</Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={2} textColor="primary">Basic Pie Chart</Heading>

            <BasicPieChart />
          </Slide>

          <Slide>
            <CodePane
              lang="jsx"
              source={require("./BasicPieChart.example").default}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading>Live Coding</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
