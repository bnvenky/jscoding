//day1
//scenario1
let temp = 25;//initial-value
temp=30//updated-value
console.log(temp)

//scenario2
const days = ["monday","tuesday","wednesday","thursday","fryday","saturday"]
days[4]="friday"
console.log(days)

//scenario3
access_variable()
function access_variable(){
    const a = 10
    let b = 20
    console.log(a)
    console.log(b)
}

/*console.log(a)
console.log(b)*/

//scenario4
const pi = 3.141
console.log(pi)

//scenario5
let myArry = ["orange",7,20];

for (i of myArry){
  console.log(i)
}


//scenario6
let userProfile = {
    email:"venky1233@mail"
}
Object.defineProperty(userProfile,'birth',{
    value:"14-06-2000",
    writable:false,
    configurable:false,
    enumerable:true
})
userProfile.birth="01-01-2000"
userProfile.email="bnv@gmail.com"
console.log(userProfile)
//console.log(typeof(userProfile))


//day2 assignment

//Top score array:1
const players = [
  { name: "Sanju Samson", team: "RR", runs: 531 },
  { name: "Ruturaj Gaikwad", team: "CSK", runs: 583 },
  { name: "Virat Kohli", team: "RCB", runs: 700 },
  { name: "Travis Head", team: "SRH", runs: 567 },
  { name: "Riyan Parag", team: "RR", runs: 573 },
];

function topScorers(players) {
  // Sort the players array by runs in descending order
  players.sort((a, b) => b.runs - a.runs);
  //console.log(players)
  // Return the top 3 scorers
  return players.slice(0, 3);
}
console.log(topScorers(players));


//Team Wins Json:3
const teamWins = {
  "KKR": 5,
  "SRH": 3,
  "MI": 9,
  "CSK": 10,
  "RCB": 1
};

function teamWithMaxWins(teamWins) {
  let maxWins = -1;
  let topTeam = "";
  for (team in teamWins) {
      if (teamWins[team] > maxWins) {
          maxWins = teamWins[team];
          topTeam = team;
      }
  }
  return topTeam;
}

const final_wins = teamWithMaxWins(teamWins);
console.log(final_wins,teamWins[final_wins])


//Player Search by Team:4

function playersByTeam(players, teamName) {
  return players.filter(player => player.team === teamName);
}

console.log(playersByTeam(players, "RR"));
