import {Home,Music,User} from "lucide-react";


export default function BottomNav({setPage}){


return(

<div className="bottom">


<button
onClick={()=>setPage("home")}
>

<Home/>

Home

</button>



<button
onClick={()=>setPage("playlist")}
>

<Music/>

Playlist

</button>



<button
onClick={()=>setPage("profile")}
>

<User/>

Profile

</button>



</div>

)


}
