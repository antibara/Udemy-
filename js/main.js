let money = +prompt("Введите ваш бюджет на месяц?")
let time = +prompt("Введите дату в формате YYYY-MM-DD")

appData ={
    budget:money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
}


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
appData.moneyPerDay = Math.round(appData.budget / 30)
alert('Ежедневный бюджет: '+ appData.moneyPerDay)

if(appData.moneyPerDay < 100){
    console.log("Минимальынй уровень заработка")
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка")
}else if(appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000){
    console.log('Высокий уровень заработка')
}else{
    console.log('Вы богач')
}