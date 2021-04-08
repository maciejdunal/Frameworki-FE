import React, { FC } from 'react';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes'

import { ExpandedMenu } from './ExpandedMenu';

import logo from '../../media/logo.png';
import search from '../../media/icons/search.png';
import house from '../../media/icons/house.png';
import comments from '../../media/icons/comments.png';
import bell from '../../media/icons/bell.png';
import arrowdown from '../../media/icons/arrow-down.png';
import {TextField} from "@material-ui/core";

const InnerWrapper = styled.div`;
    background: ${Colors.grey};
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${fontSize["18"]}
`;

const RightIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap: 10px;
`;

const InputWrapper = styled.div`
    align-content: center;
    display:flex;
  
`;

const LeftLogo = styled.div`
    justify-self: start;
    margin-left: 10px;
    cursor: pointer;
`;

const SearchField = styled.div`
  height:20px;
  font-size: 17px;
  border: 1px solid grey;
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
`;

export const TopBar: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>
                <LeftLogo>
                    <img src={logo} alt="logo" height="40px"/>
                </LeftLogo>
                <div>
                    <ExpandedMenu/>
                </div>
                <InputWrapper>
                    <SearchField>
                        <input type="text" placeholder="Search" style={{ height: "25px", width:"300px" }} border-left="none" />
                    </SearchField>
                    <SearchButton>
                        <img src={search} alt="search" style={{ height: "25px" }}/>
                    </SearchButton>
                </InputWrapper>
                <RightIcons>
                    <img src={house} alt="house" height="30px"/>
                    <img src={comments} alt="comments" height="30px"/>
                    <img src={bell} alt="bell" height="30px"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    )


}

export default TopBar
