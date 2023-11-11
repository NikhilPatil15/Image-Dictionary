const access_key ="yCH7M9krJabR938c9KPcgqFP3N56d6yAsYFXNfTQHkY"
const form = document.querySelector(".searchbar")
const input = document.getElementById("search")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more")

let inputData =""
let page =1

//to Search images
async function  searchImages(){
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access_key}`

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results

    if(page===1){
        searchResults.innerHTML=""
    }

    results.map((end)=>{
        //creating a template/container for the searched images
        //div 
         const imageWrapper = document.createElement('div')
         imageWrapper.classList.add("search-result")
        //image
         const image = document.createElement("img")
         image.src = end.urls.small
         image.alt = end.alt_description
        //anchor
         const imageLink = document.createElement('a')
         imageLink.href = end.links.html
         imageLink.target = "_blank"
         imageLink.textContent =end.alt_description

         //appending into our html file

         imageWrapper.appendChild(image)
         imageWrapper.appendChild(imageLink)
         searchResults.appendChild(imageWrapper)
    })

    page++
    if(page>1){
        showMore.style.display = "block"
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault()
    page=1
    searchImages()
})
showMore.addEventListener("click",(event)=>{
    // event.preventDefault()
    // page=1
    searchImages()
    console.log("m")
})