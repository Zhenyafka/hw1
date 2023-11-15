import './Components.css';

function App() {
  return (
    <div className='background'>
      <div className='bodyBackground'>
            <div className='inputEmailBlock'>
                <input type="string" required placeholder="Enter your email" className='inputEmail'/>
            </div>
            <div className='inputPasswordBlock'>
                <input type="string" required placeholder="Enter your password" className='inputPassword'/>
            </div>
          <div>
              <button className='sendButton'>
                    Send
              </button>
          </div>
      </div>
    </div>
  );
}

export default App;
