import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FcGraduationCap } from "react-icons/fc";
import { roadmaps } from "../../data/roadmaps";
import "./roadmapDetails.css";
import { useRoadmap } from "../../components/context/RoadmapContext";
import { useNavigate } from "react-router-dom";


function RoadmapDetails() {

    const { specId } = useParams();
  const roadmap = roadmaps[specId];
  const [activeLevel, setActiveLevel] = useState(0);
  const { addToDashboard, selectedRoadmaps, completedTopics, toggleTopic } = useRoadmap();


  const completed = completedTopics[specId] || [];

const navigate = useNavigate();

  if (!roadmap) {
    return <p>Not found !</p>;
  }
 const totalTopics = roadmap.levels.reduce(
    (total, level) => total + level.topics.length,
    0
  );


  // -----------------------------
  // عدد الـTopics اللي خلصت
  // -----------------------------

  const completedCount = completed.length;


  

  
  return (
    <div>
     

      <div className="roadmap-details container">
        <div className="roadmap-header">
          <span className="icon">
            <FcGraduationCap />
          </span>
          <div>
            <h1>{roadmap.title}</h1>
            <p>{roadmap.desc}</p>
          </div>
        </div>

        <div className="level-tabs">
          
             <button 
    className={activeLevel === 0 ? "active" : ""}
    onClick={() => setActiveLevel(0)}
  >
    Level 1
  </button>

  <button
    className={activeLevel === 1 ? "active" : ""}
    onClick={() => setActiveLevel(1)}
  >
    Level 2
  </button>

  <button
    className={activeLevel === 2 ? "active" : ""}
    onClick={() => setActiveLevel(2)}
  >
    Level 3
  </button>

  <button className="btn"
  onClick={() => {
    addToDashboard(specId);
    
  }}
>
  {selectedRoadmaps.includes(specId)
    ? "Added to Dashboard"
    : "Add to Dashboard"}
</button>
        </div>

        <div className="topics-list">
          {roadmap.levels[activeLevel].topics.map((topic, i) => (
            
             <a href={topic.link}
              target="_blank"
              rel="noopener noreferrer"
              className="topic-row"
              key={i}
            >

              <input
                type="checkbox"
                checked={completed.includes(topic.id)}
                onChange={() => toggleTopic(specId, topic.id)}
              />
               
              <span className="topic-number">{i + 1}</span>
              <div className="topic-text">
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadmapDetails
