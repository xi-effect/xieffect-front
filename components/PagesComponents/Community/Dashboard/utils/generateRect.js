import { Rect } from "react-konva";

export const generateRect = (stagePos) => {

  const gridComponents = [];

  const WIDTH = 300; // width background rectangle

  const HEIGHT = 300; // height background rectangle

  const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * WIDTH;

  const endX = Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * WIDTH;

  const startY = Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * HEIGHT;

  const endY = Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

  for (let x = startX; x < endX; x += WIDTH) {
    for (let y = startY; y < endY; y += HEIGHT) {
      gridComponents.push(
        <Rect
          x={x}
          y={y}
          width={WIDTH}
          height={HEIGHT}
          fill="#1111"
          stroke="#424242"
        />
      );
    }
  }
  return gridComponents;
};