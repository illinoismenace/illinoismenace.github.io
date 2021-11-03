function showRosterName(x){
  console.log(x)
}
var HARRY_HOUSES = ['Rowena Ravenclaw', 'Helga Hufflepuff', 'Godric Gryffindor', 'Salazar Slytherin', 'Muggle']
var YEAR = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate', 'Young as Sunrise']
class Player{
  constructor(name, year, major, hobby, life, funFact, isCaptain=false){
    this.name = name
    this.year = year
    this.funFact = funFact
    this.life = life
    this.major = major
    this.year = year
    this.hobby = hobby
    this.isCaptain = isCaptain
  }
  getString() {
    let name = this.name
    if(this.isCaptain) name += '*'
    return '<b class="roster-name">'+name + '</b><br>'+this.year+'<br>'+this.major+'<br><b>Fav Hobby Besides Ultimate<br></b>'+this.hobby+'<br><b>Fun Fact</b><br>'+this.funFact+'<br><b>Why do you play ultimate?</b><br>'+this.life;
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
  new Player("Summer Matthes", "Sophomore", "Psychology","Cycling and running","I really like the idea of the spirit of the game and it combines three of my favorite sports: football, basketball, and running.","I run a biking camp for kids over the summer "),
  new Player("Chris Thompson", "Junior", "Civil and Environmental Engineering","Cooking, Hiking, Working out, Hammocking","I started playing pick up ultimate in high school with friends and loved the sport. I knew I wanted to do it in college and everyone on the team was so friendly I just HAD to be a part of it.","I was a camp counselor for 6 years of my life and I loved it. The outdoors is my second home."),
  new Player("Yoana Hernandez", "Sophomore", "IB","clean","i love it","i like dr pepper"),
  new Player("Emma Worrell", "Senior", "Economics","Eating ice cream","Angelo fixed my bike lock","My face is a part of a mural in Australia"),
  new Player("Elizabeth Scherschel", "Freshman", "Undeclared","Reading and writing, swimming, hiking, cooking/baking, spending time with family and friends","Your booth on quad day emphasized no experience necessary, and frisbee seemed cool. At the "throwing on the quad" activity, I talked to Julia, and she mentioned how close the team was and how much she enjoyed it.","I can wakeboard"),
  new Player("Heather Schwartz", "Freshman", "Flute Performance and Music Education","Music, gaming, and organizing!","I played some in high school and enjoyed it, and knew playing ultimate would be a good way to stay healthy and make great friendships in college!","I have built 2 computers! "),
  new Player("Julia Kasner", "Junior", "Geology & Philosophy","video gaming, music, sudoku","I played a pick up game my third day of college and loved it despite being awful","I'm afraid of ladybugs"),
  new Player("Isabella Lebovic", "Sophomore", "Bioengineering","Climbing trees, reading, watching Netflix","I had played once with my sister, and it seemed like it would be fun","I have played violin since I was 4"),
  new Player("Tina Dou", "Sophomore", "Global Studies","TENNIS","I wanna try a different sport","I have been to more than 15 countries in the world!!!"),
  new Player("Autumn Cook", "Graduate Student", "Chemistry","Cosplay, games, LGBTQ activism","I was hooked the moment I started playing and needed something to channel my competitiveness into!","I prevented a fire from spreading by pulling the fire alarm."),
  new Player("Charlotte Holas", "Junior", "Materials Science and Engineering & Molecular and Cellular Biology","Drawing and Soccer","I joined on a whim because I thought it would be fun! It’s my new favorite hobby!","I love bugs and raise butterflies each summer!"),
  new Player("Natalia Hryniewicki", "Junior", "Chemistry","Driving","Cause I played it in high school","I really like cars"),
  new Player("Becca Napoli", "Senior", "Mechanical Engineering","Lifting and baking","I started playing with my friends in high school and I enjoyed the sport and wanted to keep playing!","I am obsessed with everything watermelon flavored"),
  new Player("Samantha Martin", "Freshman", "Political Science","reading, water polo, hiking, weight lifting","One of my friends joined","Been pescatarian for 5 years "),
  new Player("Ella Johnson", "Freshman", "Costume Design and Technology","Sewing, Dancing, Singing, Hanging out on the Quad","Both of my parents played ultimate so it’s always been a part of my life.","I have a gill!"),
  new Player("Britt Gorman", "Graduate Student", "Biophysics","Gardening","Undergrad","Lightning has been struck by me"),
  new Player("Benny Benavides", "Freshman", "English","Reading, painting, and hiking","I had a lot of fun playing Ultimate in high school and was looking for that same sense of community at UIUC","I've never done a cartwheel"),
  new Player("Rachel Xu", "Graduate Student", "Computer Science","Basketball","I think it's fun","I'm a nerd"),
  new Player("Rose Dinh", "Senior", "Computer Science","Crocheting, sewing, baking","I've always enjoyed playing ultimate with my cousins and found out that U of I had a women's team!","I'm really bad at cooking."),
  new Player("Luisa Ruge-Jones", "Graduate Student", "Communication","Music, planting plants","For the competition","I can say my abcs backwards very fast."),
  new Player("Erin Kuehner", "Junior", "Advertising","Streaming video games!","It's like a second family to me. I love everyone so much. ","I am an online content creator."),
  new Player("Lexi Larson", "Junior", "Mechanical Engineering","camping, backpacking, running","I love frisbee and it's such a great & welcoming environment!","I like to eat fried eggs with peanut butter :)"),
  new Player("Evan Price", "Sophomore", "Art History","playing bass, cooking, doing ceramics, and reading!","I wanted to play a team sport and I liked throwing frisbees around! ","I speak Hebrew!"),
  new Player("Valentina Flores", "Freshman", "Economics","Dance and Reading","I decided to join ultimate to try something new and as a way to meet new people. ","I’m left-handed"),
  new Player("Faith Zou", "Graduate Student", "Geographic Information Science","Long boarding","It's a really fun way to spend time.","I'm a Slytherin!"),
  new Player("Grace Caserio", "Sophomore", "Animal Science","Play with my dog","The team is full of positive people!","I played the piano and the oboe in high school"),
  new Coach("Angelo Ramos")
];

var rosterSummary = document.getElementById("roster-summary")
var i;
for ( var playerIndex in players) {
    var player = document.createElement('div')
    var playerInfo = players[playerIndex]
    player.className = 'roster-container'
    player.innerHTML =
      "<img class='roster-img' src='playerImages2020/" + playerInfo.getImage() + "\' alt='picture'>" +
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
