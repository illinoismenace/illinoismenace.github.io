function showRosterName(x){
  console.log(x)
}
var players = '2 - Amy Copper* - SR,3 - Claire Follis - JR,4 - Maura Smith - FR,5 - Cassidy Wichelecki - FR,7 - Naomi Gonzalez - FR,9 - Brittney Gorman - GR,12 - Brianna Anderson - GR,13 - Monica VanDuyne - JR,14 - Emely Arroyo - FR,16 - Gabbie Jones - SO,17 - Ellie Porath - GR,20 - Shirley Huang - JR,21 - Kelsey Thompson - SR,22 - Bonnie Wu - SO,32 - Faith Zou - SO,36 - Zifan Feng - SO,38 - Cora Wessman - SR,53 - Danielle Lindblad - SR,55 - Natalie Stephan* - SR,64 - Zifei Feng - SO,79 - Rui Yang - GR,Coach - Angelo Ramos'
playersList = players.split(',')
var rosterSummary = document.getElementById("roster-summary")
var i;
for (i = 0; i < playersList.length; i++) {
    var player = document.createElement('div')
    var playerInfo = playersList[i].split(' -')
    player.setAttribute('style', 'position: relative; width: 30%; margin:1%; display:inline-block;')
    player.innerHTML =
      "<img src='img/player" + playerInfo[0] + ".png' alt='picture' style='display: block; width: 100%; height: auto;'>" +
      "<div className='roster-overlay' style='position: absolute; opacity: 0;'>" +
      "<div className='roster-text' style='color: white;font-size: 20px;position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%); text-align: center; width:100%;'>" +
      playerInfo.join('<br>') + "</div></div>"
    player.setAttribute('onmouseover','this.childNodes[1].setAttribute(\'style\', \'opacity:.9;position: absolute; top: 0; height: 100%; width: 100%; transition: .5s ease; background-color: #008CBA;\')')
    player.setAttribute('onmouseleave','this.childNodes[1].setAttribute(\'style\', \'opacity:0;position: absolute; transition: .5s ease; top: 0; height: 100%; width: 100%;\')')
    rosterSummary.appendChild(player)
}
var bottomDiv = document.createElement('div')
bottomDiv.setAttribute('style', 'padding-bottom: 80px')
bottomDiv.innerHTML = '* denotes as captains'
rosterSummary.appendChild(bottomDiv)
