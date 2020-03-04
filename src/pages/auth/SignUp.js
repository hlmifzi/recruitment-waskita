import React from 'react'
import logo from '../../logo-waskita.png'
import facebookBadge from '../../assets/recruitment/facebook-badge.svg'
import instagramBadge from '../../assets/recruitment/instagram-badge.svg'
import twitterBadge from '../../assets/recruitment/twitter-badge.svg'
import { useApolloClient } from "@apollo/react-hooks"
import { Dropdown } from 'react-bootstrap'
import useFormHelper from '../../hooks/useFormHelper'

const SignUp = ({ navigate }) => {
  const client = useApolloClient();
  const { state, _handleOnChangeInput, _handleOnChangeSelect } = useFormHelper()

  const getQuerySignUp = () => ({
    newCandidate: {
      name: state.name,
      gender: state.gender,
      dob: `${state.dobYear}-${state.dobMonth}-${state.dobDay}`,
      religion: state.religion,
      tribe: state.tribe,
      university: state.university,
      major: state.major,
      email: state.email,
      password: state.password,
      noHp: state.noHp,
      noKtp: state.noKtp,
      haveSocmed: state.haveSocmed,
      freqSocmedFb: state.freqSocmedFb,
      freqSocmedTw: state.freqSocmedTw,
      freqSocmedIg: state.freqSocmedIg,
      useSocmed: state.useSocmed,
      termSocmedUpload: state.termSocmedUpload,
      termSocmedPsikotes: state.termSocmedPsikotes,
      termSocmedPrivacy: state.termSocmedPrivacy
    }
  })

  const _handleSignUp = () => {
    const query = getQuerySignUp()
    console.log(state)
  }

  return (
    <div className="body-login">
      <div className="register-container">
        <div className="register-header">
          <img src={logo} />
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
                <input name="gender" value="LK" onClick={_handleOnChangeInput} type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="label">
                Perempuan
                <input name="gender" value="P" onClick={_handleOnChangeInput} type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Tanggal Lahir</p>
            <div className="flex-8 d-flex">
              <Dropdown className={"mr-10 minus-ml-8"} onSelect={(e) => _handleOnChangeSelect(e, 'dobMonth')} >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {state.dobMonth || 'Day'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/1">1</Dropdown.Item>
                  <Dropdown.Item href="#/2">2</Dropdown.Item>
                  <Dropdown.Item href="#/3">3</Dropdown.Item>
                  <Dropdown.Item href="#/4">4</Dropdown.Item>
                  <Dropdown.Item href="#/5">5</Dropdown.Item>
                  <Dropdown.Item href="#/6">6</Dropdown.Item>
                  <Dropdown.Item href="#/7">7</Dropdown.Item>
                  <Dropdown.Item href="#/8">8</Dropdown.Item>
                  <Dropdown.Item href="#/9">9</Dropdown.Item>
                  <Dropdown.Item href="#/10">10</Dropdown.Item>
                  <Dropdown.Item href="#/11">11</Dropdown.Item>
                  <Dropdown.Item href="#/12">12</Dropdown.Item>
                  <Dropdown.Item href="#/13">13</Dropdown.Item>
                  <Dropdown.Item href="#/14">14</Dropdown.Item>
                  <Dropdown.Item href="#/15">15</Dropdown.Item>
                  <Dropdown.Item href="#/16">16</Dropdown.Item>
                  <Dropdown.Item href="#/17">17</Dropdown.Item>
                  <Dropdown.Item href="#/18">18</Dropdown.Item>
                  <Dropdown.Item href="#/19">19</Dropdown.Item>
                  <Dropdown.Item href="#/20">20</Dropdown.Item>
                  <Dropdown.Item href="#/21">21</Dropdown.Item>
                  <Dropdown.Item href="#/22">22</Dropdown.Item>
                  <Dropdown.Item href="#/23">23</Dropdown.Item>
                  <Dropdown.Item href="#/24">24</Dropdown.Item>
                  <Dropdown.Item href="#/25">25</Dropdown.Item>
                  <Dropdown.Item href="#/26">26</Dropdown.Item>
                  <Dropdown.Item href="#/27">27</Dropdown.Item>
                  <Dropdown.Item href="#/28">28</Dropdown.Item>
                  <Dropdown.Item href="#/29">29</Dropdown.Item>
                  <Dropdown.Item href="#/30">30</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={"mr-10"} onSelect={(e) => _handleOnChangeSelect(e, 'dobMonth')} >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Month
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">January</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">February</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">May</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">June</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">July</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Ausgust</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">September</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">October</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">November</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">December</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={"mr-10"}>
                <Dropdown.Toggle variant="light" id="dropdown-basic" onSelect={(e) => _handleOnChangeSelect(e, 'dobYear')} >
                  Year
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2">1991</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1992</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">1993</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">1994</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1995</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">1996</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">1997</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1998</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">1999</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">2000</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2001</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2002</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">2003</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Agama</p>
            <div className="flex-8">
              <Dropdown className={"mr-10 minus-ml-8"} onSelect={(e) => _handleOnChangeSelect(e, 'religion')}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Agama
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Islam</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Kristen Protestan</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kristen Katolik</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hindu</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Buddha</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kong Hu Cu</Dropdown.Item>
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
            <input className="flex-8" type="text" name="university" onChange={_handleOnChangeInput} />
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
            <input className="flex-8" type="text" name="noHp" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">No. KTP</p>
            <input className="flex-8" type="text" name="noKtp" onChange={_handleOnChangeInput} />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-26">Mempunyai Socmed?</p>
            <div className="flex-8 minus-ml-8 d-flex mt-10">
              <label className="label mr-20">
                Yes
                <input type="radio" name="haveSocmed" value={true} onClick={_handleOnChangeInput} />
                <span className="checkmark"></span>
              </label>
              <label className="label">
                No
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
                  <img src={facebookBadge} />
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
                  <img src={twitterBadge} />
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
                  <img src={instagramBadge} />
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
          <div>
            <p className="flex-4 h-text-right mr-26">Seberapa sering / berapa kali anda mengupdate socmed Anda per minggu?</p>
            <input className="flex-8" type="text" name="useSocmed" onChange={_handleOnChangeInput} />
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
          <button type="submit" className="btn-sign-up mt-0" onClick={_handleSignUp} >
            Sign Up
           </button>
          <p className="mb-0 mt-8">Already have an account? <em onClick={() => navigate("/")}>Sign In</em></p>
        </div>
      </div>
    </div >
  )
}


export default SignUp