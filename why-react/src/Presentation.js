/* eslint-disable import/no-webpack-loader-syntax */

import React, { Component } from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Fill, Heading, Layout, Link, Slide, Spectacle, Text, BlockQuote, Quote, Cite, Appear, List, ListItem, Image } from 'spectacle';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  reactLogo: require('../public/reactLogo.png'),
  whoUsesReact: require('../public/whoUsesReact.png'),
  npmDownloadStats: require('../public/npmDownloadStats.png'),
};

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

          <Slide bgColor="#222222">
            <Image src={images.reactLogo.replace('/', '')} height="700px" />
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote textColor="tertiary" style={{ borderLeftColor: 'white' }}>React is a JavaScript library for building user interfaces</Quote>
              <Cite>Facebook (https://facebook.github.io/react/)</Cite>
            </BlockQuote>
          </Slide>

          <Slide maxHeight={1000}>
            <Heading>Think</Heading>

            <List textColor="tertiary">
              <Appear><ListItem>Angular</ListItem></Appear>
              <Appear><ListItem>Ember</ListItem></Appear>
              <Appear><ListItem>Aurelia</ListItem></Appear>
              <Appear><ListItem>Meteor</ListItem></Appear>
              <Appear><ListItem>Backbone</ListItem></Appear>
              <Appear><ListItem>Polymer</ListItem></Appear>
              <Appear><ListItem>Knockout</ListItem></Appear>
              <Appear><ListItem>... and many more</ListItem></Appear>
            </List>

            <Appear><Heading>... but different</Heading></Appear>
          </Slide>

          <Slide>
            <Heading margin="0 0 0.5em">Why did Facebook build React?</Heading>

            <List textColor="tertiary">
              <Appear><ListItem margin="0 0 0.5em">React isn't an MVC framework</ListItem></Appear>
              <Appear><ListItem margin="0 0 0.5em">React doesn't use templates</ListItem></Appear>
              <Appear><ListItem margin="0 0 0.5em">Reactive updates are dead simple</ListItem></Appear>
              <Appear><ListItem margin="0 0 0.5em">HTML is just the beginning</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="white">
            <Heading margin="0 0 0.5em" textColor="primary">Who uses React?</Heading>

            <Appear><Image src={images.whoUsesReact.replace('/', '')} /></Appear>
          </Slide>

          <Slide>
            <Heading margin="0 0 0.5em">npm download stats</Heading>

            <Image src={images.npmDownloadStats.replace('/', '')} />
          </Slide>

          <Slide>
            <Heading margin="0 0 0.5em">Developer Experience</Heading>

            <List textColor="tertiary">
              <Appear><ListItem margin="0 0 0.5em">The chrome dev tools are awesome!</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading margin="0 0 0.5em">LMGTFY</Heading>

            <List textColor="tertiary">
              <ListItem margin="0 0 0.5em">
                <Link href="https://facebook.github.io/react/" textColor="tertiary" target="_blank">
                  https://facebook.github.io/react/
                </Link>
              </ListItem>

              <ListItem margin="0 0 0.5em">
                <Link href="https://github.com/facebookincubator/create-react-app" textColor="tertiary" target="_blank">
                  https://github.com/facebookincubator/create-react-app
                </Link>
              </ListItem>

              <ListItem margin="0 0 0.5em">
                <Link href="https://github.com/enaqx/awesome-react" textColor="tertiary" target="_blank">
                  https://github.com/enaqx/awesome-react
                </Link>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
