import styled from 'styled-components';
import {  Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

export const Wrapper = styled.div`;
    font-family: "Calvin-Medium";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #F5F7F9;
`;
