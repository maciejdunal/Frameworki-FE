import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import {HomePage} from "../HomePage/HomePage";
import {Home} from "@material-ui/icons";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './MainPage.css';


import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Entities} from "../common/entities";
import {YourNetwork} from "../common/yourNetwork";
import {YourPublications} from "../common/yourPublications";
import {Publications} from "../common/publications";
import {Ecosystem} from "../common/ecosystem";
import {Clientcontract} from "../common/Workspaces/Clientcontract"


const Content = styled.div`
  height: 1000px;
  display: flex;
  background: #F5F7F9;
`;

const MainPage: FC = () => {
    return (
        <Router>
            <Wrapper>
                <TopBar/>
                <Content>
                    <LeftMenu/>

                    <Switch>

                        <Route path="/entities" exact>
                            <Entities/>
                        </Route>
                        <Route path="/ecosystem" exact>
                            <Ecosystem/>
                        </Route>
                        <Route path="/publications" exact>
                            <Publications/>
                        </Route>
                        <Route path="/yourPublications" exact>
                            <YourPublications/>
                        </Route>
                        <Route path="/yourNetwork" exact>
                            <YourNetwork/>
                        </Route>
                        <Route path="/profile" exact>
                            <Profile/>
                        </Route>
                        <Route path="/clientcontract" exact>
                            <Clientcontract/>
                        </Route>

                        <HomePage/>
                    </Switch>

                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;
