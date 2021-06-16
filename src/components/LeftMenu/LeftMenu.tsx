import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import children from 'react-children-utilities'
import materialui from '@material-ui/core'

import profile from '../../media/icons/profile-example.png';
import network from '../../media/icons/network.png';
import publications from '../../media/icons/publications.png';
import plus from '../../media/icons/plus.png';
import userPlus from '../../media/icons/user-plus.png';
import entities2 from '../../media/icons/entities2.png';

import ecosystem from '../../media/icons/ecosystem.png';

const InnerWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin-top: 20px;
  margin-left: 20px;
  height: 170px;
  width: 320px;
  background: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
`;
const InnerWrapper2 = styled.div`
  font-family: Arial, sans-serif;
  margin-top: 1px;
  margin-left: 20px;
  height: 80px;
  width: 320px;
  background: white;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 2px #d8dbe1;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
`;

const Photo = styled.div`
    margin-left: 118px;
`;
const NameAndTitle = styled.div`
    margin-top: 5px;
    text-align: center;
`;
const YourNetwork = styled.div`
  padding-top: 10px;
  margin-left: 10px;
`;

const YourPublications = styled.div`
margin-left: 10px;
  margin-top: 10px;
`;

const PEE = styled.div`
  margin-left: 35px;
  margin-top: 20px;
`;


export const LeftMenu: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>
                <Photo>
                    <img src = {profile} alt={profile} height="70px" style={{borderRadius:'70px', marginTop:"20px"}} />
                </Photo>
                <NameAndTitle>
                    <div>
                        <button style={{background:'white', border:'none', cursor: 'pointer', outline:'none'}}>
                            <h1 style={{color:'#2678ba', fontSize:'18px', fontWeight: "bold"}}>Humberta Swift</h1>
                        </button>
                    </div>
                    <div>
                        <br/> <h2 style={{color:'darkgrey',marginTop:'-5px', fontSize:'15px'}}>Job title - Company</h2>
                    </div>
                </NameAndTitle>

            </InnerWrapper>
            <InnerWrapper2>
                <YourNetwork>
                    <div style={{marginLeft:'5px', background:"white"}}>
                        <button style={{background:'white', border: 'none', cursor:'pointer', }}>
                            <img src = {network} alt = {network} style={{marginTop:'1px', outline:'none'}}/>
                            <a style={{color:"#555b70", marginLeft:'14px', fontSize:'15px', fontWeight: "bold" }}>Your Network</a>
                        </button>

                        <button style={{width:'33px', marginLeft:'113px', cursor: 'pointer', background:'white', height:'23px', borderRadius:'5px', outline:'none'}}>
                            <img src = {userPlus} alt = {userPlus} style={{marginTop:"2px", marginLeft:"2px"}}/>
                        </button>
                    </div>
                </YourNetwork>
                <YourPublications>
                    <div style={{marginLeft:'5px'}}>
                        <button style={{background:'white', border:'none', cursor:'pointer', outline:'none' }}>
                            <img src = {publications} alt = {publications}/>
                            <a style={{color:"#555b70", marginLeft:'14px', fontSize:'15px', fontWeight: "bold"}}>Your Publications</a>
                        </button>

                        <button style={{width:'33px', marginLeft:'85px', cursor: 'pointer', background:'white', height:'23px', borderRadius:'5px', outline:'none'}}>
                            <img src = {plus} alt = {plus} style={{marginTop:"1px"}}/>
                        </button>
                    </div>
                </YourPublications>

            </InnerWrapper2>
            <PEE>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer', outline:'none'}}>
                        <img src = {publications} alt = {publications} style={{height:'18px'}}/>
                        <a style={{color:"#555b70",marginLeft:'20px', fontSize:'14px', fontWeight: "bold"}}>Publications</a>
                    </button>
                </div>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer', outline:'none'}}>
                        <img src = {ecosystem} alt = {ecosystem} style={{height:'25px'}}/>
                        <a style={{color:"#555b70",marginLeft:'20px', fontSize:'14px', fontWeight: "bold"}}>Ecosystem</a>
                    </button>
                </div>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer', outline:'none'}}>
                        <img src = {entities2} alt = {entities2}/>
                        <a href="/Entities" style={{color:"#555b70", marginLeft:'25px', fontSize:'14px',fontWeight: "bold", textDecoration:'none'}}>Entities</a>
                    </button>
                </div>

            </PEE>

        </Wrapper>
    )

}
