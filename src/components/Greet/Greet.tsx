import { GreetProps } from './Greet.types';

const Greet = ({ name }: GreetProps) => {
	return <h1>Hello {name ? name : 'guest'}</h1>;
};

export default Greet;
