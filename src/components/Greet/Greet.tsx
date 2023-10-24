type GreetProps = {
	name?: string;
};

const Greet = ({ name }: GreetProps) => {
	return <h1>Hello {name}</h1>;
};

export default Greet;
