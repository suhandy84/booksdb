import React from 'react';
import { APIURL } from '../support/ApiUrl';
import Axios from 'axios'

class Detail extends React.Component {
    state = {
        authors: [],
        loading: true
    }

    componentDidMount() {
        Axios.get(`${APIURL}/authors/${this.props.match.params.idauthor}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ authors: res.data })
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                this.setState({ loading: false })
            })
    }

    render() {
        return this.state.authors.map ((val, index) => {
            return (
                <div key={index} className="ml-3 mt-3">
                    <h1 className="font-weight-bolder">{val.name}</h1>
                    <br />
                    <h4 className="font-weight-bolder">Email:<span className="font-weight-light ml-5 pl-5">{val.email}</span></h4> 
                    <h4 className="font-weight-bolder">Phone:<span className="font-weight-light ml-5 pl-5">{val.phone}</span></h4>
                </div>
            )
        })
    }
}

export default Detail;