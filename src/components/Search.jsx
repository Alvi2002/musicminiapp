import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";


export default function Search({

setResults

}){


const [text,setText] = useState("");



function handleSearch(){


if(text.trim()){


setResults(text.trim());


}


}




function handleKey(e){


if(e.key === "Enter"){


handleSearch();


}


}





return(


<div className="searchBox">


<SearchIcon
className="searchIcon"
/>



<input


className="search"


placeholder="Search songs..."


value={text}



onChange={
e=>setText(e.target.value)
}



onKeyDown={handleKey}



/>




<button

className="searchBtn"

onClick={handleSearch}

>

Search

</button>



</div>


)


}
