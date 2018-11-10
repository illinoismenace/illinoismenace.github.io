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
    super(name, 4, funFact, 'Keeping my secret talent as secret', 'Frisbee Design', year);
  }
  getImage(){
    return 'otter.png'
  }
}

class Coach{
  constructor(name){
    this.name= name
  }
  getImage(){
    return 'otter.png'
  }
  getString(){
    return '<b>'+this.name+'</b>'
  }
}
var players = [
new Player("Angela Gavic", 1, "I speak Bosnian.","I'm stupidly good at the Facebook Messenger game called Block Party.","Undeclared",0),
new Player("Caroline Wheeler", 1, "I cry when I eat spicy foods","I play guitar and have double jointed ankles!","Political Science",0),
new Player("Elie Shiro", 0, "I have 3 dogs","I can play the violin","Engineering Undeclared",0),
new Player("Vanessa Tran", 2, "I love learning complicated yoga poses","I'm really good at sleeping. I can sleep 24hrs if given the opportunity.","Division of General Studies",0),
new Player("Brittney Gorman", 0, "I’ve been in a movie with Nicholas Cage","Convincing Copper of anything I say","Biophysics",4, true),
new Player("Cora Wessman", 0, "I stole a piece of George Washington’s House once","Art of sorts","Environmental Science",4, true),
new Player("Edith Jaucian ", 2, "I have a Russian blue cat named Bruce","I can type really fast.","Social Work ",4),
new Player("Becca Napoli", 1, "I have double jointed thumbs","I wish","Mechanical Engineering and Spanish",2),
new Player("Faith Zou", 3, "I really enjoy the Harry Potter series, and I cried very hard at my first HP film concert. ","I did traditional Chinese calligraphy for 6 years when I was little. ","Geographic Information Science",2),
new Player("Gabbie Jones", 3, "I share a birthday with Beyoncé ","I play three different instruments! The clarinet, guitar and piano ","Sustainability ",2),
new Player("Jenna ", 2, "I'm legally blind without glasses!","I always have room for dessert. ","Chemistry ",2),
new Player("Megan Coleman", 2, "I always have peanut butter m&m's on hand, at all times.","Cake Decorating :P","Major: Computer Engineering. Minors: Mathematics, Informatics",2),
new Player("Tanya Sinha", 0, "I have a birthmark in the shape of a goldfish","No :(","Engineering Physics",2),
new Player("Zifan Feng", 0, "Watch all videos at 1.5x speed","Pretend that I understand everything people said","Computer Science",2),
new Player("Zifei Feng", 2, "I didn't know I need to score in my first frisbee practice","Pretend to know nothing","Computer Science",2),
new Player("Amy Copper", 0, "My twin sister fell down the stairs as a baby, and then I just followed her all the way down :^)","I can do that clover thing with my tongue ","Double in History and Anthropology",3, true),
new Player("Claire Follis", 1, "I'm from Texas","I've never lost a chapstick without finishing it first","Education Learning Science & Political Science",3),
new Player("Lea", 3, "I’m better with animals than people","I don’t ","Animal Sciences",3),
new Player("Cassidy Wichelecki", 0, "I've played piano since kindergarten","Im Pretty Good at claw machines ","Undeclared",1),
new Player("Naomi Gonzalez", 2, "I’m not a morning person. I will hit snooze on my alarm about ten times before actually getting up. ","I can sleep through a fire alarm. :)","Civil Engineering",1),
new Player("Lindsay Nottingham", 0, "I've been to a world cup","I speak french","Undecided",0),
new Player("Rui Yang", 1, "I played basketball in school for two year in undergraduate to grow taller. (But obviously it didn't work <br>(╯°Д°)╯︵ ┻━┻", "I once had a nap in standing position.", "Computer Science", 4),
new DummyPlayer("Bonnie Wu", "I burped the alphabat", 1),
new DummyPlayer("Julia Honan", "I did Claire's haircut", 2),
new DummyPlayer("Claire Szilagyi", "Cilantro is my favorite salad", 1),
new DummyPlayer("Galilea Flores","I can use chopsticks with both my hands" ,2),
new DummyPlayer("Mary Cook","I eat spicy foods when I cry",0),
new DummyPlayer("Ellie Porath", "I won the 2018 Olympic of Hula Hooping", 4),
new DummyPlayer("Emma Worrell", "Too serious to have fun fact", 0),
new DummyPlayer("Liza Kalinina", "I taught a 60-year-old person how to ski", 2),
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
bottomDiv.innerHTML = '* denotes as captains'
rosterSummary.appendChild(bottomDiv)
