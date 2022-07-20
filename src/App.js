import './App.css';
import Class from './comp/Class';
import Hello from './comp/Hello';
// import Greet from './components/Greet'
// import Message from './components/Message';
// import Welcome from './components/Welcom';
function App() {
  return (
    <div className="App">
      <Hello />
      <Class />
      {/* <Message/>
    <Greet name= "Nauman"  job= "Developer"/>
    <Greet name= "Maheen" job="Doctor"/>
    <Greet name= "Haram" job= "school"/>
    <Welcome name= "Nauman"  job= "Developer"/> */}
    </div>
  );
}

export default App;
