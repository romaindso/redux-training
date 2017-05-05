// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Fill,
  Deck,
  Heading,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold italic>
            "predictable state container for JavaScript apps"
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Why ?</Heading>
          <Heading size={3} textColor="secondary">From scrippting to SPA</Heading>
          <List Fill>
            <ListItem>manage more state than ever</ListItem>
            <ListItem>lost control over the when, why, and how state is updated</ListItem>
            <ListItem>mutation and asynchronicity</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote><Text textColor="primary">Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen</Text></Quote>
            <Cite>Dan Abramov - co-creator of Redux</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>Core Concepts</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Single source of truth</Heading>
          <Heading size={7} textColor="secondary">The state of your whole application is stored in an object tree within a single store.</Heading>
          <br /><br />
          <CodePane lang="javascript" source={require("raw-loader!../assets/code/core-store1.example")} textSize={20} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>State is read-only</Heading>
          <Heading size={7} textColor="secondary">The only way to change the state is to emit an action, an object describing what happened.</Heading>
          <br /><br />
          <CodePane lang="javascript" source={require("raw-loader!../assets/code/core-store2.example")} textSize={20} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Changes are made with pure functions</Heading>
          <Heading size={7} textColor="secondary">To specify how the state tree is transformed by actions, you write pure reducers.</Heading>
        </Slide>
        <CodeSlide
          textSize={30}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/core-store3.example")}
          ranges={[
            { loc: [0, 0], title: "Reducers" },
            { loc: [0, 1]},
            { loc: [9, 10], note: "take the previous state and an action..." },
            { loc: [10, 11] },
            { loc: [11, 12] },
            { loc: [19, 20], note: "handle differents action type..." },
            { loc: [11, 19], note: "and return a new state for each one" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Real Word Example</Heading>
          <br />
          <iframe src="http://localhost:3000" height={600} width={1000} style={{backgroundColor: "white"}}/>
        </Slide>
      </Deck>
    );
  }
}
