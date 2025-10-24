// import logo from './logo.svg';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather APP</h1>
      <Input />
      <Button  value = "Search"/>
      <Card />
      <Button  value = "Refresh"/>
    </div>
  );
}

export default App;
