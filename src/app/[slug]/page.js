export async function generateStaticParams() {
    return [
        { slug: 'frontend' },
        { slug: 'backend' }
    ]
}

export default function Page({params}){
    return(
        <p>Page: {params["slug"]}</p>
    )
}