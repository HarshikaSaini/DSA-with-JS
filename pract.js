let  getData  = async () =>{
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
   .then((res) => res.json())
console.log(data)
}

getData()