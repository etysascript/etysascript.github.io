
let back= document.getElementById('back');
let tog= document.getElementById('tog');
let menu= document.getElementById('sidemenu');
let branch= document.getElementsByClassName('branch');
let codec= document.getElementsByClassName('codec');

back.onclick = () => {
	menu.classList.add('d-none-md');
}

tog.onclick = () => {
	menu.classList.remove('d-none-md');
}

for (let i = 0; i < branch.length; i++) {
	branch[i].src = 'https://www.svgrepo.com/show/247502/box-package.svg'
}


let lite = new Lite();

codecs = [
`let a = 'hello'
b = 'world'

print(a, b)

x, y = (1,3)

fastest_land_animal = 'cheetah'`,

`# can be any length
strings = 'hello world'

# floats integers and negatives are all 'numbers'
numbers = 123
x, y, z = [20, 0.56, -11]

# these can hold any data
lists = [1,2, 'a', 'world', x]

# string key and value
maps = {'A': 'abc', B: 'defg', '12': [1,2,3]}`,

`# although a class is better
globals = enum {
    theme = 'dark',
    counts = 0
}

print(globals.theme)`,

`def sum(x, y) do
    print('called function sum')
    return x + y

print(sum(19, 1))`,

`password = '12345abc'

enter_pwd = input('pwd: ')

if (enter_pwd == password) do
    print('You secure')
elif (Str.lowcase(enter_pwd) == password) do
    print('You secure')
else do
    print('Retry, wrong password.')`,

`# first 'a' is not defined
try do
    print(a)
except Error
    print(Error.message)

print('continuing....')`,

`count = 1_000

while count do
    print(count)
    count -= 1

print('done')`,

`alphabet = 'abcdefghijklmnopqrstuvwxyz'

for(i in alphabet) do
    print(i)

for(i = 0; i < len(alphabet); i++) do
	print(i, ' ', alphabet[i])`
]

for (let i = 0; i< codec.length; i++) {
	codec[i].innerHTML = codecs[i];
	lite.light(codec[i]);
}


