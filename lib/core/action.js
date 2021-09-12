const {promisify} =require("util");
const download=promisify(require("download-git-repo"))
const path=require("path")
const open=require("open")
const {vueRepo}=require("../config/repo-config.js")
const {commandSpawn}=require("../utils/terminal.js")
const {compile,createDirSync,writeToFile}=require("../utils/utils.js")
//创建项目
const createProjectAction=async (project)=>{
    console.log("lzr helps you create your project...")
    //1、clone项目
    await download(vueRepo,project,{clone:true})
    //2、执行npm install安装依赖包
    const command=process.platform === 'win32' ? 'npm.cmd' : "npm"
    await commandSpawn(command,["install"],{cwd:`./${project}`})
    //3、运行npm run serve
    commandSpawn(command,["run","serve"],{cwd:`./${project}`})
    //4、打开浏览器
    open("http://localhost:8080/")
}

//创建组件
    const addCpnAction=async (name,dest)=>{
        //1、有对应的ejs模块
        //2、编译ejs模板result
        const result =await compile("vue-component.ejs",{name,lowerName:name.toLowerCase()});
        // console.log(result)
        //3、将result写入到.vue文件中
        //4、放到对应的文件中
        if(createDirSync(dest)){
        const targetPath=path.resolve(dest,`${name}.vue`)
        writeToFile(targetPath,result)
        }
    }

//添加组件和路由
    const addPageAndRoute=async (name,dest)=>{
        //编译ejs模板
        
        const data={name,lowerName:name.toLowerCase()};
        const pageResult =await compile("vue-component.ejs",data);
        const routeResult =await compile("vue-router.ejs",data);
        //写入文件
        const targetDest=path.resolve(dest,name.toLowerCase());
        if(createDirSync(targetDest)){
        const targetPagePath=path.resolve(targetDest,`${name}.vue`);
        const targetRoutePath=path.resolve(targetDest,"router.js")
        writeToFile(targetPagePath,pageResult);
        writeToFile(targetRoutePath,routeResult)
        }
    }

//添加vuex
    const addStoreAction=async(name,dest)=>{
        //1、编译的过程
        const storeResult=await compile('vue-store.ejs',{});
        const typesResult=await compile("vue-types.ejs",{});
        //2、写入文件
        const targetDest=path.resolve(dest,name.toLowerCase());
        if(createDirSync(targetDest)){
        const targetStorePath=path.resolve(targetDest,"index.js");
        const targetTypesPath=path.resolve(targetDest,"types.js")
        writeToFile(targetStorePath,storeResult);
        writeToFile(targetTypesPath,typesResult)
        }
    }

module.exports={
    createProjectAction,
    addCpnAction,
    addPageAndRoute,
    addStoreAction
}
