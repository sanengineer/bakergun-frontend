import React from "react";
import {Link} from "react-router-dom"
import propTypes from "prop-types";

export default function ButtonOrLink (props) {
    const clasName = [props.clasName]

    if (props.isBlock) className.push("btn-block")
}

ButtonOrLink.propTypes = {
    isBlock: propTypes.bool
}