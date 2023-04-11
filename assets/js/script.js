// DOM (DOCUMENT OBJECT MODEL)

// GETTING DATA FROM HTML FORM

function getData(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let subject=document.getElementById("subject").value
    let address=document.getElementById("address").value


    //data fill alert
    if(name==""){
        return alert("Nama harus diisi")
    } else if(email==""){
        return alert("Email harus diisi")
    } else if(phone==""){
        return alert("Nomor handphone harus diisi")
    } else if(subject==""){
        return alert("Subject harus diisi")
    } else if(address==""){
        return alert("Alamat harus diisi")
    }

    //email generator
    const emailReceiver = "oktaviandarizki15@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}
    &body=Halo Nama saya ${name}, 
    Alamat saya di ${address}, 
    bisakah hubungi saya di ${phone}`
    a.click()

    let data={
        name,
        email,
        phone,
        subject,
        address
    }
    console.log(data)
}