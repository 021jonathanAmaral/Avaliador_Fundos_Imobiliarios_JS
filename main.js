
 function calcular(){

    /*Infos */
    var txtVac1 = document.getElementById('txtVac')
    var txtLiqui = document.getElementById('txtLiq')
    
    /*PVPA1*/
    var txtPatL = document.getElementById('txtPatrimonioLiquido')
    var txtcotasE = document.getElementById('txtcotas')

    /*PVPA2 */
    var txtcotasPre = document.getElementById('cotasprice')
    var txtDividendosPagos= document.getElementById('diviP')

    /*Other */
    var txtAtiv = document.getElementById('quaativ')
    var txtGeo = document.getElementById('quageo')

    
    
    /*Conversão de Valores */


    var Vacancia = Number (txtVac1.value)
    var Liquidez = Number (txtLiqui.value)
    var Patrimonio = Number (txtPatL.value)
    var CotasEmitidas = Number (txtcotasE.value)
    var PrecoCotas = Number ( txtcotasPre.value)
    var DividendosPagos = Number (txtDividendosPagos.value)
    var TotalAtivos = Number (txtAtiv.value)
    var EstadosPresente = Number (txtGeo.value)

   

   
    /*Avaliação da Vacancia */
    var Vvacancia = document.getElementById('ValorVacancia')
    var VvacanciaAva = document.getElementById('ValorVacanciaAva')
    
    var Vacancia = Vacancia.toFixed(2)
    /*Seguro */
    if(Vacancia >=0 && Vacancia <=5){
      Vvacancia.innerHTML= `${Vacancia}%`
      VvacanciaAva.innerText= "Vacância Segura"
      Vvacancia.style.color ="Green"
      VvacanciaAva.style.color ="Green"

      /*Atenção */
    } else if (Vacancia >= 6 && Vacancia < 10){
      Vvacancia.innerText= `${Vacancia}%`
      VvacanciaAva.innerText= "Vacância Moderada"
      Vvacancia.style.color ="orange"
      VvacanciaAva.style.color ="orange"

      /*Não Seguro*/
    }else{
      Vvacancia.innerText= `${Vacancia}%`
      VvacanciaAva.innerText= "Vacância Perigosa"
      Vvacancia.style.color ="red"
      VvacanciaAva.style.color ="red"

    }




    
    
    /*Avaliação do Dividend Yeld */
     var DYnumber = document.getElementById ('NumDY')
     var DYava = document.getElementById('AvaDY')
      
     /* Calculando o DY */
     var DY = DividendosPagos / PrecoCotas
     var resDY = DY * 100

     var resDY = resDY.toFixed(2)
      /* DY RUIM*/
    if(resDY < 0.50){
      DYnumber.innerHTML= `${resDY}%`
      DYava.innerText= "DY Insatisfatorio"
      DYnumber.style.color ="red"
      DYava.style.color ="red"

      /*Atenção */
    } else if (resDY >= 0.50 && resDY < 0.80){
      DYnumber.innerText= `${resDY}%`
      DYava.innerText= "DY Satisfatorio"
      DYnumber.style.color ="Orange"
      DYava.style.color ="Orange"

      /*Não Seguro*/
    }else{
      DYnumber.innerText= `${resDY}%`
      DYava.innerText= "DY Acimada média"
      DYnumber.style.color ="Green"
      DYava.style.color ="Orange"

    }

     




    /* Liquidez */
    var ValLiq = document.getElementById('lIQUIDEZVAL')
    var ValAva = document.getElementById('lIQUIAVA')
   
    if(Liquidez <= 10000){
      ValLiq.innerText= `${Liquidez}%`
      ValAva.innerText= "Baixa Liquidez "
      ValLiq.style.color ="Red"
      ValAva.style.color ="Red"
    }else if(Liquidez >= 10000 && Liquidez <30000){
      ValLiq.innerText= `${Liquidez}%`
      ValAva.innerText= "Liquidez Moderada "
      ValLiq.style.color ="Orange"
      ValAva.style.color ="Orange"
    }else{
      ValLiq.innerText= `${Liquidez}%`
      ValAva.innerText= "Liquidez Alta "
      ValLiq.style.color ="Green"
      ValAva.style.color ="Green"
    }



   

    /*Avaliação do VP*/

    var VPA = document.getElementById('VPnum')
    var VPAva = document.getElementById('VPAVA')

    /* Calculando o VP */
    var VPres = PrecoCotas / Patrimonio

    var VPres = VPres.toFixed(2)

    if(VPres >=1.00){
      VPA.innerText= `${VPres}%`
      VPAva.innerText= "P/VPA Acima do VPA "
      VPA.style.color ="Red"
      VPAva.style.color ="Red"  

    }else{
      VPA.innerText= `${VPres}%`
      VPAva.innerText= "P/VPA  Abaixo do VPA "
      VPA.style.color ="Green"
      VPAva .style.color ="Green"
    }




    /*Avaliação do Ativos*/

    var Ativos = document.getElementById('AtivosVal')
    var AtivosAva = document.getElementById('AtivosAva')
   
    switch(TotalAtivos){
       case 1:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Mono ativo (Risco Alto) "
         Ativos.style.color ="Red"
         AtivosAva .style.color ="Red"
       break

       case 2:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Bi ativo (Risto Alto) "
         Ativos.style.color ="Red"
         AtivosAva .style.color ="Red"
       break

       case 3:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Tri ativo (Risco Alato) "
         Ativos.style.color ="Red"
         AtivosAva .style.color ="Red"
       break

       case 4:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Multi Ativos (Risco Moderado) "
         Ativos.style.color ="Orange"
         AtivosAva .style.color ="Orange"
       break

       case 5:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Multi Ativos (Risco Moderado) "
         Ativos.style.color ="Orange"
         AtivosAva .style.color ="Orange"
       break

       case 6:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Multi Ativos (Risco Minimo) "
         Ativos.style.color ="Orange"
         AtivosAva .style.color ="Orange"
       break

       default:
         Ativos.innerText= `${TotalAtivos}`
         AtivosAva.innerText= "Multi Ativos (Risco Baixo) "
         Ativos.style.color ="Green" 
         AtivosAva .style.color ="Green"
       break
          
    }

    /*Avaliação Geografica*/

    var GeoN = document.getElementById('Geo')
    var GeoVall = document.getElementById('GeoVal')
   
    switch(EstadosPresente){
       case 1:
         GeoN.innerText= `${EstadosPresente}`
         GeoVall.innerText= "Mono Local (Risco Alto) "
         GeoN.style.color ="Red"
         GeoVall .style.color ="Red"
       break

       case 2:
         GeoN.innerText= `${EstadosPresente}`
         GeoVall.innerText= "Bi Local (Risco Alto) "
         GeoN.style.color ="Red"
         GeoVall .style.color ="Red"
       break
       case 3:
         GeoN.innerText= `${EstadosPresente}`
         GeoVall.innerText= "Tri Local (Risco Moderado) "
         GeoN.style.color ="Orange"
         GeoVall .style.color ="Orange"
       break
       case 4:
         GeoN.innerText= `${EstadosPresente}`
         GeoVall.innerText= "Multi Local (Risco Moderado) "
         GeoN.style.color ="Orange"
         GeoVall .style.color ="Orange"
       break

       default:
         GeoN.innerText= `${EstadosPresente}`
         GeoVall.innerText= "Multi Local (Risco Baixo) "
         GeoN.style.color ="Green"
         GeoVall .style.color ="Green"
       break
      

          
    }
    
    
   


 }