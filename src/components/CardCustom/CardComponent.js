import React from 'react'
import { Card } from 'react-bootstrap';

const CardComponent = {
    CardWhiteComponent: ({ children, color, text }) => {
        return (
            <Card>
                <Card.Title style={{ fontSize: '1.2em', marginTop: '20px', marginLeft: '26px' }}>
                    <b>{text}</b>
                </Card.Title>
                {children}
            </Card>
        )
    }
}


export default CardComponent