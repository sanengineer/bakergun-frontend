import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";

export default function Anchor(props) {
    const className = [props.className];
    const onClick = () => {
        if (props.onClick) props.onClick();
      };

    if (props.isExternal) {
        return(
            <a href={props.href} className={className.join("")} 
                style={props.style}
                target={props.target === "_blank" ? "_blank" : undefined}
                rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {props.children}
            </a>

        )
    } else {
        return (
            <Link 
            to={props.href}
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
            >
                {props.children}
            </Link>
        )
    }


}

Anchor.PropTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}