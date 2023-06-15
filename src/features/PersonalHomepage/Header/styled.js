import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "../Images/message.svg";
import { ButtonLink} from "../ButtonLink/styled";


export const Wrapper = styled.header`
    margin-top: -30px; 
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
    

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        grid-gap: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`;

export const Image = styled.img`
    max-width: 384px;
    width: 30vw;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-width: 133px;
    }
`;

export const ThisIs = styled.div`
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};
    margin: 12px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Content = styled.p`
    max-width: 640px;
    font-weight: 400;
    line-height: 1.4;
    margin: 36px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        margin-top: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 16px;
        max-width: 570px;
    }
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 24px;
    }
`;

export const HireMeIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;