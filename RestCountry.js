document.body.innerHTML = `
<div class="container sticky-top ">        
<nav class="navbar navbar-light bg-dark" id="nav">
        <a class="navbar-brand text-white justify-content-start" href="#">RestCountry</a>
            <div class="form-inline">
                <input class="form-control mr-sm-2" type="search" id="country_name" placeholder="Country name">
                <button class="btn btn-outline-success my-2 my-sm-0" id="search">Search</button>
            </div>
            <button id="mode">Light Mode</button>
</nav>
</div>
    <div class=" main_Container  text-dark d-flex  d-flex justify-content-center d-flex flex-wrap p-2 mx-2" id="main_Container">
    </div>
    <div>
    </div>
    `;

const url = "https://restcountries.com/v2/all";

const getData = async () => {
    try {
        const res = await fetch(url);
        const data = await (res.json());
        console.log(data)
        data.forEach(element => {
            Display(element);
        });

    } catch (error) {
        console.log(error)
    }
}

const Display = async (obj) => {
    main_Container.innerHTML += `
    <div class="row col-lg-4 col-sm-12 p-2 justify-content-center">
                <div class="card text-white">
                <div class="card-header text-center bg-dark ">
                     ${obj.name}
                </div>
                <div class="card-body text-center id="">
                    <img src="${obj.flag}" width="276px" heigth="100px">
                    <p></p>
                    <p class="card-text text-center">Capital:${obj.capital}</p>
                    <p class="card-text">Region:${obj.region}</p>
                    <p class="card-text">CountryCode:${obj.cioc}</p>
                    <a href="https://openweathermap.org" class="btn btn-outline-secondary text-white">Click For Weather</a>
                </div>
        </div> 
  </div>`
}
getData();
const search = document.getElementById("search");
search.addEventListener('click', async(event) => {
    console.log("search is clicked.");
    const country_name=document.getElementById("country_name").value
    console.log(country_name);
    const url2=url.split('/all')[0]+"/name/"+country_name
    const resp= await fetch(url2)
    const result=await (resp.json());
    console.log(result)
    main_Container.innerHTML ="";
    result.forEach(element => {
        Display(element) 
    });

})

const btn = document.getElementById("mode");
// const nav=document.getElementById('nav')
btn.addEventListener('click',()=>{
    console.log(btn.innerText);
    if(btn.innerText==="Dark Mode"){
        btn.innerText="Light Mode";
        document.body.style.backgroundColor="white";
            }else{  

        btn.innerText="Dark Mode";
        // console.log("Light mode is on")
        document.body.style.backgroundColor="black";

                

    }

})