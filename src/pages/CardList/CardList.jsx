import React, { Component } from 'react';
import CardStack from '../../components/CardStack/CardStack'
import AddCard from '../../components/Addcard/AddCard'
import * as CardAPI from '../../services/CardApi'

class CardList extends Component {
    state = {
        Cards: [],  
    }

    async componentDidMount() {
        const Cards = await CardAPI.getMyCards(this.props.user)
        this.setState({Cards: Cards.Cards})
    }

    handleAddCard = async (newCardData) => {
        const newCard = await CardAPI.create(newCardData);
        this.setState(
          (state) => ({
            Cards: [...state.Cards, newCard],
          }),
          () => this.props.history.push("/flightCrew")
        );
      };

    handleDeleteCard = async (id) => {
        await CardAPI.deleteCard(id)
        this.setState((state) => ({
            Cards: state.Cards.filter((f) => f._id !== id)
        }), () => this.props.history.push('/flightCrew'))
    }

    render() { 
        return ( 
        <>
            <AddCard 
                handleAddCard={this.handleAddCard}
                user={this.props.user}
            />
        <div className='CardStack'>
            <CardStack 
                Cards={this.state.Cards}
                handleDeleteCard={this.handleDeleteCard}
                user={this.props.user}
            />
        </div>
            
        </>
         );
        }
}
 
export default CardList;
