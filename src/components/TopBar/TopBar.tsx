import React, { FC } from 'react';
import styled from 'styled-components';

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
import useDropdown from "react-dropdown-hook";
import house2 from '../../media/icons/house2.svg'


const InnerWrapper = styled.div`
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
  margin-left: 20px;
  cursor: pointer;

`;

const SearchField = styled.div`
  width: 250px;
  padding: 8px;
  margin-left: -350px;

`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 140px;
  position: absolute;

`;
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 13%;
  justify-content: space-between;
  margin-left: -650px;


`;
const LeftSide = styled.div`
  
`;



export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <Wrapper>
            <InnerWrapper>

                <LeftLogo>
                    <img src={logo} alt="logo" height="40px" />
                </LeftLogo>
                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <img src ={house2} alt = "" />
                        <span>Home</span>
                    </LeftSide >
                    <img onClick={menuHandler} src ={arrowdown} alt = ""/>
                    {dropdownOpen &&
                    <ExpandedMenu/>
                    }
                </MenuWrapper>
                <InputWrapper>
                    <SearchField>
                        <input type="text" placeholder="Search Legalcluster" style={{width:'500px', height:'20px'}}/>
                    </SearchField>

                    <SearchButton>
                        <img src={search} alt="search" />
                    </SearchButton>
                </InputWrapper>

                <RightIcons>
                    <img src={house} alt="house"/>
                    <img src={comments} alt="comments"/>
                    <img src={bell} alt="bell"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};

export default TopBar
