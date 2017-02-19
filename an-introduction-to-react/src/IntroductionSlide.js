import React, { Component } from 'react';
import { Fill, Heading, Layout, Link, Slide, Text } from 'spectacle';

export default class IntroductionSlide extends Component {
  render() {
    return (
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
    );
  }
}
