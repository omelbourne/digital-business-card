import email from "../images/Email.png"
import linkedin from "../images/LinkedIn.png"

export default function Main() {
    return (
      <main className="Main">
        <h1>Oliver Melbourne</h1>
        <p className = "Role">Frontend Developer</p>
        <p className = "Website">oliver.melbourne</p>
        
        <div className = "MainButtons">
            <button className = "Email"><img src = {email} />Email</button>
            <button className = "LinkedIn"><img src = {linkedin} />LinkedIn</button>
        </div>
        
        <h3>About</h3>
        <p>Example about me text consisting areas of expertise and aspirations.</p>

        <h3>Interests</h3>
        <p>Example interests text.</p>

      </main>
    )
  }