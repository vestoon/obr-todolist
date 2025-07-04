import './App.css'
import {Header} from './components/Header'
import {Editor} from'./components/Editor'
import {List} from './components/List'

function App() {

  return (
      <div className="App"> 
        <Header></Header>
        <Editor></Editor>
        <List></List>
      </div>
  )
}

export default App
