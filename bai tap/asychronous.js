function greet(name, callback) {
    console.log('Hello' + name + '!');
    callback();
}

function sayGudbai() {
    console.log('Gudbai!');
}

greet('Alice', sayGudbai);

function A(callback) {
    const kq = 5+6;
    callback(kq);
}

function B(kq) {
    console.log('Helo kq: ' + kq);
}

A(B);

function dtichHCN(dai, rong, callback) {
    const dienTich = dai * rong;
    callback(dienTich);
}

function indtHCN(dienTich) {
    console.log(Dtich HCN la: ${dienTich});
}

dtichHCN(10, 5, indtHCN);
