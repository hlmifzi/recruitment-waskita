import React from 'react'
import Components from '../../../components/Components'
import MyProfilePicture from '../../../assets/recruitment/my-profile.png'
import PropTypes from 'prop-types'

const MyProfile = props => {
    return (
        <>
            <Components.header />
            <div className="my-profile-container">
                <div className="title-my-profile">
                    <div className="my-profile-line">
                        <b>
                            Profile
                        </b>
                    </div>
                </div>
                <div className="d-flex flex-direction-row body-container">
                    <div className="flex-3 text-center">
                        <img alt="profile" src={MyProfilePicture} /><br />
                        <a href="">Update</a>
                    </div>

                    <div className="flex-4 flex-direction-column">
                        <div >
                            <label className="flex-3">Nama Lengkap</label>
                            <input className="flex-8" type="text" />
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
                <div style={{ float: 'right' }}>
                    <button className="btn-save-profile">Simpan</button>
                </div>
            </div>
        </>
    )
}

MyProfile.propTypes = {

}

export default MyProfile
