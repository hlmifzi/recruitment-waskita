import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import Components from '../../components/Components'
import { Col, Row, Spinner } from 'react-bootstrap';
import HighchartsMore from 'highcharts-more'
HighchartsMore(ReactHighcharts.Highcharts)


const PropTypesParam = {
    data: PropTypes.object,
    title: PropTypes.string,
    colSm: PropTypes.number,
    colMd: PropTypes.number,
    isLoading: PropTypes.bool,
    error: PropTypes.string
}

const DefaultPropsParam = {
    data: {categories:[], series:[]},
    title: 'Tidak Ada Title',
    colSm: 12,
    colMd: 12,
    isLoading: true,
    error: ''
};

const LineChart = props => {
    let config = {
        title: false,
        yAxis: {
            title: {
                text: props.title
            },
            offset: 30
        },
        xAxis: {
            categories: props.data.categories
        },
        legend: false,
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Installation',
            color: '#012C40',
            data: props.data.series
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
        credits: {
            enabled: false
        },
    }
    return (
        <Col xs={12} sm={props.colSm} md={props.colMd}>
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

LineChart.propTypes = PropTypesParam
LineChart.defaultProps = DefaultPropsParam

export default LineChart
