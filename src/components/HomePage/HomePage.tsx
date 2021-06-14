import React, {FC} from 'react';
import styled from 'styled-components';
import "./HomePage.css"

import {Wrapper} from '../../styledHelpers/Components';
import useDropdown from "react-dropdown-hook";
import {ExpandedMenu} from "../HomePage/ExpandedMenu";
import ReactPaginate from 'react-paginate';
import {Scrollws} from './scrollMenu'
import search from "../../media//icons/search.png";
import followed from "../../media//icons/followed.png"
import followed2 from "../../media//icons/followed2.png"
import arrowdown from '../../media/icons/arrow-down.png';
import profile from '../../media/icons/profile-example.png';
import skyscrapers from '../../media/images/skyscrapers.png';
import supplierContract from '../../media/images/supplierContract.png';
import projectSignoff from '../../media/images/projectSignoff.png';


const LatestPublications = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  background: white;
  height: 370px;
  max-width: 1460px;
  max-width: 1470px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px #d8dbe1;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
`;

const WorkSpaces = styled.div`
  max-width: 1460px;
  margin-left: 12px;
  margin-top: 20px;
  /*background: white;
 width: 1500px;
 height: 200px;
 border-radius: 5px;*/
`;

const ResumeYourWork = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  background: none;
`;
const SearchField = styled.div`
  width: 250px;
  margin-left: 1100px;
  margin-top: -20px;
  position: absolute;
`;

const SearchButton = styled.div`
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-left: 1250px;
  position: absolute;
  margin-top: -26px;
`;
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 90px;
  justify-content: space-between;
  margin-left: 1330px;
  margin-top: -20px;

`;
const RightSide = styled.div`
  //display: flex;
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
                    height: '370px',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    maxWidth: "380px"
                }}/>
                <a style={{
                    color: 'white',
                    fontSize: '15px',
                    position: 'absolute',
                    marginLeft: '-315px',
                    marginTop: '270px',
                    maxWidth: "250px"

                }}>Lorem inpsum dolor sit amet, consecteur adipisiscing elit... and <br/> one more line for the
                    demo  </a>
                <a style={{
                    fontSize: '11px',
                    position: 'absolute',
                    marginLeft: '-315px',
                    marginTop: '325px',
                    maxWidth: "250px",
                    color: "#caccd3"
                }}>7 jan. 2020</a>
                <a style={{
                    fontSize: '11px',
                    position: 'absolute',
                    marginLeft: '-216px',
                    marginTop: '325px',
                    maxWidth: "250px",
                    color: "#A6B0C1"
                }}>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{ borderRadius: '20px', position: 'absolute', marginLeft: '-251px', marginTop: '320px'}}/>

                <a style={{
                    position: 'absolute',
                    marginTop: '10px',
                    marginLeft: '20px',
                    fontSize: '20px',
                    color: 'darkslategrey',
                    fontWeight: "bold"
                }}>Latest publications</a>


                <img src={projectSignoff} alt={supplierContract}
                     style={{height: '90px', width: '100px', position: 'absolute', marginLeft: '20px', marginTop: '40px'}}/>
                <a style={{fontSize: '15px', position: 'absolute', marginLeft: '130px', marginTop: '50px', color: 'darklategrey', fontWeight:"bold"}}>Lorem inpsum
                    dolor sit amet, consecteur adipisiscing elit... dolor sit amet, consecteur dolor amet, adipisiscing elit... and one <br/> more line for the demo</a>
                <a style={{color: "#7f838f", fontSize: '14px', position: 'absolute', marginLeft: '130px', marginTop: '100px'}}>7 jan.
                    2020 <a style={{color: "#7f838f", marginLeft:"35px"}}></a>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '208px', marginTop: '97px'}}/>

                <img src={projectSignoff} alt={supplierContract}
                     style={{height: '90px', width: '100px', position: 'absolute', marginLeft: '20px', marginTop: '140px'}}/>
                <a style={{fontSize: '15px', position: 'absolute', marginLeft: '130px', marginTop: '150px', color: 'darkslategrey', fontWeight:"bold"}}>Lorem inpsum
                    dolor sit amet, consecteur adipisiscing elit... dolor sit amet, consecteur dolor amet, adipisiscing elit... and one <br/> more line for the demo</a>
                <a style={{color: "#7f838f", fontSize: '14px', position: 'absolute', marginLeft: '130px', marginTop: '198px'}}>7 jan.
                    2020 <a style={{color: "red", marginLeft:"35px"}}></a>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '208px', marginTop: '195px'}}/>

                <img src={projectSignoff} alt={supplierContract}
                     style={{height: '90px', width: '100px', position: 'absolute', marginLeft: '20px', marginTop: '240px'}}/>
                <a style={{fontSize: '15px', position: 'absolute', marginLeft: '130px', marginTop: '250px', color: 'darkslategrey', fontWeight:"bold"}}>Lorem inpsum
                    dolor sit amet, consecteur adipisiscing elit... dolor sit amet, consecteur dolor amet, adipisiscing elit... and one <br/> more line for the demo</a>
                <a style={{color: "#7f838f", fontSize: '14px', position: 'absolute', marginLeft: '130px', marginTop: '298px'}}>7 jan.
                    2020 <a style={{marginLeft:"35px", color: 'darkslategrey'}}></a>John Doe</a>
                <img src={profile} alt={profile} height="20xp"
                     style={{borderRadius: '20px', position: 'absolute', marginLeft: '208px', marginTop: '295px'}}/>



                <a style={{
                    fontSize: '17px',
                    position: 'absolute',
                    marginTop: '340px',
                    marginLeft: '22px',
                    color:'#2678ba',
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold"
                }}>See more publications</a>

            </LatestPublications>
            <br/>
            <div style={{marginLeft: '4%', fontFamily: "Arial, sans-serif"}}>
                <h1 style={{
                    fontSize: '18px',
                    color: 'darkslategrey',
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold"
                }}>Workspaces</h1></div>
            <WorkSpaces>

                <Scrollws/>

            </WorkSpaces>
            <ResumeYourWork>
                <h1 style={{fontSize: '20px', color: 'darkslategrey'}}>Resume Your Work</h1>

                <SearchField>
                    <input type="text" placeholder="Filter by title..." style={{height: '20px'}}/>
                </SearchField>

                <SearchButton>
                    <img src={search} alt="search"/>
                </SearchButton>

                <MenuWrapper ref={wrapperRef}>
                    <RightSide onClick={menuHandler}>
                        <img src={followed2} alt="followed2"/>
                        <span style={{fontSize: '19px', color:'#2678ba'}}>Followed</span>
                    </RightSide>
                    <img onClick={menuHandler} src={arrowdown} alt="arrow" style={{marginTop:"20px", color:'#2678ba'}}/>
                    {dropdownOpen &&
                    <ExpandedMenu/>
                    }
                </MenuWrapper>

                <ReactPaginate
                    previousLabel={"PREVIOUS"}
                    nextLabel={"NEXT"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    containerClassName={"paginate"}
                    activeClassName={"active"} pageCount={15}
                />

            </ResumeYourWork>
        </Wrapper>
    );
}
