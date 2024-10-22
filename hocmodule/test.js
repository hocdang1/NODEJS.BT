kho= function(){
    console.log('kho')
}



var hang = class{
    constructor(soban,soghe)
    {
        this.soban = soban;
        this.soghe = soghe;
    }
    showInfo(){
        console.log(`Tong so ban ghe ${this.soban} * ${this.soghe}`)

    }
};

var objectExport = {
    kho : kho,
    hang : hang,
}
module.exports = objectExport;