class MyClass{
a=1; // .a is public
#b =2; // .#b is private
static #c=3 // .#e is private and static
incB() {

    this.#b++;

    console.log(this.#b) ;
}

}
const m = new MyClass();

m.incB(); // runs OK