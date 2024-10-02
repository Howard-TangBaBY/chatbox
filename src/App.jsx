import Chat from "./components/chat/Chat"
import List from "./components/List/List"
import Detail from "./components/details/Detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"


const App = () => {

  const user = true;

  return (
    <div className=' container '>

      {user ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>
      ) : (
        <Login/>
      )}
      <Notification/>
    </div>
  )
}

export default App