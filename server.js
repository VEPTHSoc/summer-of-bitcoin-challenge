let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "mempool.csv");
let f = fs.readFileSync(filePath, { encoding: "utf-8" }, function (err) {
  console.log(err);
});

f = f.split("\n");
headers = f.shift().split(",");

let json = [];
f.forEach(function (d) {
  tmp = {};
  row = d.split(",");
  for (var i = 0; i < headers.length; i++) {
    tmp[headers[i]] = row[i];
  }
  json.push(tmp);
});

// var outPath = path.join(__dirname, "answer.json");
// fs.writeFileSync(outPath, JSON.stringify(json), "utf8", function (err) {
//   console.log(err);
// });

json.sort((a, b) => b.fee / b.weight - a.fee / a.weight);

let final = [];
let totalWeight = 0;
let i = 0;
let maxW = 4000000;

while (totalWeight < maxW && i < json.length) {
  if (totalWeight + parseInt(json[i].weight) > maxW) {
    i++;
    continue;
  }
  if (!json[i].parents) {
    final.push(json[i].tx_id);
    totalWeight += +json[i].weight;
    i++;
  } else if (json[i].parents) {
    if (final.includes(`${json[i].parents}`)) {
      final.push(json[i].tx_id);
      totalWeight += +json[i].weight;
      i++;
    } else {
      i++;
    }
  }
}

const CreateFiles = fs.createWriteStream("./block.txt", {
  flags: "a",
});

for (let i = 0; i < final.length; i++) {
  CreateFiles.write(final[i].toString() + "\r\n");
}
