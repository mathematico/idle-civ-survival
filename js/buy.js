function buyminer(){
  if (gold>=gold_miner_price){
  gold_miner+=1
  gold-=gold_miner_price
  gold_miner_price*=2

}}
function buymaxminer(){
  if (gold>=gold_miner_price){
  a=math.floor(math.log(gold/gold_miner_price,2))
  if (a<0){a=0}
  gold_miner += a
  gold-= (math.pow(2,a)-1)*gold_miner_price
  gold_miner_price*=math.pow(2,a)
}
}
function buysligner(){
  if (gold>=sligner_price){
  sligner+=1
  gold-=sligner_price
  document.getElementById("bs").innerHTML= "buy sligner " + mf(sligner_price*a)+ " G"}
}
function buymaxsligner(){
  if (gold>=sligner_price){
  a=math.floor(gold/sligner_price)
  sligner += a
  gold-= a*sligner_price
}
}
