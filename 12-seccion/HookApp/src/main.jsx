import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { TodoApp } from './09-useReducer/TodoApp'
import { MainApp } from './10-useContext/MainApp'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/memoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp  } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import './08-useReducer/into-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    // <SimpleForm></SimpleForm>,
    // {/* <CounterWithCustomHook></CounterWithCustomHook> */}
    // {/* <HooksApp /> */}
    // <FormWithCustomHook/>
  // </React.StrictMode>,
  // < MultipleCustomHook />
  // <FocusScreen/>
  // <Layout />
  // <Memorize/>
  // <MemoHook/>
  // <CallbackHook/>
  // <Padre/>
  // <TodoApp/>
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
  
)
