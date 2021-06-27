import React, {FC} from 'react';
import add from '../../media/icons/createARequest.jpg';
import attachment from '../../media/icons/attachment.png';
import req from '../../media/icons/req.png';
import message from '../../media/icons/message.png';
import pencil from '../../media/icons/pencil.png';
import crossedpencil from '../../media/icons/crossed-pencil.png';
import x from '../../media/icons/x.png';
import styled from "styled-components";
import profile from '../../media/icons/profile-example.png';
import userPlus from "../../media/icons/user-plus.png";
import './Profile.css';
import attach from '../../media/images/profileAttach.png';
import userIcon from '../../media/icons/userIcon.png';
import AutosizeInput from 'react-input-autosize';


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
const SeeProfile = styled.div`
  display: flex;
  justify-content: space-between;
  height: 22%;
  border-bottom: 1px solid #d8dbe1;
`;

const SeeProfile2 = styled.div`
 padding:15px;
  display: flex;
  border-bottom: 1px solid #d8dbe1;
`

const PanelInfo = styled.div`
 padding:15px;
  display: flex;
  border-bottom: 1px solid #d8dbe1;
`

const Proposals = styled.div`

  display: flex;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
  border-bottom: 1px solid #d8dbe1;
  background-color: white;
`;

const Reviews = styled.div`

  display: flex;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
  border-bottom: 1px solid #d8dbe1;
  background-color: white;
`;
const Amount = styled.div`

  display: flex;
  border-left: 1px solid #d8dbe1;
  border-right: 1px solid #d8dbe1;
  border-bottom: 1px solid #d8dbe1;
  background-color: white;
`;


/*------------------------Edit Funcionts--------------*/
let pencilSource = pencil;


function editContentProfile() {
    var elements = document.getElementsByClassName("see-profile") as HTMLCollectionOf<HTMLElement>;
    /*let elementById = document.getElementById('pencil') as HTMLImageElement;*/
    for(const el of elements as any){
        if (el.disabled == true) {
            el.disabled = false;
            for(var i = 0; i < elements.length; i++){
                elements[i].style.border='';
            }
        }
        else {
            el.disabled = true;
            for(var i = 0; i < elements.length; i++){
                elements[i].style.border='none';}
        }
    }
}

function editContentProfile2() {
    var elements = document.getElementsByClassName("see-profile2") as HTMLCollectionOf<HTMLElement>;
    /*let elementById = document.getElementById('pencil') as HTMLImageElement;*/
    for(const el of elements as any){
        if (el.disabled == true) {
            el.disabled = false;
            for(var i = 0; i < elements.length; i++){
                elements[i].style.border='';

            }

        }
        else {
            el.disabled = true;
            for(var i = 0; i < elements.length; i++){
                elements[i].style.border='none';}
        }
    }
}


