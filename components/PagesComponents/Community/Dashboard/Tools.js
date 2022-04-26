/* eslint-disable react/prop-types */
import React from 'react';

export const Tools = ({ openColorMenu, setOpenColorMenu, color, setColor }) => {

  const handleSelect = () => {

    setOpenColorMenu(true);

  };

  return (
    <div className='tools' style={
      {
        position: "absolute",
        width: "5%",
        marginLeft: 20,
        padding: "10px 0",
        height: "45%",
        top: "20%",
        zIndex: 200,
        backgroundColor: "#f3f3f3",
        borderRadius: 20,
      }
    }>
      <button onClick={handleSelect}
        type="button"
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          cursor: "pointer",
          width: "100%",
          margin: "0 auto"
        }}>
        <img alt="alt" src="https://img.icons8.com/dotty/50/000000/note.png" />
      </button>
      {openColorMenu &&
        <input
          style={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
            width: "100%",
            margin: "0 auto"
          }}
          type="color" value={color} onChange={e => setColor(e.target.value)} />
      }
    </div>
  );
};
