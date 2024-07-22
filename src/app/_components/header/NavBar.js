import MobileMenuButton from "@/app/_components/header/MobileMenuButton";
import Button from "@/app/_components/header/Button";

async function getProducts(){

    return await fetch("https://dummyjson.com/products?limit=10&select=title,price", {cache: "force-cache",})
        .then((res) => res.json())
        .then(console.log);
}

async function NavBar() {

    const nav = getProducts();

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
                    {nav.products?.map((item)=>{
                        console.log(item.id);
                        return <Button hR={item.id.toString()} iP={item.title}/>})}
                    <Button hR="profile" cN="nav-link-profile"/>
                </ul>
                </nav>
            </div>

        </header>
    )

}
export default NavBar;