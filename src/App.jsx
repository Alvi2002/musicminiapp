import {useState} from "react";

import BottomNav from "./components/BottomNav";

import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";


export default function App(){


const [page,setPage]=useState("home");


const [playlist,setPlaylist]=useState([]);



return(

<div>


{
page==="home" &&

<Home
playlist={playlist}
setPlaylist={setPlaylist}

/>

}



{
page==="playlist" &&

<Playlist
playlist={playlist}

/>

}



{
page==="profile" &&

<Profile/>

}



<BottomNav
setPage={setPage}

/>


</div>

)


}
