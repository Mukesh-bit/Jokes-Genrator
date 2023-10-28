const btn = document.querySelector("#btn");
const para = document.querySelector("#joke")

const API_KEY = "ZVIhusfacs67+cx/cBDm6A==TBgPVvyGRRv9ESfr"

const API_URL = "https://api.api-ninjas.com/v1/jokes?limit=1"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": API_KEY,
    },
};


const getJoke = async () => {

    try {
        para.innerHTML = "Loading..."
        btn.disabled = true
        btn.innerHTML = "Loading..."
        const res = await fetch(API_URL, options);
        const data = await res.json();

        para.innerHTML = data[0].joke
        btn.disabled = false
        btn.innerHTML = "TELL ME A JOKE"
    } catch (error) {
        para.innerHTML = "An error happened, try again later"
        btn.disabled = false
        btn.innerHTML = "TELL ME A JOKE"
    }


}


btn.addEventListener("click", getJoke)