import { StyledHeader, List, Item, Section } from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map(skill => (
                <Item
                    key={skill}
                >
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);