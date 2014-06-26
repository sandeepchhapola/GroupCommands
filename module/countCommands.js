var fs =require('fs');
var finaldata={};
fs.readFile('/home/sandeepchhapola/.bash_history', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var arr = data.split("\n");
    for (var x in arr) {
    if (finaldata[arr[x]])
        finaldata[arr[x]] = finaldata[arr[x]] + 1;
    else
        finaldata['' + arr[x]] = 1;
    }
    fs.writeFile('/home/sandeepchhapola/Desktop/abc.csv', '', function (err) {
        if (err) throw err;
    });
    for(var x in finaldata){
        data=x+'----------------comes---------------> '+finaldata[x]+'----> times,\n';
        fs.appendFile('/home/sandeepchhapola/Desktop/abc.csv', data, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }
});


