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
  S,
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
          <Heading size={3} textColor="secondary">From scripting to SPA</Heading>
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
            { loc: [10, 11]},
            { loc: [11, 12]},
            { loc: [19, 20], note: "handle differents action type..." },
            { loc: [11, 19], note: "and return a new state for each one" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Basic Example</Heading>
          <br />
          <iframe src="http://localhost:3000" height={600} width={1000} style={{backgroundColor: "white"}}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Real Word Example</Heading>
          <br />
          <iframe src="http://localhost:3000" height={600} width={1000} style={{backgroundColor: "white"}}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>Advanced Redux</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>The Selector pattern</Heading>
        </Slide>
        <CodeSlide
          textSize={25}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/selector-pattern1.example")}
          ranges={[
            { loc: [0, 0], title: "Without selector" },
            { loc: [0, 8], note: "Imagine we have a reducer to control a list of items"},
            { loc: [8, 14], note: "Where Items looks like this"},
            { loc: [15, 22], note: "Today we mapStateToProps for all incomplete items like this"}
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>The problem with this approach</Heading>
          <Text margin="40px 0 0" textSize={30}>
            •  The implementation of <S type="italic">incompleteItems</S> may change.
          </Text><br />
          <Text textSize={30}>
            •  Computation logic occurs in <S type="italic">mapStateToProps</S>
          </Text><br />
          <Text textSize={30}>
              •  Can't memoize the values of <S type="italic">incompleteItems</S>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>The solution</Heading>
          <Heading size={3} textColor="secondary">Selectors</Heading>
          <Text margin="40px 0 0" textSize={30}>
            •  Selectors can compute derived data, allowing Redux to store the minimal possible state.
          </Text><br />
          <Text textSize={30}>
            •  Selectors are composable. They can be used as input to other selectors.
          </Text><br />
          <Text textSize={30}>
              • Selectors are your “reading API” and should be co-located with their reducers
          </Text>
        </Slide>
        <CodeSlide
          textSize={25}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/selector-pattern2.example")}
          ranges={[
            { loc: [0, 0], title: "With selector" },
            { loc: [0, 14], note: "Colocating Selectors with Reducers"},
            { loc: [15, 20], note: "And we update our mapStateToProps function"},
            { loc: [15, 20], note: "Now we can reuse this logic across many components mapping this exact state! We can unit test it as well! More importantly we can now memoize this state with reselect"}
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Normalizing State Shape</Heading>
        </Slide>
        <CodeSlide
          textSize={15}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/normalizestate1.example")}
          ranges={[
            { loc: [0, 34]},
            { loc: [0, 34], note: "Lots of data repetition..."}
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>The problem with this approach</Heading>
          <Text margin="40px 0 0" textSize={30}>
            •  When a piece of data is duplicated in several places, it becomes harder to make sure that it is updated appropriately
          </Text><br />
          <Text textSize={30}>
            •  Nested data means that the corresponding reducer logic has to be more nested or more complex
          </Text><br />
          <Text textSize={30}>
              • Not compliant with immutable data updates that require all ancestors in the state tree to be copied and updated as well
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote><Text textColor="primary">The recommended approach to managing relational or nested data in a Redux store is to treat a portion of your store as if it were a database, and keep that data in a normalized form.</Text></Quote>
            <Cite>Dan Abramov - co-creator of Redux</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>The solution</Heading>
          <Heading size={3} textColor="secondary">Normalizing data</Heading>
          <Text margin="40px 0 0" textSize={30}>
            •  Each type of data gets its own "table" in the state
          </Text><br />
          <Text textSize={30}>
            •  Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values
          </Text><br />
          <Text textSize={30}>
              • Any references to individual items should be done by storing the item's ID
          </Text><br />
          <Text textSize={30}>
              • Arrays of IDs should be used to indicate ordering.
          </Text>
        </Slide>
        <CodeSlide
          textSize={15}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/normalizestate2.example")}
          ranges={[
            { loc: [0, 34]},
            { loc: [0, 34], note: "An example of a normalized state structure"}
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Benefits</Heading>
          <Text margin="40px 0 0" textSize={30}>
            •  Because each item is only defined in one place, we don't have to try to make changes in multiple places if that item is updated
          </Text><br />
          <Text textSize={30}>
            •  The reducer logic doesn't have to deal with deep levels of nesting, so it will probably be much simpler
          </Text><br />
          <Text textSize={30}>
              • Any references to individual items should be done by storing the item's IDThe logic for retrieving or updating a given item is now fairly simple and consistent. Given an item's type and its ID, we can directly look it up in a couple simple steps, without having to dig through other objects to find it
          </Text><br />
          <Text textSize={30}>
              • Since each data type is separated, an update like changing the text of a comment would only require new copies of the "comments > byId > comment" portion of the tree
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Managing Side Effects</Heading>
          <List Fill>
            <ListItem>functions (redux-thunk)</ListItem>
            <ListItem>promises </ListItem>
            <ListItem>generators (redux-saga)</ListItem>
            <ListItem>observables (RxJS)</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Redux-Thunk</Heading>
          <List>
            <ListItem>Action creators can return a function instead of an action</ListItem>
            <ListItem>Can be used to delay the dispatch of an action</ListItem>
            <ListItem>The inner function receives the store methods dispatch and getState as parameters.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Redux-Saga</Heading>
          <Heading size={7} textColor="secondary"></Heading>
          <br /><br />
        </Slide>
      </Deck>
    );
  }
}
