import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row, Spinner } from 'react-bootstrap';
import Components from '../../components/Components'
import HighchartsMore from 'highcharts-more'
HighchartsMore(ReactHighcharts.Highcharts)


const PropTypesParam = {
    data: PropTypes.array,
    title: PropTypes.string,
    type: PropTypes.string
}

const DefaultPropsParam = {
    data: [],
    data: '',
    type: '',
};

const DonutChart = props => {

    let config = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 350
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                size: '100%',
                showInLegend: true
            },

        },
        series: [{
            type: 'pie',
            name: 'Jenis Kelamin',
            innerSize: '50%',
            data: [
                ['Laki-Laki', 58.9],
                ['Perempuan', 13.29],
            ]
        }],
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
                            <Spinner animation="border" variant="primary" className='mr-auto' style={{ margin: 'auto', divor: 'blue' }} /> :
                            <ReactHighcharts config={config} />
                        }
                    </Col>
                </Row>
            </Components.card.CardWhiteComponent>
        </Col>
    )
}

DonutChart.propTypes = PropTypesParam
DonutChart.defaultProps = DefaultPropsParam

export default DonutChart
