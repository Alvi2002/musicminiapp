export default function Search({

value,
setValue

}){


return(


<input


className="search"


placeholder="Search music..."


value={value}


onChange={
e=>setValue(e.target.value)
}


/>


)


}
