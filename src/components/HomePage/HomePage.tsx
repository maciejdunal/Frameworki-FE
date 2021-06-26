import React, {FC} from 'react';
import styled from 'styled-components';
import "./HomePage.css"
import "../common/common.css"
import {Wrapper} from '../../styledHelpers/Components';
import useDropdown from "react-dropdown-hook";
import {ExpandedMenu} from "../HomePage/ExpandedMenu";

import {Scrollws} from './scrollMenu'
import search from "../../media//icons/search.png";

import followed2 from "../../media//icons/followed2.png";
import arrowdown from '../../media/icons/arrow-down.png';
import profile from '../../media/icons/profile-example.png';
import skyscrapers from '../../media/images/skyscrapers.png';
import supplierContract from '../../media/images/supplierContract.png';
import projectSignoff from '../../media/images/projectSignoff.png';
import Paginate from "./Paginate";


const LatestPublications = styled.div`
  font-family: "Calvin-Medium";
  margin-left: 4%;
  margin-top: 2%;
  background: white;
  height: 37%;
  max-width: 90%;
  border-radius: 5px;
  box-shadow: 0px 2px #d8dbe1;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
`;

const WorkSpaces = styled.div`
  max-width: 1460px;
  margin-left: 4%;
  margin-top: 2%;
  margin-right: 6%;
`;

const WSSmenu = styled.div`
`;

const RYW = styled.div`
  font-family: "Calvin-Medium";
  margin-top: 2%;
  margin-left: 4%;

`;

const RYW2 = styled.div`
  font-family: "Calvin-Medium";
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  max-width: 86%;
`;
const SearchField = styled.div`
  margin-left: 46.7%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

const SearchButton = styled.div`
  margin-left: 85%;
  margin-top: 3px;
  padding: 3px;
  font-size: 20px;
  cursor: none;
  position: absolute;
