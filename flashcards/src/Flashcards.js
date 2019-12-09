import React, {Component} from 'react';
import data from './data.js';

export default class Flashcards extends Component {
    constructor(){
        super();
        this.state = {
            people: data,
        };
    }



    render(){
        return(
            <div className="flashcard-container">
                <div className="flashcards">
                    <div className="card-counter">
                        {this.state.people[this.props.currIndex].id} {"/25"}
                    </div>
                    <h1>
                        {this.state.people[this.props.currIndex].name.first} {""} {this.state.people[this.props.currIndex].name.last} {""}
                    </h1>
                    <h3>
                        <span className="contaier-from">From: </span>{this.state.people[this.props.currIndex].city}, {this.state.people[this.props.currIndex].country}
                    </h3>
                    <h3>
                        <span className="contaier-job-title">Job Title: </span>{this.state.people[this.props.currIndex].title}
                    </h3>
                    <h3>
                        <span className="contaier-employer">Employer: </span>{this.state.people[this.props.currIndex].employer}
                    </h3>
                    <h3>
                        <span className="contaier-fav-movie">Favorite Movies: </span>
                    </h3>
                    <ol>
                        {this.state.people[this.props.currIndex].favoriteMovies.map(val =>{
                            return<li>{val}</li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}