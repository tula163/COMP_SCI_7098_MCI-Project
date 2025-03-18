
import './App.css';
import { Rate } from 'antd';
function App() {
  return (
    <div className="App">
      <p>
         Recommendation System
        </p>
      <Rate disabled defaultValue={4}  className="rate"/>
    </div>
  );
}

export default App;
