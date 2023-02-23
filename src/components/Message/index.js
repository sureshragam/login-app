// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const message = isLogin ? 'Welcome User' : null
  return <h1>{message}</h1>
}

export default Message
