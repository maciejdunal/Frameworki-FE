import React, {FC} from 'react';
import add from '../../media/icons/createARequest.jpg';
import attachment from '../../media/icons/attachment.png';
import req from '../../media/icons/req.png';
import message from '../../media/icons/message.png';
import pencil from '../../media/icons/pencil.png';
import x from '../../media/icons/x.png';
import styled from "styled-components";
import profile from '../../media/icons/profile-example.png';

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


function editContent() {
    var elements = document.getElementsByClassName("firstInputs");
    let elementById = document.getElementById('pencil');
    for(const x of elements as any){
        if (x.readOnly == "false") {
            x.readOnly = "true";

           // elementById.innerHTML = "Enable content of p to be editable!";
        }
        else {
            x.readOnly = "false";
        }
    }
}





export const Profile: FC = () => {




    // @ts-ignore
    return (
        <Wrapper>

            <SeeProfile>
                <div style={{width: '20%', textAlign: 'center', display: "inline-grid"}}>
                    <img src={profile} alt={profile} height="70px"
                         style={{borderRadius: '70px', marginTop: "55%", marginLeft: '27%'}}/>
                    <a style={{color: '#6ca9b9', fontSize: '14px', marginTop: '-5%'}}>See Profile</a>
                </div>

                <div style={{width: '80%', display: "inline-grid"}}>
                    <div style={{maxHeight: "30px", marginTop: '3%'}}>

                        <div style={{display: 'inline-block'}}>
                            <img src={message} alt={message} style={{height: '22px', width: '22px'}}/>
                            <div style={{marginLeft: '30px', marginTop: '-23px', fontSize: '22px'}}>Message</div>
                        </div>


                        <div style={{display: 'inline-block'}}>
                            <img src={req} alt={req} style={{marginLeft: '24px', height: '25px', width: '25px'}}/>
                            <div style={{marginLeft: '55px', marginTop: '-26px', fontSize: '22px'}}>Create a request
                            </div>
                        </div>

                        <div style={{display: 'inline-block'}}>
                            <img src={add} alt={add} style={{marginLeft: '24px', height: '25px', width: '25px'}}/>
                            <div style={{marginLeft: '62px', marginTop: '-25px', fontSize: '22px'}}>Add to a cluster
                            </div>
                        </div>

                        <div style={{display: 'inline-grid'}}>
                            <img src={x} alt={x} style={{marginLeft: '190px', height: '15px', width: '15px'}}/>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                        <div>
                           <input type='text' disabled={true} className="firstInputs" style={{height:'25px', border:'none', backgroundColor:'#e6f0f3', borderRadius:'5px', fontSize:'20px', color:'#7db3c1', width:'150px'}}></input>
                            <input></input>
                            <h1>New-york</h1>
                            <h1>Partner</h1>
                        </div>
                        <div style={{marginLeft: '60%'}}>
                            {/*<button id="pencil"  onClick={() => editContent()} style={{marginLeft: '77%', maxHeight: '20px', marginBottom: '15px', padding: '15%'}}/>*/}
                           <input id="pencil" type="image" src={pencil} onClick={(event:any) => editContent()}
                                   style={{marginLeft: '31.5%', maxHeight: '20px', marginBottom: '30px', padding: '15%'}}/>
                            <h1>humbertaswift@gmail.com</h1>
                            <h1>+33 (0)6 12 34 56 78</h1>
                        </div>
                    </div>
                </div>
            </SeeProfile>
        </Wrapper>
    );
};




