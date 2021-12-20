import TextInput from '../../assets/TextInput';

const BasicInformation = (props) => {
  return (
    <div>
      <h1>Basic Information</h1>
      <TextInput
        id='title'
        labelText='Title'
        value={props.data.title}
        onChange={(event) => props.handleKeyUp(event, 'textinput', 'title')}
      />
      <TextInput
        id='email'
        labelText='Email'
        type='email'
        value={props.data.email}
        onChange={(event) => props.handleKeyUp(event, 'textinput', 'email')}
      />
      <TextInput
        id='location'
        labelText='Location'
        value={props.data.location}
        onChange={(event) => props.handleKeyUp(event, 'textinput', 'location')}
      />
      <TextInput
        id='additionalInformation'
        labelText='Additional Information'
        value={props.data.additionalInformation}
        onChange={(event) =>
          props.handleKeyUp(event, 'textinput', 'additionalInformation')
        }
      />
      <button onClick={(e) => props.handleIndex(1)}>Continue</button>
    </div>
  );
};
export default BasicInformation;
