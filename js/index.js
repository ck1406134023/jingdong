window.onload=function(){
  //右竖边栏
 var over=getClass('over');
   //console.dir(over)
   //var d=getStyle(shop,'display')
   for(var i=0;i<over.length;i++){
    var shops=getClass('shops',over[i])[0]
    //console.dir(shops)
    cars(over[i],shops)
   }
   function cars(shop,shops){

   shop.onmouseover=function(){
    
    animate(shops,{marginLeft:-50},200,Tween.Quad.easeIn)

    
   }
    shop.onmouseout=function(){
    animate(shops,{marginLeft:0},600,Tween.Bounce.easeOut)
   }
  }
  //右竖边栏结束
  //楼层
  var ul=$('ul')[0];
  var li=$('.li');
  var floors=$('.floor');
  console.log(floors)
  var fl=[];
  var btn=$('.btn');
  var btns=$('.btns');
  console.log(li);
  console.log(ul);
  //var 
    

    for(var i=0;i<li.length;i++){
       
       fl.push(floors[i].offsetTop);
       li[i].index=i;
       console.log(fl)
       li[i].onclick=function(){

        animate(document.body,{scrollTop:fl[this.index]});
        animate(document.documentElement,{scrollTop:fl[this.index]});
       }
    }
    window.onscroll=function(){
      
      var doc=document.body.scrollTop?document.body:document.documentElement;
      if(doc.scrollTop<fl[0]||doc.scrollTop>fl[10]){ul.style.display='none';return;}else{
      //console.log(doc.scrollTop)
      //console.log()
     // var h=doc.scrollTop;
          //ul.style.top=h+100+'px';
       ul.style.display='block' ;  
      for(var i=0;i<li.length;i++){
        if(fl[i]<=doc.scrollTop)
        {
          for(var j=0;j<li.length;j++){
                    btn[j].style.display='block';
                    btns[j].style.display='none';
          }
          btn[i].style.display='none';
          btns[i].style.display='block';
        }
      }
    }
  }
  //楼层结束
  //返回顶部
  var up=$('.up')[0];
  //下拉登陆框
  var dizhi=$('.dizhi')[0];
  var dizhia=$('a',dizhi);
  console.log(dizhia)
  
  for(var i=0;i<dizhia.length;i++){
  dizhia[i].onclick=function(){
    //var ev=e||window.event;
    //var elm=ev.target||ev.srcElement;
    //var flag=true;
    //if(!flag){return;}
    for(var i=0;i<dizhia.length;i++){
        dizhia[i].background='#fff';
      }
    //if(elm.nodeName='a'){

      //flag=false;

      this.style.background='#C81623';
   // }
   // flag=true;

    }
    hover(dizhia[i],function(){
      this.style.background='#F1F1F1';
    },function(){
      this.style.background='#fff';
    })
  }



  //下拉登陆框结束
  //banner选项卡
  var left1=$('.left1');
 // console.log(left1)
  var ban1=$('.ban1');
  
 //console.log(ban1)
  chance1(left1,ban1);
  //banner选项卡结束
  up.onclick=function(){
  animate(document.body,{scrollTop:0});
  animate(document.documentElement,{scrollTop:0});
  }
  //图片按需加载
  /*window.onscroll=function(){
  //alert(1);
  var fl=[];
  var floors=$('.inner');
  console.log(floors)
  for(var i=0;i<floors.length;i++){
       
       fl.push(floors[i].offsetTop);
     }
  var doc=document.body.scrollTop?document.body:document.documentElement;
   for(var i=0;i<floors.length;i++){

        //if(!floors[i].flag){return;}
        if(fl[i]-document.documentElement.clientHeight<=doc.scrollTop){
          //setImg(i);
         var imgs=$('img',floors[i]); 

         for(var j=0;j<imgs.length;j++){
          //if(imgs[imgs.length].src){return;}
         imgs[j].src=imgs[j].getAttribute('asrc');

        // console.log(imgs[j].src)
        }
        }
        //floors[i].flag=false;
      }
  }
 
window.onscroll();*/
	/*var tupian=getClass('tupian')[0]
  var tu=getClass('tu')
	var tupians=tu.getElementsByTagName('a')
	
	console.dir(tupian)
	
    var btns=getClass('anniu')[0].
	getElementsByTagName('span')
	var anniul=getClass('anniu-l')[0];
	var anniur=getClass('anniu-r')[0];
	var num=0;
	
    
    var t=setInterval(move,1000)
    //t 0 1
   var w=730
    function move(){
    num++;	
    if (num>tupians.length-1) {
      num=0;
    }
    
    animate(tu,{marginLeft:-num*w},200)
    for(var j=0;j<bnts.length;j++){
                
                btns[j].className='';
                console.log(btns[j].className)
            }
      btns[num].className='anniu';
    
    }
    tupian.onmouseover=function(){
    	clearInterval(t)
    }
   
    tupian.onmouseout=function(){

    t=setInterval(move,1000)
    }
	for(var i=0;i<tupians.length;i++){
    btns[i].index=i;
    
       btns[i].onclick=function(){
        animate(tu,{marginLeft:-this.index*w},200)
       for(var j=0;j<btns.length;j++){
      
      btns[j].className='';
         
         console.dir(btns[j].className)
      }
    
        
        btns[this.index].className=
        'annius';
        num=this.index;

    }
   }
    anniur.onclick=function(){
   	move();
   }
    anniul.onclick=function(){
    var a=num--;	
    if (num==-1) {
      num=tupians.length-1;
    }
     animate(tu,{marginLeft:-num*w},200)
    for (var i = 0; i < bts.length; i++) {
             btns[i].className='';
            } 
        btns[a].className='annius'; 
       
    }*/
      
      
     
  
	
	//wheel(tupian,anniu,'annius',2000)
	/*banner轮播*/

 /*var fuimgs=getClass("fu1shi222")[0]
 .getElementsByTagName('img')
 console.dir(fuimgs)
 var fuanniu=getClass("fu1shi2221")[0]
 .getElementsByTagName('div')
 console.dir(fuanniu)
 wheel(fuimgs,fuanniu,"fu1shi22211",
 	2000)*/

//一楼选项卡
var fu1shi201=getClass('fu1shi201')
 console.dir(fu1shi201)
 var fu1shi12=getClass('fu1shi12')[0].
 getElementsByTagName('div')
 //console.dir(fu1shi12)
 chance(fu1shi12,fu1shi201,'fu1shi121')
 //banner轮播图
 lunbodonghua('xiugai','tu','img','anniu', 'annius','anniu-l','anniu-r',730)
// cengjilunbo('.xiugai','img','.anniu','annius','.anniu-l','.anniu-r')
//一楼轮播图
console.log(100)
// lunbodonghua('fu1shi222','as','a','fu1shi2221','fu1shi22211','nb-l','nb-r',439)
 //cengjilunbo('.fu1shi222','img','.fu1shi2221','fu1shi22211','.nb-l','.nb-r')
 //二楼轮播图
// lunbodonghua1('ge2hui2box','gehuimg','gehuimgbox','bn','bt',"nbl","nbr",339)
//二楼选项卡
var chongzuo=getClass('chongzuo')[0].getElementsByTagName('div')
 console.dir(chongzuo)
 var chongzuo3=getClass('chongzuo3')
 console.dir(chongzuo3)
 chance(chongzuo,chongzuo3,'chongzuo1')
 //三楼选项卡
var shouji121=getClass('shouji12')[0].getElementsByTagName('div')
 //console.dir(shouji121)
 var shouji230=getClass('shouji230')

 //console.dir(shouji230)
 chance(shouji121,shouji230,'shouji121')
 //三楼轮播图
//lunbodonghua("shouji2304","shouji2305",'a',"shoujibt","shoujibts",'nb-l1','nb-r1',439)
 //四楼轮播图
//lunbodonghua("shouji2304a","shouji2305a",'a',"shoujibta","shoujibtsa",'nb-l1a','nb-r1a',439)
 //四楼选项卡
 var shouji121a=getClass('shouji12a')[0].getElementsByTagName('div')
// console.dir(shouji121a)
 var shouji230a=getClass('shouji230a')

 //console.dir(shouji230a)
 chance(shouji121a,shouji230a,'shouji121a')
 //五楼轮播图
 //lunbodonghua("shouji2304b","shouji2305b",'a',"shoujibtb","shoujibtsb",'nb-l1b','nb-r1b',439)
 //五楼选项卡
 var shouji121b=getClass('shouji12b')[0].getElementsByTagName('div')
 //console.dir(shouji121b)
 var shouji230b=getClass('shouji230b')

 //console.dir(shouji230b)
 chance(shouji121b,shouji230b,'shouji121b')
 //六楼选项卡
var jianshen=getClass('jianshen')[0].getElementsByTagName('div')
//console.dir(jianshen)
 var jianshen3=getClass('jianshen3')


 chance(jianshen,jianshen3,'jianshen2')
//六楼轮播图
//lunbodonghua1('ge2hui2boxd','gehuimgd','gehuimgboxd','bnd','btd',"nbld","nbrd",339)
 //七楼选项卡
var jujia=getClass('jujia')[0].getElementsByTagName('div')
//console.dir(jujia)
 var jujia3=getClass('jujia3')

//console.dir(jujia3)
 chance(jujia,jujia3,'jujia1')
//七楼轮播图
//lunbodonghua1('ge2hui2boxe','gehuimge','gehuimgboxe','bne','bte',"nble","nbre",339)
 //八楼选项卡
var muying=getClass('muying')[0].getElementsByTagName('div')
//console.dir(muying)
 var muying3=getClass('muying3')

//console.dir(muying3)
 chance(muying,muying3,'muying1')
//八楼轮播图
//lunbodonghua1('ge2hui2boxf','gehuimgf','gehuimgboxf','bnf','btf',"nblf","nbrf",339)
//九楼楼选项卡
var shipin=getClass('shipin')[0].getElementsByTagName('div')
console.dir(shipin)
 var shipin3=getClass('shipin3')

console.dir(shipin3)
 chance(shipin,shipin3,'shipin1')
//九楼轮播图
//lunbodonghua1('ge2hui2boxg','gehuimgg','gehuimgboxg','bng','btg',"nblg","nbrg",339)
//十楼轮播图
//lunbodonghua("tushu20","tushu200",'a',"bnh","bth",'nblh','nbrh',439)
 //十楼选项卡
var tushu0=getClass('tushu0')[0].getElementsByTagName('div')
console.dir(tushu0)
 var tushui=getClass('tushui')

console.dir(tushui)
 chance(tushu0,tushui,'tushu01')
 //十一楼轮播图
 //lunbodonghua("yinxiang20","yinxiang200",'div',"bnj","btj",'nblj','nbrj',395)
 //lunbodonghua("yinxiang21","yinxiang201",'div',"bnk","btk",'nblk','nbrk',395)
 var life2112=$('img',$('.life2112')[0])[0];
 console.log(life2112)
 jump(life2112);
 var life23=$('img',$('.life23')[0])[0];
 jump(life23);
}
//天天低价轮播
/*var dijia21=$('.dijia21')[0];
var dijia2100=$('.dijia2100')[0];
var dijia210=$('.dijia210');
var next=0;
for(var i=0;i<as.length;i++){
        as[i].style.marginTop=-141px;
    }
    dijia210[0].style.marginTop=0;
    dijia210[1].style.marginTop=141px;
    var t=setInterval(movet,1000);
    function movet(){
   
    
    next++;
    console.log(next)
    if(next==as.length){
        next=0;
    }
    
    as[next].style.left='100%';
    animate(as[now],{left:-iw},200);
    animate(as[next],{left:0},200,function(){
        flag=true;
    });*/

