// var selector, elems, makeActive;

// selector = '.list_general li';

// elems = document.querySelectorAll(selector);

// makeActive = function () {
//     for (var i = 0; i < elems.length; i++)
//         elems[i].classList.remove('active');

//     this.classList.add('active');
// };

// for (var i = 0; i < elems.length; i++)
//     elems[i].addEventListener('mousedown', makeActive);

function acordeon(obj) {
    document.getElementById("chklevel1-empresa").checked = false;
    document.getElementById("chklevel1-items").checked = false;
    document.getElementById("chklevel1-logistica").checked = false;
    obj.checked = true;
}

function desactivaracordeon(){
    var chk01 = document.getElementById("chklevel1-empresa");
    var chk02 = document.getElementById("chklevel1-items");
    var chk03 = document.getElementById("chklevel1-logistica");

    if (chk01.checked==true || chk02.checked==true || chk03.checked==true) {
        chk01.checked=false;
        chk02.checked=false;
        chk03.checked=false;
    }
}
function contraer() {
    let div = document.querySelector('#sidebar');
    div.classList.add('active');
}
