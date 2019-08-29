const {addition} = require("./Addition")
test("Should be Defined! ", ()=>{
    expect(addition()).toBeDefined()
})
test("Given numbers for addition!", ()=>{
    expect(addition(1,2)).toBe(3);
})