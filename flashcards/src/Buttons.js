import React, {Component} from 'react';
// import AddPersonMenu from './AddPersonMenu.js'

export default class Buttons extends Component {
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return(
            <div className="button-container">
                <button className="previous" onClick={this.props.clickPrevious}>{"< Previous"}</button>
                <div className="middle-buttons">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                    <button className="new">New</button>
                </div>
                <button className="next" onClick={this.props.clickNext}>{"Next >"}</button>
            </div>
        )
    }
}

