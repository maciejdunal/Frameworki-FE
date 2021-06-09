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
                <li>111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
            </ul>
        </Wrapper>
    );
};
