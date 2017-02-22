export const simpleJsx = `<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
`;

export const simpleJs = `React.createElement(
  MyButton,
  { color: "blue", shadowSize: 2 },
  "Click Me"
);`;

export const props = `
const HelloMessage = (props) => (
  <h1>Hello {props.name}</h1>
);

render(
  <HelloMessage name="IDinLondon" />,
  mountNode
);`;

export const state = `
class Clock extends Component {
  constructor(props) {
  	super(props);
  	
    this.state = { date: new Date() };
  }

  render() {
  	return (
      <div>
        <h1>Hello, IDinLondon!</h1>
        
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

render(
  <Clock />,
  mountNode
);`;

export const lifecycles = `
class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
  	return (
      <div>
    	<h1>Hello, IDinLondon!</h1>
    	<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

render(
  <Clock />,
  mountNode
);`;
