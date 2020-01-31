import { React } from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

let Auth = () => import('../pages/auth/SignIn')
let Admin = () => <div>Dash</div>

render(
    <Router>
        <Auth path="/" />
        <Admin path="/admin" />
    </Router>
)