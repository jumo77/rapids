import {useRouter} from "next/router.js";

export default function Page(){
    const router = useRouter();
    return <p>Post: {router.query.category}</p>
}