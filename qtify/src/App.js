import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import { useState , useEffect } from "react";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData,settopAlbumsData] = useState([]);

  const generateTopAlbums =async()=>{
    try{
      const data = await fetchTopAlbums();
      settopAlbumsData(data)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    generateTopAlbums();
  },[])

  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* {
        topAlbumsData.map((topAlbum)=>(
          <Card data={topAlbum} type="album" key={topAlbum.id}/>
        ))
      } */}
      <Section data={topAlbumsData} title="Top Albums" type="album"/>
    </div>
  );
}

export default App;
