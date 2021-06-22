import React, {FC} from 'react';
import add from '../../media/icons/addToACluster.png';
import attachment from '../../media/icons/attachment.png';
import req from '../../media/icons/createARequest.png';
import message from '../../media/icons/message.png';
import pencil from '../../media/icons/pencil.png';
import x from '../../media/icons/x.png';
import styled from "styled-components";
import profile from '../../media/icons/profile-example.png';
import { Input } from 'semantic-ui-react'

const Wrapper = styled.div`;
  font-family: "Calvin-Medium";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  width: 100%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 1.5%;
  border-radius: 5px;
  border: 1px solid #d8dbe1;
`;
const SeeProfile = styled.div`;
  display: flex;
  justify-content: space-between;
  height: 22%;
  border-bottom: 1px solid #d8dbe1;
`;

export const Profile: FC = () => {
    return (
        <Wrapper>
            <SeeProfile>
                <div style={{width:'20%', textAlign:'center', display:"inline-grid"}}>
                    <img src = {profile} alt={profile} height="70px" style={{borderRadius:'70px', marginTop:"55%", marginLeft:'27%'}} />
                    <a style={{color: '#6ca9b9', fontSize: '14px', marginTop: '-5%'}}>See Profile</a>
                </div>
                <div style={{width:'80%', display:"inline-grid"}}>
                    <div style={{maxHeight:"30px", marginTop:'3%'}}>
                        <img src = {message} alt={message} height="70px" style={{left:'0',maxHeight:"19px", maxWidth:'25%'}} />
                        <img src = {req} alt={req} height="70px" style={{marginLeft:'5%',maxHeight:"20px",maxWidth:'25%'}} />
                        <img src = {add} alt={add} height="70px" style={{marginLeft:'5%',maxHeight:"19px", maxWidth:'25%'}} />
                        <img src = {x} alt={x} height="70px" style={{marginLeft:'14%',maxHeight:"15px"}} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="ui transparent input">
                            <input value="Humberta">

                            </input>
                            <h1>Clifford Chance</h1>
                            <h1>New-york</h1>
                            <h1>Partner</h1>
                        </div>
                        <div style={{marginLeft:'60%'}}>
                            <img src = {pencil} alt={pencil} height="70px" style={{marginLeft:'77%',maxHeight:'20px', marginBottom:'5px', padding:'15%'}} />
                            <h1>humbertaswift@gmail.com</h1>
                            <h1>+33 (0)6 12 34 56 78</h1>
                        </div>
                    </div>
                </div>
            </SeeProfile>
        </Wrapper>
    );
}
