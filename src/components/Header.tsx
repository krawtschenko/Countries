import React, {useCallback, useEffect, useState} from 'react';
import {IoSunnyOutline, IoMoonSharp} from "react-icons/io5";
import styled from "styled-components";
import {Container} from "./Container";
import {Link} from "react-router-dom";
import {restoreState, saveState} from "../localStorage/localStorage";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  cursor: pointer;
`;

const ModeSwitcher = styled.div`
  width: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
`;

const ThemeName = styled.span`
  text-transform: capitalize;
`

export const Header = React.memo(() => {
    const [theme, setTheme] = useState<string>('light');
    const toggleTheme = useCallback(() => {
        const currentTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(currentTheme)
        saveState<string>('theme', currentTheme)
    }, [theme]);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const state: string = restoreState<string>('theme', theme)
        if (state) {
            setTheme(state)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>The World Is Yours</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light'
                            ? <IoSunnyOutline size={16}/>
                            : <IoMoonSharp size={16}/>
                        }
                        <ThemeName>{theme} Theme</ThemeName>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
})