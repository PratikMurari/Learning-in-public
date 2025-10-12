const userName={
    name: "Pratik",
    email: "coolPratik@gmail.com",
    isActive: true,
}

function createUser( {name,isPaid} :{name: string, isPaid: boolean}){
    console.log(name)
    console.log(isPaid)
}

createUser({name: "Pratik", isPaid:false})

function createCourse():{name: string, price: number}{
    return {name: "ReactJS", price: 399}
}

export{}