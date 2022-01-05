import React from 'react'
import { Stage, Layer, Rect, Image, Group } from "react-konva";
import { Tools } from './Tools'
import useImage from 'use-image';
import { Note } from './Note';
import { inject, observer } from 'mobx-react';


//TODO сделать хоткей, чтобы при селекте шейпа и нажатии кнопки delete фигура удалялась

//TODO при клике вне селект шейпа, когда isEditing = true, сбрасывать на isEditing = false

const WIDTH = 300;
const HEIGHT = 300;

let lastId = 0;

function newId(prefix = 'id') {
  lastId++;
  return `${prefix}${lastId}`;
}

const DashboardContainer = inject('dashboardStore')(observer(({ dashboardStore }) => {

  const store = dashboardStore

  const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 });

  const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * WIDTH;

  const endX = Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * WIDTH;

  const startY = Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * HEIGHT;

  const endY = Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

  const gridComponents = [];

  const [shapes, setShapes] = React.useState([])

  const [selectedId, selectShape] = React.useState(null);

  const [openColorMenu, setOpenColorMenu] = React.useState(false)

  const [color, setColor] = React.useState("")

  //** Заготовка на кастомную фигуру стикера */
  // const svg = '<svg width="240" height="196" viewBox="0 0 240 196" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="174" fill="'+color+'"/><rect width="220" height="21.8557" transform="matrix(1 0 0 - 1 0 195.856)" fill="'+color+'"/><path d="M240 174H220V195.856L240 174Z" fill="#f3f3f3"/></svg>';

  // const encoded = window.btoa(svg);

  // const [image] = useImage(`data: image/svg+xml;base64,${encoded}`);
  //** END */

  const [image] = useImage('https://i.ibb.co/m08rGsf/Rectangle.png');

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

  const setStagePosition = (e) => {
    setStagePos(e.currentTarget.position())
  }

  const createShape = (e) => {
    const xPos = e.currentTarget.getRelativePointerPosition().x
    const yPos = e.currentTarget.getRelativePointerPosition().y

    if (openColorMenu) {
      setShapes(prev => {
        return [...prev,
        {
          id: newId(),
          x: xPos,
          y: yPos,
          height: 300,
          img: image,
          width: 300,
          message: "",
          isEditing: false,
          contextPosY: 0,
          contextPosX: 0,
          fill: "",
        }
        ]
      })
      setOpenColorMenu(false)
    }
  }

  const checkOutsideClick = e => {
    if (e.target.parent.parent === e.target.getStage()) {
      selectShape(null)
    }
  }

  const handleOnChange = (newAttrs, i) => {
    setShapes(prev => {
      return prev.map((x, index) => index === i ? newAttrs : x)
    });
  }

  const onDeleteShape = () => {
    setShapes(prev => prev.filter(x => x.id !== selectedId))
  }

  return (
    <>
      <Tools
        openColorMenu={openColorMenu}
        setOpenColorMenu={setOpenColorMenu}
        color={color}
        setColor={setColor}
      />
      <div className="canvas" style={{ cursor: openColorMenu ? "pointer" : "grab" }}>
        <Stage
          width={window.innerWidth}
          onClick={createShape}
          height={window.innerHeight}
          x={stagePos.x}
          y={stagePos.y}
          onTouchStart={createShape}
          onMouseDown={checkOutsideClick}
          draggable={shapes.every(x => !x.isEditing)}
          onDragEnd={setStagePosition}
        >
          <Layer>
            {gridComponents}
            {shapes.map((obj, i) => (
              <Group
                onClick={(e) => selectShape(obj.id)}
                draggable={obj.id === selectedId}
              >
                <Note
                  {...obj}
                  isSelected={obj.id === selectedId}
                  onChange={(newAttrs) => handleOnChange(newAttrs, i)}
                  onClickDeleteBtn={onDeleteShape}
                />
              </Group>
            ))}
          </Layer>
        </Stage>
      </div>
    </>

  )
}))


export default DashboardContainer