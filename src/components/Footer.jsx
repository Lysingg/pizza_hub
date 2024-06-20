import { Youtube,Instagram,Facebook,Twitter } from "lucide-react"
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Instagram className="icon"/>
      <Facebook className="icon"/>
      <Twitter className="icon"/>
      <Youtube className="icon"/>
      </div>
      <p>&copy; 2024 SinggthePizza.com</p>
    </div>
  )
}

export default Footer
