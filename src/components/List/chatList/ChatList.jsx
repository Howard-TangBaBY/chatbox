import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchbar">
            <img src="./search.png" alt="" />
            <input type="text" placeholder="Search"/>
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"}
            alt="" 
            className="add" 
            onClick={() => setAddMode((prev) => ! prev)}/>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Zoka</span>
                <p>Fuck u TangBaby!</p>
            </div>
        </div>
        {addMode && <AddUser/>}
    </div>
  );
};

export default ChatList