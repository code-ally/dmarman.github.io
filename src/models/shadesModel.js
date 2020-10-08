function shadesModel(input) {
  return {'r0.5':1/(1+1/Math.exp((1.6723395586013794+0.6079108119010925*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.164265513420105*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+1.9186087846755981*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g0.5':1/(1+1/Math.exp((1.9709069728851318+1.5273455381393433*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+0.7682449221611023*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+0.9910175800323486*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b0.5':1/(1+1/Math.exp((1.720194697380066+1.5857127904891968*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.8769004344940186*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+0.18056431412696838*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r1':1/(1+1/Math.exp((1.389506220817566-0.10642542690038681*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.0097025632858276*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+2.4470713138580322*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g1':1/(1+1/Math.exp((1.5829477310180664+1.843214750289917*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+0.1832646280527115*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+0.8774074912071228*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b1':1/(1+1/Math.exp((1.4912235736846924+1.1470738649368286*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+2.3540267944335938*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.6356446146965027*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r2':1/(1+1/Math.exp((0.9604549407958984-0.6541616916656494*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+0.854851484298706*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+2.4373867511749268*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g2':1/(1+1/Math.exp((1.615120768547058+1.3947124481201172*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-0.6608582139015198*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+0.41064852476119995*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b2':1/(1+1/Math.exp((1.159104824066162+0.5835362076759338*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+2.6321909427642822*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-1.3234612941741943*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r3':1/(1+1/Math.exp((0.2512222230434418-1.0168843269348145*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.1723663806915283*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+2.7237396240234375*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g3':1/(1+1/Math.exp((1.3377490043640137+1.1343058347702026*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-0.9322068095207214*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+0.09221302717924118*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b3':1/(1+1/Math.exp((0.5993457436561584+0.5179892778396606*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+3.156313896179199*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-1.951032280921936*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r4':1/(1+1/Math.exp((-0.6847083568572998-1.7565553188323975*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.9435497522354126*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+3.222179412841797*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g4':1/(1+1/Math.exp((1.0403380393981934+0.8583130240440369*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-1.2782642841339111*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.21590280532836914*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b4':1/(1+1/Math.exp((0.1523018628358841+0.2677187919616699*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+3.7594923973083496*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-2.8304591178894043*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r5':1/(1+1/Math.exp((-1.1829769611358643-2.6699299812316895*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+2.358084201812744*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+3.5860249996185303*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g5':1/(1+1/Math.exp((0.5383598804473877+0.826377272605896*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-1.49357271194458*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.27568167448043823*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b5':1/(1+1/Math.exp((-0.10664497315883636-0.12008272856473923*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+4.222816467285156*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-3.6316235065460205*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r6':1/(1+1/Math.exp((-0.9951087832450867-2.854172945022583*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.816652774810791*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+2.8702056407928467*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g6':1/(1+1/Math.exp((0.09071798622608185+0.7947537302970886*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-1.6195164918899536*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.38587117195129395*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b6':1/(1+1/Math.exp((-0.158673956990242-0.48557761311531067*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+3.891685724258423*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-3.8906233310699463*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r7':1/(1+1/Math.exp((-0.657470703125-2.4466874599456787*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+0.9282775521278381*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+1.780366063117981*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g7':1/(1+1/Math.exp((-0.3403492569923401+0.7088107466697693*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-1.4381473064422607*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.4124765396118164*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b7':1/(1+1/Math.exp((-0.1962464600801468-0.6373307704925537*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+2.8031492233276367*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-3.2007598876953125*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r8':1/(1+1/Math.exp((-0.5396313071250916-2.2311172485351562*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+0.3742649257183075*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+1.1000267267227173*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g8':1/(1+1/Math.exp((-0.6128501892089844+0.48422762751579285*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-1.291043758392334*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.46136394143104553*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b8':1/(1+1/Math.exp((-0.2803218960762024-0.7260240316390991*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.748950719833374*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-2.4854938983917236*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'r9':1/(1+1/Math.exp((-0.6368471384048462-2.1209402084350586*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+0.14991040527820587*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))+0.7738247513771057*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'g9':1/(1+1/Math.exp((-0.8030877709388733+0.32251617312431335*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))-1.2026523351669312*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-0.5208005905151367*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0))))))),'b9':1/(1+1/Math.exp((-0.5288695693016052-0.683348536491394*1/(1+1/Math.exp((1.1588523387908936-7.164999961853027*(input['r']||0)+5.720741271972656*(input['g']||0)-0.03826344385743141*(input['b']||0))))+1.2808420658111572*1/(1+1/Math.exp((-0.2170284241437912+1.897173285484314*(input['r']||0)-8.718271255493164*(input['g']||0)+6.906444072723389*(input['b']||0))))-2.097710609436035*1/(1+1/Math.exp((0.9871603846549988+9.580159187316895*(input['r']||0)-0.8936209082603455*(input['g']||0)-10.006270408630371*(input['b']||0)))))))};
}
module.exports = shadesModel;