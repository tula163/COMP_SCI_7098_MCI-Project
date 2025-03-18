
import './App.css';
import { Rate } from 'antd';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
        <p>
         Recommendation System
        </p>

        

      </header> */}
      <Rate disabled defaultValue={4}  className="rate"/>
    </div>
  );
}

export default App;
