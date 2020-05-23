import React from "react";
import { Link } from "react-router-dom";
import BasicProps from "prop-types";
export default function Button(props) {
  let className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");
  let onClick = () => {
    if (props.onClick) props.onClick();
  };
  if (props.isDisable || props.isLoading) {
    if (props.isDisable) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <React.Fragment>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading ...</span>
          </React.Fragment>
        ) : (
          props.children
        )}
      </span>
    );
  }
  if (props.type == "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target == "_blank" ? "noopener noreferer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        ></Link>
      );
    }
  }
  return (
    <Button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
}
Button.prototype = {
  type: BasicProps.oneOf(["button", "link"]),
  onClick: BasicProps.func,
  href: BasicProps.string,
  target: BasicProps.string,
  className: BasicProps.string,
  isDisable: BasicProps.bool,
  isLoading: BasicProps.bool,
  isSmall: BasicProps.bool,
  isLarge: BasicProps.bool,
  isBlock: BasicProps.bool,
  hasShadow: BasicProps.bool,
};
