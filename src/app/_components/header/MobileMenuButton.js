export default function MobileMenuButton(){

    const mobileMenuButton=()=>document.querySelector('header').classList.toggle('active');

    return(
        <li className="nav-item" onClick={mobileMenuButton}>
            <div className="mobile-menu">
                <span className="line line-top"></span>
                <span className="line line-bottom"></span>
            </div>
        </li>
    )
}