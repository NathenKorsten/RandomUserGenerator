const url = "https://api.randomuser.me/";

const loading = document.getElementById("loading")
const avatar = document.getElementById("avatar")
const btn = document.getElementById("btnGenerate")
const Name = document.getElementById("name")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const dob = document.getElementById("dob")
const phone = document.getElementById("phone")
const locate = document.getElementById("locate")
const mainContent = document.getElementById("main")
const copyObject = document.getElementById("btnCopyObject")
const hr = document.getElementById("hrow")


const generateUser = async () =>{
    const response = await fetch(url);
    const userData = await response.json();
    const person = userData.results[0];

    if(person){
        loading.remove();
        avatar.style.display= "block"
        hr.style.display= "block"
        mainContent.style.display="block"

    }

    console.log(person);
    avatar.src = person.picture.large;
    Name.innerText = `${person.name.first} ${person.name.last}`;
    userName.innerText = `${person.login.username}`;
    password.innerText = `${person.login.password}`;
    dob.innerText = `${person.dob.date}`;
    phone.innerText = person.cell;
    locate.innerText = `${person.location.city}, ${person.location.country}`;
    email.innerText = `${person.email}`;
    
}

generateUser()

btn.addEventListener("click", ()=>{
    window.location.reload()
});
