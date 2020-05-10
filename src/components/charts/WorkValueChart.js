import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row, Spinner } from 'react-bootstrap';
import HighchartsMore from 'highcharts-more'
import Components from '../Components'

HighchartsMore(ReactHighcharts.Highcharts)


const PropTypesParam = {
    data: PropTypes.array,
    title: PropTypes.string,
    colSm: PropTypes.number,
    colMd: PropTypes.number,
    isLoading: PropTypes.bool
}

const DefaultPropsParam = {
    data: [],
    data: '',
    colSm: 12,
    colMd: 12,
    isLoading: true

};

const WorkValueChart = props => {
    let config = {

        chart: {
            type: 'column'
        },
        title: {
            text: "WORK VALUE",
            style: {
                fontWeight: 'bold'
            }
        },

        xAxis: {
            categories: props.data ? props.data.categories : []
        },


        legend: false,


        series: [{
            linkedTo: 's1',
            color: '#39B54A',
            data: props.data ? props.data.series : []
        }],
        credits: {
            enabled: false
        },
    }

    return (
        <Col xs={12} sm={props.colSm} md={props.colMd} style={{ marginTop: '20px' }}>
            <Components.card.CardWhiteComponent text={props.title}>
                <Row>
                    <Col>
                        {props.isLoading ?
                            <Spinner animation="border" variant="primary" className='mr-auto' style={{ margin: 'auto', color: 'blue' }} /> :
                            <ReactHighcharts style={{ width: '100%' }} config={config} />
                        }
                    </Col>
                </Row>
            </Components.card.CardWhiteComponent>
        </Col>

    )
}

WorkValueChart.propTypes = PropTypesParam
WorkValueChart.defaultProps = DefaultPropsParam

export default WorkValueChart
