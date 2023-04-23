function generate(){
    let pool="";

    if(document.getElementById('uppercaseCb').checked){
         pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     }
    if(document.getElementById('lowercaseCb').checked){
       pool += "abcdefghijklmnopqrstuvwxyz";
     }
    if(document.getElementById('numberCb').checked){
        pool += "0123456789";
    }
    if(document.getElementById('specialCharCb').checked){
        pool += "!#$%&()*+,-./:;<=>?@[_{|}~";
     }

    const length= document.querySelector("#customRange2").value;
    
    

    if(length<1 || pool.length === 0){
        return;
    }

     let password = "";
     for(let i=0; i < length ; i++){
        const pos = Math.floor(Math.random() * pool.length);
        password += pool.charAt(pos);
    }

    document.querySelector(".inputPass").value = password;
}

const genBtn= document.querySelector(".genBtn");

genBtn.onclick = () => {
    generate();
}

const range2 = document.querySelector("#customRange2");

range2.oninput  = () => {
    document.querySelector("#lengthofpassword").innerHTML = document.querySelector("#customRange2").value;
}

const copyBtn = document.querySelector(".copyBtn");

copyBtn.onclick = () => {
    const pass = document.querySelector(".inputPass").value;

    navigator.clipboard.writeText(pass).then(() => {
        document.querySelector(".copyBtn").innerHTML = "copied!";
        setTimeout(()=> {
            document.querySelector(".copyBtn").innerHTML = "copy";
        } ,5000);
    })
}



