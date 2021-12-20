import TextInput from '../../assets/TextInput';

const Dates = (props) => {
  const handleAddDate = (date) => {
    let tempDates = [...props.data.dates];
    tempDates.push(date);
    props.handleKeyUp(tempDates, 'date', 'dates');
  };

  const handleUpdateDate = (index, event) => {
    let tempDates = [...props.data.dates];
    tempDates[index] = event.target.value;
    props.handleKeyUp(tempDates, 'date', 'dates');
  };

  return (
    <div>
      <h1>Dates</h1>
      <div className='dates'>
        {props.data.dates.map((date, index) => {
          return (
            <TextInput
              key={index}
              id={`Date ${index}`}
              labelText={`Date ${index + 1}`}
              type='datetime-local'
              value={date}
              onChange={(event) => handleUpdateDate(index, event)}
            />
          );
        })}
      </div>
      <button
        onClick={(e) => handleAddDate(new Date().toISOString().slice(0, -1))}
      >
        Add Date
      </button>
      <button onClick={(e) => props.handleIndex(0)}>Go Back</button>
      <button onClick={(e) => props.handleIndex(2)}>Continue</button>
    </div>
  );
};
export default Dates;
