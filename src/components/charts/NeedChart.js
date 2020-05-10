import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row, Spinner } from 'react-bootstrap';
import HighchartsMore from 'highcharts-more'
import { useState } from 'reinspect';

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
    colSm: 7,
    colMd: 7,
    isLoading: true

};
const BarComponent = ({ title, score, description, color }) => {

    const barColor = () => {
        let color = score > 50 ? "green" : score <= 20 ? "red" : "grey";
        return color
    }

    return (
        <div className="wrapper-needs-bar d-flex">
            <span className="title"><strong>{title}</strong></span>
            <p className="score"><strong>{score}</strong></p>
            <div className="border-chart">
                <div className="wrapper-bar">
                    <div className={`bar ${barColor()}`} style={{ width: `${score}%`, backgroundColor: color }}></div>
                </div>
                <div className="grey-card-cart ">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

const NeedChart = ({data}) => {

    return (
        <div className="need-chart-container">
            {data.length > 0 && data.map(value =>
                <BarComponent
                    title={value.needs}
                    score={value.needsValue}
                    description={value.needsDesc}
                    color={value.needsColor}
                />
            )
            }
        </div>

    )
}

NeedChart.propTypes = PropTypesParam
NeedChart.defaultProps = DefaultPropsParam

export default NeedChart
