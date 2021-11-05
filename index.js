function encrypt() {
    //function melakukan enkripsi
    var str = document.forms["input"]["msg"].value;
    var enkripsi = "";
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i) + 5;
      enkripsi = enkripsi.concat(String.fromCharCode(arr[i]));
    } //endfor
    document.getElementById("output").innerHTML = enkripsi;
    document.getElementById("output").style.color = "white";
    document.getElementById("output").style.backgroundColor = "green";
  } //endfunctionecnrypt
  function decrypt() {
    //function melakukan dekripsi
    var str = document.forms["input"]["msg"].value;
    var dekripsi = "";
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i) - 5;
      dekripsi = dekripsi.concat(String.fromCharCode(arr[i]));
    } //endfor
    document.getElementById("output").innerHTML = dekripsi;
    document.getElementById("output").style.color = "white";
    document.getElementById("output").style.backgroundColor = "orange";
  }
  function getcypher() {
    text = document.getElementById("output").innerHTML;
    document.getElementById("txtmsg").value = text;
  }
  function reset() {
    document.getElementById("output").innerHTML = "Output Reset";
    document.getElementById("txtmsg").value = "";
    document.getElementById("output").style.color = "black";
    document.getElementById("output").style.opacity = "0.4";
    document.getElementById("output").style.backgroundColor = "white";
  }