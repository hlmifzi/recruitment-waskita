import React from 'react'
import logo from '../../logo-waskita.png'
import facebookBadge from '../../assets/recruitment/facebook-badge.svg'
import instagramBadge from '../../assets/recruitment/instagram-badge.svg'
import twitterBadge from '../../assets/recruitment/twitter-badge.svg'
import { Dropdown } from 'react-bootstrap'
import useFormHelper from '../../hooks/useFormHelper'
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import swal from '../../components/notification/swal'
import Toast from '../../components/notification/toast'
import { useQuery } from '@apollo/react-hooks';

const SIGN_UP = gql`
  mutation signUp($newCandidate:CandidateInput!) {
    candidateCreate(newCandidate:$newCandidate) {
      candidate {
        id
      }
      ok
      errors {
        field
      }
    }
  }
`;

const QUERY_GET_UNIVERSITY = gql`{
  universityList {
    results(limit:25) {
      id
      university
    }
  }
}`


const LOGIN = gql`
  mutation login($email:String!, $password:String!) {
    userLogin(email:$email, password:$password) {
      ok
      user {
        role
        id
      }
    }
  }
`;

const SignUp = ({ navigate }) => {
  let arrListUniversity = []
  const { state, _handleOnChangeInput, _handleOnChangeSelect } = useFormHelper()
  const client = useApolloClient();
  const [candidateCreate] = useMutation(SIGN_UP);
  const [userLogin] = useMutation(LOGIN);
  const days = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const Months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
  const Years = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]
  const { loading, error: err1, data: universityList = {} } = useQuery(QUERY_GET_UNIVERSITY)
  if (!loading) arrListUniversity = universityList?.universityList.results
  const getQuerySignUp = () => ({
    newCandidate: {
      name: state.name,
      gender: state.gender,
      dob: `${state.dobYear}-${state.dobMonth?.length === 1 ? `0${state.dobMonth}` : state.dobMonth}-${state.dobDay?.length === 1 ? `0${state.dobDay}` : state.dobDay}`,
      religion: state.religion,
      tribe: state.tribe,
      university: state.university,
      major: state.major,
      email: state.email,
      password: state.password,
      noHp: state.noHp,
      noKtp: state.noKtp,
      haveSocmed: !!state.haveSocmed,
      freqSocmedFb: parseInt(state.freqSocmedFb),
      freqSocmedTw: parseInt(state.freqSocmedTw),
      freqSocmedIg: parseInt(state.freqSocmedIg),
      termSocmedUpload: !!state.termSocmedUpload,
      termSocmedPsikotes: !!state.termSocmedPsikotes,
      termSocmedPrivacy: !!state.termSocmedPrivacy
    }
  })

  const getQueryVariableLogin = () => ({
    email: state.email,
    password: state.password
  })

  const _handleLogin = async () => {

    const { data, errors } = await userLogin(({
      variables: getQueryVariableLogin()
    }))

    if (errors) return swal.failed('Wrong username')

    if (data.userLogin.ok) {
      let isAdmin = false
      const userRole = data.userLogin.user.role
      const userId = data.userLogin.user.id
      if (userRole === 'WASKITA') isAdmin = 1;
      if (userRole === 'CANDIDATE') isAdmin = 2;

      if (userRole === 'WASKITA') Toast.info(`Welcome to Hiring Apps ${state.email}`)
      if (userRole === 'CANDIDATE') Toast.info(`Welcome to Hiring Apps ${state.email}`)

      if (isAdmin) {
        localStorage.setItem('token', true)
        localStorage.setItem('isAdmin', isAdmin)
        localStorage.setItem('userId', userId)
        client.writeData({
          data: {
            isLoggedIn: localStorage.getItem('token'),
            isAdmin: localStorage.getItem('isAdmin')
          }
        });
      } else {
        swal.failed('Wrong username')
      }
    }
  }

  const _handleSignUp = async () => {
    const { data, errors } = await candidateCreate(({
      variables: getQuerySignUp()
    }))
    if (errors) return swal.failed("something when wrong")
    if (data.candidateCreate.ok) {
      _handleLogin(data.candidateCreate.candidate.id)
    } else {
      swal.failed(`something when wrong`)
    }
  }

  const getDisabled = () => {
    let disabled = false
    const candidateData = [
      "dobDay",
      "dobMonth",
      "dobYear",
      "email",
      "freqSocmedFb",
      "freqSocmedIg",
      "freqSocmedTw",
      "gender",
      "haveSocmed",
      "major",
      "name",
      "noHp",
      "noKtp",
      "password",
      "religion",
      "termSocmedPrivacy",
      "termSocmedPsikotes",
      "termSocmedUpload",
      "tribe",
      "university"
    ]
    candidateData.map(val => {
      if(!state[val]){
        disabled = true
      }
    })
    return disabled
  }

  const chooseUniversity = arrListUniversity.filter((v, i) => v.id === state.university)[0]?.university

  return (
    <div className="body-login">
      <div className="register-container">
        <div className="register-header">
          <img alt="picture" src={logo} />
        </div>

        <div className="register-body">
          <div>
            <p className="flex-4 h-text-right mr-26">Nama Lengkap</p>
            <input className="flex-8" name="name" onChange={_handleOnChangeInput} type="text" />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Jenis Kelamin</p>
            <div className="flex-8 minus-ml-8 d-flex mt-10">
              <label className="label mr-20">
                Laki-laki
                <input name="gender" value="LK" onClick={_handleOnChangeInput} type="checkbox" checked={state.gender == "LK"} />
                <span className="checkmark"></span>
              </label>
              <label className="label">
                Perempuan
                <input name="gender" value="PR" onClick={_handleOnChangeInput} type="checkbox" checked={state.gender == "PR"} />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Tanggal Lahir</p>
            <div className="flex-8 d-flex">
              <Dropdown className={"mr-10 minus-ml-8"} onSelect={(e) => _handleOnChangeSelect(e, 'dobDay')} required>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {state.dobDay || 'Day'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    days.map((v, i) => (
                      <Dropdown.Item key={i} eventKey={v}>{v}</Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={"mr-10"} onSelect={(e) => _handleOnChangeSelect(e, 'dobMonth')} required>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {state.dobMonth || 'Month'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    Months.map((v, i) => (
                      <Dropdown.Item key={i} eventKey={i + 1}>{v}</Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={"mr-10"} onSelect={(e) => _handleOnChangeSelect(e, 'dobYear')} required>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {state.dobYear || 'Year'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    Years.map((v, i) => (
                      <Dropdown.Item key={i} eventKey={v}>{v}</Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Agama</p>
            <div className="flex-8">
              <Dropdown className={"mr-10 minus-ml-8"} onSelect={(e) => _handleOnChangeSelect(e, 'religion')} required>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {state.religion || 'Pilih Agama'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="ISLAM">ISLAM</Dropdown.Item>
                  <Dropdown.Item eventKey="KRISTEN PROTESTAN">KRISTEN PROTESTAN</Dropdown.Item>
                  <Dropdown.Item eventKey="KRISTEN KATOLIK">KRISTEN KATOLIK</Dropdown.Item>
                  <Dropdown.Item eventKey="HINDU">HINDU</Dropdown.Item>
                  <Dropdown.Item eventKey="BUDDHA">BUDDHA</Dropdown.Item>
                  <Dropdown.Item eventKey="KONG HU CU">KONG HU CU</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Suku</p>
            <input className="flex-8" type="text" name="tribe" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Universitas</p>
            <div className="flex-8" type="text" name="university" onChange={_handleOnChangeInput} >
              <Dropdown className={"mr-10 minus-ml-8"} onSelect={(e) => _handleOnChangeSelect(e, 'university')}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {chooseUniversity || 'Pilih Universitas'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    arrListUniversity.map((v, i) => <Dropdown.Item key={i} eventKey={v.id}>{v.university}</Dropdown.Item>)
                  }
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Jurusan</p>
            <input className="flex-8" type="text" name="major" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Email</p>
            <input className="flex-8" type="text" name="email" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Password</p>
            <input className="flex-8" type="password" name="password" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">No. Hp</p>
            <input className="flex-8" type="number" name="noHp" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">No. KTP</p>
            <input className="flex-8" type="number" name="noKtp" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Mempunyai Social Media?</p>
            <div className="flex-8 minus-ml-8 d-flex mt-10">
              <label className="label mr-20">
                Ya
                <input type="radio" name="haveSocmed" value={true} onClick={_handleOnChangeInput} />
                <span className="checkmark"></span>
              </label>
              <label className="label">
                Tidak
                <input type="radio" name="haveSocmed" value={false} onClick={_handleOnChangeInput} />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Social Media yang sering Anda pakai?</p>
            <div className="flex-8">
              <div className="container-social-media">
                <div className="flex-3"></div>
                <div className="flex-3">1</div>
                <div className="flex-3">2</div>
                <div className="flex-3">3</div>
              </div>
              <div className="container-social-media">
                <div className="flex-3">
                  <img alt="picture1" src={facebookBadge} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedFb" value={1} onClick={_handleOnChangeInput} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedFb" value={2} onClick={_handleOnChangeInput} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedFb" value={3} onClick={_handleOnChangeInput} />
                </div>
              </div>
              <div className="container-social-media">
                <div className="flex-3">
                  <img alt="picture2" src={twitterBadge} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedTw" value={1} onClick={_handleOnChangeInput} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedTw" value={2} onClick={_handleOnChangeInput} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedTw" value={3} onClick={_handleOnChangeInput} />
                </div>
              </div>
              <div className="container-social-media">
                <div className="flex-3">
                  <img alt="picture3" src={instagramBadge} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedIg" value={1} onClick={_handleOnChangeInput} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedIg" value={2} onClick={_handleOnChangeInput} />
                </div>
                <div className="flex-3">
                  <input type="radio" name="freqSocmedIg" value={3} onClick={_handleOnChangeInput} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-content-center mt-28 mb-28">
            <div className="pl-50 pr-50">
              <label className="label mr-20">
                Bersedia mengunduh dan mengupload data 3 social media kedalam platform yang disediakan
                <input type="checkbox" name="termSocmedUpload" value={true} onClick={_handleOnChangeInput} />
                <span className="checkmark"></span>
              </label>
              <label className="label">
                Mengerjakan 3 psikotes untuk kemudian hasilnya dapat diperoleh secara langsung
                <input type="checkbox" name="termSocmedPsikotes" value={true} onClick={_handleOnChangeInput} />
                <span className="checkmark"></span>
              </label>
              <label className="label mr-20">
                Data pribadi akan dijamin kerahasiaannya dan hanya digunakan untuk kepentingan penelitian, dimana segala unsur nama akan dihilangkan saat ditayangkan/ditampilkan
                <input type="checkbox" name="termSocmedPrivacy" value={true} onClick={_handleOnChangeInput} />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="register-footer">
          <button type="submit" className="btn-sign-up mt-0" onClick={_handleSignUp} style={getDisabled() ? {opacity: 0.5} : {}} disabled={getDisabled()}>
            Sign Up
           </button>
          <p className="mb-0 mt-8">Already have an account? <em onClick={() => navigate("/")}>Sign In</em></p>
        </div>
      </div>
    </div >
  )
}


export default SignUp