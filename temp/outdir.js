// var fs = require('fs');
// var path = require('path');
// var test = require('../answer.json');



// var filePath = path.join(__dirname, 'mempool.csv');
// // Read CSV
// var f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
//     function(err){console.log(err);});

// // Split on row
// f = f.split("\n");

// // Get first row for column headers
// headers = f.shift().split(",");

// var json = [];    
// f.forEach(function(d){
//     // Loop through each row
//     tmp = {}
//     row = d.split(",")
//     for(var i = 0; i < headers.length; i++){
//         tmp[headers[i]] = row[i];
//     }
//     // Add object to list
//     json.push(tmp);
// });



// var outPath = path.join(__dirname, 'answer.json');
// // Convert object to string, write json to file
// fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', 
//     function(err){console.log(err);});



//     const CreateFiles = fs.createWriteStream("./file.txt", {
//         flags: "a", //flags: 'a' preserved old data
//       });
      
//       for (let i = 0; i < final.length; i++) {
//         CreateFiles.write(final[i].toString() + "\r\n"); //'\r\n at the end of each value
//       }
      


// while(totalWeight<=15000){
//     if(!json[i].parent){
//         final.push(json[i].tx_id)
//         totalWeight += +json[i].weight;
//         i++;
//     }else if(json[i].parent){
//         if(final.indexOf())
//     }
// }

