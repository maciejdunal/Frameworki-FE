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
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize["18"]};
  border-bottom: 1px solid #d8dbe1;
  
`;

const RightSide = styled.div`
width:32%;`

const RSIcons = styled.div`
  margin-left: 73%;
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap: 20px;

`;

const InputWrapper = styled.div`
  width:36%;
  align-content: center;
  display:flex;
`;

const LeftLogo = styled.div`
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;

`;

const SearchField = styled.div`
  width: 100%;
  padding: 8px;
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 34%;
  position: absolute;
`;


const Menu = styled.div`
  width: 32%;
  display: flex;
  //justify-content: space-between;
    `;

const LeftSide = styled.div`
  display: flex;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  margin-left: 15%;
  //justify-content: space-between;

`;




export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <Wrapper>
            <InnerWrapper>
                <Menu>
                        <LeftSide onClick={menuHandler}>
                            <LeftLogo>
                                <a href="/HomePage"><img src={logo} alt="logo" height="35px" /></a>
                            </LeftLogo>
                            <MenuWrapper ref={wrapperRef}>
                            <img src ={house2} alt = "" />
                            <span  style={{marginLeft:'8%'}}>Home</span>
                            <img onClick={menuHandler} style={{marginLeft:'198px'}} src ={arrowdown} alt = "ad"/>
                            {dropdownOpen &&
                            <ExpandedMenu>
                            </ExpandedMenu>
                            }
                            </MenuWrapper>
                        </LeftSide>


                 </Menu>

                <InputWrapper>
                    <SearchField>
                        <input type="text" placeholder="Search Legalcluster" style={{width:'100%', height:'20px'}}/>
                    </SearchField>

                    <SearchButton>
                        <img src={search} alt="search" />
                    </SearchButton>
                </InputWrapper>
            <RightSide>
                <RSIcons>
                    <img src={house} style={{backgroundColor: "lightgray", border:"25px", borderRadius:"10px"}} alt="house"/>
                    <img src={comments} alt="comments"/>
                    <img src={bell} alt="bell"/>
                </RSIcons>
            </RightSide>
            </InnerWrapper>
        </Wrapper>
    );
};

export default TopBar
