import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  // 기본스타일
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: ${(props) => (props.size === "large" ? "20px" : "16px")};
  cursor: pointer;

  background-color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "red";
      case "basic":
        return "black";
      case "success":
        return "green";
      case "fail":
        return "gray";
      default:
        return "white";
    }
  }};

  width: ${(props) => (props.fullWidth ? "100%" : auto)};
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

export default function StyledButtons() {
  return (
    <div>
      <StyledButton size="large" color="danger" fullWidth>
        버튼
      </StyledButton>
      <StyledButton color="success">버튼2</StyledButton>
    </div>
  );
}
