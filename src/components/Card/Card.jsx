import React, { Component } from 'react';
import "./Card.css"
import FrontCard from '../FrontCard/FrontCard'
import BackCard from '../BackCard/BackCard'
import ReactCardFlip from 'react-card-flip'

class Card extends Component {
  state = { 
    isFlipped: false
   }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({isFlipped: !prevState.isFlipped}))
  } 

  render() { 
    return ( 
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <FrontCard 
          Card={this.props.Card}
          handleClick={this.handleClick}
        />
        <BackCard 
          Card={this.props.Card}
          handleClick={this.handleClick}
          handleDeleteCard={this.props.handleDeleteCard}
        />
      </ReactCardFlip>
     );
  }
}
 
export default Card;