import { ShoppingCart, User } from "lucide-react";

 
const Navbar = () => {
    return ( 
        <div className="flex items-center justify-between" >
        <div className="m-4 font-bold text-2xl">
            VELOCITY
        </div>
        {/* <div className="flex gap-4 mr-5" > 
            <div><ShoppingCart/> </div>
            <div> <User/> </div>
        </div> */}
        </div>
     );
}
 
export default Navbar;