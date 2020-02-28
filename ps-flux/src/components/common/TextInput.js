import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error"; // this is a bootstrap class
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          // Every character that is typed is sent to the onTitleChange handler.
          onChange={props.onChange}
          // title corresponds to the name of the property on the course object
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {/* The code on the right will run if the condition on the left is true */}
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

// Anytime you declare a component like this it's especially important to declare prop types
// so people know what data to pass down and also so that we get warnings if we forget to
// pass the expected data down.
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  error: ""
};

export default TextInput;
