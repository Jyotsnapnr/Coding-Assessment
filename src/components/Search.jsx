import React,{useState} from 'react';
import useStore from '../app/store.js';

function Search  () {
   
  //set state values for the search
    const {setSearch} = useStore();
    const [searchValue, setSearchValue] = useState("");

    //change the search results on each entered key value
    
    const handleChange= (e) => {
    setSearch(e.target.value);
    setSearchValue(e.target.value);
    e.preventDefault();
    }

    //the search form

  return (
    <div className="form">
    <form>
      <div className="container input-group mb-3">
        <input 
        type="text" 
        placeholder='Search'
        className="form-control form-input" 
        value={searchValue} 
        onChange={handleChange} />
      </div>
    </form>
</div>
  )
}

export default Search;