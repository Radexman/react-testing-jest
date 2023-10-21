type DataProps = {
	name: string;
	age: number;
};

const Data = ({ name, age }: DataProps) => {
	return (
		<h1>
			Hi, my name is {name} and I'm {age} years old.
		</h1>
	);
};

export default Data;
