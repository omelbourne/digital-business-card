import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import instagram from "../images/Instagram.png"
import github from "../images/GitHub.png"

export default function Footer() {
    return (
      <footer className="Footer">
        <div className = "SocialButtons">
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={github}/>
        </div>
      </footer>
    )
  }