function save(n){
  savevar={

    "var_version" : var_version,
    "time" : time,
    "gold" : gold,
    "gold_miner" : gold_miner,
    "gold_miner_price" : gold_miner_price,
    "sligner" : sligner,
    "sligner_price" :sligner_price,
    "defense" : defense,
    "enemy_attack" : enemy_attack,
    "enemy_attack_growth" : enemy_attack_growth,
    "play" :play,
    "knowledge" : knowledge,
    "tknowledge" : tknowledge,
    "tickspeed" : tickspeed,
    "skeepplay": skeepplay.checked,
    "sautominer": sautominer.checked,
    "sautosligner": sautosligner.checked,
    "s_maxgold": s_maxgold,
    "s_knowledgei": s_knowledgei,
    "s_maxtime": s_maxtime
  }
localStorage.setItem(n,JSON.stringify(savevar))
}
function load(n){
  savevar= JSON.parse(localStorage.getItem(n))

    time=savevar.time
    gold=savevar.gold
    gold_miner=savevar.gold_miner
    gold_miner_price=savevar.gold_miner_price
    sligner=savevar.sligner
    sligner_price=savevar.sligner_price
    defense=savevar.defense
    enemy_attack=savevar.enemy_attack
    enemy_attack_growth=savevar.enemy_attack_growth
    play=savevar.play
    knowledge=savevar.knowledge
    tknowledge=savevar.tknowledge
    tickspeed=savevar.tickspeed
    skeepplay.checked=savevar.skeepplay
    sautominer.checked=savevar.sautominer
    sautosligner.checked=savevar.sautosligner
    s_maxgold=savevar.s_maxgold
    s_knowledgei=savevar.s_knowledgei
    s_maxtime=savevar.s_maxtime


}
