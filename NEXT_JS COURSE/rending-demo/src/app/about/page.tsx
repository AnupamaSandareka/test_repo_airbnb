import { cookies } from "next/headers"; 

export default function About(){
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    console.log("about server component");
    return <h1>About Page</h1>;
}