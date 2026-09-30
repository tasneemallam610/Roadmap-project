import { createContext, useContext, useEffect, useState } from "react";
import { roadmaps } from "../../data/roadmaps";

export const RoadmapContext = createContext();

export function RoadmapProvider({ children }) {

  const [selectedRoadmaps, setSelectedRoadmaps] = useState(() => {

    const saved = localStorage.getItem("selectedRoadmaps");

    return saved ? JSON.parse(saved) : [];

  });

   const [completedTopics, setCompletedTopics] = useState(() => {

    const saved = localStorage.getItem("completedTopics");

    return saved ? JSON.parse(saved) : {};

  });

  useEffect(() => {

    localStorage.setItem(
      "selectedRoadmaps",
      JSON.stringify(selectedRoadmaps)
    );

  }, [selectedRoadmaps]);


    useEffect(() => {

    localStorage.setItem(
      "completedTopics",
      JSON.stringify(completedTopics)
    );

  }, [completedTopics]);

  const toggleTopic = (roadmapId, topicId) => {

    setCompletedTopics((prev) => {

      const roadmapTopics = prev[roadmapId] || [];

      if (roadmapTopics.includes(topicId)) {

        return {
          ...prev,
          [roadmapId]: roadmapTopics.filter(
            (id) => id !== topicId
          ),
        };

      }

      return {
        ...prev,
        [roadmapId]: [...roadmapTopics, topicId],
      };

    });

  };


  const addToDashboard = (roadmapId) => {

    setSelectedRoadmaps((prev) => {

      if (prev.includes(roadmapId)) {
        return prev;
      }

      return [...prev, roadmapId];

    });

  };

  const removeFromDashboard = (roadmapId) => {
  setSelectedRoadmaps((prev) => {
    return prev.filter((id) => id !== roadmapId);
  });
};

  const selectedRoadmapData = selectedRoadmaps.map((id) => ({
    id,
    ...roadmaps[id],
  }));


  return (
    <RoadmapContext.Provider
      value={{
        selectedRoadmaps,
        selectedRoadmapData,
        addToDashboard,
        removeFromDashboard ,
          completedTopics,
        toggleTopic,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
}


export function useRoadmap() {

  return useContext(RoadmapContext);

}