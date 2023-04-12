function createRect(width, heith) {
    const rect = { width, heith };
    rect.getArea = () => {
        return rect.width * rect.heith
    }
    return rect;
};
let result = createRect(2,5) //r
console.log(result)//return object {width: 2, heith: 5, getArea: ƒ}
console.log(result.getArea()); //return result of method in created object 10

