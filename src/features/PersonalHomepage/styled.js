import styled from "styled-components";

export const Container = styled.div`
    max-width: 1248px;
    padding: 16px;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 8px;
    }
`;