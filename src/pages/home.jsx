import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { APIURL } from '../support/ApiUrl';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { changetoRupiah } from '../support/changetorupiah';

class Home extends React.Component {
    state = {
        books: [],
        loading: true
    }

    componentDidMount() {
        Axios.get(`${APIURL}/books`)
            .then((res) => {
                console.log(res.data)
                this.setState({ books: res.data })
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                this.setState({ loading: false })
            })
    }

    renderBooks = () => {
        return this.state.books.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.name}</td>
                    <td><Link style={{color: 'blue'}} to = {`/detail/${val.author_id}`}>{val.author}</Link></td>
                    <td>{val.publisher_name}</td>
                    <td>{val.isbn}</td>
                    <td>{changetoRupiah(val.price)}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="mx-5 my-5 text-left">
                <MDBTable striped bordered>
                    <MDBTableHead >
                        <tr>
                            <th className="h6">Name</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>ISBN</th>
                            <th>Price</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.renderBooks()}
                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}

export default Home;