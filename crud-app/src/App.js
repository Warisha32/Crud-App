import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col sm:flex-row w-full max-w-screen-xl">
        <div className="bg-white p-8 rounded shadow-md mb-4 sm:mr-4 sm:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">CRUD App</h1>
          <TaskForm />
        </div>
        <div className="bg-white p-8 rounded shadow-md sm:w-1/2">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
