import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import { Deck, Fill, Heading, Layout, Link, Slide, Spectacle, Text } from "spectacle";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {};

preloader(images);

const theme = createTheme({
  primary: "#76a700",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} margin="1em 0">
              What is React?
            </Heading>

            <Layout>
              <Fill>
                <Text textSize="1.5rem" textColor="tertiary">Jonathon Kelly</Text>
              </Fill>

              <Fill>
                <Text textSize="1.5rem" textColor="tertiary">|</Text>
              </Fill>

              <Fill>
                <Link href="mailto:jonathon@insidersbyte.com">
                  <Text textSize="1.5rem" textColor="tertiary">jonathon@insidersbyte.com</Text>
                </Link>
              </Fill>

              <Fill>
                <Text textSize="1.5rem" textColor="tertiary">|</Text>
              </Fill>

              <Fill>
                <Link href="https://insidersbyte.com" target="_blank">
                  <Text textSize="1.5rem" textColor="tertiary">insidersbyte.com</Text>
                </Link>
              </Fill>

              <Fill>
                <Text textSize="1.5rem" textColor="tertiary">|</Text>
              </Fill>

              <Fill>
                <Link href="https://twitter.com/InsidersByte">
                  <Text textSize="1.5rem" textColor="tertiary">@insidersbyte</Text>
                </Link>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
