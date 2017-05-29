var fs = require("fs")
var logo="logo"
var logos=[
  {
    name:"logo_bg",
    desc:"farbiger Block mit ausgestanzter Schrift auf **transparentem** Hintergrund."
  },
  {
    name:"logo_bg_white",
    desc:"farbiger Block mit ausgestanzter Schrift auf **weißem** Hintergrund."
  },
  {
    name:"logo_txt",
    desc:"Logo mit Schrift auf **transparentem** Hintergrund."
  },
  {
    name:"logo",
    desc:"farbiges Logo auf **transparentem** Hintergrund."
  },
  {
    name:"logo_simple_bg",
    desc:"farbiges Logo auf **weißem** Hintergrund."
  },
  {
    name:"logo_no_margin",
    desc:"farbiges Logo auf **transparentem** Hintergrund **ohne Rand**"
  },
  {
    name:"logo_invert",
    desc:"farbiger Block mit ausgestanztem Logo auf **weißem** Hintergrund"
  },
  {
    name:"logo_invert_round",
    desc:"farbiger Block mit ausgestanztem Logo auf **weißem** Hintergrund mit **abgerundeten Ecken**"
  },
]

//var colors=["_blau","_turkis","_gruen","_gelb","_orange","_rot","_violett","","_hellgrau","_dunkelgrau"]
//var sizes=["50","100","150","200","300","500","1000"]

var config={
  logo:["logo_base.svg"],
  sizes:[50,100,150,200,300,500,1000],
  colors:[
    {name:"gelb",rgb:"#f5d300"},
    {name:"orange",rgb:"#ea7c13"},
    {name:"rot",rgb:"#cc1f2f"},
    {name:"violett",rgb:"#92007b"},
    {name:"blau",rgb:"#0069b3"},
    {name:"turkis",rgb:"#00af8c"},
    {name:"gruen",rgb:"#8cd000"},
    {name:"hellgrau",rgb:"#838678"},
    {name:"grau",rgb:"#3a4136"},
    {name:"dunkelbraun",rgb:"#644327"},
    {name:"dunkelgruen",rgb:"#396a37"},
    {name:"mittelbraun",rgb:"#926a24"}
  ]
}

var doc = ""
var toc = ""
logos.forEach(function(logo){
  toc+=`\n- [${logo.name}](#${logo.name})`
  var table =`| Bild | Name | Downloads |\n| --- | --- | --- |`
  config.colors.forEach(function(item){
    name=logo.name+"_"+item.name
    var links=`[svg](https://klimapartner.de/Bilder/Logo/${name}.svg)`
    config.sizes.forEach(function(size){
      links+=`,[${size}](https://github.com/klimapartner/style-guide/blob/master/Logos/dest/${size}/${name}.png)`
    })
    table += `\n| <img src="https://klimapartner.de/Bilder/Logo/${name}.svg" height="30px"/> | ${name} | ${links} |`
  })
  doc+=`\n\n### ${logo.name}\n\n`
  doc+=`[source](https://github.com/klimapartner/style-guide/blob/master/Logos/src/${logo.name}_base.svg)\n\n`
  doc+=`${logo.desc}\n\n`
  doc+=table
})
doc="# Logos\n\n**dies ist ein automatisiertes Document. bitte nicht per Hand editieren!**"+toc+doc
fs.writeFile("README.md",doc,"utf-8",()=>{})
