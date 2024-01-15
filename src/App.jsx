import Header from './components/Header'
import Section from './components/Section';
import Community from './components/Community';
import Footer from './components/Footer';

// import FileList from "./components/FileList"




function App() {
  
  // const testFiles = [
  //   {
  //     id: 1,
  //     name: 'src',
  //     type: 'folder',
  //     updated_at: "2016-07-11 21:24:00",
  //     latestCommit: {
  //     message: 'Initial commit'
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: 'tests',
  //     type: 'folder',
  //     updated_at: "2016-07-11 21:24:00",
  //     latestCommit: {
  //     message: 'Initial commit'
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: 'README',
  //     type: 'file',
  //     updated_at: "2016-07-18 21:24:00",
  //     latestCommit: {
  //     message: 'Added a readme'
  //     }
  //   },
  // ];

  return (
    <>
     {/* <FileList files={testFiles}></FileList> */}
     
      <Header/>
      <Section/>
      <Community></Community>
      <Footer></Footer>
      
    </>
  )
}



export default App
