import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HomePage.css';

import supplierContract from '../../media/images/supplierContract.png';
import projectSignoff2 from '../../media/images/projectSignoff2.png';
import styled from "styled-components";
// list of items

const Content = styled.div`
  height: 230px;
  margin-left: 0px;
  img {
    height: 230px;
    border-radius:10px;
  }
`

const list: any[] = [
    { name: supplierContract },
    { name: projectSignoff2 },
    { name: projectSignoff2 },
    { name: supplierContract },
    { name: supplierContract },
    { name: supplierContract },
    { name: projectSignoff2 },
];

const MenuItem = ({text, selected}: {text: any, selected: any}) => {
    return <a href={"Workspace"+'selected lsit item'}><div
        className={`menu-item ${selected ? 'active' : ''}`}
    ><img style={{ boxShadow: "0px 2px #d8dbe1", borderLeft: "1px solid #d8dbe1", borderRight: "1px solid #d8dbe1"}} src={text}></img></div></a>;
};

export const Menu = (list: any[], selected: any) =>
    list.map((el) => {
        const {name} = el;

        return <MenuItem text={name} selected={selected} />;
    });




const selected = 'workspace1';

export class Scrollws extends Component {
    private menuItems: any;
    constructor(props: any) {
        super(props);
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = (key: any) => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="workspaces">
                <Content>
                    <ScrollMenu
                        data={menu}
                        selected={selected}
                        onSelect={this.onSelect}
                    />
                </Content>
            </div>
        );
    }
}

