function showRosterName(x){
  console.log(x)
}
var HARRY_HOUSES = ['Rowena Ravenclaw', 'Helga Hufflepuff', 'Godric Gryffindor', 'Salazar Slytherin', 'Muggle']
var YEAR = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate', 'Young as Sunrise']
class Player{
  constructor(name, pronouns, year, major, hobby, funFact, join, stay, isCaptain=false){
    this.name = name
    this.pronouns = pronouns;
    this.year = year
    this.funFact = funFact
    this.join = join
    this.stay = stay
    this.major = major
    this.year = year
    this.hobby = hobby
    this.isCaptain = isCaptain
  }
  getString() {
    let name = this.name
    if(this.isCaptain) name += '*'
    return '<b class="roster-name">'+name +  '</b><br>'+this.pronouns+ '</b><br>'+this.year+'<br>'
      +this.major+'<br><b>Fav Hobby Besides Ultimate<br></b>'+this.hobby
      +'<br><b>Reason for Joining Ultimate<br></b>'+this.join +
      '<br><b>Reason for Staying with Ultimate<br></b>'+this.stay+
      '<br><b>Fun Fact</b><br>'+this.funFact;
  }
  getImage() {
    var pic = this.name
    return pic + '.JPG'
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

  //new Coach("Angelo Ramos"),

  new Player("Summer Matthes", "She/Her", "Sophomore","Psychology ","Cycling and running ","I run a biking camp for kids over the summer ","I really like the idea of the spirit of the game and it combines three of my favorite sports: football, basketball, and running.","The awesome people I've met and played with and my coach. My exponential growth has also been amazing. Tourney experiences are also the best. "),
  new Player("Chris", "she/her", "Junior","Civil and Environmental Engineering","Cooking, Hiking, Working out, Hammocking","I was a camp counselor for 6 years of my life and I loved it. The outdoors is my second home.","I started playing pick up ultimate in high school with friends and loved the sport. I knew I wanted to do it in college and everyone on the team was so friendly I just HAD to be a part of it. ","I've never been a part of such an open and positive sport. The Ultimate community is very encouraging and eccentric as can be seen at tournaments and even practice. Not only do I get to be competitive and focus my energy on something other than school, but I also get the benefit building friendships and good vibes with other like minded people."),
  new Player("Yoana Hernandez", "she/her", "Sophomore","IB","clean","i like dr pepper","i love it","its really fun & meet new ppl"),
  new Player("Emma Worrell", "She/her/hers", "Senior","Economics with a Minor in Business ","Eating ice cream","My face is a part of a mural in Australia","Angelo fixed my bike lock","The people! And ultimate is fun", true),
  new Player("Elizabeth Scherschel", "she/her", "Freshman","Undeclared","Reading and writing, swimming, hiking, cooking/baking, spending time with family and friends","I can wakeboard","Your booth on quad day emphasized no experience necessary, and frisbee seemed cool. At the 'throwing on the quad' activity, I talked to Julia, and she mentioned how close the team was and how much she enjoyed it.","I decided to stay with ultimate because I really liked the people I met at practice, and because the sport was reasonably fun. In addition, I really liked the community and how close and supportive members of the team were with one another (and the welcoming attitude towards rookies was made it easier to come back to practice without an excessive amount of anxiety)."),
  new Player("Heather", "She/they", "Freshman","Flute Performance and Music Education","Music, gaming, and organizing!","I have built 2 computers! ","I played some in high school and enjoyed it, and knew playing ultimate would be a good way to stay healthy and make great friendships in college!","I felt welcomed and wanted, and the relationships with other members of the team would make it hard not to stay! "),
  new Player("Julia Kasner", "she/her", "Junior","Geology & Philosophy","video gaming, music, sudoku","I'm afraid of ladybugs","I played a pick up game my third day of college and loved it despite being awful","The people are incredible and there is always something new to learn", true),
  new Player("Isabella Lebovic", "She/her", "Sophomore","Bioengineering","Climbing trees, reading, watching Netflix","I have played violin since I was 4","I had played once with my sister, and it seemed like it would be fun","It's fun"),
  new Player("Tina Dou", "She/Her/Hers", "Sophomore","Global Studies","TENNIS","I have been to more than 15 countries in the world!!! ","I wanna try a different sport","It is fun!! Team spirits!!!! shake your booty~ shake your booty~ shake your booty~"),
  //new Player("Autumn", "They/them", "Grad student","Chemistry","Cosplay, games, LGBTQ activism","I prevented a fire from spreading by pulling the fire alarm.","I was hooked the moment I started playing and needed something to channel my competitiveness into!","The people and the primal desire to layout"),
  new Player("Charlotte Holas", "she/her", "Junior","Materials Science and Engineering & Molecular and Cellular Biology","Drawing and Soccer","I love bugs and raise butterflies each summer!","I joined on a whim because I thought it would be fun! It's my new favorite hobby!","The team is so supportive and makes everything fun! Every member wants to see all other members succeed and improve. It's also a super fun way to stay active every week!"),
  new Player("Becca Napoli", "She/her/hers", "Senior","Mechanical Engineering","Lifting and baking","I am obsessed with everything watermelon flavored","I started playing with my friends in high school and I enjoyed the sport and wanted to keep playing!","I really enjoyed the people and the culture which was unlike any other sport I had participated in. Didn't want to leave the people and just wanted to keep getting better!"),
  new Player("Samantha Martin", "She/her", "Freshman","Political science ","reading, water polo, hiking, weight lifting","Been pescatarian for 5 years ","One of my friends joined ","Love the environment and the game "),
  new Player("Ella Johnson", "She/Her", "Freshman","Costume Design and Technology","Sewing, Dancing, Singing, Hanging out on the Quad","I have a gill!","Both of my parents played ultimate so it's always been a part of my life. ","I love the people and I genuinely think that it's a fun and exciting game!"),
  new Player("Victoria Benny Benavides", "She/her/hers", "Freshman","English ","Reading, painting, and hiking","I've never done a cartwheel ","I had a lot of fun playing Ultimate in high school and was looking for that same sense of community at UIUC","I really like the team energy and have a lot of fun playing"),
  new Player("Rachel Xu", "she/her", "Grad student","Computer Science","Basketball","I'm a nerd","I think it's fun","I think it's fun"),
  new Player("Rose Dinh", "she/her", "Senior","Computer Science","Crocheting, sewing, baking","I'm really bad at cooking.","I've always enjoyed playing ultimate with my cousins and found out that U of I had a women's team!","It's a really fun sport, the people and community are amazing, and it's a nice break from schoolwork.", true),
  new Player("Luisa RJ Ruge-Jones", "She/hers", "Grad student","Communication","Music, planting plants","I can say my abcs backwards very fast. ","For the competition ","For the community! "),
  new Player("Lexi Larson", "She/Her", "Junior","Mechanical engineering","camping, backpacking, running","I like to eat fried eggs with peanut butter :)","I love frisbee and it's such a great & welcoming environment!","The team!!"),
  new Player("Britt", "she/ her", "Grad student","Biophysics","Gardening, Baking Bread","I'm 27","For the team and competition","To not get fat"),
  new Player("Evan Price", "he/him", "Sophomore","Art History ","playing bass, cooking, doing ceramics, and reading!","I speak Hebrew!","I wanted to play a team sport and I liked throwing frisbees around! ","Menace has an amazing community that really supported me in my growth with the sport "),
  new Player("Valentina Flores", "She/her/hers", "Freshman","Economics","Dance and Reading","I'm left-handed","I decided to join ultimate to try something new and as a way to meet new people. ","I stayed for the people on Menace and the excitement of competition. "),
  new Player("Jocelyn Gonzalez", "She/her", "Sophomore","Advertising ","Reading, writing cooking","I can play the ukulele ","I liked frisbee and never knew it was a sport so I thought it would be fun to learn about it .","It was fun and the people on the team are super nice and supportive"),
  new Player("Esha Karwal", "She/her", "Freshman","Undeclared ","Watching netflix, working out","I like milk ","I joined because my friends joined ","Everyone on the team were nice and welcoming and I enjoyed playing frisbee with them"),
  new Player("Leah", "She/Her/Hers", "Sophomore","Psychology ","I enjoy journaling, exploring arboretums, and I tend to like playing board games with my friends! ","You can google me and some things will pop up. It's pretty legit. ","Saw it on the quad and always loved sports. I thought it would be nice to give it a try. ","The atmosphere was so nice! The end of my first practice we did 3 claps where people are offered the opportunity to give someone else props on their performance/something they appreciate about them. Loved it and think it said a lot about the team. "),
  new Player("Somto Agboifoh", "she/her", "Sophomore","Undeclared ","video games/watching sports","I really playing card games ","A friend asked me to join with her","Because of the great community that it provides and it challenges me in ways that other sports haven't "),
  new Player("Natalia Hryniewicki", "She/her", "Junior","Chem","Slep and watching movies","I have a passion for cars","Just cause ","Cause I made some dope ass friends"),
  new Player("Nora Schnulle", "She/Her", "Freshman","Chemical Engineering","Sleeping ","I can do a backflip","I was bribed with pizza and cookies","The team was super nice!!"),
  new Player("Grace Sherman", "She/her", "Freshman","Brain and Cognitive Science ","Aerial arts, theatre","I have a twin!","I wanted an activity to keep me active that I knew people really enjoyed ","I love the people!! And the sport!!"),
  new Player("Archisha Majee", "she/her", "Senior","Computer Science","Crochet, Puzzles, Great British Baking Show","I like the bottom of a drumstick cone","I wanted to make new friends and not sit on the couch most of the week ","Because it gave me friends and now fitness is my passion"),
  new Player("Angelo Ramos (coach)", "he / him / his", "Freshman","n/a","photography, cooking, going to concerts","n/a","n/a","n/a")
];

var rosterSummary = document.getElementById("roster-summary")
var i;
for ( var playerIndex in players) {
    var player = document.createElement('div')
    var playerInfo = players[playerIndex]
    player.className = 'roster-container'
    
    player.innerHTML =
      "<img class='roster-img' src='playerImages2021JPG/" + playerInfo.getImage() + "\' alt='picture'>" +
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
