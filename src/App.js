import { ChatEngine} from "react-chat-engine";

import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height ="100vh"
            projectID={"c8b2e343-dfb6-422b-8d2a-6c857d61ba35"}
            userName={"aditya"}
            userSecret={"123456"}
            renderChatFeed = {(ChatAppProps) => <ChatFeed {...ChatAppProps} /> }
        />
    )
}

export default App; 