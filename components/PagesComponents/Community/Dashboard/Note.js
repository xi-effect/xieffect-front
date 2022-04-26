/* eslint-disable react/prop-types */
import React from 'react';
import { Image, Text, Transformer } from "react-konva";
import { Html } from 'react-konva-utils';


const selectOptions = [14, 15, 16, 30];

export const Note = ({
  isSelected,
  onSelect,
  onClickDeleteBtn,
  onChange,
  x,
  y,
  width,
  img,
  id,
  height,
  message,
  contextPosY,
  contextPosX,
  isEditing,
  fill,
}) => {
  const shapeProps = {
    x,
    y,
    width,
    img,
    id,
    height,
    message,
    contextPosY,
    contextPosX,
    isEditing,
    fill,
  };

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const shapeRef = React.useRef();

  const trRef = React.useRef();

  const [editedMessage, setEditedMessage] = React.useState("");

  const [fontSize, setFontSize] = React.useState(14);

  const [color, setColor] = React.useState(fill);

  const handleSetMessage = (e) => {
    setEditedMessage(e.target.value);
  };

  const handleSetColor = (e) => {
    setColor(e.target.value);
    onChange({
      ...shapeProps,
      fill: color,
    });
  };

  const handleDBclick = (e) => {
    const absPos = e.target.getAbsolutePosition();
    onChange({
      ...shapeProps,
      contextPosX: absPos.x,
      contextPosY: absPos.y,
      isEditing: true,
    });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onChange({
        ...shapeProps,
        isEditing: false
      });
    }
  };

  return (
    <>
      <Image
        ref={shapeRef}
        image={img}
        draggable={isSelected}
        onClick={onSelect}
        onTap={onSelect}
        {...shapeProps}
        onTransform={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      <Text
        width={width}
        height={height}
        padding={30}
        onDblClick={handleDBclick}
        ellipsis
        fontFamily='Arial'
        id={id}
        align='center'
        // verticalAlign='middle'
        wrap='word'
        text={isEditing ? "" : editedMessage}
        // text={editedMessage ? editedMessage : message}
        // fontSize={width / 4}
        fontSize={+fontSize}
        // TODO адаптивный размер шрифта
        x={x}
        y={y}
      />
      {isSelected && (
        <Transformer
          flipEnabled
          anchorCornerRadius={50}
          anchorStroke="transparent"
          anchorSize={14}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right'
          ]}
          ref={trRef}
          borderDash={[3, 3]}
          rotateEnabled={false}
          boundBoxFunc={(oldAbsPos, newAbsPos) => {
            // limit resize
            if (newAbsPos.width < 150 || newAbsPos.height < 150) {
              return oldAbsPos;
            }
            return newAbsPos;
          }}
        />
      )}

      {isEditing &&
        <Html
          divProps={{
            style: {
              color: "red",
              zIndex: 600,
              transform: "unset",
            }
          }}
        >
          <div className="contextmenu" style={{
            width, height: 50, backgroundColor: "#fff", position: "absolute",
            borderRadius: 10,
            padding: 10,
            top: `${contextPosY - 80}px`,
            left: `${contextPosX}px`
          }}>
            <button
              style={{ marginRight: 10, fontSize: 15 }}
              onClick={onClickDeleteBtn}
              type="button"
            >
              delete
            </button>
            <span style={{ fontSize: 10 }}>font size - </span>
            <select style={{ fontSize: 15 }} value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
              {selectOptions.map(x, i => (
                <option key={i.toString()}>{x}</option>
              ))}
            </select>
            <span style={{ fontSize: 10 }}>shape color -</span>
            <input
              onChange={handleSetColor}
              type="color"
            />
          </div>
        </Html>
      }
      {isEditing &&
        <Html
          divProps={{
            style: {
              color: "red",
              zIndex: 600,
              transform: "unset",
            }
          }}
        >
          <textarea
            style={{
              fontFamily: "Arial",
              outline: "none",
              resize: "none",
              fontSize: +fontSize,
              lineHeight: 1,
              fontStyle: "normal",
              fontWeight: 400,
              padding: 30,
              zIndex: -1,
              border: "none",
              color: "#000",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width,
              height,
              backgroundColor: "transparent",
              position: "absolute",
              top: `${contextPosY}px`,
              left: `${contextPosX}px`
            }}
            type="text"
            value={editedMessage}
            onKeyDown={handleKeyDown}
            onChange={handleSetMessage}
          />
        </Html>
      }
    </>
  );
};
