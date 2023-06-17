import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg"

export const Section = styled.section`
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 48px;
    }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 8px;
`;

export const Header = styled.header`
    text-align: center;
`;

export const SubTitle = styled.h3`
    font-weight: 400;
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: 20px;
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;