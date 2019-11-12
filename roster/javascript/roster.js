function showRosterName(x){
  console.log(x)
}
var HARRY_HOUSES = ['Rowena Ravenclaw', 'Helga Hufflepuff', 'Godric Gryffindor', 'Salazar Slytherin', 'Muggle']
var YEAR = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate', 'Young as Sunrise']
class Player{
  constructor(name, year, major, snack, life, funFact, isCaptain=false){
    this.name = name
    this.year = year
    this.funFact = funFact
    this.life = life
    this.major = major
    this.year = year
    this.snack = snack
    this.isCaptain = isCaptain
  }
  getString() {
    let name = this.name
    if(this.isCaptain) name += '*'
    return '<b class="roster-name">'+name + '</b><br>'+this.year+'<br>'+this.major+'<br><b>Fav Tourney Snack<br></b>'+this.snack+'<br><b>Fun Fact</b><br>'+this.funFact+'<br><b>How has playing college ultimate change your life?</b><br>'+this.life;
  }
  getImage() {
    var pic = this.name
    return pic+'.png'
  }
}

class DummyPlayer extends Player{
  constructor(name, year, funFact){
    super(name, year, "Otter Training", "Too energetic to snack", "My fun fact is not fact!", funFact);
  }
  getImage() {
    return "otter.png"
  }

}

