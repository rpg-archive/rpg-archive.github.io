$(document).ready(function(){


function d20() {
    document.getElementById("demo").innerHTML = $( "#num" ).val();   
    //document.getElementById("demo").innerHTML = Math.random();
}

// function d20() {
// 	var n = $( "#num" ).val();
// 	document.getElementById("demo").innerHTML = n;
//     var a = Array(n);
//     for (var i = 0; i < n; i++)
//         a[i] = Math.floor(Math.random() * 6) + 1;
//     a = a.sort().slice(n - 3, n);
//     document.getElementById("demo").innerHTML =  a[0] + a[1] + a[2];
// }

});