export const Profile: FC = () => {

    return (
        <Wrapper>
            <SeeProfile>
                <div style={{width: '20%', textAlign: 'center', display: "inline-grid"}}>
                    <img src={profile} alt={profile} height="90px"
                         style={{borderRadius: '70px', marginTop: "43%", marginLeft: '23%'}}/>
                    <a style={{color: '#6ca9b9', fontSize: '17px', marginTop: '-5%', fontFamily: "Calvin-Medium"}}>See Profile</a>
                </div>

                <div style={{width: '80%', display: "inline-grid"}}>
                    <div style={{maxHeight: "30px", marginTop: '3%'}}>

                        <div onClick={()=>alert('not implemented')} style={{display: 'inline-block', cursor:'pointer', marginRight:'50px'}}>
                            <img src={message} alt={message} style={{height: '22px', width: '22px'}}/>
                            <div style={{marginLeft: '30px', marginTop: '-23px', fontSize: '22px', fontFamily: "Calvin-Medium", color:'#50576c'}}>Message</div>
                        </div>


                        <div onClick={()=>alert('not implemented')} style={{display: 'inline-block', cursor:'pointer',marginRight:'50px'}}>
                            <img src={req} alt={req} style={{marginLeft: '4px', height: '25px', width: '25px', fontFamily: "Calvin-Medium"}}/>
                            <div style={{marginLeft: '35px', marginTop: '-26px', fontSize: '22px', color:'#50576c'}}>Create a request
                            </div>
                        </div>

                        <div onClick={()=>alert('not implemented')} style={{display: 'inline-block', cursor:'pointer'}}>
                            <img src={add} alt={add} style={{marginLeft: '4px', height: '25px', width: '25px'}}/>
                            <div style={{marginLeft: '38px', marginTop: '-25px', fontSize: '22px', fontFamily: "Calvin-Medium", color:'#50576c'}}>Add to a cluster
                            </div>
                        </div>

                        <div style={{display: 'inline-grid'}}>
                            <a href="/HomePage"><img src={x} alt={x} style={{marginLeft: '20px', height: '25px', width: '25px'}}/></a>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                        <div style={{ marginTop:'26px'}}>
                           <div>
                               <input type='text'  disabled={true} defaultValue='John Doe' className="see-profile" style={{height:'25px', color:'#50576c', fontFamily: "Calvin-Medium", border:'none', outline:'none',backgroundColor:'white', borderRadius:'5px', fontSize:'22px', width:'150px'}}></input>
                           </div>
                            <div>
                                <input type='text' disabled={true} defaultValue={'Clifford Chance'}  className="see-profile" style={{height:'25px', color:'#50576c', fontFamily: "Calvin-Medium",border:'none', outline:'none',backgroundColor:'white', borderRadius:'5px', fontSize:'22px', width:'150px'}}></input>
                            </div>
                            <input type='text' disabled={true} defaultValue={'New York'} className="see-profile" style={{height:'25px', color:'#50576c', fontFamily: "Calvin-Medium",border:'none', outline:'none',backgroundColor:'white', borderRadius:'5px', fontSize:'18px', width:'150px'}}></input>
                            <input type='text' disabled={true} defaultValue={'Reseller'}  className="see-profile" style={{height:'25px', color:'#50576c', fontFamily: "Calvin-Medium",border:'none', outline:'none',backgroundColor:'white', borderRadius:'5px', fontSize:'18px', width:'150px'}}></input>
                        </div>
                        <div style={{marginLeft: '40%'}}>

                           <img src={pencilSource} onClick={() => editContentProfile()}
                                   style={{marginLeft: '76.5%', maxHeight: '22px', cursor:'pointer'}}/>
                            <input type='text'disabled={true} defaultValue={'joedoe@gmail.com'}  className="see-profile" style={{height:'25px', color:'#50576c', fontFamily: "Calvin-Medium",border:'none', outline:'none',backgroundColor:'white', borderRadius:'5px', fontSize:'18px', minWidth:'150px', marginTop:'28%'}}></input>
                            <input type='text'disabled={true} defaultValue={'+33 (0)6 12 34 56 78'}  className="see-profile" style={{height:'25px', color:'#50576c', fontFamily: "Calvin-Medium",border:'none', outline:'none',backgroundColor:'white', borderRadius:'5px', fontSize:'18px', minWidth:'150px'}}></input>

                        </div>
                    </div>

                </div>

            </SeeProfile>
            <SeeProfile2>

                <div style={{width:'100%'}}>
                    <div className="see-profile2-labels" style={{width:'100%'}}>Expertise

                        <img id={pencil} src={pencil} onClick={() => editContentProfile2()}
                             style={{marginLeft: '88%', maxHeight: '22px', cursor:'pointer'}}/>
                    </div>
                    <div >
                        <input type='text' disabled={true} size={17} className="see-profile2" defaultValue={'Mergers and acquistion'}></input>
                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Specialties</div>
                    <div >
                        <input type='text' disabled={true} size={16} className="see-profile2" defaultValue={'Cross border operation'}></input>
                        <input type='text' disabled={true} size={18} className="see-profile2" defaultValue={'Transation over 500M€/$'}></input>
                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Admission to practice law</div>
                    <div >
                        <input type='text' disabled={true} size={14} className="see-profile2" defaultValue={'Paris bar association'}></input>
                        <input type='text' disabled={true} size={17} className="see-profile2" defaultValue={'Tunisian bar association'}></input>

                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Counties</div>
                    <div>
                        <input type='text' size={3} disabled={true} className="see-profile2" defaultValue={'Tunisia'}></input>

                    </div>
                </div>

            </SeeProfile2>

            <PanelInfo>
                <div style={{width:'100%'}}>
                    <div style={{fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana", marginBottom:'20px'}}>Panel informations</div>
                    <div className="see-profile2-labels" style={{width:'100%'}}>Hourly fee
                    </div>
                    <div >
                        <input type='text' disabled={true} className="see-profile3" defaultValue={'610€/hour (Negociated)'}></input>
                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Terms & conditions</div>
                    <input type='text' disabled={true} className="see-profile3" defaultValue={'Monthly 10k€ retainer - see with Jeanny Smith'}></input>
                    <div>
                        <img src={attach} style={{height:'50px', width:'100%', marginTop:'10px'}}></img>
                    </div>
                    <div style={{marginTop:'15px',fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana"}}>Services & Projects</div>
                    <input type='text' disabled={true} className="see-profile3" defaultValue={'Corporate M&A and international acquistions'}></input>
                    <div style={{marginTop:'15px',fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana",marginBottom:'10px'}}>Internal correspondants</div>


                    <div style={{display:'flex', backgroundColor:'#f5f7f9', alignItems:'center',alignContent:"center", marginBottom:'5px'}}>
                        <div><img src={profile} style={{borderRadius: '100px', height:'35px', padding:'5px'}}></img></div>
                        <div style={{marginLeft:'10px', fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana"}}>Firstname Lastname</div>
                        <div style={{height:'35px', padding:'5px',alignItems:'center', display:'inline-flex' , marginLeft:'18%',color: '#5d667e',fontSize:'20px'}}><img style={{height:'20px', verticalAlign:"middle",marginRight:'5px'}} src={message}></img>Message</div>
                        <div style={{height:'35px', padding:'5px',alignItems:'center', display:'inline-flex',marginLeft:'14%',color: '#5d667e',fontSize:'20px'}}><img style={{height:'20px', verticalAlign:"middle",marginRight:'5px'}} src={userIcon}></img>Profile</div>
                    </div>
                    <div style={{display:'flex', backgroundColor:'#f5f7f9', alignItems:'center',alignContent:"center", marginBottom:'5px'}}>
                        <div><img src={profile} style={{borderRadius: '100px', height:'35px', padding:'5px'}}></img></div>
                        <div style={{marginLeft:'10px', fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana"}}>Firstname Lastname</div>
                        <div style={{height:'35px', padding:'5px',alignItems:'center', display:'inline-flex' , marginLeft:'18%',color: '#5d667e',fontSize:'20px'}}><img style={{height:'20px', verticalAlign:"middle",marginRight:'5px'}} src={message}></img>Message</div>
                        <div style={{height:'35px', padding:'5px',alignItems:'center', display:'inline-flex',marginLeft:'14%',color: '#5d667e',fontSize:'20px'}}><img style={{height:'20px', verticalAlign:"middle",marginRight:'5px'}} src={userIcon}></img>Profile</div>
                    </div>


                </div>

            </PanelInfo>

            <Proposals>
                <div style={{width:'100%'}}>
                    <div style={{fontSize:'15px',color: '#5d667e', borderSpacing: '60px 2px'}}>
                        <div style={{fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana",padding:'15px'}}>Proposals</div>
                        <div style={{borderBottom: '1px solid #d8dbe1', marginTop:'20px'}}>
                            <tr style={{height:'2em', fontWeight:'bold', fontSize:'12px', fontFamily: "Verdana"}}>
                                <th>Name</th><th>Entity</th><th>Location</th><th>Expertise</th><th>Date</th><th>Firm</th>
                            </tr>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <tr><td>Operation Ti...</td><td>Renault Co...</td><td>France</td><td>#Tax</td><td>20/01/2018</td><td>Racine</td></tr>
                            <tr><td>OP. Prometh...</td><td>Renault HQ</td><td>USA</td><td>#M&A</td><td>18/02/2019</td><td>Clifford chance</td></tr>
                            <tr><td>OP. Latandre</td><td>Renault Br...</td><td>Italia</td><td>#Social</td><td>18/02/2019</td><td>SVZ</td></tr>
                        </div>

                        <div style={{borderBottom: '1px solid #d8dbe1',paddingBottom:'15px'}}>
                            <a style={{color:'#76afbe', marginLeft:'84%', cursor: 'pointer'}}>See more proposals</a>
                        </div>
                    </div>
                </div>
            </Proposals>

            <Reviews>
                <div style={{width:'100%'}}>
                    <div style={{fontSize:'15px',color: '#5d667e', borderSpacing: '45px 3px'}}>
                        <div style={{fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana",padding:'15px'}}>Internal reviews</div>
                        <div style={{borderBottom: '1px solid #d8dbe1', marginTop:'10px'}}>
                            <tr style={{height:'2em', fontWeight:'bold', fontSize:'12px', fontFamily: "Verdana"}}>
                                <th>Name</th><th>Entity</th><th>Location</th><th>Expertise</th><th>Date</th>
                            </tr>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <tr><td>Operation Ti...</td><td>Renault Co...</td><td>France</td><th>#Tax</th><th>20/01/2018</th></tr>
                            <tr><td>OP. Prometh...</td><td>Renault HQ</td><td>USA</td><th>#M&A</th><th>18/02/2019</th></tr>
                            <tr><td>OP. Latandre</td><td>Renault Br...</td><td>Italia</td><th>#Social</th><th>18/02/2019</th></tr>
                        </div>

                        <div style={{borderBottom: '1px solid #d8dbe1',paddingBottom:'5px'}}>
                            <div style={{fontWeight:'bold', fontSize:'13px', fontFamily: "Verdana",padding:'15px'}}>See more Reviews</div>
                        </div>
                    </div>
                </div>

            </Reviews>

            <Amount>
                <div style={{width:'100%'}}>
                    <div style={{fontSize:'15px',color: '#5d667e', borderSpacing: '45px 3px'}}>
                        <div style={{fontWeight:'bold', fontSize:'14px', fontFamily: "Verdana",padding:'15px'}}>Internal reviews</div>
                        <div style={{borderBottom: '1px solid #d8dbe1', marginTop:'20px'}}>
                            <tr style={{height:'2em', fontWeight:'bold', fontSize:'12px', fontFamily: "Verdana"}}>
                                <th style={{marginLeft:'150px'}}>Year</th><th>Cost center</th><th>Total amount</th><th>Law firm</th>
                            </tr>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <tr><td>2019</td><td>CS 153</td><td>3 500$</td><th>Clifford chance</th></tr>
                            <tr><td>2018</td><td>CS 153</td><td>9 500$</td><th>Linklaters</th></tr>
                            <tr><td>2017</td><td>CS 47</td><td>10 500$</td><th>Linklaters</th></tr>
                            <tr><td> </td><td>CS 153</td><td>19 500$</td><th>Linklaters</th></tr>
                            <tr><td> </td><td>CS 32</td><td>15 500$</td><th>Linklaters</th></tr>
                        </div>
                    </div>
                </div>
            </Amount>
        </Wrapper>
    );
};




