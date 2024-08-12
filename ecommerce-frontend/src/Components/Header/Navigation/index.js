
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">

                    <div className="col-sm-3 navPart1">
                        <Button className="allCatTab align-items-center" >
                            <span>< IoIosMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span>< FaAngleDown /></span>
                        </Button>

                    </div>

                    <div className="col-sm-9 navPart2">

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navigation