import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    //   We put the onSubmit handler on the form instead of the submit button because this
    //   is better for accessibility. If the user clicks the "enter" button or the submit
    //   button the form will be submitted.
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        // title corresponds to the name of the property on the course object
        name="title"
        // Every character that is typed is sent to the onTitleChange handler.
        onChange={props.onChange}
        value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            // Can't set the value of a select to null, so if it is null, set it to an empty string
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
