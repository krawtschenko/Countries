import React, {useCallback, useEffect, useState} from 'react';
import {IoMoonOutline, IoMoonSharp} from "react-icons/io5";
import styled from "styled-components";
import {Container} from "./Container";

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

const Title = styled.a.attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
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
    const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme]);

    useEffect(() => {
        // Встановлюємо атрібут для body, коли міняється theme
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>The World Is Yours</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light'
                            ? <IoMoonOutline size={14}/>
                            : <IoMoonSharp size={14}/>
                        }
                        <ThemeName>{theme} Theme</ThemeName>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
})