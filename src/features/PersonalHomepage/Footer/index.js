import { SocialIcons } from "./SocialIcons";
import { Wrapper, FooterContent, LetsTalk, Contact, Address, EmailWrapper } from "./styled";
import { email } from "../email";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <Contact href={`mailto:${email}`}>d.zieba2@gmail.com</Contact>
            </EmailWrapper>
            <FooterContent>
                I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me
            </FooterContent>
            <SocialIcons />
        </Address>
    </Wrapper>
)