import {useNavigate} from 'react-router-dom';
import './App.css';
import SignInButton from './WebPages/SignInButton';


export default function App() {
  const navigate = useNavigate();

  const navigateToTransportation = () => {
    navigate('/Transportation')
  }
  

  return (
    <div>
      <div className='HomePage'>
        <div>Carbon Footprint Tracker!</div>
        <div className='Auth'>
          <SignInButton className='SignBtn'/>
        </div>
      </div>

      <div className='Content'>
        <tr >
        (1) This app serves the purpose of tracking carbon emmissions
            for an individual and producing their estimated carbon footprint.
        </tr>

        <tr>
        (2) The app asks about various components such as transportation, food habits, housing, 
            etc. to determine the individual's carbon footprint and displays all this data in a graph.
        </tr>

        <tr>
        (3) The last section will provide the user with strategies and individualized recommendations to improve their carbon footprint based on their personal data.
            It will also reiterate their lifestyle components that contribute to a better or lower carbon footprint.
        </tr>
      </div>

      <div className='Lower'>
        <button className='HomeBtn' onClick={navigateToTransportation}>Enter Transportation Information</button>
      </div>
    </div>
  );
}