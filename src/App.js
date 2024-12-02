import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="b56ffc26-f9b2-4b6a-a5fc-7afa87a61ad9"
            userName="yamatole"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;