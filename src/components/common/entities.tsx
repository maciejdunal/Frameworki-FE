import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';
import all from '../../media/icons/all.png';
import filters from '../../media/icons/filters.jpg';
import threedotsbutton from '../../media/icons/3dots.jpg';
import mosaic from '../../media/icons/mosaic.jpg';
import share from '../../media/icons/share.jpg';
import sort from '../../media/icons/sort.jpg';
import arrows2 from '../../media/icons/arrows.jpg';
import cog from '../../media/icons/cog.png';
import search from "../../media/icons/search.png";
import followed from "../../media/icons/followed.png";
import Kinglawfirm1 from "../../media/images/Kinglawfirm1.png"
import Kinglawfirm2 from "../../media/images/Kinglawfirm1.png"


const TTbar = styled.div`
`;

const Tbar = styled.div`
`;

const Content = styled.div`
`;
const SearchField = styled.div`
  width: 250px;
  padding: 10px;
  margin-left: 1150px;
  margin-top: 75px;
  
`;

const SearchButton = styled.div`
  height: 35px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-left: 1285px;
  position: absolute;
  margin-top: -43px;
  `;

const Page = styled.div`
`;


export const Entities: FC = () => {
    return (
        <Wrapper style={{backgroundColor:'white', marginTop:'20px', marginLeft:'5px', width:'1550px', borderRadius: '5px'}}>

            <TTbar>
                <div>
                    <a style={{fontSize:'20px', position:'absolute', marginLeft:'25px', marginTop:'20px', fontWeight:'bold'}}>Entities</a>
                    <img style={{height:'16px' ,position:'absolute', marginLeft:'108px', marginTop:'20px',cursor:'pointer',}} src={cog} alt={cog}/>
                    <img style={{height:'35px' ,position:'absolute', marginLeft:'1410px', marginTop:'38px', borderRadius:'4px',cursor:'pointer'}} src={mosaic} alt={mosaic}/>
                </div>

            </TTbar>

            <Tbar>

                <img style={{position:'absolute', marginLeft:'340px', marginTop:'13px',cursor:'pointer'}} src={share} alt={share}/>

                <img style={{position:'absolute', marginLeft:'300px', marginTop:'12px',cursor:'pointer',borderLeft:'1px solid lightgrey', borderRight:'1px solid lightgrey'}} src={arrows2} alt={arrows2}/>

                <img style={{position:'absolute', marginLeft:'210px', marginTop:'12px',cursor:'pointer'}} src={filters} alt={filters}/>

                <img style={{position:'absolute', marginLeft:'110px', marginTop:'10px',cursor:'pointer' }} src={threedotsbutton} alt={threedotsbutton}/>

                <img style={{position:'absolute',height:'30px', borderRadius:'5px', marginLeft:'20px', marginTop:'10px',cursor:'pointer' }} src={all} alt={all}/>

                <img style={{position:'absolute', marginLeft:'150px', marginTop:'10px',borderLeft:'1px solid lightgrey',cursor:'pointer'}} src={sort} alt={sort}/>

                <img style={{height:'30px' ,position:'absolute', marginLeft:'1404px', marginTop:'10px',borderRadius:'5px', border:'1px solid blue',cursor:'pointer', }} src ={followed} alt={followed}/>




                <SearchField>
                    <input type="text" placeholder="Search..." style={{width:'200px', height:'25px', fontSize:'20px'}}/>
                </SearchField>

                <SearchButton>
                    <img style ={{height:'19px',marginLeft:'55px'}} src={search} alt="search" />
                </SearchButton>

            </Tbar>

            <Page>

                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm1} alt={Kinglawfirm1}/>
                <img style={{height:'120px', boxShadow: '0px 2px #d8dbe1', borderLeft: '1px solid #d8dbe1', borderRight: '1px solid #d8dbe1', marginLeft:'4px',cursor:'pointer',borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', marginBottom:'10px'}} src={Kinglawfirm2} alt={Kinglawfirm2}/>


            </Page>

        </Wrapper>

    );
}
