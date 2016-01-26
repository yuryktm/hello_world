var Constants = Constants || {};
//Constants.k1 = "k1";
window.onload = function(){
    alert(Constants.k1);
};
function clicklBtn(){
    Constants.k1 = "222222222";
    alert(Constants.k1);
}

function clicklBtn2(){
    //Constants.k1 = "11111111111";
    alert(Constants.k1);
}
