import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer className="snap-container mt-header footer">
        <span onclick="topFunction()" className="returnIcon" id="jumpToTop">
            <i className="fas fa-arrow-circle-up"></i>
        </span>

        {/* Footer social */}
        <section className="social">
            <div className="container">
                <a className="linkedin" href="https://www.linkedin.com/in/tibor-kopca-28800818/" target="_blank" title="Stalk me on LinkedIn"><i className="fa fa-linkedin-square"></i></a>
                <a className="github" href="https://github.com/TiborKopca" target="_blank" title="Check out my code on Github"><i className="fa fa-github"></i></a>
                <a className="slack" href="http://teamkkworkspace.slack.com" target="_blank" title="Team up with me on Slack"><i className="fa fa-slack"></i></a>
                 {/* <a className="skype" href="#"><i className="fa fa-skype"></i></a> 
                 <a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a> 
                 <a className="instagram" href="#"><i className="fa fa-instagram"></i></a>
                 <a className="dropbox" href="#"><i className="fa fa-dropbox"></i></a> 
                 <a className="twitter" href=""><i className="fa fa-twitter"></i></a> 
                 <a className="facebook" href="https://www.facebook.com/tibor.kopca"><i className="fa fa-facebook-official"></i></a>  */}
                <a className="whatsapp" href="https://wa.me/34644355960?text=I'd%20like%20to%20chat%20with%20you!" target="_blank" id="WAButton" title="Chat with me on Whatsapp"><i className="fa fa-whatsapp"></i></a>
            </div>
        </section>
        
        <div className="policies">
                <a href="./policies/privacy_policy.html" hreflang="en" target="_blank" rel="nofollow noopener">Privacy Policy</a>
                <a href="./policies/disclaimer.html" hreflang="en" target="_blank" rel="nofollow noopener" >Terms and Conditions inc. Cookies</a>
        </div>

        <p className="credits">
            Created by Tibor Kopca | &copy; {new Date().getFullYear()}
        </p>
    </footer>
  )
}

export default Footer