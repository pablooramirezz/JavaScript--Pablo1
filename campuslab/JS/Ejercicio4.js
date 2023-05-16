function existeVector (vector,elem){
    for(var i=0;i<vector.length;i++){
        if(vector[i]==elem){
            return true;
        }
    }
    return false;
}

let v = ["daniela", "zafiro", "ana", "gabriela"];
console.log(v)
console.log(existe