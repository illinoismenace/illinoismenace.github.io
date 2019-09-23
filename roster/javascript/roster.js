function showRosterName(x){
  console.log(x)
}
var HARRY_HOUSES = ['Rowena Ravenclaw', 'Helga Hufflepuff', 'Godric Gryffindor', 'Salazar Slytherin', 'Muggle']
var YEAR = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate', 'Young as Sunrise']
class Player{
  constructor(name, house, funFact, talent, major, year, isCaptain=false){
    this.name = name
    this.house = house
    this.funFact = funFact
    this.talent = talent
    this.major = major
    this.year = year
    this.isCaptain = isCaptain
  }
  getString() {
    let name = this.name
    if(this.isCaptain) name += '*'
    return '<b class="roster-name">'+name + '</b><br>'+YEAR[this.year]+'<br>'+this.major+'<br><b>Harry Potter House<br></b>'+HARRY_HOUSES[this.house]+'<br><b>Fun Fact</b><br>'+this.funFact+'<br><b>Secret Talent</b><br>'+this.talent;
  }
  getImage() {
    return this.name.replace(/\s/g, '')+ '.png'
  }
}

class DummyPlayer extends Player{
  constructor(name, funFact, year){
    super(name, 4, funFact, 'Keeping my secret talent as secret', 'Magic', year);
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
new Player("Brittney Gorman", 0, "I’ve been in a movie with Nicholas Cage","Convincing Copper of anything I say","Biophysics", 4),
new Player("Angela Gavic", 1, "I speak Bosnian.","I'm stupidly good at the Facebook Messenger game called Block Party.","Undeclared",1),
new Player("Caroline Wheeler", 1, "I cry when I eat spicy foods","I play guitar and have double jointed ankles!","Political Science",1),
new Player("Elie Shiro", 0, "I have 3 dogs","I can play the violin","Engineering Undeclared",1),
new Player("Vanessa Tran", 2, "I love learning complicated yoga poses","I'm really good at sleeping. I can sleep 24hrs if given the opportunity.","Division of General Studies",1),
new Player("Becca Napoli", 1, "I have double jointed thumbs","I wish","Mechanical Engineering and Spanish",3),
new Player("Faith Zou", 3, "I really enjoy the Harry Potter series, and I cried very hard at my first HP film concert. ","I did traditional Chinese calligraphy for 6 years when I was little. ","Geographic Information Science",3),
new Player("Jenna Kokkat", 2, "I'm legally blind without glasses!","I always have room for dessert. ","Chemistry ",3),
new Player("Megan Coleman", 2, "I always have peanut butter m&m's on hand, at all times.","Cake Decorating :P","Major: Computer Engineering. Minors: Mathematics, Informatics",3),
new Player("Zifei Feng", 2, "I didn't know I need to score in my first frisbee practice","Pretend I don't know anything","Computer Science",3),
new Player("Zifan Feng", 0, "Watch all videos at 1.5x speed","Make Zifei cook me food","Computer Science",3),
new Player("Cassidy Wichelecki", 0, "I've played piano since kindergarten","Im Pretty Good at claw machines ","Undeclared",2),
new Player("Rui Yang", 1, "I played basketball in school for two year in undergraduate to grow taller. (But obviously it didn't work <br>(╯°Д°)╯︵ ┻━┻", "I once had a nap in standing position.", "Computer Science", 4),
new DummyPlayer("Adeline Tan", "I won the 2018 Olympic of Hula Hooping", 3),
new DummyPlayer("Eden Brewer", "I like butter chicken, especially the peanut one", 3),
new DummyPlayer("Luisa Ruge-Jones", "My last name has a hypen in it!!!", 4),
new DummyPlayer("Bonnie Wu", "I burped the alphabat", 2),
new DummyPlayer("Galilea Flores","I fed a cheetah with cheetos and she liked it" ,3),
new DummyPlayer("Claire Szilagyi", "I ranked my favorite restrooms on campus", 2),
new DummyPlayer("Mary Cook","I eat spicy foods when I cry",1),
new DummyPlayer("Emma Worrell", "Too serious to have fun fact", 1),
new Coach("Angelo Ramos")
];

var rosterSummary = document.getElementById("roster-summary")
var i;
for ( var playerIndex in players) {
    var player = document.createElement('div')
    var playerInfo = players[playerIndex]
    player.className = 'roster-container'
    player.innerHTML =
      "<img class='roster-img'src='playerImage/" + playerInfo.getImage() + "\' alt='picture'>" +
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
