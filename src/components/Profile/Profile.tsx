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
                        <input type='text' disabled={true} className="see-profile2" defaultValue={'Mergers and acquistion'}></input>
                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Specialties</div>
                    <div >
                        <input type='text' disabled={true} className="see-profile2" defaultValue={'Cross border operation'}></input>
                        <input type='text' disabled={true} className="see-profile2" defaultValue={'Transation over 500M€/$'}></input>
                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Admission to practice law</div>
                    <div >
                        <input type='text' disabled={true} className="see-profile2" defaultValue={'Paris bar association'}></input>
                        <input type='text' disabled={true} className="see-profile2" defaultValue={'Tunisian bar association'}></input>

                    </div>
                    <div className="see-profile2-labels" style={{width:'100%', marginTop:'6px'}}>Counties</div>
                    <div>
                        <input type='text' disabled={true} className="see-profile2" defaultValue={'Tunisia'}></input>

                    </div>
                </div>

            </SeeProfile2>

            <PanelInfo>

            </PanelInfo>

        </Wrapper>
    );
};




