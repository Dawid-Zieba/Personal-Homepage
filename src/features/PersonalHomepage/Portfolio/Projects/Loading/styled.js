import styled, {keyframes} from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";


const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.textPrimary};
    display: grid;
    justify-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
        margin-top: 32px;
    }
`;

export const Icon = styled(Spinner)`
    margin-top: 48px;
    animation: ${rotate} 1s infinite linear;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 60px;
        margin-top: 32px;
    }
`;