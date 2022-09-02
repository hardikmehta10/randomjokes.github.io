const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click',generateJoke)

generateJoke();

//aync -> parallely running multiple codes

async function generateJoke()
{
    const config = {
        headers: {
            Accept:'application/json'
        }
    }


//await - untill the function is received, function won't move ahead
const res = await fetch('https://icanhazdadjoke.com/', config)

const data = await res.json()
jokeEl.innerHTML=data.joke 
}