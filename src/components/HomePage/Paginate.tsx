import React from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./HomePage.css"
import conFooter from '../../media/images/conFooter.png';

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
export default class Paginate extends React.Component <{}, any,isState> {
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
                    <p style={{position:'absolute', fontSize:'25px', color:'#2678ba', marginLeft:'20px', marginTop:'20px'}}>Contract #{pd.id}</p>
                <p style={{position:"absolute", fontSize:'20px', marginTop:'50px', marginLeft:"20px", color:'gray', wordWrap:'break-word',maxWidth:'1000px'}}>{pd.body}</p>
                <img style={{borderRadius:'5px', marginTop:'10px', border:'1px solid grey'}} src={conFooter} alt={conFooter}/>
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
            <div style={{marginLeft:'180px', marginTop:'50px'}}>
        {this.state.postData}
        <ReactPaginate
            previousLabel={"PREVIOUS"}
            nextLabel={"NEXT"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={15}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={"paginate"}
            activeClassName={"active"}/>
        </div>

    )
    }
}
