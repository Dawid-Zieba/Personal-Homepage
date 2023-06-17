import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    list-style: none;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`;

export const Tile = styled.li`
    background-color: ${({ theme }) => theme.color.boxBackground};
    border: 6px solid ${({ theme }) => theme.color.tile.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: border-color 0.3s;
    padding: 56px;
    margin: 0;

    &:hover {
        border-color: ${({ theme }) => theme.color.tile.borderHover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 20px;
    }
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.color.tile.header};
    font-size: 24px;
    margin: 0;
    text-transform: capitalize;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    margin-top: 24px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        font-size: 14px;
        margin-top: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;

export const LinksWrapper = styled.dl`
    display: grid;
    grid-gap: 8px;
    margin-top: 24px;
    margin-bottom: 0;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        margin-top: 16px;
    }
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.primary};
    padding-bottom: 1px;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => α(theme.color.primary, 0.3)};
    transition: 0.3s;

    &:hover {
        border-color: unset;
    }
`;