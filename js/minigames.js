// Questions are generated locally. No external services or personal information required.
function qrand(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function qshuffle(a){for(let i=a.length-1;i>0;i--){const j=qrand(0,i);[a[i],a[j]]=[a[j],a[i]]}return a}
function makeQuestion(mode,level=1){const cap=Math.min(4,Math.max(1,level));let a,b,answer,prompt,explain,choices,kind='number';
 switch(mode){
 case 0:{a=qrand(3,12+cap*12);b=qrand(2,9+cap*8);const minus=qrand(0,1);if(minus&&a<b)[a,b]=[b,a];answer=minus?a-b:a+b;prompt=`${a} ${minus?'−':'+'} ${b} = ?`;explain=`${a} ${minus?'−':'+'} ${b} = ${answer}`;break}
 case 1:a=qrand(2,Math.min(12,4+cap*2));b=qrand(2,Math.min(12,5+cap*2));answer=a*b;prompt=`${a} × ${b} = ?`;explain=`${a} × ${b} = ${answer}`;break;
 case 2:b=qrand(2,Math.min(12,5+cap*2));answer=qrand(2,Math.min(12,5+cap*2));a=b*answer;prompt=`${a} ÷ ${b} = ?`;explain=`${b} × ${answer} = ${a}`;break;
 case 3:a=qrand(2,12+cap*5);b=qrand(2,6+cap*2);answer=qrand(0,1)?a:b;prompt=answer===a?`? + ${b} = ${a+b}`:`${a} + ? = ${a+b}`;explain=`${a} + ${b} = ${a+b}`;break;
 case 4:a=qrand(1,20+cap*20);b=qrand(1,20+cap*20);if(a===b)b++;answer=a>b?1:2;prompt=`${a}  ❓  ${b}`;explain=`${a} ${a>b?'>':'<'} ${b}`;choices=[1,2];kind='compare';break;
 case 5:{const type=qrand(0,2);a=qrand(3,10+cap*4);b=qrand(2,type===1?a:7+cap*2);answer=type===0?a+b:type===1?a-b:a*b;prompt=tr('stories')[type].replaceAll('{a}',a).replaceAll('{b}',b);explain=`${a} ${type===0?'+':type===1?'−':'×'} ${b} = ${answer}`;break}
 case 6:{const price=qrand(2,7+cap*2),count=qrand(2,3+cap),paid=Math.ceil((price*count+qrand(1,12))/10)*10;answer=paid-price*count;prompt=tr('shopQuestion',{count,price,paid});explain=`${count} × ${price} = ${price*count}; ${paid} − ${price*count} = ${answer}`;break}
 case 7:{const hour=qrand(7,16),duration=qrand(1,Math.min(5,cap+2));answer=hour+duration;prompt=tr('clockQuestion',{hour,duration});explain=`${hour} + ${duration} = ${answer}`;break}
 default:return makeQuestion(0,cap)
 }
 if(!choices){const s=new Set([answer]);let tries=0;while(s.size<4&&tries++<150){const v=answer+qrand(-Math.max(6,cap*7),Math.max(6,cap*7));if(v>=0)s.add(v)}for(let i=1;s.size<4;i++)s.add(answer+i);choices=qshuffle([...s])}
 return {mode,answer,prompt,explain,choices,kind};
}
