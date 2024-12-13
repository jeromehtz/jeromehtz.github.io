const footer = document.querySelector(".footer")
const footer_body = document.querySelector("footer")

footer.addEventListener("click", function () {
    if (footer_body.classList.contains("hidden"))
    {
        footer_body.classList.remove("hidden")
    }
    else if (!footer_body.classList.contains("hidden"))
    {
        footer_body.classList.add("hidden")
    }
    // setTimeout(footer_body.classList.add("hidden"), 5000)
    

})

// footer_body.addEventListener("click", function () {
//     if (!footer_body.classList.contains("hidden"))
//     {
//         footer_body.classList.add("hidden")
//     }
// })
