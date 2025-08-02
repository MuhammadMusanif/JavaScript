// var keyword used in java scripts has a functional level scope.

function num(){
    {
        let blockScopeVaraible = "I'm block scope cause of LET";
        var functionScopeVaraible= "i'm function scope because of VAR";
        const constVaraible = "I'm constant and can't be redecleared";
    }

        
    // console.log(blockScopeVaraible); // error because let is block scope
    console.log(functionScopeVaraible);  // no error because var is in the same function
    // console.log(constVaraible);  // error because const is also block scope
}
num();