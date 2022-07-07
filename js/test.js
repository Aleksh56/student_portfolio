let requestURL = "https://jsonplaceholder.typicode.com/users"

function newRequest (method, URL){
    return new Promise ((resolve, reject) => {
        let reqst = new XMLHttpRequest();

        reqst.open(method, URL);

        reqst.onload = () => {
            if(reqst.status >= 400){
                console.log(reqst.status);
            } else{
                console.log("Your code is " + reqst.status + ". Be happy :)");
            }
        }

        reqst.send();
    })
}

let data = newRequest("GET", requestURL);

