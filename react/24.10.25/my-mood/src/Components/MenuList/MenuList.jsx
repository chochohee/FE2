import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";

export default function MenuList({ mood, setMood }) {
  const menus = [
    "좋아요! 😃",
    "정말 좋아요! 🤭",
    "최고에요! 😄",
    "미쳤어요!! 🤪",
  ];

  return (
    <ul className="container-list">
      {menus.map((moodEl, index) => {
        return (
          <MenuListItem
            isSelected={mood === moodEl}
            key={index}
            mood={moodEl}
            setMood={setMood}
          />
        );
      })}
    </ul>
  );
}
