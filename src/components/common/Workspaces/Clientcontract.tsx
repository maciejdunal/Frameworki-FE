import React, { FC } from 'react';
import styled from 'styled-components';
import {Wrapper} from '../../../styledHelpers/Components';
import useDropdown from "react-dropdown-hook";
import WCsasWS from "../../../media/icons/WCsasWS.jpg"
import followed from "../../../media/icons/followed.png";
import search from "../../../media/icons/search.png";
import allWS from "../../../media/icons/allWS.jpg";
import sasWS from "../../../media/icons/sasWS.jpg";
import sarlWS from "../../../media/icons/sarlWS.jpg";
import communitiesWS from "../../../media/icons/communitiesWS.jpg";
import poaWS from "../../../media/icons/poaWS.jpg";
import surveyWS from "../../../media/icons/surveyWS.jpg";
import threedots from "../../../media/icons/3dots.jpg";
import secondary from "../../../media/icons/secondaryWS.jpg";

import exploreWS from "../../../media/icons/exploreWS.jpg";
import structureWS from "../../../media/icons/structureWS.jpg";
import defineWS from "../../../media/icons/defineWS.jpg";
import entities from "../../../media/icons/entities.png";
import cog from "../../../media/icons/cog.png";
import clientconract from "../../../media/images/corporate.png";
import Paginate from "./PaginateWS"
import followed2 from "../../../media/icons/followed2.png";
import arrowdown from "../../../media/icons/arrow-down.png";
import {ExpandedMenu} from "../../HomePage/ExpandedMenu";





const LatestUpdates = styled.div`
  background-color: white;
  margin-left: 175px;
  width: 1050px;
  margin-top: -75px;
  height: 1450px;
  
 
`;

const StartWorking = styled.div`
  background-color: #e7e7e7;
  margin-left: 15%;
  width: 1045px;
  height: 300px;
  margin-bottom: 1px;
  border-radius: 5px;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
  border-bottom: 2px solid #d8dbe1;
  border-top: 2px solid #d8dbe1;
`;

const ClientContract = styled.div`
  background-color: white;
  margin-left: 200px;
  width: 1000px;
  border-radius: 5px;
  height: 250px;
  margin-bottom: 20px;
  border-left: 2px solid #d8dbe1;
  border-right: 2px solid #d8dbe1;
  border-bottom: 2px solid #d8dbe1;
  
  
`;

const Image = styled.div`
  margin-top: 30px;
  height: 150px;
  width: 1000px;
  
`;

const TopT = styled.div`
  height: 100px;
  width: 1000px;
`;


const LatestUpdatesTop = styled.div`
  background-color: #F5F7F9;
  
`;
const LatestUpdatesMedia = styled.div`
  background-color: #F5F7F9;
  margin-top: 15px;
  
`;
const LatestUpdatesContent = styled.div`
  background-color: #F5F7F9;
  margin-top: 15px;
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

export const Clientcontract: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <Wrapper>
            <ClientContract>
                <Image style={{borderRadius:'5px'}}>
                    <img style={{borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}} src = {clientconract} alt = {clientconract}/>

                </Image>

                <TopT>
                    <img style={{height:'50px', marginLeft:'20px', marginTop:'20px'}} src = {entities} alt = {entities}/>
                    <a style={{fontSize:'25px',position:'absolute', marginTop:'10px', marginLeft:'20px'}}>Client contract</a>
                    <img style={{height:'20px', position:'absolute', marginTop:'10px', marginLeft:'900px'}} src={cog} alt={cog}/>
                    <a style={{fontSize:'15px', marginLeft:'23px', color:'#9b9ea2'}}>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</a>
                </TopT>

            </ClientContract>

            <StartWorking>
                <br/><a style={{fontSize:'15px',fontWeight:'bold', marginLeft:'30px', marginTop:'10px', color:'#9b9ea2', fontFamily: "Arial"}}>Start working on corporate matters</a>
                <a style={{fontSize:'15px',fontWeight:'bold', marginLeft:'68%', color:'#9b9ea2', fontFamily: "Arial"}}>Hide</a>
                <img style={{height:'210px', marginLeft:'22px', marginTop:'20px', borderRadius:'5px'}} src={exploreWS} alt={exploreWS}/>
                <img style={{height:'210px', marginLeft:'22px', marginTop:'20px', borderRadius:'5px'}} src={structureWS} alt={structureWS}/>
                <img style={{height:'210px', marginLeft:'22px', marginTop:'20px', borderRadius:'5px'}} src={defineWS} alt={defineWS}/>

            </StartWorking>

            <LatestUpdates>
                <LatestUpdatesTop>
                    <RYW2>
                        <h1 style={{
                            fontSize: '22px',
                            color: 'darkslategrey',
                            fontFamily: "Calvin-Medium",
                            marginLeft: '2%',
                            paddingBottom: '1%',
                            minWidth: '200px'
                        }}>Latest Updates</h1>

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


                </LatestUpdatesTop>

                <LatestUpdatesMedia>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={allWS} alt={allWS}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={sasWS} alt={sasWS}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={sarlWS} alt={sarlWS}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={secondary} alt={secondary}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={communitiesWS} alt={communitiesWS}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={poaWS} alt={poaWS}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={surveyWS} alt={surveyWS}/>
                    <img style={{height:'30px' ,marginLeft:'12px', borderRadius:'5px'}} src={threedots} alt={threedots}/>

                </LatestUpdatesMedia>

                <LatestUpdatesContent>
                    <Paginate/>

                </LatestUpdatesContent>


            </LatestUpdates>


        </Wrapper>


    );
}
