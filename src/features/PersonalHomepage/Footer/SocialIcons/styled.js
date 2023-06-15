import styled from "styled-components";

export const List = styled.ul`
    margin-top: 56px;
    margin-bottom: 0;
    display: flex;
    list-style: none;
    padding: 0;
    `;

export const Item = styled.li`
&:not(:last-child) {
    margin-right: 24px;
}
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.textPrimary};
    transition: color 0.03s;

    &:hover {
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const styleIcon = Icon => styled(Icon)`
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 32px;
    }
`;