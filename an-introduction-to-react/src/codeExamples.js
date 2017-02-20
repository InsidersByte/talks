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
const HelloMessage = ({ name }) => (
  <h1>Hello {name}</h1>
);

render(
  <HelloMessage name="IDinLondon" />, 
  mountNode
);`;
