import React from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "../../HomePage/HomePage.css"
import conFooter from '../../../media/images/conFooterWS.png';
import styled from "styled-components";
import {Wrapper} from '../../../styledHelpers/Components';

const Contracts = styled.div`

  margin-top:10px;
  margin-left:2%;
  background-color:white;
  max-width: 97%;
  min-height: 100px;
  border: 1px solid #d8dbe1;

`;

interface isState {

    pageTitle: string,
    store: any,
    num: any
    offset: any
    perPage: any
    pageCount: any
    postData: any
    currentPage: any
}

export default class PaginateWS extends React.Component <{}, any,isState> {
    constructor(props: any) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map((pd: any) => <React.Fragment>
                    <Wrapper>
                        <Contracts>
                            <p style={{position:'absolute', fontSize:'20px', color:'#2678ba', marginLeft:'20px', marginTop:'20px'}}>World Company MENA SARL #{pd.id}</p>
                            <p style={{position:"absolute", fontSize:'15px', marginTop:'50px', marginLeft:"20px", color:'#a9acb7', wordWrap:'break-word', maxWidth:'50%'}}>{pd.body}</p>
                            <img style={{borderRadius:'5px', marginTop:'85px',marginLeft:'15px', height:'25px'}} src={conFooter} alt={conFooter}/>
                        </Contracts>
                    </Wrapper>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"PREVIOUS"}
                    nextLabel={"NEXT"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"paginate"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}
