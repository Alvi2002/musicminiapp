import {useState} from "react";


import BottomNav from "./components/BottomNav";

import Player from "./components/Player";


import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";



export default function App(){



const [page,setPage]=useState("home");



const [playlist,setPlaylist]=useState([]);



const [currentSong,setCurrentSong]=useState(null);




return(

<div>


{
page==="home" &&

<Home

playlist={playlist}

setPlaylist={setPlaylist}

setSong={setCurrentSong}

/>

}




{
page==="playlist" &&

<Playlist

playlist={playlist}

setSong={setCurrentSong}

/>

}




{
page==="profile" &&

<Profile/>

}



<Player

song={currentSong}

setSong={setCurrentSong}

/>



<BottomNav

setPage={setPage}

/>


</div>

)


}
