import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import NewsComponent from "./components/news/NewsComponent";
import Video from "./components/video/Video";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/news" element={<NewsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
