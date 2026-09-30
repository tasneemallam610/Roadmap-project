import React from "react";
import "./dashbord.css";
import { useRoadmap } from "../../components/context/RoadmapContext";
import { useNavigate } from "react-router-dom";

function Dashbord() {

  const userName = localStorage.getItem("userName");

  const {
    selectedRoadmapData,
    removeFromDashboard,
    completedTopics
  } = useRoadmap();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");

    navigate("/login");
  };

  return (
    <div className="dashboard">

      <div className="container">

        <div className="welcome">

          <h1>
            Welcome, {userName}
          </h1>

          <p>
            Ready to continue your CS journey?
          </p>

          <button
            className="btn-2"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>


        <div className="my-roadmaps">

          {selectedRoadmapData.length > 0 ? (

            selectedRoadmapData.map((roadmap) => {

              // الـ topics اللي اليوزر خلصها
              const completed = completedTopics[roadmap.id] || [];

              // إجمالي عدد الـ topics
              const totalTopics = roadmap.levels.reduce(
                (total, level) =>
                  total + level.topics.length,
                0
              );

              // نسبة التقدم
              const progress =
                totalTopics === 0
                  ? 0
                  : Math.round(
                      (completed.length / totalTopics) * 100
                    );

              return (

                <div
                  className="my-roadmap"
                  key={roadmap.id}
                >

                  <span className="roadmap-label">
                    YOUR ROADMAP
                  </span>

                  <h2>
                    {roadmap.title}
                  </h2>


                  {/* Progress */}

                  <div className="progress-section">

                    <div className="progress-info">

                      <span>
                        Progress
                      </span>

                      <span>
                        {progress}%
                      </span>

                    </div>


                    <div className="progress-bar">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${progress}%`
                        }}
                      />

                    </div>

                  </div>


                  <button
                    onClick={() =>
                      navigate(`/roadmap/${roadmap.id}`)
                    }
                  >
                    Continue Roadmap
                  </button>


                  <button
                    onClick={() =>
                      removeFromDashboard(roadmap.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              );

            })

          ) : (

            <div className="my-roadmap">

              <h2>
                You don't have any roadmap yet
              </h2>

              <p>
                Choose a roadmap and start your journey.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashbord;