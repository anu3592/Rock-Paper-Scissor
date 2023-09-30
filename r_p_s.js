let p = document.getElementById("paper");
let r = document.getElementById("rock");
let s = document.getElementById("scissor");
let res = document.getElementById("result");
let reset = document.getElementById("reset");

let player = document.getElementById("playerText");
let computer = document.getElementById("computerText");
let l1 = player.innerHTML.length;
let l2 = computer.innerHTML.length;

let ans = ["Rock", "Paper", "Scissor"];
let com = Math.floor(Math.random()*3);

p.addEventListener("click", ()=>{
    
    if(player.innerHTML.length!=l1)
    {
        let s = player.innerHTML.substring(0,l1);
        player.innerHTML = s;
    }
    if(computer.innerHTML.length!=l2)
    {
        let s = computer.innerHTML.substring(0,l2);
        computer.innerHTML = s;
    }
    if(res.innerHTML.length!=0)
    {
        res.innerHTML = "";
    }
    let text = player.innerHTML;
    player.innerHTML = text+" "+p.value;
    if(ans[com] == "Paper")
    {
        res.innerHTML = "Draw!";  
        res.style.color = "black";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    else if(ans[com]=="Rock")
    {
        res.innerHTML = "You Win!";  
        res.style.color = "lightgreen";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    else if(ans[com]=="Scissor")
    {
        res.innerHTML = "You Lose!";
        res.style.color="red";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    console.log(ans[com],p.value);
    com = Math.floor(Math.random()*3);
    
})

r.addEventListener("click", ()=>{
    if(player.innerHTML.length!=l1)
    {
        let s = player.innerHTML.substring(0,l1);
        player.innerHTML = s;
    }
    if(computer.innerHTML.length!=l2)
    {
        let s = computer.innerHTML.substring(0,l2);
        computer.innerHTML = s;
    }
    if(res.innerHTML.length!=0)
    {
        res.innerHTML = "";
    }
    let text = player.innerHTML;
    player.innerHTML = text+" "+r.value;
    if(ans[com]=="Rock")
    {
        res.innerHTML = "Draw!";
        res.style.color ="blac";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    else if(ans[com]=="Scissor")
    {
        res.innerHTML = "You Win!";
        res.style.color = "lightgreen";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    else if(ans[com]=="Paper")
    {
        res.innerHTML = "You Lose!";
        res.style.color = "red";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    console.log(ans[com],r.value);
    com = Math.floor(Math.random()*3);
})

s.addEventListener("click", ()=>{
    if(player.innerHTML.length!=l1)
    {
        let s = player.innerHTML.substring(0,l1);
        player.innerHTML = s;
    }
    if(computer.innerHTML.length!=l2)
    {
        let s = computer.innerHTML.substring(0,l2);
        computer.innerHTML = s;
    }
    if(res.innerHTML.length!=0)
    {
        res.innerHTML = "";
    }
    let text = player.innerHTML;
    player.innerHTML = text+" "+s.value;
    if(ans[com]=="Scissor")
    {
        res.innerHTML = "Draw!";
        res.style.color ="black";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    else if(ans[com]=="Paper")
    {
        res.innerHTML = "You Win!";
        res.style.color = "lightgreen";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    else if(ans[com]=="Rock")
    {
        res.innerHTML = "You Lose!";
        res.style.color = "red";
        let text2 = computer.innerHTML;
        computer.innerHTML = text2+" "+ans[com];
    }
    console.log(ans[com],s.value);
    com = Math.floor(Math.random()*3);
    
})

reset.addEventListener("click", ()=>{
    let s = player.innerHTML.substring(0,l1);
    player.innerHTML = s;
    let s2 = computer.innerHTML.substring(0,l2);
    computer.innerHTML = s2;
    res.innerHTML = "";
})
