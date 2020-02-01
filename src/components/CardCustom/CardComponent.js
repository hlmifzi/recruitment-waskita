import React from 'react'
import { Card, CardHeader } from 'react-bootstrap';

const CardComponent = {
    CardWhiteComponent: ({ children, color, text }) => {
        return (
            <Card style={{ height: '251px' }}>
                <Card.Title style={{ fontSize: '1.2em', marginTop: '20px', marginLeft: '26px' }}>
                    <b>{text}</b>
                </Card.Title>
                {children}
            </Card>
        )
    }
}


export default CardComponent