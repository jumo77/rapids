import Link from "next/link";

export default function Button(hR, cN, iP){
    function button(){
        document.querySelector('header').classList.remove('active');
    }
    return (
        <li className="nav-item" onClick={button}>
            <Link href={"/"+hR} className={cN+" nav-link"}>{iP}</Link>
        </li>
    )
}