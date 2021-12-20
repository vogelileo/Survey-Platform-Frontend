import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  return (
    <div
      className='d-flex fd-r justify-content-spacebetween'
      style={{ background: 'gray' }}
    >
      <div
        className='logo d-flex fd-r cursor-pointer'
        onClick={(e) => navigate('/')}
      >
        <h2 className='image'>_IMG_ </h2>
        <h2>Survey Platform</h2>
      </div>
      <div className='links d-flex fd-r'>
        <h2
          onClick={(e) => navigate('/survey/create')}
          className='cursor-pointer'
        >
          Survey
        </h2>
        <h2
          onClick={(e) => navigate('/bubble/create')}
          className='cursor-pointer'
        >
          Bubble
        </h2>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
