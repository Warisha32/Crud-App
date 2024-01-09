import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList'
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="flex w-full max-w-screen-xl">
      <div className="bg-white p-8 rounded shadow-md w-1/2 mr-4">
        <h1 className="text-3xl font-bold text-center">CRUD App</h1>
        <TaskForm />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <TaskList />
      </div>
    </div>
  </div>
  );
}

export default App;
