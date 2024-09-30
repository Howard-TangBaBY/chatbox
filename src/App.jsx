import Chat from "./components/chat/Chat"
import List from "./components/List/List"
import Detail from "./components/details/Detail"

const App = () => {
  return (
    <div className=' container '>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App