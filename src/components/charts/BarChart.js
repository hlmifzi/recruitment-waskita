import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row, Spinner } from 'react-bootstrap';
import HighchartsMore from 'highcharts-more'
import Components from '../../components/Components'

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

const BarChart = props => {
    let config = {

        chart: {
            type: 'column'
        },
        title: false,

        xAxis: {
            categories: props.data
        },


        legend: false,


        series: [{
            name: 's1',
            color: '#012C40',
            id: 's1',
            grouping: false
        }, {
            linkedTo: 's1',
            color: '#012C40',
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
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

BarChart.propTypes = PropTypesParam
BarChart.defaultProps = DefaultPropsParam

export default BarChart
