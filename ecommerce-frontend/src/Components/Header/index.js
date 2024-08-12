import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";


const Header = () => {
    return (
        <div className="HeaderWrapper">
            <div className="top_strip couleur-bleu" >
                <div className="container">
                    <p className="mb-0   mt- 0 text-center">Bienvenue chez <b>Ndongo and Famally</b> Shop</p>

                </div>

            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoShop d-flex  align-items-center  col-sm-2">
                            <Link to={'/'}>
                                <img src={require('../../assets/logo2.jpg')} alt="Logo de l'entreprise" />
                            </Link>
                        </div>
                        <div className="col-sm-10 d-flex align-items-center parti2">
                            {/* Barre de recherche */}
                            <div className="headerSearch  ml-3 mr-3">
                                <input type="text" placeholder="Chercher un produit" />
                                <Button> <IoSearch /></Button>

                            </div>
                            {/* Barre de recherche */}

                            <div className="parti3 d-flex  align-items-center ml-auto ">
                                <Button className="usercercle"><FiUser /></Button>
                                <div className="ml-auto cartTab d-flex  align-items-center">
                                    <span className="price">2300 CFA</span>
                                    <div className="position-relative  ml-2">
                                        <Button className="usercercle "><IoBagOutline /></Button>
                                        <span className="count d-flex  align-items-center justify-content-center">1</span>
                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </header>

        </div>
    );
}

export default Header