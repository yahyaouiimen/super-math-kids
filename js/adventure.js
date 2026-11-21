const WORLDS=[{icon:'🏙️',color:'#54d4ff',modes:[0,3],boss:0},{icon:'🌲',color:'#8ce29a',modes:[1,4],boss:1},{icon:'🌊',color:'#64a9ff',modes:[2,5],boss:2},{icon:'🕰️',color:'#ffc778',modes:[6,7],boss:3},{icon:'🌌',color:'#d6a8ff',modes:[0,1,2,3,4,5,6,7],boss:4}];
const HEROES=['🦸‍♂️','🦸‍♀️','🧑‍🚀','🥷','🧙','🤖'];const COLORS=['#6d5dfc','#e34f8c','#169c9b','#e9a32d','#4b82da'];
const MODE_ICONS=['⚡','✖️','➗','🧩','⚖️','📖','🛒','🕒'];
const RANKS=[0,100,250,500,1000,2000];
function unlockedWorld(i){return i===0||WORLDS.slice(0,i).every((w,j)=>state.bosses.includes(j))}
function rankIndex(){let i=0;for(let j=0;j<RANKS.length;j++)if(state.xp>=RANKS[j])i=j;return i}
function modeStats(i){return state.modes[i]||{total:0,correct:0,sessions:0}}
function effectiveDifficulty(i){const m=modeStats(i);return Math.max(1,Math.min(4,1+Math.floor((m.correct||0)/12)-Math.floor(((m.total||0)-(m.correct||0))/9)))}
function todayKey(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')}
function badgesEarned(){const tests=[state.correct>=1,state.correct>=20,state.sessions>=5,state.xp>=250,state.bosses.length>=1,state.bosses.length===5,state.dailyHistory.length>=3,state.correct>=100];const fresh=[];tests.forEach((ok,i)=>{if(ok&&!state.badges.includes(i)){state.badges.push(i);fresh.push(i)}});return fresh}
