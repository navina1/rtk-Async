export async function fetchPost(){
    const response=await fetch("https://gorest.co.in/public/v2/posts");
    return await response.json()

}