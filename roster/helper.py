import csv
import os
with open('./playerInfo2020.tsv') as file:
    lines = file.readlines()
    for player in lines:
        playerInfo = player.split('\t')
        f = 'new Player("{0}", "{1}", "{2}","{3}","{4}","{5}"),'.format(*playerInfo[1:-2])
        print(f)
    file.close()

'''
dummaryPlayer = [['Bonnie Wu', 'cooking fish'], ['Julia Honan', 'feeding fish'], ['Claire Szilagyi', 'eating fish'], ['Galilea Flores', 'distinguishing fish'],
 ['Mary Cook', 'catching fish'], ['Ellie Porath', 'hating fish'], ['Maura Smith', 'swimming like a fish'], ['Emma Worrell', 'fish talker']]
for dummy, _ in dummaryPlayer:
    print('new DummyPlayer("{0}"),'.format(dummy))
'''
