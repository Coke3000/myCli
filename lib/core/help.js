const program=require('commander');

helpOptions=function(){
    program.option('-l --lzr','a lzr cli');
    program.option('-d --dest <dest>',"a destination folder,例如：-d src/components")
    program.option('-f --framework <framework>',"your framework")

    program.on("--help",()=>{
        console.log("");
        console.log("Other:");
        console.log("  other options~")
    })
}
module.exports=helpOptions
    
