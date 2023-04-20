import fetch from "node-fetch"; 

async function checaStatus(arrayURL){
   const arrayStatus = await Promise.all(arrayURL.map(async url =>{
     const res = await fetch(url);
     return res.status; 
   }))

   return arrayStatus
}

function geraArrayDaURL(arrayLinks){
  return arrayLinks.map(objetoLinks => Object.values(objetoLinks).join())
}

async function validaURL(arrayLinks){

  const links = geraArrayDaURL(arrayLinks);
  const statusLinks = await checaStatus(links);
  return statusLinks;
}



export default validaURL;


