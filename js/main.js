let money, time;
function start(){
    money = +prompt("Введите ваш бюджет на месяц?")
    time = prompt("Введите дату в формате YYYY-MM-DD")

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Введите ваш бюджет на месяц?")
    }
}
start();


appData ={
    budget:money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses(){
for(let i = 0;i < 2;i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце?')
        b = prompt("Во сколько обойдется?")
    if((typeof(a))=== 'string' && typeof(a) != null && typeof(b) != null
    && a != '' && b != '' && a.length <= 50){
    console.log('done')
    appData.expenses[a] = b;
    }else{
    i--
    }
};
}

chooseExpenses();
function chooseOptExpenses(){
for(let i = 1;i<4;i++){
    let opt = prompt('Введите статью необязательных расходов?')
    if ((typeof(opt))=== 'string' && typeof(opt) != null 
    && opt != ''  && opt.length <= 30){
        console.log('done opt')
        appData.optionalExpenses[i]= opt;
    }else{
        i--
    }
    }
}
chooseOptExpenses()
console.log(appData)
// let i = 0;

// do{
//     let a = prompt('Введите обязательную статью расходов в этом месяце?')
//         b = prompt("Во сколько обойдется?")
//     if((typeof(a))=== 'string' && typeof(a) != null && typeof(b) != null
//          && a != '' && b != '' && a.length <= 50){
//              console.log('done')
//              i =i+1 
//              appData.expenses[a] = b;}
       
// }while (i < 2)
// let i = 0 
// while(i < 2){
//     let a = prompt('Введите обязательную статью расходов в этом месяце?')
//         b = prompt("Во сколько обойдется?")
//     if((typeof(a))=== 'string' && typeof(a) != null && typeof(b) != null
//      && a != '' && b != '' && a.length <= 50){
//      console.log('done')
//      appData.expenses[a] = b;
//      i++
//     }
  
// }
function detectDayBudget(){
appData.moneyPerDay = Math.round(appData.budget / 30)
alert('Ежедневный бюджет: '+ appData.moneyPerDay + 'руб')
}
detectDayBudget()
function detectLevel(){
if(appData.moneyPerDay < 100){
    console.log("Минимальынй уровень заработка")
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка")
}else if(appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000){
    console.log('Высокий уровень заработка')
}else{
    console.log('Вы богач')
}
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt('Какова сумма накоплений?')
            percent = +prompt('Под какой процент?')
        appData.monthIncome =Math.round(save/100/12*percent);
        alert('Доход в месяц с вашего депозита: '+ appData.monthIncome)
    }
}

checkSavings()