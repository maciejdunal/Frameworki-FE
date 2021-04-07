import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


const Content = styled.div`
max-width: 1200px;
align-items: center;
display: flex;
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar>
            </TopBar>
            <Content>g
                <LeftMenu>
                </LeftMenu>
                <div>content</div>
            </Content>
        </Wrapper>
    );
};

export default MainPage;

