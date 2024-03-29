import React from 'react'
import Components from '../../../components/Components'
import MyProfilePicture from '../../../assets/recruitment/my-profile.png'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const CANDIDATE = gql`
  query candidate($id: ID!) {
    candidateDetail(id: $id) {
				name
				photo
				noHp
        dob
        email
        university {
          university
        }
        age
        gender
        major
        religion
        tribe
        user {
          id
        }
      }
    }
`;

const MyProfile = props => {
	const userId = localStorage.getItem("userId")
	const isAlreadyUpload = localStorage.getItem("isAlreadyUpload") == "true"
	const { loading, error, data: candidate } = useQuery(CANDIDATE, {
		variables: { id: userId },
	});

	const getProfilePicture = () => {
		return candidate ? (candidate.candidateDetail.photo ? candidate.candidateDetail.photo : MyProfilePicture) : MyProfilePicture
	}

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
					<div className="flex-5 flex-direction-column">
						{isAlreadyUpload && <div>
							<a href="https://waskita.catalystblinc.com/">Go to Online CTS Test</a>
						</div>}
						
						<div >
							<label>Nama Lengkap</label>
							<input className="ml-30 width-350 mt-20" value={candidate ? candidate.candidateDetail.name : null} type="text" />
						</div>
						<div>
							<label>Umur</label>
							<input className="ml-90 width-350 mt-20" value={candidate ? candidate.candidateDetail.noHp : null} type="text" />
						</div>
						<div>
							<label>Tanggal Lahir</label>
							<input className="ml-40 width-350 mt-20" value={candidate ? candidate.candidateDetail.dob : null} type="date" />
						</div>
						<div>
							<label>Email</label>
							<input className="ml-100 width-350 mt-20" value={candidate ? candidate.candidateDetail.email : null} type="text" />
						</div>
						<div>
							<label>No.Hp</label>
							<input className="ml-90 width-350 mt-20" value={candidate ? candidate.candidateDetail.noHp : null} type="text" />
						</div>
						<div>
							<label>Agama</label>
							<input className="ml-90 width-350 mt-20" value={candidate ? candidate.candidateDetail.religion : null} type="text" />
						</div>
						<div>
							<label>Suku</label>
							<input className="ml-90 width-350 mt-20" value={candidate ? candidate.candidateDetail.tribe : null} type="text" />
						</div>
						<div>
							<label>Universitas</label>
							<input className="ml-60 width-350 mt-20" value={candidate ? candidate.candidateDetail.university.university : null} type="text" />
						</div>
						<div>
							<label>Jurusan</label>
							<input className="ml-90 width-350 mt-20" value={candidate ? candidate.candidateDetail.major : null} type="text" />
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
