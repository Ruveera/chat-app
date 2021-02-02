import { ChatEngine } from 'react-chat-engine'
import './App.css'
import LoginForm from './components/LoginForm'

import ChatFeed from './components/ChatFeed'

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />
	return (
		<ChatEngine
			height='100vh'
			projectID='3cfc99fb-5b74-4ec6-8fe9-8ece54042198'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	)
}

export default App
