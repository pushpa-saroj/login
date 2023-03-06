import React, { useState } from "react";
import {
  BsTextIndentLeft,
  BsTextIndentRight,
  BsBookmarkPlusFill,
  BsChatRightDots,
  BsQuestionSquareFill,
  BsGrid,
} from "react-icons/bs";
import "./Sidebar.css";

function Sidebar() {
  const [status, setStatus] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setStatus(status ? false : true);
  };

  const handleToggleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sidebar" style={{ width: isOpen ? "250px" : "60px" }}>
        <div className="icon">
          <span onClick={handleToggleClick}>
            {status ? (
              <BsTextIndentLeft onClick={handleClick} />
            ) : (
              <BsTextIndentRight onClick={handleClick} />
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
