import React from "react";
import "./style/LatestBlogs.css";
import iconBootstrapChat from "../assets/icon-bootstrap-outline-logos-chat-left-text.svg";
import iconBootstrapPerson from "../assets/icon-bootstrap-outline-logos-person-video-3.svg";
import iconTablerHeadset from "../assets/icon-tabler-icons-headset.svg";
import iconBootstrapGraph from "../assets/icon-bootstrap-outline-logos-graph-up.svg";
import iconPenNib from "../assets/pen-nib.svg";
import iconHeroiconsBuilding from "../assets/icon-heroicons-outline-office-building.svg";
import iconBootstrapReception from "../assets/icon-bootstrap-outline-logos-reception-4.svg";
import iconHeroiconsScale from "../assets/icon-heroicons-outline-scale.svg";
import iconMicrophoneStage from "../assets/microphone-stage.svg";

const categories = [
  { name: "All", backgroundColor: "#748d92ff", textColor: "#d3d9d5ff" },
  { name: "Account & Consulting", icon: iconBootstrapChat },
  { name: "Admin Support", icon: iconBootstrapPerson },
  { name: "Customer Service", icon: iconTablerHeadset },
  { name: "Data science & Analytics", icon: iconBootstrapGraph },
  { name: "Design & Creative", icon: iconPenNib },
  { name: "Engineering & Architecture", icon: iconHeroiconsBuilding },
  { name: "IT & networking", icon: iconBootstrapReception },
  { name: "Legal", icon: iconHeroiconsScale },
  { name: "Sales & marketing", icon: iconMicrophoneStage },
];

const LatestBlogs = () => {
  return (
    <>
      <div className="mt-5 mb-10">
        <div className="w-full flex flex-col md:flex-row gap-5 mt-10">
          <div className="category-list-slider flex flex-row mt-4">
            {" "}
            {/* Slider container */}
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category-item ${index === 0 ? "all-category" : ""}`}
                style={{
                  backgroundColor:
                    index === 0 ? category.backgroundColor : "transparent",
                  color: category.textColor || "#a1aebeff",
                }}
              >
                {category.icon && (
                  <img
                    src={category.icon}
                    className="icon"
                    alt={category.name}
                  />
                )}
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
