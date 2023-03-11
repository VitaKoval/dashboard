import styled from "styled-components";

const handleColortype = (color) => {
  switch (color) {
    case "green":
      return "rgba(66, 204, 88, 0.15)";
    case "blue":
      return "rgba(73, 152, 238, 0.15)";
    case "red":
      return "rgba(242, 93, 93, 0.15)";
    case "orange":
      return "rgba(244, 167, 50, 0.15)";
    case "violet":
      return "rgba(155, 83, 248, 0.15)";
    default:
      return "rgba(66, 204, 88, 0.15)";
  }
};

export const Container = styled.div`
  background-color: var(--color-bg-card);
  padding: 20px;
  border-radius: 8px;

  width: calc((100% - 80px) / 5);

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 8px;
  margin-right: 22px;
  padding: 12px;

  background-color: ${(props) => handleColortype(props.color)};
`;

export const StatisticsCardNumber = styled.div`
  font-size: 44px;
  line-height: 1.09;
`;

export const StatisticsCardDescription = styled.div`
  font-weight: var(--fw-medium);
  font-size: 13px;
  line-height: 1.23;
  color: var(--color-secondary);
`;
