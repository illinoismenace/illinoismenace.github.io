HOUSE = {'Rowena Ravenclaw': 0, 'Helga Hufflepuff':1, 'Godric Gryffindor':2, 'Salazar Slytherin':3, 'Muggle':4}
YEAR = {'Freshman':0, 'Sophomore':1, 'Junior':2, 'Senior':3, 'Graduate':4}
import csv
# with open('playerInfo.csv') as file:
#     spamreader = csv.reader(file)
#     next(spamreader)
#     for player in spamreader:
#         playerInfo = player
#         house = HOUSE[playerInfo[4]]
#         year = YEAR[playerInfo[3]]
#         format = 'new Player("{0}", {1}, "{2}","{3}","{4}",{5}),'.format(playerInfo[1], house, playerInfo[5], playerInfo[6], playerInfo[2], year)
#         print(format)
#     file.close()

dummaryPlayer = [['Bonnie Wu', 'cooking fish'], ['Julia Honan', 'feeding fish'], ['Claire Szilagyi', 'eating fish'], ['Galilea Flores', 'distinguishing fish'],
 ['Mary Cook', 'catching fish'], ['Ellie Porath', 'hating fish'], ['Maura Smith', 'swimming like a fish'], ['Emma Worrell', 'fish talker']]
for dummy, _ in dummaryPlayer:
    print('new DummyPlayer("{0}"),'.format(dummy))
