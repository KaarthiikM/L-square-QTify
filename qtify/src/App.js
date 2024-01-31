import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import { useState , useEffect } from "react";
import Section from "./components/Section/Section";
import styles from './App.module.css'

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
      <div className={styles.sectionWrapper}>
      <Section data={topAlbumsData} title="Top Albums" type="album"/>
      <Section data={topAlbumsData} title="New Albums" type="album"/>
      </div>
    </div>
  );
}

export default App;
