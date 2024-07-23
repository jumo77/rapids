import MobileMenuButton from "@/app/_components/header/MobileMenuButton";
import Button from "@/app/_components/header/Button";
import "./header.css"

async function getProducts(){

    const res = await fetch("https://dummyjson.com/products?limit=3&select=title,price", {cache: "force-cache",});
    return res.json();
}

async function NavBar() {

    const nav = await getProducts();

    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="nav-list nav-list-mobile">
                        <MobileMenuButton/>
                        <Button hR="" cN="nav-link-home"/>
                        <Button hR="profile" cN="nav-link-profile"/>
                    </ul>

                    <ul className="nav-list nav-list-larger">
                        <Button hR="" cN="nav-link-home"/>
                        {nav.products?.map((item)=><Button key={item.id} hR={item.id.toString()} iP={item.title}/>)}
                        <Button hR="profile" cN="nav-link-profile"/>
                    </ul>
                </nav>
            </div>

        </header>
    )

}
export default NavBar;