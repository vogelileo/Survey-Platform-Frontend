const TextInput = (props) => {
  if (!props.id) return <h5>Error</h5>;
  return (
    <div>
      <label htmlFor={props.id}>{props.labelText ? props.labelText : ''}</label>
      <input
        type={props.type ? props.type : 'text'}
        id={props.id}
        name={props.name ? props.name : ''}
        value={props.value ? props.value : ''}
        onChange={(event) => (props.onChange ? props.onChange(event) : null)}
      />
    </div>
  );
};
export default TextInput;
