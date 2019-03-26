import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        cards:[]
    };


    componentDidMount(){
        axios.get(`https://api.magicthegathering.io/v1/cards`).then(res => {
            console.log(res);
            this.setState({ cards: res.data.cards});
        });
    }

    render(){
        return(
            <ul>
                {this.state.cards.map(cards => (
                     <li key={cards.id}>{cards.name}</li>
                ))}
            </ul>
        );
    }

}
