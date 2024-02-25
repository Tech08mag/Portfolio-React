import logo from './media/logo.svg';
import profile from './media/profile.jpg'
import './App.css';

export default function App(){
  return(
    <>
    <section>
      <div>
        <h1>Ich bin tech08mag</h1>
        <img src={profile} className='Profile' alt='Profile'/>
      </div>
    </section>
    </>
  )


}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
