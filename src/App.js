import './App.css';
import Class from './comp/Class';
import Greet from './comp/Greet';
import Hello from './comp/Hello';
import Status from './comp/Status';
// import Greet from './components/Greet'
// import Message from './components/Message';
// import Welcome from './components/Welcom';
function App() {
  return (
    <div className="App">
      <Hello />
      <Class />
      <Greet name="Nauman khan" age="20" />
      <Status />
      {/* <Message/>
    <Greet name= "Nauman"  job= "Developer"/>
    <Greet name= "Maheen" job="Doctor"/>
    <Greet name= "Haram" job= "school"/>
    <Welcome name= "Nauman"  job= "Developer"/> */}
    </div>
  );
}

export default App;
