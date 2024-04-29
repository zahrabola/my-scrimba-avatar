
import avatarimg from './images/me2.png';
import './App.css';
import Avatar from './Avatar';

function App() {
  return (
    <div className="App">
    <Avatar />
    <Avatar src={avatarimg} alt="zahraimage" className="avatarimg"/>
    <Avatar>  ZO </Avatar>
   
    </div>
  );
}

export default App;
