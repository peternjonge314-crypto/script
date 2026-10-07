/** The props accepted by the Greeting component. */
interface GreetingProps {
  /** Name to include in the greeting. */
  name: string;
}

/** Displays a personalized greeting. */
function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}

export default Greeting;