class Coach{
  constructor(name){
    this.name= name
  }
  getImage(){
    return 'coach.png'
  }
  getString(){
    return '<b> Coach<br>'+this.name+'</b>'
  }
}
var players = [
new Player("Adeline Tan", "Junior", "Economics","Banana, fruit snack, animal crackers","Busier!!! But also more interesting and fun because I get to play with fun people and go to cool places.","I've tried playing a few sports like basketball, soccer, badminton, tennis BUT frisbee is still the most fun that's why I'm here! :) "),
new Player("Angela Gavic", "Sophomore", "Accounting","Hot Cheetos","I made new friends and learned a lot. ","I do (sometimes competitive) ballroom dancing. "),
new Player("Becca Napoli", "Senior", "Mechanical Engineering","Sour Patch Kids","It has brought me so many new friendships and has helped me grow my overall confidence!","I have double jointed thumbs", true),
new Player("Bonnie Wu", "Senior", "Molecular and Cellular Biology","Animal Crackers","I now eat food from ground","I cook things"),
new Player("Brittney Gorman", "Graduate Student", "Biophysics ","Cheez-its","I’ve become a fire breathing dragon","Jellyfish love me "),
new Player("Caroline Wheeler", "Sophomore", "Advertising","Skittles","I have a lot more friends :)","I used to work as one of Santa’s elves in the mall "),
new Player("Claire \"Claw\" Trumbull", "Graduate Student", "Master of Social Work ","Beef Jerky","My Menace teammates believe in me and it feels SO good!","Whoppers are the superior $1.00 Boxed Candy."),
new Player("Claire Szilagyi", "Junior", "Economics","Nuts","I have friends now :)","I actually have a ranked list of my favorite bathrooms on campus"),
new Player("Elisabeth Shiro", "Sophomore", "Aerospace engineering ","Pretzels","No","No"),
new Player("Emma Worrell", "Sophomore", "Statistics","Slim Jims","I've made a lot of amazing friends!","Nash Grier followed me back on vine. RIP Vine."),
new Player("Faith Zou", "Senior", "Geographic Information Science","Twix","Found a fun activity to do!","I'm a Slytherin!"),
new Player("Grace Caserio", "Freshman", "Undecided ","Goldfish ","Meeting so many nice people has made my life so much more positive. ","I played the piano and the oboe in high school "),
new Player("Jenna Kokkat", "Senior", "Chemistry ","Fruit snacks ","I finally have weekend plans","I always finish my dessert"),
new Player("Julia Kasner", "Freshman", "Chemistry and Philosophy","kettle corn","Being a part of this team has allowed me to meet a lot of new people as well as learn a new skill in playing frisbee.","I'm a big fan of spoons (as in silverware). They're an essential daily tool and have many uses in and out of the kitchen."),
new Player("Lexi Larson", "Freshman", "Engineering undeclared","Pickles","I've been able to meet super cool people and continue playing the sport that I love!","I have gone to the same summer camp for 9 years!!"),
new Player("Lily Dix", "Junior", "CS + Math","Oranges","Since joining the team I've gotten to meet a ton of new friendly people and have become much more physically active!","My favorite animals are giraffes."),
new Player("Luisa (RJ) Ruge-Jones", "Graduate Student", "Communication","Clif Bar BLOKS","It has kick-started my future career as a sushi chef. And also I am constantly surrounded by wonderful people.","My favorite things to do when I was a child were play outside and make lists. I know because I wrote it down in a list. ", true),
new Player("Rose Dinh", "Sophomore", "Computer Science","Goldfish","Menace has been a great way to make friends, relieve stress, and beat my cousins in pick-up games of ultimate frisbee.","I crochet with a club of old ladies. "),
new Player("Rui Yang", "Graduate Student", "Computer Science","KIND protein bar","I installed snapchat and instgram!","My English name before joining UIUC is Shirley."),
new Player("Shirley Huang", "Graduate Student", "Computer Science","Welch's fruit snacks","I learned what it truly means to compete as an athlete, to come back stronger from injuries, and to push myself to be a better player, teammate, and friend.","#GoSpursGo"),
new Player("Vanessa Tran", "Sophomore", "Undecided","Clementines","I cook things now","I can cook an egg"),
new Player("Zifan Feng", "Senior", "Computer Science","KIND bars and peanut butter","meet a bunch of funny people","I watch all YouTube videos in 1.5 - 2x speed"),
new Player("Zifei Feng", "Senior", "Computer Science","Animal cracker","I don't mind eating animal crackers from the ground","I didn't know I need to score in my first ultimate practice"),
new Player("Cassidy Wichelecki", "Junior", "Statistics","Pretzels","I've met so many wonderful people through ultimate! ","Claw Machine Master "),
new Player("Natalia Hryniewicki", "Freshman", "Chemistry","Chips","It has made me more fit and helped my self esteem.","I have a sister that’s 13 years younger than me."),
new Player("Eden Brewer", "Senior", "Political Science","Watermelon, Slim Jims, Grapes","This is a hard question to answer","My cats are named after cheese "),
new DummyPlayer("Mary Cook", "Sophomore", "I eat spicy foods when I cry"),
new DummyPlayer("Galilea Flores", "Sophomore", "I can use chopsticks with both my hands"),
new DummyPlayer("Erin Kuehner", "Freshman", "I taught a 60-year-old person how to ski"),
new Coach("Angelo Ramos")
];

var rosterSummary = document.getElementById("roster-summary")
var i;
for ( var playerIndex in players) {
    var player = document.createElement('div')
    var playerInfo = players[playerIndex]
    player.className = 'roster-container'
    player.innerHTML =
      "<img class='roster-img' src='playerImages2019/" + playerInfo.getImage() + "\' alt='picture'>" +
      "<div class='roster-overlay'>" +
      "<div class='roster-text'>" +
      playerInfo.getString()+ "</div></div>"
    player.setAttribute('onmouseover','this.childNodes[1].setAttribute(\'style\', \'opacity:.9;position: absolute; top: 0; height: 100%; width: 100%; transition: .5s ease; background-color: #008CBA;\')')
    player.setAttribute('onmouseleave','this.childNodes[1].setAttribute(\'style\', \'opacity:0;position: absolute; transition: .5s ease; top: 0; height: 100%; width: 100%;\')')
    rosterSummary.appendChild(player)
}
var bottomDiv = document.createElement('div')
bottomDiv.setAttribute('style', 'padding-bottom: 80px')
bottomDiv.innerHTML = '* denotes as captains <br> ** Fun facts are not guaranteed to be Fact'
rosterSummary.appendChild(bottomDiv)
