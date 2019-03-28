import React from 'react';
import axios from 'axios';
import './PersonList.css';

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
            <div id="cardcontainer">
                
                    {this.state.cards.map(cards => (
                        <li key={cards.id}>{cards.name}<img src={cards.imageUrl}/> </li>
                    ))}
                
            </div>
        );
    }

}
