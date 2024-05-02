import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import './App.css'

// import apiKey 
import apiKey from "./config.js"

// import components
import Nav from "./components/Nav.jsx"
import Search from "./components/Search.jsx"
import PhotoList from "./components/PhotoList.jsx"
import NoPhotos from "./components/NoPhotos.jsx"

function App() {
  const [photo, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  const location = useLocation();
  let navigate = useNavigate();

  // fetch data from API
  const fetchData = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setPhotos(response.data.photos.photo);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      }, [query]);
  };


  // handle query 
  const handleQuery = (searchText) => {
    setQuery(searchText);
    fetchData(searchText);
    navigate(`search/${searchText}`)
  };


  // useEffect to fetch data when path name changes
  useEffect(() => {
    let path = location.pathname.substring(1);

    if (path === 'food' || path === 'yellow' || path === 'chickens') {
      fetchData(path);
    }
  }, [location]);

  // display appropriate results on page
  return (
    <div className="container">
      <Search changeQuery={handleQuery} />
      <Nav />

      <Routes>
      // set initial load to "food" to have something on dispaly on page load
        <Route path="/" element={<Navigate replace to="/food" />} />

        <Route path="/food" element={<PhotoList data={photo} />} />
        <Route path="/yellow" element={<PhotoList data={photo} />} />
        <Route path="/chickens" element={<PhotoList data={photo} />} />
        <Route path="/search/:query" element={<PhotoList data={photo} />} />
        <Route path="*" element={<NoPhotos />} />
      </Routes>
    </div>
  )
}

export default App
