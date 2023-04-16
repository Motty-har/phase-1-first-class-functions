function receivesAFunction(thing){
    return thing()
}

function returnsANamedFunction(){
    return function thing(){
        console.log("hello")
    }
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log("hello")
    }
}