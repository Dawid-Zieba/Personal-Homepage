import styled from "styled-components";

export const SubHeader = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;