//example function Declaration vs Expression
//function Declaration 
// function identifier (ParameterList opt) {FunctionBody}
//example 
function tampilPesan(nama) {
    alert('halo' + nama);
}
//function Expression
// function identifier opt (ParameterList opt) {FunctionBody}
//example
var tampilPesan = function(nama) {
    alert('halo' + nama)
}