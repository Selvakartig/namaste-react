import logo from '../assets/food-logo.jpg'
import '../../index.css'

const Header = () =>{
    return (
        <div className="header-container">
            <div className="header-logo-container">
                <img className="header-logo"src={logo} alt="Shop Logo"/>
            </div>
            <div className="header-menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header