
function printChildrenRecursive(t){
    if(t.children.length === 0) return

    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child)
    })
}

const tree = {
    name: 'Ahmad',
    children: [
        {
            name: 'Ali',
            children: []
        },
        {
            name: 'Raza',
            children: [
                { name: 'John', children: [] },
                { name: 'sophia', children: [] }
            ]
        },
        {
            name: 'Hamza',
            children: [
                { name: 'Hashi', children: [] }
            ]
        }
    ]
}

console.log(printChildrenRecursive(tree));