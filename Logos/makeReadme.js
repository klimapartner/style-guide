var fs = require("fs")
var logo="logo"
var logos=[
  {
    name:"logo_bg",
    desc:"farbiger Block mit ausgestanzter Schrift auf **transparentem** Hintergrund."
  },
  {
    name:"logo",
    desc:"farbiges Logo **transparentem** Hintergrund."
  },
]

var colors=["_blau","_turkis","_gruen","_gelb","_orange","_rot","_violett","","_hellgrau","_dunkelgrau"]
var sizes=["50","100","150","200","300","500","1000"]
var doc = ""
var toc = ""
logos.forEach(function(logo){
  toc+=`\n- [${logo.name}](#${logo.name})`
  var table =`| Bild | Name | Downloads |\n| --- | --- | --- |`
  colors.forEach(function(item){
    name=logo.name+item
    var links=`[svg](https://klimapartner.de/Bilder/Logo/${name}.svg)`
    sizes.forEach(function(size){
      links+=`,[${size}](https://klimapartner.de/Bilder/Logo/${size}/${name}.png)`
    })
    table += `\n| <img src="https://klimapartner.de/Bilder/Logo/${name}.svg" height="30px"/> | ${name} | ${links} |`
  })
  doc+=`\n\n### ${logo.name}\n\n`
  doc+=`[source](https://github.com/klimapartner/style-guide/blob/master/Logos/${logo.name}.svg)\n\n`
  doc+=`${logo.desc}\n\n`
  doc+=table
})
doc=toc+doc
fs.writeFile("README.md",doc,"utf-8",()=>{})
