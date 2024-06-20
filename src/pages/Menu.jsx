import MenuItem from "../components/MenuItem"
import "../styles/Menu.css"
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">OUR MENU</h1>
      <div className="menuList">
        <MenuItem/>
      </div>

    </div>
  )
}

export default Menu
