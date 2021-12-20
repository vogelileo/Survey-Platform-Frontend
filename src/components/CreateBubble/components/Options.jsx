import TextInput from '../../assets/TextInput';

const Options = (props) => {
  return (
    <div>
      <h1>Options</h1>

      <TextInput
        id='Anonym'
        labelText='Anonym'
        type='checkbox'
        value={props.data.options.anonym}
        onChange={(event) => props.handleKeyUp(event, 'options', 'anonym')}
      />
      <TextInput
        id='Maybe'
        labelText='Maybe'
        type='checkbox'
        value={props.data.options.maybe}
        onChange={(event) => props.handleKeyUp(event, 'options', 'maybe')}
      />
      <TextInput
        id='Only one'
        labelText='Only one'
        type='checkbox'
        value={props.data.options.onlyOne}
        onChange={(event) => props.handleKeyUp(event, 'options', 'onlyOne')}
      />
      <button onClick={(e) => props.handleIndex(1)}>Go Back</button>
      <button onClick={(e) => props.handleIndex(3)}>Finish</button>
    </div>
  );
};
export default Options;
