import React from 'react';
import { Card, CardDescription, CardDescriptionGenre, CardDescriptionInfo, CardDescriptionTitle, Figure } from '../UI'
import defaultImage from '../../assets/img/image.svg'

const GameCard = ({ title, info, genre, image}) => {
    return (
        <Card image={image} >
            <Figure src={image ? image : defaultImage}/>
            <CardDescription>
                <CardDescriptionTitle>{title}</CardDescriptionTitle>
                <CardDescriptionInfo>{info}</CardDescriptionInfo>
                <CardDescriptionGenre>{genre}</CardDescriptionGenre>
            </CardDescription>
        </Card>
    )
}

export default GameCard