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
                    <div className="flex-4 text-center">
                        <img alt="profile" src={MyProfilePicture} /><br />
                        <a href="">Update</a>
                    </div>

                    <div className="flex-5 flex-direction-column">
                        <div >
                            <label>Nama Lengkap</label>
                            <input className="ml-30" type="text" />
                        </div>
                        <div>
                            <label>Tanggal Lahir</label>
                            <input className="ml-40" type="date" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input className="ml-100" type="text" />
                        </div>
                        <div>
                            <label>Universitas</label>
                            <input className="ml-60" type="text" />
                        </div>
                        <div>
                            <label>No.Hp</label>
                            <input className="ml-90" type="text" />
                        </div>
                        <div style={{ float: 'right', marginRight: '130px' }}>
                            <button className="btn-save-profile">Simpan</button>
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
