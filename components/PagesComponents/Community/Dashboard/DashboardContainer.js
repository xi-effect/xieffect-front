import React from 'react';
import { Stage, Layer, Group } from "react-konva";
import useImage from 'use-image';
import { inject, observer } from 'mobx-react';
import { Tools } from './Tools';
import { Note } from './Note';
import { generateRect } from './utils/generateRect';
import { generateId } from './utils/generateId';

// TODO сделать хоткей, чтобы при селекте шейпа и нажатии кнопки delete фигура удалялась

// TODO при клике вне селект шейпа, когда isEditing = true, сбрасывать на isEditing = false

const DashboardContainer = inject()(observer(() => {

  const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 });

  const [shapes, setShapes] = React.useState([]);

  const [selectedId, selectShape] = React.useState(null);

  const [openColorMenu, setOpenColorMenu] = React.useState(false);

  const [color, setColor] = React.useState("");

  //* * Заготовка на кастомную фигуру стикера */
  // const svg = '<svg width="240" height="196" viewBox="0 0 240 196" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="174" fill="'+color+'"/><rect width="220" height="21.8557" transform="matrix(1 0 0 - 1 0 195.856)" fill="'+color+'"/><path d="M240 174H220V195.856L240 174Z" fill="#f3f3f3"/></svg>';

  // const encoded = window.btoa(svg);

  // const [image] = useImage(`data: image/svg+xml;base64,${encoded}`);
  //* * END */

  const [image] = useImage('https://i.ibb.co/m08rGsf/Rectangle.png');

  const gridComponents = generateRect(stagePos);

  const setStagePosition = (e) => {
    setStagePos(e.currentTarget.position());
  };

  const createShape = (e) => {
    const xPos = e.currentTarget.getRelativePointerPosition().x;
    const yPos = e.currentTarget.getRelativePointerPosition().y;

    if (openColorMenu) {
      setShapes(prev => [...prev,
      {
        id: generateId(),
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
      ]);
      setOpenColorMenu(false);
    }
  };

  const checkOutsideClick = e => {
    if (e.target.parent.parent === e.target.getStage()) {
      selectShape(null);
    }
  };

  const handleOnChange = (newAttrs, i) => {
    setShapes(prev => prev.map((x, index) => index === i ? newAttrs : x));
  };

  const onDeleteShape = () => {
    setShapes(prev => prev.filter(x => x.id !== selectedId));
  };

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
                key={i.toString()}
                onClick={() => selectShape(obj.id)}
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

  );
}));


export default DashboardContainer;