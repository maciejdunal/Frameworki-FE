import React, {FC} from 'react';
import {useState, ChangeEvent} from 'react';
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
  top: 43px;
  left: 0;
  position: absolute;
  z-index: 1;
  background: white;
  border: 1px solid #caccd3;
  max-width: 300px;
  width: 108%;
`;

const Account = styled.div`
  display: inline-flex;
`;


export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>(``);
    const inputHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        const text = ev.target.value;
        setInputText(text);
    }
    return (
        <Wrapper>
            <ul>
                <input style={{margin:'5%', width:'80%'}} type="text" placeholder="Search"  value={inputText}
                       onChange={inputHandler}/><br/>
                <label
                    style={{color: '#969A9F', fontSize: '13px', fontWeight: 'bold', padding: '14px'}}>Platform</label>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={home} alt={home}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Home
                </li>}
                {'Publication'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={publications} alt={publications}
                        style={{paddingLeft: '14px', paddingRight: '18px', verticalAlign: 'text-bottom'}}/>Publications
                </li>}
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={people} alt={people}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>People
                </li>}
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={entities2} alt={entities2}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Entities
                </li>}
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={administration} alt={administration}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Administration
                </li>}
                <label
                    style={{color: '#969A9F', fontSize: '13px', fontWeight: 'bold', padding: '14px'}}>Workspaces</label>
                {'Client conract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={entities2} alt={entities2}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Client
                    conract
                </li>}
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={entities2} alt={entities2}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Supplier
                    contract
                </li>}
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={entities2} alt={entities2}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Corporate
                </li>}
                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={entities2} alt={entities2}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Group Norms
                </li>}
                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={entities2} alt={entities2}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Real estate
                    contracts
                </li>}
                <hr style={{
                    height: '1px',
                    width: '100%',
                    borderWidth: '0',
                    color: '#caccd3d',
                    backgroundColor: '#caccd3'
                }}></hr>
                <label style={{color: '#969A9F', fontSize: '13px', fontWeight: 'bold', padding: '14px'}}>Account</label>
                <li style={{paddingBottom: '0px', paddingTop: '4px'}}>
                    <img src={profile} alt={profile} height="30xp"
                         style={{marginLeft: '15px', borderRadius: '20px', position: 'absolute'}}/>
                    <Account>
                        <a style={{color: 'darkslategrey', fontSize: '16px', fontWeight: 'bold', marginLeft: '58px'}}>John
                            Doe</a>
                        <a style={{color: 'darkblue', fontSize: '14px', marginLeft: '-58px', marginTop: '17px'}}>See
                            Profile</a>
                    </Account>
                </li>
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={privacy} alt={privacy}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Privacy
                </li>
                <li style={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    color: 'darkslategrey',
                    fontWeight: 'bold',
                    fontSize: '17px'
                }}><img src={settings} alt={settings}
                        style={{paddingLeft: '14px', paddingRight: '13px', verticalAlign: 'text-bottom'}}/>Settings
                </li>
                <hr style={{
                    height: '1px',
                    width: '100%',
                    borderWidth: '0',
                    color: '#caccd3d',
                    backgroundColor: '#caccd3'
                }}></hr>
                <li style={{
                    color: '#969A9F',
                    height: '40px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '30%'
                }}>
                    <img src={logout} alt={logout} style={{paddingRight: '10%', marginTop: '10%'}}/>
                    Logout
                </li>
            </ul>
        </Wrapper>
    );

};
