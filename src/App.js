import React, { useState } from "react";
import "./styles.css";

const TabComponent = ({ user }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Define tab data based on user
  const tabs = [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> }
  ];

  // Add an additional tab for specific users
  if (user === "admin") {
    tabs.push({ label: "Tab 3", content: <div>Content for Tab 3</div> });
  }

  return (
    <div>
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabComponent;
