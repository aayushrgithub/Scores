import Body from "./components/Body";

import Header from "./components/Header";
import IncomingData from "./components/IncomingData";
import newImage from "./images/newImage.jpg"

function App() {
  return (
    <div className="">
      <img className="h-[100dvh] w-full" src={newImage}/>
      <div className="absolute w-[100%] h-[100%] top-0 backdrop-blur-sm">
      <Header/>
      <Body/>
      {/* <IncomingData/> */}
      </div>
    </div>
  );
}

export default App;
