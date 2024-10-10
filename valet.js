var a = 12;
var b = 20;
if (a<b)
{
    let tmp = a;
    a = b;
    b =tmp;
}

document.consolelog("a" +a);
document.consolelog("b" +b);
document.consolelog("tmp" +tmp);