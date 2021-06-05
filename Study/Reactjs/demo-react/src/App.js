// import logo from "./logo.svg";
import "./App.css";
import Header from "./Exercise/components/header";
import Contents from "./Exercise/components/contents";
import Footer from "./Exercise/components/footer";
import SideBar from "./Exercise/components/sidebar";
function App() {
  return (
    <div className='text-center'>
      <Header />
      <div className='d-flex w-100'>
        <Contents />
        <SideBar />
      </div>
      <Footer />
    </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
