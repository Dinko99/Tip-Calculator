const bill = document.getElementById('bill')
const people = document.getElementById('people')
const custom = document.getElementById('custom')
const btns = document.querySelectorAll('.btn')
const tip = document.getElementById('personTip')
const total = document.getElementById('personTotal')
const reset = document.getElementById('reset')

let billValue = 0;
let peopleNumber = 0;
let tipPercentage = 0;
let tipValue = 0;
let totalValue = 0;

bill.addEventListener('input', (e)=>{
    billValue = parseFloat(e.target.value);
})

people.addEventListener('input', (e)=>{
    peopleNumber = parseInt(e.target.value);
})

custom.addEventListener('input',(e)=>{
    let value = e.target.value
    tipPercentage = parseFloat(value)/100
    getResult()
})

reset.addEventListener('click', ()=>{
   bill.value = ''
   people.value = ''
   custom.value = ''
   tip.innerText = '$0.00'
   total.innerText = '$0.00'
})

btns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        tipPercentage = parseInt(e.target.textContent)/100
        getResult()
        custom.value = ''
    })
})

function getResult(){
    tipValue = parseFloat(((tipPercentage/billValue) * 100)/peopleNumber).toFixed(2)
    tip.innerText = `$${tipValue}`
    totalValue = billValue/peopleNumber + parseFloat(tipValue)
    total.innerText = `$${totalValue.toFixed(2)}`
    if(isNaN(totalValue) || isNaN(tipValue)){
        tip.innerText = '$0.00'
        total.innerText = '$0.00'
    }
}