import React from 'react'
import "./home.css"
import { FaLaptopCode, FaServer, FaRobot, FaChartLine, FaShieldAlt, FaBug, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Info from './Info';
const specializations = [
  {
    id: "frontend",
    icon: <FaLaptopCode />,
    title: "Front-end Development",
    desc: "Build beautiful and interactive web interfaces with modern technologies.",
    levels: "3 Levels",
  },
  {
    id: "backend",
    icon: <FaServer />,
    title: "Back-end Development",
    desc: "Design servers, APIs, and databases that power real applications.",
    levels: "3 Levels",
  },
  {
    id: "ai",
    icon: <FaRobot />,
    title: "AI",
    desc: "Learn machine learning and build intelligent systems.",
    levels: "3 Levels",
  },
  {
    id: "datascience",
    icon: <FaChartLine />,
    title: "Data Science",
    desc: "Analyze data and turn numbers into useful insights.",
    levels: "3 Levels",
  },
  {
    id: "cybersecurity",
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    desc: "Protect systems and data from attacks and vulnerabilities.",
    levels: "3 Levels",
  },
  {
    id: "testing",
    icon: <FaBug />,
    title: "Testing",
    desc: "Ensure software quality through manual and automated testing.",
    levels: "3 Levels",
  },
];

function Home() {
  return (
    <div className="home">
         <Info />
      <div className="container">
        <div className="section-title">
          <span className="small-boxes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <h1>Popular Specializations</h1>
        </div>
      </div>

      <div className="container">
        <div className="boxses">
          {specializations.map((item) => (
            <Link      to={`/roadmap/${item.id}`}     className="box1" key={item.id}>
              <div className="content">
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>

              <p>{item.desc}</p>

              <div className="footer">
                <span className="levels">{item.levels}</span>
                <span className="arrow-circle">
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home