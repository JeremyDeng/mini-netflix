import React from "react";
import {connect} from "react-redux";
import data from "../movies"
import logo from "../logo.png"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mylist: [],
            recommendations: []
        }
    }

    componentDidMount() {
        this.setState({
            mylist: data.mylist,
            recommendations: data.recommendations
        })
    }

    render() {
        return(
            <div>
                <img src={logo} />

            </div>
        );
    }
}
    
const mapStateToProps =  state => {
    return {
        mylist: state.mylist,
        recommendations: state.recommendations
    };
}


export default connect(mapStateToProps)(Home);