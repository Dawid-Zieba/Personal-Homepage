import { ReactComponent as ErrorIcon } from "./error.svg";
import { ButtonLink } from "../../../ButtonLink/styled";
import { Wrapper, Header, Paragraph } from "./styled";
import { githubUserName } from "../../githubUserName";

export const Error = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check then directly on Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUserName}`}
            title="Dawid-Zieba Github"
            target="_blank"
            rel="noreferrer">
            Go to Github
        </ButtonLink>
    </Wrapper>
);