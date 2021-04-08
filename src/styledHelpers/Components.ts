import styled from 'styled-components';
import {  Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

const boxShadow = (): Styles => {
    return {
        color: `${Colors.black}`
    }
}

export const Wrapper = styled.div`;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;
