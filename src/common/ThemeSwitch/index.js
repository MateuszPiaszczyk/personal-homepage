import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Box, Button, Icon, IconWrapper, Text, Wrapper } from "./styled";

export const ThemeSwitch = () => {
    const darkTheme = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>Dark mode {darkTheme ? "on" : "off"}</Text>
                <Box>
                    <IconWrapper moveToRight={darkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};