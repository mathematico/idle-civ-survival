var time=0
var gold=0
var gold_miner = 1
var gold_miner_price = 2
var sligner = 0
var sligner_price = 1
var defense=100
var enemy_attack=0
var enemy_attack_growth=1
var play=false
var knowledge = 0
var tknowledge=0
var tickspeed=1000

function init(){
    time=0
    gold=0+knowledge
    gold_miner=1
    gold_miner_price=2
    sligner_price=1
    sligner=0
    defense=100
    enemy_attack=0
    enemy_attack_growth=1
    document.getElementById("bm").innerHTML= "buy miner " + mf(gold_miner_price)+" G"
    document.getElementById("bs").innerHTML= "buy sligner " + mf(sligner_price)+" G"
    if (tknowledge>=1){
      document.getElementById("ntab").style.display="inline"
    }
    if (skeepplay.checked == false){
    play = false
  }
}
function updatetext(){
  document.getElementById("top_").innerHTML ="time =" + mf(time)  + " gold =" + mf(gold)+" defense =" + mf(defense)
  + " enemy_attack =" + mf(enemy_attack_growth)  ;
  document.getElementById("Know_").innerHTML ="knowledge pts =" + mf(knowledge)
  document.getElementById("bm").innerHTML= "buy miner " + mf(gold_miner_price)+" G"
  a=math.floor(math.log(gold/gold_miner_price,2))
  if (a<0){a=0}
  document.getElementById("bmm").innerHTML= "buy "+mf(a)+" gold miners " + mf((math.pow(2,a)-1)*gold_miner_price) + " G"
  a=math.floor(gold/sligner_price)
  document.getElementById("bms").innerHTML= "buy "+mf(a)+" sligners " + mf(a*sligner_price) + " G"
  document.getElementById("eco_").innerHTML= "you have " + mf(gold_miner)+ " miner"
  document.getElementById("def_").innerHTML= "you have " + mf(sligner) + " sligners"
}
function mf(a){
  return math.format(a,{notation: 'auto',precision:4})

}
function timecheck (){
    updatetext()
    if (play==true){
      updategame()
    }
}
function fplay(){
play=true
}
function fstop(){
play=false
}
function fonetic(){
updategame()
}
setInterval(timecheck, tickspeed)
function updategame(){
  gold+=gold_miner
  time+=1
  defense += sligner
  sligner = 0
  defense -= enemy_attack_growth
  if (defense<0){
    dead()
  }
  enemy_attack_growth = math.floor(math.pow(1.1,time))

  if (sautominer.checked == true){
  buymaxminer()
  buyminer()
  }
  if (sautosligner.checked == true){
  buymaxsligner()
  }

  updatetext()
}
init()
updatetext()
function dead(){
  tknowledge+=math.floor(math.pow(1.08,time)/9)
  knowledge+=math.floor(math.pow(1.08,time)/9)
  init()
}
