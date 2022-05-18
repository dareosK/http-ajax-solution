// GET REQUEST with OMDB
const results =document.querySelector("#results")
const form = document.querySelector("#search-form")
const input = document.querySelector(".form-control")

const callAPI = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    // then parse JSON string to JS object
    .then(response => response.json())
    // data refers to the JS object, parsed from the JSON I received
    .then((data) => {
      // console.log(data.Search)
      data.Search.forEach((result) => {
      // console.log(result)
        const movieTag = `<li>
          <img src="${result.Poster}">
          <p>${result.Title}</p>
        </li>`
        // console.log(movieTag)
        results.insertAdjacentHTML("beforeend", movieTag)
      })
    })
}

// 1. ADD EVENT LISTENER TO THE FORM
form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(event)
  results.innerHTML = ""
  // a. retrieve the user's search query
  // console.log(input.value)
  // b. make a fetch with the user's search query
  callAPI(input.value)
})

// If you want to land on a page with some results already, instead of an empty search bar
// start by calling the callAPI function with a search query, and then let the user update
callAPI("memento")

// POST REQUEST with REQRES
// const form = document.querySelector("#form")

// const signUp = (event) => {
//   // prevent form from reloading the page
//   event.preventDefault()
//   // retrieve the email and password from the DOM
//   const emailValue = document.getElementById("email").value
//   const passwordValue = document.getElementById("password").value
//   fetch("https://reqres.in/api/register", {
//     // specify that Im making a POST request
//     method: "POST",
//     // specify that I'm making it to an API, so I'm accepting JSON
//     headers: {"Content-Type": "application/json"},
//     // send the body in the form of a JSON string
//     body: JSON.stringify({"email": emailValue, "password": passwordValue})
//   })
//     .then(response => response.json())
//     .then((data) => {
//        console.log the response, see that is successful or unsuccessful
//       console.log(data)
//     })
// }

// 1. Add a submit event to the form, call the sugnUp function on submit
// form.addEventListener("submit", signUp)
