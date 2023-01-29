import styled from 'styled-components';
import {Container} from './Container';
import {FC, ReactNode} from "react";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

export const Main: FC<MainPropsType> = ({children}) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

type MainPropsType = {
    children: ReactNode
}
