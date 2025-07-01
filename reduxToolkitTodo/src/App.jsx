import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='max-w-2/3 w-full m-auto text-center mt-2 p-1 '>
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
