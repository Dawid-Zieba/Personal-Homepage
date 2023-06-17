import { Header } from "./Header";
import { Container } from "./styled";
import { ModeSwitcher } from "../../common/ModeSwitcher";
import { Skills } from "./Skills";
import { skills, toLearn } from "./Skills/skillsList";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";

export const PersonalHomepage = () => (
    <Container>
        <ModeSwitcher />
    <Header />
    <Skills
    title="My skillset includes 🛠️"
    skills={skills}
    />
    <main>
        <Skills
        title="What I want to learn next 🚀"
        skills={toLearn} />
        <Portfolio />
    </main>
    <Footer />
    </Container>
);

