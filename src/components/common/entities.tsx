import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';
import all from '../../media/icons/all.jpg';
import filters from '../../media/icons/filters.jpg';
import kropeczki from '../../media/icons/kropeczki.jpg';
import mosaic from '../../media/icons/search.png';
import share from '../../media/icons/share.jpg';
import sort from '../../media/icons/sort.jpg';
import arrows from '../../media/icons/arrows.jpg.jpg';
import cog from '../../media/icons/cog.png';
import search from "../../media/icons/search.png";
import followed from "../../media/icons/followed2.jpg";

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


export const Entities: FC = () => {
    return (
        <Wrapper style={{backgroundColor:'white', marginTop:'5px', marginLeft:'5px', width:'1595px'}}>

            <TTbar>
                <div>
                    <a style={{fontSize:'23px', position:'absolute', marginLeft:'25px', marginTop:'25px',}}>Entities</a>
                    <img style={{height:'16px' ,position:'absolute', marginLeft:'108px', marginTop:'28px',}} src={cog} alt={cog}/>
                    <img style={{height:'35px' ,position:'absolute', marginLeft:'1450px', marginTop:'28px', borderRadius:'4px'}} src={mosaic} alt={mosaic}/>
                </div>

            </TTbar>

            <Tbar>
                <img style={{position:'absolute', marginLeft:'110px' }} src={kropeczki} alt={kropeczki}/>

                <img style={{position:'absolute',height:'30px', borderRadius:'5px', marginLeft:'20px' }} src={all} alt={all}/>

                <img style={{position:'absolute', marginLeft:'150px'}} src={sort} alt={sort}/>

                <img style={{height:'30px' ,position:'absolute', marginLeft:'1430px', marginTop:'10px',borderRadius:'5px', border:'1px solid  blue', }} src ={followed} alt={followed}/>

                <SearchField>
                    <input type="text" placeholder="Search..." style={{width:'200px', height:'25px', fontSize:'20px'}}/>
                </SearchField>

                <SearchButton>
                    <img style ={{height:'21px'}} src={search} alt="search" />
                </SearchButton>

            </Tbar>

        </Wrapper>

    );
}
