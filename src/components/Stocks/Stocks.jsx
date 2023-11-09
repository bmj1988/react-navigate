import {Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';





function Stocks() {
  const navigate = useNavigate()
  const handleClick = () => {
    window.alert('Sending info to the DB!');
    navigate('/');
  };
  let loggedIn = true
  if (loggedIn === false) {
    return (
      <Navigate to='/not-logged-in' replace={true}></Navigate>
    )
  }
  else return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default Stocks;
