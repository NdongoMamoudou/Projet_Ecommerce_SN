import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const SearchBox = () => {


    return (
        <div className="headerSearch  ml-3 mr-3">
            <input type="text" placeholder="Rechercher un produit..." />
            <Button> <IoSearch /></Button>

        </div>
    )
}

export default SearchBox;