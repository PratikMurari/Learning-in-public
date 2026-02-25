const chai ={
    name: "Masala Chai",
    price: 20,
    isHot: true,
}

//ts always infers the type of an object based on its properties and their values. 
// In this case, the type of the chai object would be inferred as:
// {
//     name: string,
//     price: number,
//     isHot: boolean,
// }