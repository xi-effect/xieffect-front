import React from 'react'
import { Image, Group, Text, Transformer, Path } from "react-konva";
import { Html } from 'react-konva-utils';


//TODO сделать клик вне блока, и чтобы окно редактирования закрывалось 

//TODO запретить draggable stage, когда isEditText = true



export const Note = ({
  isSelected,
  onSelect,
  onChange,
  x,
  y,
  width,
  img,
  id,
  height,
  message,
  textPosX,
  textPosY,
}) => {
  const shapeProps = {
    width,
    x,
    img,
    y,
    height,
    id,
    message,
    textPosX,
    textPosY,
  }

  const [isEditText, setEditText] = React.useState(false)


  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const shapeRef = React.useRef();

  const trRef = React.useRef();

  const [editedMessage, setEditedMessage] = React.useState("")

  const [textAreaPos, setTextAreaPos] = React.useState({ x, y }) // editable textarea position

  const handleEditText = (e) => {
    const absPos = e.target.getAbsolutePosition(); // current shape absolute coordinate
    setTextAreaPos(prev => prev = absPos)
    setEditText(true)
  }

  return (
    <>
      <Image
        ref={shapeRef}
        image={img}
        draggable={isSelected}
        onClick={onSelect}
        onTap={onSelect}
        {...shapeProps}
        // onDragEnd={(e) => {
        //   onChange({
        //     ...shapeProps,
        //     x: e.target.x(),
        //     y: e.target.y(),
        //   });
        // }} // драг по группе, не по картинке
        onTransform={(e) => {
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
        onDblClick={handleEditText} //?
        ellipsis
        fontFamily='Arial'
        align='center'
        // verticalAlign='middle'
        wrap='word'
        text={isEditText ? "" : editedMessage}
        // text={editedMessage ? editedMessage : message}
        // fontSize={width / 4}
        fontSize={30}
        //TODO адаптивный размер шрифта
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

      {/* {isSelected &&
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
            width: width, height: 50, backgroundColor: "#fff", position: "absolute",
            borderRadius: 10,
            padding: 10,
            top: textAreaPos.y - 80 + "px",
            left: textAreaPos.x + "px"
          }}>
            <button onClick={deleteNote}>
              delete
            </button>
          </div>
        </Html>
      } */}

      {isEditText &&
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
              fontSize: 30,
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
              width: width,
              height: height,
              backgroundColor: "transparent",
              position: "absolute",
              top: textAreaPos.y + "px",
              left: textAreaPos.x + "px"
            }}
            type="text"
            value={editedMessage}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                setEditText(false)
              }
            }}
            onChange={e => setEditedMessage(e.target.value)}
          />
        </Html>
      }
    </>
  )
}
