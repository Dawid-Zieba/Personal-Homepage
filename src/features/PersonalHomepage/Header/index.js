import AuthorPhoto from "../Images/Ja.jpg";
import { Image, Wrapper, Name, Content, HireMeIcon, StyledButtonLink, ThisIs } from "./styled";

export const Header = () => (
    <Wrapper>
        <Image src={AuthorPhoto} alt="Dawid Zięba" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dawid Zięba</Name>
            <Content>
            👨🏻‍💻  I'm a starting Frontend Developer and I especially like to program with React, currently I'm looking for new job to improve my skills and learn something new.
            </Content>
            <StyledButtonLink href="mailto:d.zieba2@gmail.com" title="d.zieba2@gmail.com">
                <HireMeIcon />
                Hire me
                </StyledButtonLink>
        </div>
    </Wrapper>
)