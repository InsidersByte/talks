/* eslint-disable import/no-webpack-loader-syntax */

import React, { Component } from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Fill, Heading, Layout, Link, Slide, Spectacle, Text, Appear, List, ListItem } from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const images = {};

preloader(images);

const theme = createTheme({
  primary: '#76a700',
});

const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck transition={['zoom', 'slide']} transitionDuration={500}>
      <Slide>
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

      <Slide notes="Objective: to introduce a method of creating charts in React with D3">
        <Heading fit caps>Charts in React</Heading>
        <Appear><Heading caps>with D3</Heading></Appear>
      </Slide>

      <Slide notes="Every time we pick a new framework we have the same problems to solve">
        <Heading caps>Why?</Heading>
      </Slide>

      <Slide>
        <Heading caps>The Search for a Solution</Heading>
      </Slide>

      <Slide notes="Basically want to tap into the ecosystem">
        <Heading caps>Requirements</Heading>

        <List textColor="tertiary">
          <Appear><ListItem>DOM manipulation to be handled by React</ListItem></Appear>
          <Appear><ListItem>Single source of truth</ListItem></Appear>
          <Appear><ListItem>To be React Components</ListItem></Appear>
          <Appear><ListItem>Flexible</ListItem></Appear>
          <Appear><ListItem>Support Drag and Drop (DnD)</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading caps>Enters a heavy Googling Session</Heading>
      </Slide>

      <Slide>
        <Heading caps margin="0 0 0.5em">Libraries</Heading>

        <Appear><Text caps textColor="tertiary">Split into Two Types</Text></Appear>
      </Slide>

      <Slide>
        <Heading>A Hybrid Approach</Heading>

        <List textColor="tertiary">
          <Appear>
            <ListItem>
              <Link href="http://react-d3-library.github.io/" target="_blank" textColor="tertiary">
                react-d3-library
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              ... (Find more)
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading>The React Way</Heading>

        <List textColor="tertiary">
          <Appear>
            <ListItem>
              <Link href="https://github.com/FormidableLabs/victory" target="_blank" textColor="tertiary">
                Victory
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              ... (Find more)
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading caps margin="0 0 0.5em">Blogs</Heading>

        <Appear>
          <Link href="http://www.adeveloperdiary.com/react-js/integrate-react-and-d3/" textColor="tertiary" target="_blank" textSize="2.66rem">
            http://www.adeveloperdiary.com/react-js/integrate-react-and-d3/
          </Link>
        </Appear>
      </Slide>

      <Slide>
        <Heading caps>'The solution'</Heading>
      </Slide>

      <Slide>
        <Heading caps>Render the Output from D3</Heading>
      </Slide>

      <Slide notes="Live coding #1">
        <Link href="https://bl.ocks.org/mbostock/3887235" textColor="tertiary" target="_blank">
          <Heading margin="0 0 0.5em">Basic Pie Chart</Heading>
        </Link>

        <Text textColor="tertiary">Live Coding</Text>
      </Slide>

      <Slide notes="Live coding #2">
        <Link href="https://bl.ocks.org/mbostock/3887235" textColor="tertiary" target="_blank">
          <Heading margin="0 0 0.5em">Pie Chart</Heading>
        </Link>

        <Text textColor="tertiary">Live Coding</Text>
      </Slide>
    </Deck>
  </Spectacle>
);

export default Presentation;
