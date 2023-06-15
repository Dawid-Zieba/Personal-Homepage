import styled from "styled-components";
import { SubHeader } from "../SubHeader/styled";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.color.boxBackground};
    padding: 32px;
    margin-top: 72px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.headerLine};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-bottom: 12px;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 32px;
    padding: 0;
    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
        margin-top: 12px;
    }
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        line-height: 1.2;
    }
    &:before {
        content: "\\25CF";
        color: ${({ theme }) => theme.color.primary};
        padding-right: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 6px;
            margin-right: 8px;
    }
    }
`;
