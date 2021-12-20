import { useState } from 'react';
import BasicInformation from './components/BasicInformation';
import Dates from './components/Dates';
import Options from './components/Options';

const CreateBubble = (props) => {
  const [data, setData] = useState({
    title: '',
    email: '',
    location: '',
    additionalInformation: '',
    dates: [new Date().toISOString().slice(0, -1)],
    options: {
      anonym: false,
      onlyOne: false,
      maybe: false,
    },
  });
  const [index, setIndex] = useState(0);
  const handleIndex = (targetIndex) => {
    if (targetIndex === 3) {
      handleFinish();
      return;
    }
    setIndex(targetIndex);
  };
  const handleFinish = () => {};

  const handleKeyUp = (event, type, inputType) => {
    let dataTemp = { ...data };
    switch (type) {
      case 'textinput':
        dataTemp[inputType] = event.target.value;

        break;
      case 'date':
        dataTemp[inputType] = event;
        break;
      case 'options':
        dataTemp.options[inputType] = event.target.checked;

        break;
      default:
        console.log('Error');

        break;
    }
    console.log(dataTemp);
    setData(dataTemp);
  };

  let subComponentProps = {
    handleIndex: handleIndex.bind(this),
    handleKeyUp: handleKeyUp.bind(this),
    data: data,
  };

  switch (index) {
    case 0:
      return <BasicInformation {...subComponentProps} />;
    case 1:
      return <Dates {...subComponentProps} />;
    case 2:
      return <Options {...subComponentProps} />;
    default:
      return <BasicInformation {...subComponentProps} />;
  }
};

export default CreateBubble;
