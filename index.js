function Cong(){
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c;
    c = Number(a) + Number(b);
   document.getElementById('KetQua').innerHTML = "Ket Qua = " + c;
}
function Tru(){
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c;
    c = Number(a) - Number(b);
    document.getElementById('KetQua').innerHTML = "Ket Qua = " + c;
}
function Nhan(){
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c;
    c = Number(a) * Number(b);
    document.getElementById('KetQua').innerHTML = "Ket Qua = " + c;
}
function Chia(){
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c;
    c = Number(a) / Number(b);
    document.getElementById('KetQua').innerHTML = "Ket Qua = " + c;
}