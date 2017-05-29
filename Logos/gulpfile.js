var gulp = require('gulp');
var convert = require('gulp-rsvg');
cheerio = require('gulp-cheerio');
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp")



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

gulp.task('png', async function () {
    for(var i = 0;i<config.sizes.length;i++){
      for(var j=0;j<config.colors.length;j++){
        var size=config.sizes[i]
        var color=config.colors[j]
        await makeLogo(color,size)
      }
    }
});

function makeLogo(color,size){
  return new Promise(function(resolve,reject){
    gulp.src('./src/*.svg')
    .pipe(cheerio({
      run: function($,file,done){
        $("*[fill='#838678']").each(function(){
          var h1 = $(this);
          h1.attr("fill",color.rgb)
        })
        done()
      },
      parserOptions:{
        xmlMode: true
      }
    }))
    .pipe(rename(function(path){
      path.basename=path.basename.replace("_base","_"+color.name)
    }))
    .pipe(gulp.dest('./dest/'+size+'/'))
    .pipe(convert({width:size,height:size}))
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/'+size+'/')).on("end",resolve).on("error",reject);
  })

}
