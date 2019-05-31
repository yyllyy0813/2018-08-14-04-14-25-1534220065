module.exports = function main(a) {
    // console.log("liuyuning");
    //return 'Hello World!';
    let arr = [ ["._.","|.|", "|_|" ], ["...","..|", "..|"] ,["._.","._|","|_."],
        ["._.","._|","._|"],["...","|_|","..|"],["._.","|_.","._|"],
        ["._.","|_.","|_|"],["._.","..|","..|"],["._.","|_|","|_|"],["._.","|_|","..|"]];
    let len = a.length;
    var str="";
    //var str1="";
    //var str2="";
    //var str3="";
    for(var i=0;i<len;i++){
        if(i==len-1){
            str += arr[a[i]][0]+"\n";
        }else{
            str += arr[a[i]][0]+" ";
        }

        //console.log(a[i]);
    }
    //console.log(str1);
    for(var i=0;i<len;i++){
        if(i==len-1){
            str += arr[a[i]][1]+"\n";
        }else{
            str += arr[a[i]][1]+" ";
        }

    }
    //console.log(str2);
    for(var i=0;i<len;i++){
        if(i==len-1){
            str += arr[a[i]][2]+"\n";
        }else{
            str += arr[a[i]][2]+" ";
        }

    }
    console.log(str);
    return str;
};