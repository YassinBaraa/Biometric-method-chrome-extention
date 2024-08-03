
    console.log("haha");
    let btn = document.getElementById('btn');

    btn.addEventListener("onClick",()=>{
        const p = document.createElement('p');
        p.textContent = "Activated";
        btn.appendChild(p);
    });
