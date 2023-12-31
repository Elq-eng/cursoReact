/* eslint-disable react/jsx-no-target-blank */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount} from './store/slices/counter'


function App() {

  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
        Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
        Decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount(2) )}>
        IncrementBy
        </button>
      </div>
    </div>
  )
}

export default App
