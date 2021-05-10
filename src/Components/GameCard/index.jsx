import React from 'react';
import { Card, CardDescription, CardDescriptionGenre, CardDescriptionInfo, CardDescriptionTitle, Figure } from '../UI'

const image = "http://2.bp.blogspot.com/-GBwSXYpmN90/TvVAdQrtxWI/AAAAAAAACF8/ovCXQE-m_u0/s1600/Final+Fantasy+12+Cover.png"

const GameCard = () => {
    return (
        <Card image={image}>
            <Figure image={image}/>
            <CardDescription>
                <CardDescriptionTitle>Final Fantasy XII</CardDescriptionTitle>
                <CardDescriptionInfo>Main 80h</CardDescriptionInfo>
                <CardDescriptionGenre>RPG</CardDescriptionGenre>
            </CardDescription>
        </Card>
    )
}

export default GameCard