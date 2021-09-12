const program=require("commander")
const {createProjectAction,addCpnAction,addPageAndRoute,addStoreAction}=require("./action.js")

const createCommands=()=>{
    program
    .command("create <projectName> [others...]")
    .description('clone a repository into a folder')
    .action(createProjectAction);

    program
    .command("addcpn <name> [others...]")
    .description('add vue component')
    .action((name)=>{
        addCpnAction(name,program.opts().dest || "src/components")
    })

    program
    .command("addpage <page>")
    .description('add vue page and router config,例如： lzr addpage Home[-d src/pages]')
    .action((page)=>{
        addPageAndRoute(page,program.opts().dest || "src/pages")
    })

    program
    .command("addstore <store>")
    .description('add vue store config,例如： lzr addstore Home[-d src/pages]')
    .action((store)=>{
        addStoreAction(store,program.opts().dest || "src/store/modules")
    })
}

module.exports=createCommands;