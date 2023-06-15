import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleMode } from "../modeSlice";
import { Wrapper, ThemeButton, Text, Box, Icon, IconWrapper } from "./styled";

export const ModeSwitcher = () => {
    const isDarkMode = useSelector(selectIsDarkMode);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <ThemeButton onClick={() => dispatch(toggleMode())}>
                <Text>Dark mode {isDarkMode ? "on" : "off"}</Text>
                <Box>
                    <IconWrapper moveToRight={isDarkMode}>
                        <Icon/>
                    </IconWrapper>
                </Box>
            </ThemeButton>
        </Wrapper>
    );
};