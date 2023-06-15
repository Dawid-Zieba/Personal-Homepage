import styled, {css} from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ThemeButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.site.background};
    display: flex;
    /* gap: 12px; */
    align-items: center;
    /* margin-top: 60px;
    margin-right: 14px;
    transition: 0.5s; */
    color: inherit;
    outline-offset: 8px;
    transition: 0.4s;
/* 
    &:hover {
        border: 1px solid ${({ theme }) => theme.color.modeSwitcher.border};
        border-radius: 4%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        padding: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0;
        padding: 0;
    } */
`;

export const Text = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    background-color: ${({ theme }) => theme.color.modeSwitcher.background}; 
    border: 1px solid;
    padding: 3px;
    border-radius: 12px;
    width: 48px;
    display: flex;
`;

export const IconWrapper = styled.div`
    /* border: 1px solid ${({ theme }) => theme.color.modeSwitcher.border};
    width: 48px;
    height: 25px; */
    background-color: currentColor;
    border-radius: 50%;
    display: flex;
    /* align-items: center;
    padding: 2px; */
    transition: transform 0.3s;
    
    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    background-color: ${({ theme }) => theme.color.modeSwitcher.icon};
    border-radius: 50%;
    padding: 2px;
    width: 20px;
    height:20px;
`;
