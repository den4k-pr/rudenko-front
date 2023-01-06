export const sendMail = data => {
    return fetch('https://mern-task-app-sc80.onrender.com/artists/modal', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>{
        return response.json();
    }).catch(err=>console.log(err))
}
