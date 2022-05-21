import './App.css';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
  
const App = () => {
  return (
    <div className='App'>
      <Screen />
      <Keypad />
    </div>
  );
};

export default App;
