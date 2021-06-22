import React, { FC } from 'react';
import styled from 'styled-components';
import "../common/common.css"
import { fontSize } from '../../styledHelpers/FontSizes'
import { Badge } from '@material-ui/core';
import { ExpandedMenu } from './ExpandedMenu';

import logo from '../../media/logo.png';
import search from '../../media/icons/search.png';
import house from '../../media/icons/house.png';
import comments from '../../media/icons/comments.png';
import bell from '../../media/icons/bell.png';
import arrowdown from '../../media/icons/arrow-down.png';
import useDropdown from "react-dropdown-hook";
import house2 from '../../media/icons/house2.svg'

const HPWrapper = styled.div`
  font-family: "Calvin-Medium";
  margin-top:5px;
  background: white;
`;

const InnerWrapper = styled.div`
  height: 50px; 
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
  widthh:36%;
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
  margin-left: 20%;
  min-width:800px;
  padding: 8px;
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 11px;
  margin-left: 44.7%;
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

`;




export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <HPWrapper>
            <InnerWrapper>
                <Menu>
                        <LeftSide onClick={menuHandler}>
                            <LeftLogo>
                                <a href="/HomePage"><img src={logo} alt="logo" height="35px" /></a>
                            </LeftLogo>
                            <MenuWrapper ref={wrapperRef}>
                            <img src ={house2} alt = "" />
                            <span  style={{marginLeft:'8%', marginTop:'6px', fontSize:'19px'}}>Home</span>
                            <img onClick={menuHandler} style={{marginLeft:'198px'}} src ={arrowdown} alt = "ad"/>
                            {dropdownOpen &&
                            <ExpandedMenu/>

                            }
                            </MenuWrapper>
                        </LeftSide>


                 </Menu>

                <InputWrapper>
                    <SearchField>
                        <input type="text" id="topsSearchBar" placeholder="Search Legalcluster" style={{width:'100%', height:'32px', borderRadius: '5px', border: '1px solid #eaeaea '}}/>
                    </SearchField>

                    <SearchButton>
                        <img src={search} alt="search"/>
                    </SearchButton>
                </InputWrapper>
            <RightSide>
                <RSIcons>
                    <a href="/HomePage"><img style={{cursor:'pointer'}} src={house} alt="house"/></a>
                    <Badge color="secondary" badgeContent={5}><img style={{cursor:'pointer', height:'25px'}} src={comments} alt="comments"/></Badge>
                    <Badge color="secondary" badgeContent={0} showZero><img style={{cursor:'pointer', height:'25px'}} src={bell} alt="bell"/></Badge>
                </RSIcons>
            </RightSide>
            </InnerWrapper>
        </HPWrapper>
    );
};

export default TopBar
