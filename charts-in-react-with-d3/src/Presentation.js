/* eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
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
          <Appear><ListItem margin="0 0 0.5em">DOM manipulation to be handled by React</ListItem></Appear>
          <Appear><ListItem margin="0 0 0.5em">Single source of truth</ListItem></Appear>
          <Appear><ListItem margin="0 0 0.5em">Flexible</ListItem></Appear>
          <Appear><ListItem margin="0 0 0.5em">Support Drag and Drop (DnD)</ListItem></Appear>
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
            <ListItem margin="0 0 0.5em">
              <Link href="http://react-d3-library.github.io/" target="_blank" textColor="tertiary">
                react-d3-library
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem margin="0 0 0.5em">
              <Link href="https://github.com/Olical/d3-react" target="_blank" textColor="tertiary">
                d3-react
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem margin="0 0 0.5em">
              <Link href="https://github.com/Olical/react-faux-dom" target="_blank" textColor="tertiary">
                react-faux-dom
              </Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading>The React Way</Heading>

        <List textColor="tertiary">
          <Appear>
            <ListItem margin="0 0 0.5em">
              <Link href="https://github.com/rma-consulting/react-easy-chart" target="_blank" textColor="tertiary">
                react-easy-chart
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem margin="0 0 0.5em">
              <Link href="https://github.com/rumble-charts/rumble-charts" target="_blank" textColor="tertiary">
                rumble-charts
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem margin="0 0 0.5em">
              <Link href="https://github.com/recharts/recharts" target="_blank" textColor="tertiary">
                recharts
              </Link>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem margin="0 0 0.5em">
              <Link href="https://github.com/FormidableLabs/victory" target="_blank" textColor="tertiary">
                victory
              </Link>
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
        <Heading caps>Use D3 for Math, React for State + DOM</Heading>
      </Slide>

      <Slide notes="Live coding #1">
        <Heading caps margin="0 0 0.5em">Pie Chart</Heading>

        <Link href="https://bl.ocks.org/mbostock/3887235" target="_blank">
          <Text textColor="tertiary">Mike Bostock’s Pie Chart</Text>
        </Link>
      </Slide>

      <Slide notes="Live coding #1">
        <Heading caps margin="0 0 0.5em">Circle Dragging</Heading>

        <Link href="https://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e" target="_blank">
          <Text textColor="tertiary">Mike Bostock’s Circle Dragging</Text>
        </Link>
      </Slide>

      <Slide>
        <Heading caps margin="0 0 0.5em">React and D3, 3 ways</Heading>

        <List textColor="tertiary">
          <Appear><ListItem margin="0 0 0.5em">Use D3 for Math, React for State + DOM</ListItem></Appear>
          <Appear><ListItem margin="0 0 0.5em">React Charting Library</ListItem></Appear>
          <Appear><ListItem margin="0 0 0.5em">Integrating Pure D3 with React</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading caps margin="0 0 0.5em">Links</Heading>

        <List textColor="tertiary">
          <ListItem margin="0 0 0.5em" textSize="2.45rem">
            This Presentation -&nbsp;

            <Link href="http://bit.ly/ChartsInReactWithD3Presentation" target="_blank" textColor="tertiary">
              http://bit.ly/ChartsInReactWithD3Presentation
            </Link>
          </ListItem>

          <ListItem margin="0 0 0.5em" textSize="2.45rem">
            Code Examples -&nbsp;

            <Link href="http://bit.ly/ChartsInReactWithD3Code" target="_blank" textColor="tertiary">
              http://bit.ly/ChartsInReactWithD3Code
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  </Spectacle>
);

export default Presentation;
