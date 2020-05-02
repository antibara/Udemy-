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
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = Math.round(appData.budget / 30)
        alert('Ежедневный бюджет: '+ appData.moneyPerDay + 'руб')
        
  },
  detectLevel: function(){
    if(appData.moneyPerDay < 100){
        console.log("Минимальынй уровень заработка")
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("средний уровень достатка")
    }else if(appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000){
        console.log('Высокий уровень заработка')
    }else{
        console.log('Вы богач')
    }
  },
   checkSavings: function(){
    if(appData.savings == true){
        let save = +prompt('Какова сумма накоплений?')
            percent = +prompt('Под какой процент?')
        appData.monthIncome =Math.round(save/100/12*percent);
        alert('Доход в месяц с вашего депозита: '+ appData.monthIncome)
    }
},
chooseOptExpenses: function(){
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
    },
    chooseIncome: function(){
        for(let i =0;i < 1;i++){
            let items = prompt('Что принесет дополнительный доход?(перечислите через запятую)', "")
            if(typeof(items) === 'string' && typeof(items) != null &&
            items != ""){
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();}
            else{
                i--
            }
        }
        appData.income.forEach(function(item, i){
            console.log("Способы доп. заработка: " + item)
        })
    }

}

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key)
}


// chooseOptExpenses()
// console.log(appData)
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