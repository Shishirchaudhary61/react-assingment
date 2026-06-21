const user = {
    name: "Anu",
    showName:function(){
        console.log(this.name);
    }
}
// user.showName()

const fn = user.showName;
fn();