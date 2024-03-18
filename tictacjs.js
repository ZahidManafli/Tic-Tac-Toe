let buttons = document.querySelectorAll("button")
let yeni_oyun = document.getElementById("yeni_oyun")
let user1 = document.getElementById("user1")
let user2 = document.getElementById("user2")
let result_w = document.getElementById("bwinner")
let result_d = document.getElementById("bdraw")
let user1_qazandiqi = 0
let user2_qazandiqi = 0
let sifirla = document.getElementById("sifirla")
user1.innerText = user1.innerText + ` ${user1_qazandiqi}`
user2.innerText = user2.innerText + ` ${user2_qazandiqi}`
let tictac = ["×","o"]
let i = 0
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.innerText=="."){
            if(i==1){
                button.innerText=tictac[1]
                button.setAttribute("style","color:green;")
                i=i-1
            }
            else{
                button.innerText = tictac[0]
                button.setAttribute("style","color:red;")
                i=i+1
            }
        }
    })
})
function tictactoe(){
    if(document.getElementById("reqem1").innerText=="×" && document.getElementById("reqem2").innerText=="×" && document.getElementById("reqem3").innerText=="×"){
        user1_qazandiqi = user1_qazandiqi + 1
        user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
        user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
        buttons.forEach(function(button){
            button.innerText="."
            button.setAttribute("style",`color:${button.style.backgroundColor};`)
        })
        yeni_oyun.innerText = "Yeni Oyun"
        sifirla.innerText = "Sıfırla"
        i=0
        result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem4").innerText=="×" && document.getElementById("reqem5").innerText=="×" && document.getElementById("reqem6").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem7").innerText=="×" && document.getElementById("reqem8").innerText=="×" && document.getElementById("reqem9").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem1").innerText=="×" && document.getElementById("reqem4").innerText=="×" && document.getElementById("reqem7").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem2").innerText=="×" && document.getElementById("reqem5").innerText=="×" && document.getElementById("reqem8").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem3").innerText=="×" && document.getElementById("reqem6").innerText=="×" && document.getElementById("reqem9").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem1").innerText=="×" && document.getElementById("reqem5").innerText=="×" && document.getElementById("reqem9").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem3").innerText=="×" && document.getElementById("reqem5").innerText=="×" && document.getElementById("reqem7").innerText=="×"){
            user1_qazandiqi = user1_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-1"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem4").innerText=="o" && document.getElementById("reqem5").innerText=="o" && document.getElementById("reqem6").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem7").innerText=="o" && document.getElementById("reqem8").innerText=="o" && document.getElementById("reqem9").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem1").innerText=="o" && document.getElementById("reqem4").innerText=="o" && document.getElementById("reqem7").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem2").innerText=="o" && document.getElementById("reqem5").innerText=="o" && document.getElementById("reqem8").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem3").innerText=="o" && document.getElementById("reqem6").innerText=="o" && document.getElementById("reqem9").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem1").innerText=="o" && document.getElementById("reqem5").innerText=="o" && document.getElementById("reqem9").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                button.setAttribute("style",`color:${button.style.backgroundColor};`)
            })
            yeni_oyun.innerText = "Yeni Oyun"
            sifirla.innerText = "Sıfırla"
            i=0
            result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
        else if(document.getElementById("reqem3").innerText=="o" && document.getElementById("reqem5").innerText=="o" && document.getElementById("reqem7").innerText=="o"){
            user2_qazandiqi = user2_qazandiqi + 1
            user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
            user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
            buttons.forEach(function(button){
                button.innerText="."
                    button.setAttribute("style",`color:${button.style.backgroundColor};`)
                })
                yeni_oyun.innerText = "Yeni Oyun"
                sifirla.innerText = "Sıfırla"
                sifirla.innerText = "Sıfırla"
                i=0
                result_w.setAttribute("style","display:inline-block; color:white;")
        result_w.innerText = "Winner: User-2"
        function silme(){
            result_w.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
        }
}
function draw(){
    let draw_array = []
    buttons.forEach(function(button){
        if(button.innerText != "."){
            draw_array.push(button.innerText)
        }
    })
    if(draw_array.length == 12){
    user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
    user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
    buttons.forEach(function(button){
        button.innerText="."
            button.setAttribute("style",`color:${button.style.backgroundColor};`)
        })
        yeni_oyun.innerText = "Yeni Oyun"
        sifirla.innerText = "Sıfırla"
        sifirla.innerText = "Sıfırla"
        i=0
        result_d.setAttribute("style","display:inline-block; color:white;")
        result_d.innerText = "Draw"
        function silme(){
            result_d.setAttribute("style","display:none;")
        }
        setTimeout(silme,1000)
    }
}
setInterval(tictactoe,500)
setInterval(draw,500)
yeni_oyun.addEventListener("click",function(){
    buttons.forEach(function(button){
        button.innerText="."
        button.setAttribute("style",`color:${button.style.backgroundColor};`)
    })
    user1_qazandiqi = 0
    user2_qazandiqi = 0
    user1.innerText = "User-1:" + ` ${user1_qazandiqi}`
    user2.innerText = "User-2:" + ` ${user2_qazandiqi}`
    i=0
    sifirla.innerText = "Sıfırla"
    yeni_oyun.innerText = "Yeni Oyun"
})
sifirla.addEventListener("click",function(){
    buttons.forEach(function(button){
        button.innerText="."
        button.setAttribute("style",`color:${button.style.backgroundColor};`)
    })
    i=0
    yeni_oyun.innerText = "Yeni Oyun"
    sifirla.innerText = "Sıfırla"
})