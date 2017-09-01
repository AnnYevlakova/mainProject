import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

import DefaultField from "./defaultField";

const TextFiledGroup = ({ field, value, label, errors, type, onChange }) => {
    return (
        <DefaultField
            className={classnames({ "wrong": errors })}
            type={type}
            name={field}
            placeholder={label}
            value={value}
            onChange={onChange} />
    );
};

TextFiledGroup.propTypes = {
    field: propTypes.string,
    value: propTypes.string,
    label: propTypes.string,
    errors: propTypes.string,
    type: propTypes.string,
    onChange: propTypes.func,
};
export default TextFiledGroup;
