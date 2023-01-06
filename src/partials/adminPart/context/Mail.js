export const sendMail = data => {
    return fetch('https://rudenko-back.up.railway.app/api/sendmail', {
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
