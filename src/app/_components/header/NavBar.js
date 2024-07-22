import MobileMenuButton from "@/app/_components/header/MobileMenuButton";
import Button from "@/app/_components/header/Button";
import {nav} from "@/app/_components/header/nav.js";

async function NavBar() {

    // const navItems = fetch("../public/header.json", {cache : "force-cache",})
    //     .then((res)=>res.json());
    // console.log(navItems);


    return (
        <header>
            <div className="max-w-96 py-9 justify-center">
                <nav>
                <ul className="nav-list nav-list-mobile">
                    <MobileMenuButton/>
                    <Button hR="" cN="nav-link-home"/>
                    <Button hR="profile" cN="nav-link-profile"/>
                </ul>

                <ul className="nav-list nav-list-larger">
                    <Button hR="" cN="nav-link-home"/>
                    {nav.map((item)=><Button hR={item.id.toString} iP={item.title}/>)}
                    <Button hR="profile" cN="nav-link-profile"/>
                </ul>
                </nav>
            </div>

        </header>
    )

}
export default NavBar;