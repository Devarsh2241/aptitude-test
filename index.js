let c = []
let developarr
let answer
let score=0


function develop() {

    for (let i = 0; i < 9; i++) {
        if (i % 2 != 0) {
            let b = ["+", "-", "*", "/"]
            que = Math.round(Math.random() * 3)
            c += b[que]
        }
        else {
            que = Math.floor(Math.random() * 10) + 1
            c += que
        }
    }
    developarr = c
    answer = eval(c)
    document.getElementById('Question').innerHTML = developarr
    
}
develop()

let btn = document.getElementById("btn")



function check() {

    let Ans = document.getElementById('Answer').value
    document.getElementById('show1').innerHTML = "Your answer is : " + Ans
    document.getElementById('show2').innerHTML = "Correct Answer is : " + Math.floor(answer)
    document.getElementById("Answer").value = "";
    

    if (answer == Ans) {
        document.getElementById('show3').innerHTML = "Correct"
        btn.addEventListener('click', function () {
            check()
            c=[]
            develop()
        })
    }
    else {
        document.getElementById('show3').innerHTML = "Wrong"
        btn.addEventListener('click', function () {
            check()
            c=[]
            develop()
            
        })
    }


}


