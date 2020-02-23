import React from 'react'
import Components from '../../../components/Components'
import PropTypes from 'prop-types'

const MyProfile = props => {
    return (
        <>
            <Components.header />
            <div className="my-profile-container">
                <div className="title-my-profile">
                    <div className="my-profile-line">
                        Profile
                    </div>
                </div>
                <div className="d-flex flex-direction-row body-container">
                    <div className="flex-3 text-center">
                        Foto
                        </div>
                    <div className="flex-4 flex-direction-column">
                        <div>
                            <label clas>Nama Lengkap</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Tanggal Lahir</label>
                            <input type="date" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Universitas</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>No.Hp</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

MyProfile.propTypes = {

}

export default MyProfile
