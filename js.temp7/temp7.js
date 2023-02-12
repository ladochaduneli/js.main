let football = {
    name:"manchester",
    league:["premier league","champions league","community sheild"],
    wins:{
        name:"trophey",
       amount:30
    },
stadiums:[
    {name:"santiago bernabeu",amount:2},
    {name:"camp-nou",amount:4},
    {name:"etihad-stadium",amount:5},
]
};
console.log("<h4>მანჩესტერის მოგებული ტიტულები</h4>");
for(let i=0; i<football.league.length;i++)
console.log(football.league[i]+"</br>");


console.log("<h3>სტადიონები რომელზეც მანჩესტერმა ფინალები მოიგო</h3>");
for(let i=0;i<football.stadiums.length;i++)
console.log(football.stadiums[i].name+"</br>");
