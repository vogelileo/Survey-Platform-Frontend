import { useNavigate } from 'react-router-dom';

const HomeScreen = (props) => {
  let navigate = useNavigate();
  return (
    <div className='d-flex fd-r'>
      <button onClick={(e) => navigate('/survey/create')}>Survey</button>
      <button onClick={(e) => navigate('/bubble/create')}>Bubble</button>
    </div>
  );
};

export default HomeScreen;
