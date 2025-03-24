import React from 'react'

function Links() {
    const items = [
        "About",
        "Skills",
        "Projects",
        "Education",
        "Contact"
    ]
  return (
    <ul className="menu__list">{items.map((item, index)=>(
        <li>
            <a href={`#${item}`} key={index} className="menu__link" lang="en">{item}</a>
        </li>
    ))}
          {/* <li>
            <a
              data-link="stickynavbar"
              onClick="topFunction()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              About
            </a>
          </li>
          <li>
            <a
              data-link="about"
              onClick="scrollToAbout()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              data-link="work"
              onClick="scrollToWork()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              data-link="work"
              onClick="scrollToWork()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Education
            </a>
          </li>
          <li>
            <a
              data-link="contact"
              onClick="scrollToContact()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Contact
            </a>
          </li> */}
        </ul>
  )
}

export default Links