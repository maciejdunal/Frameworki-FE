import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  background: white;
  padding: 16px;
  border: 1px solid;
  width: 70px;
`;

export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>Home</li>
                <hr style={{height: '2px', width: '50%',borderWidth:'0', color:'red', backgroundColor:'red'}}></hr>
                <li>Publications</li>
                <li>People</li>
                <li>Entities</li>
                <li>Administration</li>
            </ul>
        </Wrapper>
    );
};
