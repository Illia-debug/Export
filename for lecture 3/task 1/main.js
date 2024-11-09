let users =[
    {name: 'olga', age: 29, },
    {name: 'ivan', age: 28, },
    {name: 'vova', age: 27, },
    {name: 'petia', age: 22, },
    {name: 'kolia', age: 22 },
    {name: 'anna', age: 29, },
    {name: 'vysa', age: 29, },
    {name: 'ivan', age: 50, },
    {name: 'vova', age: 21, },
    {name: 'vika', age: 29, }
]

for (let i = 0; i < users.length; i++) {
        document.write(`<div> user info - ${users[i].name} ${users[i].age} </div>`);
}