let P;
const API = async(uri,data)=>{
    console.log("uri",data);
    if(process.browser){
        let res = await _api(uri,data);
        return res;
    }else{
        if(typeof P === "undefined"){
            P = eval(`require(path.resolve(process.cwd(),"src/present"))`);
        }

        let [m, n] = uri.split("/");
        m = m[0].toUpperCase() + m.slice(1,100) +"Present";
        console.log("m====服务端",m)
        let res = await P[m][n](data);
        return res;
    }
}

const _api = async (uri,dt) =>{
    let response;
    response = await fetch(`/api/${url}`,{
        method:"POST",
        body:JSON.stringify(dt)
    })
    const res = await response.json();
    console.log("API return ----",{req:dt, res:res});
    return res;
}

module.exports = API;