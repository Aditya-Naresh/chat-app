import { ChatEngine} from "react-chat-engine";

import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";

import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height ="100vh"
            projectID={"c8b2e343-dfb6-422b-8d2a-6c857d61ba35"}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(ChatAppProps) => <ChatFeed {...ChatAppProps} /> }
        />
    )
}

export default App; 