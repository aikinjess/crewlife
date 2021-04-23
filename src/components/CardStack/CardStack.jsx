import React from 'react';
import Card from '../Card/Card';
import './CardStack.css'

const CardStack = (props) => {
    return ( 
        <>
            <div id='CardStack' className="CardStack">
                {props.Cards.map(Card => (
                    <Card 
                        Card={Card}
                        frontSide={Card.frontSide}
                        backSide={Card.backSide}
                        user={props.user}
                        handleDeleteCard={props.handleDeleteCard}
                    />
                ))}
            </div>
        </>
    );
}

export default CardStack;