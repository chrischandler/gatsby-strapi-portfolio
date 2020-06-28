import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/chchris",
  },
  {
    id: 3,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.com",
  },
  {
    id: 4,
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com/chrischandler",
  },
  {
    id: 6,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
