import React from "react";
import ModuleCss from "./Footer.module.scss";

const Footer = ({
  todoCount,
  handleButtonsAction,
  isCompletedTaskPreset,
  handleCompleteClear,
}) => {
  return (
    <footer className={ModuleCss.footer}>
      <span className={ModuleCss.footerText}>{todoCount} items left</span>
      <div className={ModuleCss.btnContainer}>
        <button
          className={ModuleCss.btn}
          onClick={() => {
            handleButtonsAction("all");
          }}
        >
          All
        </button>
        <button
          className={ModuleCss.btn}
          onClick={() => {
            handleButtonsAction("active");
          }}
        >
          Active
        </button>
        <button
          className={ModuleCss.btn}
          onClick={() => {
            handleButtonsAction("completed");
          }}
        >
          Completed
        </button>
      </div>
      <button
        className={!isCompletedTaskPreset ? ModuleCss.clearCompleted : ""}
        onClick={() => handleCompleteClear()}
      >
        {"Clear Completed"}
      </button>
    </footer>
  );
};

export default Footer;
