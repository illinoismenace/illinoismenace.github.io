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
  new Player("Zifei Feng", "Graduate Student", "CS","Pizza & Bread making","Because it's a cool sport ","My first marathon was inspired by discounted cliff bars"),
  new Player("Linh Nguyen", "Freshman", "Psychology ","Singing ","I have never played ultimate before, but I love playing frisbee. I also want to make new friends! ","My favorite TV show is The Vampire Diaries"),
  new Player("Jamison Nightingale", "Freshman", "Food Science & Human Nutrition ","Baking/cooking vegan food!","I play ultimate to get away from life's stresses and have fun with the team.","My favorite animal is a pig."),
  new Player("Emma Worrell", "Junior", "Economics ","Photography ","Cause it's fun!","No one likes ice cream more than me "),
  new Player("Adeline Tan", "Senior", "Econometrics & Quantitative Economics","try new sports","Reduce stress, meet new people, it's a fun sport","I used to model for a baby clothing company for a short period of time... then they closed down"),
  new Player("Lexi Larson", "Sophomore", "Mechanical Engineering","Running","I play ultimate because the people who play are incredible people.","I really enjoy burping!"),
  new Player("Julia Kasner", "Sophomore", "Philosophy","Video Gaming","I play ultimate because of the team members and because it is such a new and different activity for me. There is constantly more to learn and improve upon.","I prefer being player 2 in Super Mario Galaxy"),
  new Player("Luisa Ruge-Jones", "Graduate Student", "Communication ","Playing percussion","For good competition and to make new friends","My favorite dinosaur is the stegosaurus and I know a song about it."),
  new Player("Summer Matthes", "Freshman", "Psychology ","Running","I play ultimate because I love the team chemistry and grit that comes along with the sport and it combines my favorite sports like running and football all in a unique way. I also love the spirit of the game component and the people that I have the opportunity to play with. You learn so much about not only yourself, but you learn from others and I think that's very crucial. ","I really love reading. Even though I don't necessarily have the time that I used to have, just thinking about reading highly relaxes me and brings me back to the times where I'd read like crazy during junior high. "),
  new Player("Somto Agboifoh", "Freshman", "Undecided ","Playing video games","My friend introduced me to it","I can wiggle my ears"),
  new Player("Zifan Feng", "Graduate Student", "CS","Baking and cooking","Because I need to move more in my life","I know that popcorn with Japanese mayonnaise and honey is one of the best snacks"),
  new Player("Rui Yang", "Graduate Student", "Computer Science","Badminton (when I'm not injured)","It has competitive aspect, but the whole community is so nice and friendly.","I eventually, started using Instagram in 2021!"),
  new Player("Celina Abdi", "Freshman", "Interdisciplinary Health Sciences","Swimming or doodling","Because I enjoy team sports and frisbee is a fun, competitive in a friendly way, and active sport that I really have learned to like. ","I have a bunny named Charlie"),
  new Player("Yoana Hernandez", "Freshman", "Biology","baking/ makeup/ eating :)","It is a really fun distraction one from academics and second from life!","I love dr.pepper!"),
  new Player("Claire Szilagyi", "Senior", "Economics","Walking around Target","Competition and community","I recently have picked up yogurt and kombucha making"),
  new Player("Rivka Price", "Freshman", "Art History","Reading ","I love the team and it's a really fun sport ","I'm a vegetarian!"),
  new Player("Rose Dinh", "Junior", "Computer Science","Sewing","It's a fun way to meet people and stay active!","I made a pair of overalls from a bedsheet during quarantine."),
  new Player("Britt", "Graduate Student", "Biophysics","bread baking","The thrill of Competition ","I don't wear my helmet while biking & only have 2 loose teeth from crashes "),
  new Player("Cora", "Graduate Student", "Environmental Science","Art","I love team sports and I wanted to branch off from soccer. Ultimate was the perfect balance of competitiveness and inclusion that I was looking for","I once stole a piece of George Washington's house "),
  new Player("Lily Dix", "Senior", "CS + Math","Reading!","I find the competitive environment very enjoyable and love the team.","I'm a huge comic book nerd."),
  new Player("Erin Kuehner", "Sophomore", "Advertising","Streaming video games!","It's like a second family to me. I love everyone so much. ","I am an online content creator. "),
  new Player("Christina Thompson", "Sophomore", "Engineering Physics","Cooking, Growing plants","I like to be active and have fun!","My favorite color is indigo "),
  new Player("Angela Gavic", "Junior", "Accounting","Making banana bread and cross stitching","I love my teammates and learning about the sport.","I do (sometimes competitive) ballroom dancing."),
  new Player("Elisabeth Shiro", "Junior", "Aerospace engineering","Basketball","It's a great break from the stresses of life.",""),
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
