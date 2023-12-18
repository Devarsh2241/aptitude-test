let c = []
let developarr
let answer = 0
let score = 0


function develop() {

    for (let i = 0; i < 9; i++) {
        if (i % 2 != 0) {
            let b = ["+", "-", "*"]
            que = Math.round(Math.random() * 2)
            c += b[que]
        }
        else {
            que = Math.round(Math.random() * 10) + 1
            c += que
        }
    }
    developarr = c
    answer = eval(c)
    document.getElementById('Question').innerHTML = c
    document.getElementById('score').innerHTML=score


}
develop()

let btn = document.getElementById("btn")


function check() {

    let Ans = document.getElementById('Answer')

    if (answer == Ans.value) {
        document.getElementById('show3').innerHTML = "Correct"
        c = []
        document.getElementById('show1').innerHTML = "Your answer is : " + Ans.value
        document.getElementById('show2').innerHTML = "Correct Answer is : " + answer
        Ans.value = "";
        score+=1
        document.getElementById('score').innerHTML=score
        develop()

    }
    else {
        document.getElementById('show3').innerHTML = "Wrong"
        c = []
        document.getElementById('show1').innerHTML = "Your answer is : " + Ans.value
        document.getElementById('show2').innerHTML = "Correct Answer is : " + answer
        Ans.value = "";
        score-=1
        document.getElementById('score').innerHTML=score
        develop()
    }

}


btn.addEventListener('click', function () {
    check()
})

