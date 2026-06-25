import MusicCard from "../components/MusicCard";


const songs=[

{
id:1,
title:"Do You Remember",
artist:"Queen",
image:"https://picsum.photos/100"
},

{
id:2,
title:"Top Songs 2024",
artist:"Love Life",
image:"https://picsum.photos/101"
},

{
id:3,
title:"Romantic Acoustic",
artist:"Acoustic Pulse",
image:"https://picsum.photos/102"
}

];


export default function Home(){


return(

<div className="home">


<h1>
Good Morning
</h1>


<div className="search">

🔍 Search music

</div>



<h2>
Popular Now
</h2>


{

songs.map(song=>(

<MusicCard
key={song.id}
song={song}
/>

))

}



</div>

)

}
