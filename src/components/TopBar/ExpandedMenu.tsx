import React, { FC } from 'react';
import styled from "styled-components";

import home from "../../media//icons/house2.png";
import people from '../../media/icons/people.png';
import network from '../../media/icons/network.png';
import publications from '../../media/icons/publications.png';
import administration from '../../media/icons/administration.png';
import entities2 from '../../media/icons/entities2.png';
import privacy from '../../media/icons/privacy.png';
import settings from '../../media/icons/settings.png';
import logout from '../../media/icons/logout.png';
import profile from "../../media/icons/profile-example.png";


const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  background: white;
  padding: 0px;
  border: 1px solid #caccd3;
  width: 215px;
`;

const Account = styled.div`
  display: inline-flex;
`;



export const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <ul>
                <label style={{color:'#969A9F', fontSize:'13px', fontWeight:'bold', padding:'14px'}}>Platform</label>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={home} alt={home} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Home</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={publications} alt={publications} style={{paddingLeft:'14px', paddingRight:'18px',verticalAlign: 'text-bottom'}}/>Publications</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={people} alt={people} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>People</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={entities2} alt={entities2} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Entities</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={administration} alt={administration} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Administration</li>
                <label style={{color:'#969A9F', fontSize:'13x', fontWeight:'bold', padding:'14px'}}>Workspaces</label>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={entities2} alt={entities2} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Client conract</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={entities2} alt={entities2} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Supplier contract</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={entities2} alt={entities2} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Corporate</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={entities2} alt={entities2} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Group Norms</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={entities2} alt={entities2} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Real estate contracts</li>
                <hr style={{height: '1px', width: '100%',borderWidth:'0', color:'#caccd3d', backgroundColor:'#caccd3'}}></hr>
                <label style={{color:'#969A9F', fontSize:'13px', fontWeight:'bold', padding:'14px'}}>Account</label>
                <li style={{paddingBottom: '0px',paddingTop: '4px'}}>
                    <img src={profile} alt={profile} height="30xp" style={{marginLeft:'15px',borderRadius: '20px', position: 'absolute'}}/>
                    <Account>
                    <a style={{color:'darkslategrey', fontSize:'14px', fontWeight:'bold', marginLeft:'60px'}}>John Doe</a>
                    <a style={{color:'darkblue', fontSize:'11px', marginLeft:'-55px', marginTop:'17px'  }}>See Profile</a>
                    </Account>
                </li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={privacy} alt={privacy} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Privacy</li>
                <li style={{paddingTop:'5px',paddingBottom:'5px', color:'darkslategrey', fontWeight:'bold', fontSize:'17px'}}><img src={settings} alt={settings} style={{paddingLeft:'14px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Settings</li>
                <hr style={{height: '1px', width: '100%',borderWidth:'0', color:'#caccd3d', backgroundColor:'#caccd3'}}></hr>
                <li style={{color:'#969A9F', paddingTop:'5px', paddingBottom:'15px'}}><img src={logout} alt={logout} style={{paddingLeft:'55px', paddingRight:'13px',verticalAlign: 'text-bottom'}}/>Logout</li>
            </ul>
        </Wrapper>
    );

};
