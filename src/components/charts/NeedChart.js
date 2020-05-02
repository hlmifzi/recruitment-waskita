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

const tempData = [
    {
        title: "achievement",
        score: 23,
        description: "Kebutuhan untuk berprestasi, menyelesaikan tugas-tugas yang sulit, menghadapi hambatan, dan menentukan standar yang tinggi"
    },
    {
        title: "defference",
        score: 10,
        description: "Kebutuhan untuk mendapatkan arahan dari orang lain, pribadi yang lebih menyukai mengikuti arahan (konformitas)"
    },
    {
        title: "order",
        score: 59,
        description: "Kebutuhan untuk mengerjakan sesuatu secara teratur, sistematis, dan rapi berdasarkan rencana yang ditetapkan"
    },
    {
        title: "exhibition",
        score: 15,
        description: "Kebutuhan untuk menjadi pusat perhatian dan tampil percaya diri menonjolkan suatu prestasi yang telah diraih"
    },
    {
        title: "autonomy",
        score: 10,
        description: "Kebutuhan untuk mandiri dan bebas dalam membuat keputusan serta menghindari urusan dan campur tangan orang lain"
    },
    {
        title: "affiliation",
        score: 70,
        description: "Kebutuhan untuk dekat dan bekerja sama dengan orang lain, berupaya untuk menjalin relasi secara baik"
    },
    {
        title: "intraception",
        score: 15,
        description: "Kebutuhan untuk belajar memahami dan mengerti perasaan-perasaan orang lain, menunjukkan empati"
    },
    {
        title: "Succorance",
        score: 15,
        description: "Kebutuhan untuk mendapatkan afeksi dan perhatian dari orang lain agar orang lain bersimpati dan mengerti keadaan dirinya"
    },
    {
        title: "Dominance",
        score: 10,
        description: "Kebutuhan untuk mengatur, mempengaruhi, dan mengarahkan orang lain melalui saran, persuasi, dan perintah"
    },
    {
        title: "Abasement",
        score: 65,
        description: "Kebutuhan untuk menerima secara pasif dorongan eksternal, kritik, hukuman, cenderung inferioritas dan menyalahkan diri"
    },
    {
        title: "Nurturance",
        score: 35,
        description: "Kebutuhan untuk menolong teman dan orang-orang yang kesulitan, mengasihi orang lain"
    },
    {
        title: "Change",
        score: 20,
        description: "Kebutuhan untuk membuat suatu yang baru dan berbeda, mampu mengikuti perubahan-perubahan yang terjadi di lingkungan"
    },
    {
        title: "Endurance",
        score: 30,
        description: "Kebutuhan untuk bertahan baik secara fisik maupun psikologis dalam tugas-tugas yang dihadapinya, tekun dan gigih"
    },
    {
        title: "Heterosexual",
        score: 24,
        description: "Kebutuhan untuk bergaul bebas dengan lawan jenisnya, menunjukkan ketertarikan seksual"
    },
    {
        title: "Agression",
        score: 15,
        description: "Kebutuhan untuk melawan, membalas rasa sakit, atau menghukum orang lain, menunjukkan kekerasan"
    },
]

const BarComponent = ({ title, score, description }) => {

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
                    <div className={`bar ${barColor()}`} style={{ width: `${score}%` }}></div>
                </div>
                <div className="grey-card-cart ">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

const NeedChart = props => {

    const [data, setData] = useState(tempData)

    return (
        <div className="need-chart-container">
            {data.length > 0 && data.map(value =>
                <BarComponent
                    title={value.title}
                    score={value.score}
                    description={value.description}
                />
            )
            }
        </div>

    )
}

NeedChart.propTypes = PropTypesParam
NeedChart.defaultProps = DefaultPropsParam

export default NeedChart
