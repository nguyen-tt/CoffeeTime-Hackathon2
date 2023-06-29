/* eslint-disable react/prop-types */

function Checkbox(props) {
  const { value, handleChange, checked } = props;
  return (
    <div>
      <label htmlFor="content">
        <input
          type="checkbox"
          value={value}
          onChange={handleChange}
          checked={checked}
        />{" "}
        {value}
      </label>
    </div>
  );
}

export default Checkbox;
