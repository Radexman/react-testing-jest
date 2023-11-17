import { SkillsProps } from './skills.types';

const Skills = ({ skills }: SkillsProps) => {
	return (
		<>
			<ul>
				{skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</>
	);
};

export default Skills;
