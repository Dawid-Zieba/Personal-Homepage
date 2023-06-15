import styled from "styled-components";

export const ButtonLink = styled.button`
    border: 1px solid ${({ theme }) => theme.color.buttonLink.border};
    font-size: 20px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.buttonLink.text};
    font-size: 20px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 2px 2px
        ${({ theme }) => theme.color.buttonLink.shadow};
    }

    &:active {
        box-shadow: 0 -2px 0 0
        ${({ theme }) => theme.color.buttonLink.active};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;