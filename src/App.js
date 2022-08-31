import './App.css';
import TodoList from './components/TodoList';


function App() {
  window.addEventListener('resize', () => {
    console.log("heheh");
  })

  return (
    <div className="App">
     <TodoList></TodoList>
    </div>
  );
}

export default App;
