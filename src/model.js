function model(input) {
  input = hexToRgb(input);
  return {'r0.5':1/(1+1/Math.exp((3.7042856216430664+2.0558645725250244*(input['r']||0)-0.8052007555961609*(input['g']||0)-1.552907109260559*(input['b']||0)))),'g0.5':1/(1+1/Math.exp((3.8202731609344482-0.9325829148292542*(input['r']||0)+1.6085227727890015*(input['g']||0)-1.0794157981872559*(input['b']||0)))),'b0.5':1/(1+1/Math.exp((3.5643177032470703-0.9341196417808533*(input['r']||0)-1.1582318544387817*(input['g']||0)+2.1782171726226807*(input['b']||0)))),'r1':1/(1+1/Math.exp((3.08162260055542+2.540830373764038*(input['r']||0)-1.3459936380386353*(input['g']||0)-1.2535480260849*(input['b']||0)))),'g1':1/(1+1/Math.exp((3.455075740814209-1.0573184490203857*(input['r']||0)+1.9097195863723755*(input['g']||0)-1.1826997995376587*(input['b']||0)))),'b1':1/(1+1/Math.exp((2.5855605602264404-0.49843427538871765*(input['r']||0)-2.069974184036255*(input['g']||0)+3.3401777744293213*(input['b']||0)))),'r2':1/(1+1/Math.exp((2.187880516052246+2.8385674953460693*(input['r']||0)-1.8373974561691284*(input['g']||0)-1.1415364742279053*(input['b']||0)))),'g2':1/(1+1/Math.exp((2.4381492137908936-1.0024542808532715*(input['r']||0)+1.7751426696777344*(input['g']||0)-1.1822043657302856*(input['b']||0)))),'b2':1/(1+1/Math.exp((1.6965689659118652-0.47391772270202637*(input['r']||0)-2.8407387733459473*(input['g']||0)+3.6773550510406494*(input['b']||0)))),'r3':1/(1+1/Math.exp((1.5726559162139893+3.6203320026397705*(input['r']||0)-2.7055838108062744*(input['g']||0)-0.9370414614677429*(input['b']||0)))),'g3':1/(1+1/Math.exp((1.6196645498275757-1.0084878206253052*(input['r']||0)+1.4784040451049805*(input['g']||0)-0.8537490367889404*(input['b']||0)))),'b3':1/(1+1/Math.exp((1.0520378351211548-0.7193269729614258*(input['r']||0)-3.905910015106201*(input['g']||0)+4.794988632202148*(input['b']||0)))),'r4':1/(1+1/Math.exp((0.8504598736763+5.692114353179932*(input['r']||0)-4.25808572769165*(input['g']||0)-1.3120756149291992*(input['b']||0)))),'g4':1/(1+1/Math.exp((0.7667722702026367-1.0021871328353882*(input['r']||0)+1.4443044662475586*(input['g']||0)-0.8525199890136719*(input['b']||0)))),'b4':1/(1+1/Math.exp((0.3991137444972992-1.1908315420150757*(input['r']||0)-4.205316543579102*(input['g']||0)+5.516847133636475*(input['b']||0)))),'r5':1/(1+1/Math.exp((0.21249565482139587+7.174017906188965*(input['r']||0)-5.066565990447998*(input['g']||0)-1.6897014379501343*(input['b']||0)))),'g5':1/(1+1/Math.exp((0.057282425463199615-0.9389700293540955*(input['r']||0)+1.4874229431152344*(input['g']||0)-1.005987286567688*(input['b']||0)))),'b5':1/(1+1/Math.exp((-0.24993392825126648-1.3151133060455322*(input['r']||0)-4.503207206726074*(input['g']||0)+6.139766216278076*(input['b']||0)))),'r6':1/(1+1/Math.exp((-0.5724363923072815+6.213512897491455*(input['r']||0)-4.4133687019348145*(input['g']||0)-0.9409581422805786*(input['b']||0)))),'g6':1/(1+1/Math.exp((-0.5009855031967163-1.229751467704773*(input['r']||0)+1.8716267347335815*(input['g']||0)-1.2199825048446655*(input['b']||0)))),'b6':1/(1+1/Math.exp((-0.8754111528396606-1.6879245042800903*(input['r']||0)-4.369725227355957*(input['g']||0)+6.5891923904418945*(input['b']||0)))),'r7':1/(1+1/Math.exp((-0.9251946210861206+4.724931240081787*(input['r']||0)-3.1520845890045166*(input['g']||0)-0.6375225782394409*(input['b']||0)))),'g7':1/(1+1/Math.exp((-0.7819296717643738-1.2503910064697266*(input['r']||0)+1.8998196125030518*(input['g']||0)-1.1182212829589844*(input['b']||0)))),'b7':1/(1+1/Math.exp((-1.061010479927063-1.1844040155410767*(input['r']||0)-3.317383289337158*(input['g']||0)+5.082843780517578*(input['b']||0)))),'r8':1/(1+1/Math.exp((-1.2309277057647705+3.6269357204437256*(input['r']||0)-2.266681671142578*(input['g']||0)-0.4169546663761139*(input['b']||0)))),'g8':1/(1+1/Math.exp((-1.1100859642028809-1.0724881887435913*(input['r']||0)+1.6812305450439453*(input['g']||0)-0.938539981842041*(input['b']||0)))),'b8':1/(1+1/Math.exp((-1.2172935009002686-0.5440664887428284*(input['r']||0)-2.1265528202056885*(input['g']||0)+3.2103466987609863*(input['b']||0)))),'r9':1/(1+1/Math.exp((-1.4962072372436523+2.6427834033966064*(input['r']||0)-1.4108394384384155*(input['g']||0)-0.5690018534660339*(input['b']||0)))),'g9':1/(1+1/Math.exp((-1.336867094039917-0.9712502956390381*(input['r']||0)+1.4835888147354126*(input['g']||0)-0.6962610483169556*(input['b']||0)))),'b9':1/(1+1/Math.exp((-1.4559218883514404-0.5221266150474548*(input['r']||0)-1.4842580556869507*(input['g']||0)+2.476011276245117*(input['b']||0))))};

}

const hexToRgb = (hex, id = '') => {
  let arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));

  let keys = [
    'r' + id,
    'g' + id,
    'b' + id
  ];

  let output = {};

  keys.forEach((key, num) => {
    output[key] = arr[num]/255
  });

  return output;
};

module.exports = model;