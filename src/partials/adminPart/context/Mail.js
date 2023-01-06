export const sendMail = data => {
    return fetch('https://mern-task-app-sc80.onrender.com/api/sendmail', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>{
        console.log("response", response);
        return response.json();
    }).catch(err=>console.log(err))
}
