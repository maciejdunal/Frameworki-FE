import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
padding: 10px;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
`;

const RightIcons = styled.div`
    
`;

const InputWrapper = styled.div``;

export const TopBar: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>
                <img src="../../media/logo.png"/>
                <div>
                    <ExpandedMenu/>
                </div>
                <InputWrapper>
                    <input type="text"/>
                    <img src="../../media/icons/search.png"/>
                </InputWrapper>
                <RightIcons>
                    <img src="../../media/icons/house.png"/>
                    <img src="../../media/icons/comments..png"/>
                    <img src="../../media/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    )


}
