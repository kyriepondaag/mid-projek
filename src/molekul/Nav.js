import React, {useState, useEffect} from "react";
import axios from "axios";
//ambil data dari json local server
export default function Nav (){
  const [features, setFeatures]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/navigasi").then(res=>setFeatures(res.data))
  }, [])
    return(
    <nav>
    <div className="logo">
      <img src="./11zon_cropped.png" alt="foto" />
    </div>
    <ul>
      {
        features.map(item=>{
          return(
            <><li><a href={`${item.id}`}>{`${item.title}`}</a></li></>
        )
        })
      }
    </ul>
    </nav>
    )
}