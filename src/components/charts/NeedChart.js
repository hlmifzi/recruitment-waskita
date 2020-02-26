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
    colSm: 7,
    colMd: 7,
    isLoading: true

};

const NeedChart = props => {
    let config = {

        chart: {
            type: 'bar',
        },
        title: false,

        xAxis: {
            categories: ['Achievement', 'Deference', 'Order', 'Exhibition', 'Autonomy', 'Affiliation', 'Intraception', 'Succorance', 'Dominance', 'Abasement', 'Nurturance', 'Change', 'Endurance', 'Heterosexsual', 'Aggression']
        },


        legend: false,

        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    inside: true,
                    align: 'left',
                    x: 0,
                    style: {
                        fontWeight: 'bold',
                        color: "#000000",
                        stroke: false,
                        textOutline: 0
                    }
                }
            }
        },


        series: [{
            x: 1,
            y: 1,
            name: "Point2",
            color: "#00FF00"
        }, {
            linkedTo: 's1',
            color: '#39B54A',
            data: [23, 10, 59, 15, 10, 72, 15, 15, 10, 65, 35, 20, 30, 24, 15]
        }],
        credits: {
            enabled: false
        },
    }

    return (
        <Row>
            <Col xs={12} sm={props.colSm} md={props.colMd} style={{ marginTop: '20px' }}>
                <Components.card.CardWhiteComponent text={props.title}>

                    {props.isLoading ?
                        <Spinner animation="border" variant="primary" className='mr-auto' style={{ margin: 'auto', color: 'blue' }} /> :
                        <ReactHighcharts style={{ width: '100%', height: '1800px' }} config={config} />
                    }
                </Components.card.CardWhiteComponent>
            </Col>
            <Col xs={12} sm={5} md={5} style={{ marginTop: '20px' }}>
                <div className="grey-card-cart ">
                    Achievement: Kebutuhan Untuk Berprestasi, menyelesaikan tugas tugas yang sulit, menghadapi hambatan dan menentukan standar yang tinggi
                </div>
                <div className="grey-card-cart ">
                    Deference: Kebutuhan untuk mendapatkan arahan dari orang lain, pribadii yang lebih menyukai mengikuti arahan (konformitas)
                </div>
                <div className="grey-card-cart ">
                    Order: Kebutuhan untuk menegerjakan sesuatu secara teratur, sistematis, dan rapi berdasarkan rencana yang di tetapkan
                </div>
                <div className="grey-card-cart ">
                    Exhibition: Kebutuhan untuk menjadi pusat perhatian dan tampil percaya diri menonjolkan suatu prestasi yang di raih
                </div>
                <div className="grey-card-cart ">
                    Autonomy: Kebutuhan untuk mandiri dan bebas dalam membuat keputusan serta menghindari urusan dan campur tangan orang lain
                </div>
                <div className="grey-card-cart ">
                    Affiliation: Kebutuhan untuk dekat dan bekerja sama dengan orang lain, berupaya untuk menjalin relasi secara baik
                </div>
                <div className="grey-card-cart ">
                    Intraception: Kebutuhan untuk belajar memahami dan mengerti perasaan-perasaan orang lain, menunjukkan empati
                </div>
                <div className="grey-card-cart ">
                    Succorance: Kebutuhan untuk mendapat afeksi dan perhatian dari orang lain agar orang lain bersimpati dan mengerti keadaan dirinya
                </div>
                <div className="grey-card-cart ">
                    Dominance: Kebutuhan untuk mengatur, mempengaruhi , dan mengarahkan orang lain melalu saran, persuasi dan perintah
                </div>
                <div className="grey-card-cart ">
                    Abasement: Kebutuhan untuk menerima secara pasif dorongan eksternal, kritik, hukuman cenderung inferioritas dan menyalahkan diri
                </div>
                <div className="grey-card-cart ">
                    Nurturance: Kebutuhan untuk menolong teman dan orang orang yang kesulitan, mengasihi orang lain
                </div>
                <div className="grey-card-cart ">
                    Change: Kebutuhanuntuk membuat sesuatu yang baru dan berbeda, mampu mengikuti perubahan-perubahan yang terjadi di lingkungan
                </div>
                <div className="grey-card-cart ">
                    Endurance: Kebutuhan untuk bertahan baik secara fisik maupun psikologis dalam tugas tugas yang dihadapinya, tekun dan gigih
                </div>
                <div className="grey-card-cart ">
                    Heterosexsual: Kebutuhan untuk bergaul bebas dengan lawan jenisnya, menunjukkan ketertarikan sosial
                </div>
                <div className="grey-card-cart ">
                    Aggression: Kebutuhan untuk melawan, membalas rasa sakit, atau menghukum orang lain, menunjukkan kekerasan
                </div>
            </Col>
        </Row>

    )
}

NeedChart.propTypes = PropTypesParam
NeedChart.defaultProps = DefaultPropsParam

export default NeedChart
