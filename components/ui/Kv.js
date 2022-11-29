import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Tab, Tabs } from "react-bootstrap";
import styles from "../../scss/modules/ui/Kv.module.scss";

export function Accordion({ title, children, expand }) {
  const [chevron, setChevron] = useState("right");
  const accordionBodyRef = React.createRef();
  const headerRef = React.createRef();

  function toggleChevron() {
    const accordionBody = accordionBodyRef.current;

    if (accordionBody.classList.contains(styles["show-body"])) {
      setChevron("down");
    } else {
      setChevron("right")
    }
  }

  function toggleExpandAccordion() {
    // Toggle accordion body visibility
    const accordionBody = accordionBodyRef.current;
    accordionBody.classList.toggle(styles["show-body"]);

    toggleChevron();

    headerRef.current.classList.toggle(styles.active);
  }

  function expandAccordion() {
    const accordionBody = accordionBodyRef.current;
    accordionBody.classList.add(styles["show-body"]);

    toggleChevron();

    headerRef.current.classList.add(styles.active);
  }

  useEffect(() => {
    if (expand) {
      expandAccordion();
    }
  }, [expand])

  return (
    <div className={`${styles.accordion}`}>
      <Button
        className={`${styles["accordion-header"]}`}
        onClick={toggleExpandAccordion}
        ref={headerRef}
      >
        <i className={`bi bi-chevron-${chevron}`}></i> {title}
      </Button>
      <div
        className={`${styles["accordion-body"]}`}
        ref={accordionBodyRef}
      >
        {children}
      </div>
    </div>
  );
}

export function Checkbox({ ...props }) {
  return (
    <Form.Check
      className={`${styles.checkbox}`}
      {...props}
    />
  )
}

export function FloatingInput({ label, children, ...props }) {
  return (
    <div className="mb-3">
      <div className="form-floating mb-1">
        <input className={`form-control ${styles["form-control"]}`} {...props} />
        <label htmlFor={props.name || props.id}>{label}</label>
      </div>
      {children}
    </div>
  );
}

export function FloatingTextArea({ label, ...props }) {
  return (
    <div className="form-floating mb-3">
      <textarea className={`form-control ${styles["form-control"]}`} {...props} />
      <label htmlFor={props.name || props.id}>{label}</label>
    </div>
  );
}

export function InputGroup({ label, startLabel, endLabel, children, ...props }) {
  return (
    <div className="mb-3">
      {label ?
        <label
          htmlFor={props.id || props.name}
          className="form-label"
        >{label}</label> : null}

      <div className="input-group mb-1">
        {startLabel ?
          <span
            className={`input-group-text ${styles["input-group-text"]}`}
          >{startLabel}</span> : null}

        <input className={`form-control ${styles["form-control"]}`} {...props} />

        {endLabel ?
          <span
            className={`input-group-text ${styles["input-group-text"]}`}
          >{endLabel}</span> : null
        }
      </div>
      {children}
    </div>
  );
}

export function BtnCheck({ label, invisibleLabel, ...props }) {
  return (
    <>
      {invisibleLabel ?
        <label
          htmlFor={props.id || props.name}
          className="form-label d-block opacity-0"
        >a</label> : null}
      <input className="btn-check" {...props} />
      <label
        className="btn btn-outline-success"
        htmlFor={props.name || props.id}
      >{label}</label>
    </>
  );
}

export function SimpleDropDown({ title, children }) {
  const [content, setContent] = useState();

  useEffect(() => {
    if (children) {
      if (children.length > 1) {
        setContent(
          children.map((child, index) => {
            return (
              <Dropdown.Item
                className={`${styles["dropdown-item"]}`}
                as="div"
                key={index}
              >
                {child}
              </Dropdown.Item>
            )
          })
        );
      } else {
        setContent(
          <Dropdown.Item
            className={`${styles["dropdown-item"]}`}
            as="div"
          >
            {children}
          </Dropdown.Item>
        );
      }
    }
  }, [title, children])

  return (
    <Dropdown className={`${styles.dropdown}`}>
      <Dropdown.Toggle className={`${styles["dropdown-toggle"]}`}>
        <span>{title || "Dropdown"}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={`${styles["dropdown-menu"]}`}>
        {content}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function CustomTabs({ children, ...props }) {
  return (
    <Tabs {...props} className={`${styles.tabs}`}>
      {children}
    </Tabs>
  );
}

export function CustomTab({children, ...props}) {
  return (
    <Tab {...props} className={`${styles.tab}`}>
      {children}
    </Tab>
  );
}