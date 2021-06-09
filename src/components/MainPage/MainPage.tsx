import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import {HomePage} from "../HomePage/HomePage";
import {Home} from "@material-ui/icons";


const Content = styled.div`
  height: 1000px;
  display: flex;
  background: #edeaea;
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <HomePage/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;

