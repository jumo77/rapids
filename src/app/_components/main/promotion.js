import Link from "next/link";

export default function Promotion({title, brief, link, img, bgc, button}){
    return(
        <section>
            <Link href={"/"+link}>
                <div className={"w-full h-full z-0 bg-"+bgc}>
                    <h2>{title}</h2>
                    <p>{brief}</p>
                </div>
            </Link>
        </section>
    )
}