`;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  width: 135px;
  align-items: center;
  margin-left: 80%;
  //margin-top: -20px;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const HomePage: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <Wrapper>
            <LatestPublications>

                <img src={skyscrapers} alt={skyscrapers} style={{
                    height: '100%',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    width: "410px"
                }}/>
                <a style={{
                    color: 'white',
                    fontSize: '16px',
                    position: 'absolute',
                    marginLeft: '-18%',
                    marginTop: '13%',
                    maxWidth: "360px"

                }}>Lorem inpsum dolor sit amet, consecteur adipisiscing elit... and <br/> one more line for the
                    demo </a>
                <a style={{
                    fontSize: '11px',
                    position: 'absolute',
                    marginLeft: '-18%',
                    marginTop: '15.9%',
                    maxWidth: "350px",
                    color: "#caccd3"
                }}>7 jan. 2020</a>
                <a style={{
                    fontSize: '11px',
                    position: 'absolute',
                    marginLeft: '-13.8%',
                    marginTop: '15.9%',
                    maxWidth: "250px",
                    color: "#A6B0C1"
                }}>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '-15.2%', marginTop: '15.5%'}}/>

                <a style={{
                    position: 'absolute',
                    marginTop: '10px',
                    marginLeft: '20px',
                    fontSize: '25px',
                    color: 'darkslategrey',
                    fontWeight: "bold",
                }}>Latest publications</a>

                {/*1---------------------------------------------------------------------------------------------------------------------*/}

                <img src={projectSignoff} alt={supplierContract}
                     style={{
                         height: '8%',
                         width: '4.5%',
                         position: 'absolute',
                         marginLeft: '1.1%',
                         marginTop: '2.1%'
                     }}/>
                <a style={{
                    fontSize: '21px',
                    position: 'absolute',
                    marginLeft: '6.5%',
                    marginTop: '2.4%',
                    color: 'darklategrey'
                }}>Lorem inpsum
                    dolor sit amet, consecteur adipisiscing elit... and one <br/> more line for the demo</a>
                <a style={{
                    color: "#7f838f",
                    fontSize: '14px',
                    position: 'absolute',
                    marginLeft: '6.5%',
                    marginTop: '100px'
                }}>7 jan.
                    2020 <a style={{color: "#7f838f", marginLeft: "35px"}}></a>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '10.2%', marginTop: '5%'}}/>
                {/*2---------------------------------------------------------------------------------------------------------------------*/}

                <img src={projectSignoff} alt={supplierContract}
                     style={{
                         height: '8%',
                         width: '4.5%',
                         position: 'absolute',
                         marginLeft: '1.1%',
                         marginTop: '6.85%'
                     }}/>
                <a style={{
                    fontSize: '21px',
                    position: 'absolute',
                    marginLeft: '6.5%',
                    marginTop: '7.3%',
                    color: 'darkslategrey'
                }}>Lorem inpsum
                    dolor sit amet, consecteur adipisiscing elit... and one <br/> more line for the demov</a>
                <a style={{
                    color: "#7f838f",
                    fontSize: '14px',
                    position: 'absolute',
                    marginLeft: '6.5%',
                    marginTop: '9.9%'
                }}>7 jan.
                    2020 <a style={{marginLeft: "35px"}}></a>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '10.2%', marginTop: '9.6%'}}/>
                {/*3---------------------------------------------------------------------------------------------------------------------*/}

                <img src={projectSignoff} alt={supplierContract}
                     style={{
                         height: '8%',
                         width: '4.5%',
                         position: 'absolute',
                         marginLeft: '1.1%',
                         marginTop: '11.6%'
                     }}/>
                <a style={{
                    fontSize: '21px',
                    position: 'absolute',
                    marginLeft: '130px',
                    marginTop: '12%',
                    color: 'darkslategrey'
                }}>Lorem inpsum
                    dolor sit amet, consecteur adipisiscing elit... and one <br/> more line for the demo</a>
                <a style={{
                    color: "#7f838f",
                    fontSize: '14px',
                    position: 'absolute',
                    marginLeft: '6.5%',
                    marginTop: '14.5%'
                }}>7 jan.
                    2020 <a style={{marginLeft: "35px", color: 'darkslategrey'}}></a>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '10.2%', marginTop: '14.2%'}}/>


                <a style={{
                    fontSize: '16px',
                    position: 'absolute',
                    marginTop: '345px',
                    marginLeft: '23px',
                    color: '#2678ba',
                    fontFamily: "Calvin-Medium",

                }}>See more publications</a>

            </LatestPublications>
            <WorkSpaces>

                <h1 style={{
                    fontSize: '22px',
                    color: 'darkslategrey',
                    fontFamily: "Calvin-Medium",
                    marginLeft: '2%',
                    paddingBottom: '1%'
                }}>Workspaces</h1>
                <WSSmenu>
                    <Scrollws/>
                </WSSmenu>

            </WorkSpaces>
            <RYW>
                <RYW2>
                    <h1 style={{
                        fontSize: '22px',
                        color: 'darkslategrey',
                        fontFamily: "Calvin-Medium",
                        marginLeft: '2%',
                        paddingBottom: '1%',
                        minWidth: '200px'
                    }}>Resume Your Work</h1>

                    <SearchField>
                        <input type="text" id="searchbar" placeholder="Filter by title..." style={{
                            width: '100%',
                            height: '25px',
                            borderRadius: '5px',
                            border: '1px solid #eaeaea '
                        }}/>
                        <SearchButton>
                            <img src={search} alt="search" style={{height: '15px'}}/>
                        </SearchButton>
                    </SearchField>


                    <MenuWrapper ref={wrapperRef}>
                        <RightSide onClick={menuHandler}>
                            <img src={followed2} alt="followed2" style={{width: '35px', marginRight: '8px'}}/>
                            <span style={{
                                fontSize: '19px',
                                color: '#2e429f',
                                marginTop: '5%',
                                margin: '4px'
                            }}>Followed</span>
                        </RightSide>
                        <img onClick={menuHandler} src={arrowdown} alt="arrow"
                             style={{marginTop: "0px", color: '#2678ba', marginLeft: '3px'}}/>
                        {dropdownOpen &&
                        <ExpandedMenu/>
                        }
                    </MenuWrapper>
                </RYW2>
                <Paginate/>
            </RYW>
        </Wrapper>
    );
}
