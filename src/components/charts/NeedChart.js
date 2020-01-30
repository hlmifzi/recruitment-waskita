import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row, Spinner } from 'react-bootstrap';
import HighchartsMore from 'highcharts-more'
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

const NeedChart = props => {
    let config = {
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            // categories: props.categories,
            // title: {
            //     text: null
            // },
            gridLineWidth: 1
        },
        yAxis: {
            gridLineWidth: 0
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    align: 'left'
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} %</b> of total ({point.qty} orang)<br/>'
        },

        series: [
            {
                name: props.title,
                colorByPoint: true,
                data: props.data,
                point: {
                    events: {
                        click: function (event) {
                            let endPoint = ''
                            let url = props.type === 'durationOnOffice' ? `#/karyawan-filtered/${props.type}/${this.from}/${this.to}` : `#/karyawan-filtered/${props.type}/${this.name}`
                            window.open(url);
                        }
                    }
                },
            }
        ],
        credits: {
            enabled: false
        },
    }
    return (
        <Row>
            <Col>
                {props.isLoading ?
                    <Spinner animation="border" variant="primary" className='mr-auto' style={{ margin: 'auto', color: 'blue' }} /> :
                    <ReactHighcharts style={{ width: '100%' }} config={config} />
                }
            </Col>
        </Row>

    )
}

NeedChart.propTypes = PropTypesParam
NeedChart.defaultProps = DefaultPropsParam

export default NeedChart
