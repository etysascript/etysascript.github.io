

data = [`$ etysa startapp
$
$
$
$
$`]

blocks = [
`abc = 'hello world'

print(abc)`,

`def sum(x, y) do
    print(f'{x} < {y}: {x < y}')

    return x + y

results = sum(4, 7)`,

`guess = 'lion'

print('What is the bravest animal')

def play() do
    scores = 5

    while True do
    	enter = input('Enter guess =>  ')
        player = Str.lowcase(enter)

        if (player == guess) do
        	print('You win')
        	return scores

        scores -= 1

        if scores == 0 do
        	print('You lose')
            return 0

        elif scores < 2 do
        	print(f'Only {scores} to go.')


results = play()
print(f'Scores:    {results}')


`,

`import files

lets_write_some_file = 'abcdefghijk...'

temp = files.open('new_file.txt', 'w')
temp.write(lets_write_some_file)

// safe to do
temp.close()`
]

outputs = [
"hello world",

"4 < 7: True",

"Run in interpreter please.",

"Run in interpreter please."
]


codes = document.getElementsByClassName('code');
menu = document.getElementsByClassName('menu-btn');

writer = document.getElementById('writer');
outputer = document.getElementById('output');

for(i=0; i < codes.length; i++){
	codes[0].innerHTML = data[i];
}

writer.innerHTML = blocks[0];
outputer.innerHTML = outputs[0];

function off(){
	for (let i = 0; i< menu.length; i++) {
		menu[i].classList.remove('active');
	}
}

function updater(x){
	writer.innerHTML = blocks[x];
	outputer.innerHTML = outputs[x];
}

for (let i = 0; i< menu.length; i++) {
	menu[i].addEventListener('click', () => {
		updater(i);
		off();
		menu[i].classList.toggle('active')
	})
}
