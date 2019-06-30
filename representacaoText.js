function verLista(lista, quantVertice, nome){
  var html = '<p class="title">Representação de um ' + nome +' - Lista da Adjacência</p>'

  html += '<div class="representacao ">'
  for(var i = 0; i < quantVertice; i++){
    html += '<div class="row " style="margin-bottom: 10px;">'
    html += '<div class="com">'+ i + '</div>'

    for(var j = 0; lista[i][j] != undefined ; j++){
      html += '<div class="sem">➝</div>'
      html += '<div class="com">' + lista[i][j].vertice + ' - Peso(' + lista[i][j].peso +')</div>'
    }
    html += '</div>'
  }
  html += '</div>'
  return html
}

function verMatriz(matriz, quantVertice, nome){
  var html = '<p class="title">Representação de um '+ nome +' - Matriz de Adjacência</p>'
  html += '<div class="representacao " >'
  html += '<table class="table table-bordered">'
  html += '<thead>'
  html += '<th></th>'
  for(var i = 0; i < quantVertice; i++) html += '<th>Vértice ' + i + '</th>'
  html += '</thead><tbody>'

  for(var i = 0; i <quantVertice; i++){
    html += '<tr>'
    html += '<td>Vértice ' + i + '</td>'
    for(var j = 0; j < quantVertice; j++){
      if(matriz[i][j] == "inf") html += '<td></td>'
      else html += '<td>Peso ' + matriz[i][j] + '</td>'
    }
    html += '</tr>'
  }
  html += '</tbody></table>'
  html += '</div>'
  return html
}

function verBuscaProfundidadeLista(lista, quantVertice, verticeEscolhido){
  var html = '<p class="title">Busca em profundidade a partir do vértice ' + verticeEscolhido + ' - Lista de Adjacência</p>'
  html += '<div class="representacao " >'
  html += '<table class="table table-bordered">'
  html += '<thead>'
  html += '<th></th>'
  for(var i = 0; i < quantVertice; i++) html += '<th>Vértice ' + i + '</th>'
  html += '</thead><tbody>'

  for(var i = 0; i < 2; i++){
    html += '<tr>'
    if(i == 0) {
      html += '<td>Tempo de Chegada</td>'
      for(var j = 0; j < quantVertice; j++) html += '<td>' + lista[j].tempoInicial + '</td>'
    }
    else {
      html += '<td>Tempo de Finalização</td>'
      for(var j = 0; j < quantVertice; j++) html += '<td>' + lista[j].tempoFinal + '</td>'
    }

    html += '</tr>'
  }
  html += '</tbody></table>'
  html += '</div>'
  return html
}

function verBuscaProfundidadeMatriz(lista, quantVertice, verticeEscolhido){
  var html = '<p class="title">Busca em profundidade a partir do vértice ' + verticeEscolhido + ' - Matriz de Adjacência</p>'
  html += '<div class="representacao " >'
  html += '<table class="table table-bordered">'
  html += '<thead>'
  html += '<th></th>'
  for(var i = 0; i < quantVertice; i++) html += '<th>Vértice ' + i + '</th>'
  html += '</thead><tbody>'

  for(var i = 0; i < 2; i++){
    html += '<tr>'
    if(i == 0) {
      html += '<td>Tempo de Chegada</td>'
      for(var j = 0; j < quantVertice; j++) html += '<td>' + lista[j].tempoInicial + '</td>'
    }
    else {
      html += '<td>Tempo de Finalização</td>'
      for(var j = 0; j < quantVertice; j++) html += '<td>' + lista[j].tempoFinal + '</td>'
    }

    html += '</tr>'
  }
  html += '</tbody></table>'
  html += '</div>'
  return html
}

function verBuscaLargura(lista, quantVertice, verticeEscolhido){
  
  var html = '<p class="title">Busca em largura a partir do vértice ' + verticeEscolhido + '</p>'
  html += '<div class="representacao ">'
  for(var i = 0; i < quantVertice; i++){
    html += '<div class="row " style="margin-bottom: 10px;">'
    html += '<div class="com">De '+ verticeEscolhido + ' Para ' + i +  '</div>'

    if(lista[i][0] == undefined){
      html += '<div class="sem">➝</div>'
      html += '<div class="com">Caminho Direto</div>'
    }
    else{
      var erro = false
      for(var j = 0; lista[i][j] != undefined ; j++){

        html += '<div class="sem">➝</div>'
        if(lista[i][j] == "f"){
          html += '<div class="com">Não Possui Caminho</div>'
          erro = true
          break
        }
        else if(lista[i][j] == 'R') {
          html += '<div class="com">Raíz</div>'
          erro = true
          break
        }
        else {
          if(j == 0){
            html += '<div class="com">' + verticeEscolhido + '</div>'
            html += '<div class="sem">➝</div>'
          }
          html += '<div class="com">' + lista[i][j] + '</div>'
        }
      }
      if(!erro){
        html += '<div class="sem">➝</div>'
        html += '<div class="com">' + i + '</div>'
      }
    }


    html += '</div>'
  }
  return html
}

function verConexao(lista, quantVertice,  html, v1, v2){
  var erro = false
  if(lista[0][0] == undefined){
    html += '<div class="sem">➝</div>'
    html += '<div class="com">Caminho Direto</div>'
    erro = true
  }
  else{
    for(var j = 0; lista[0][j] != undefined ; j++){

      html += '<div class="sem">➝</div>'
      if(lista[0][j] == 'f'){
        html += '<div class="com">Não Possui Caminho</div>'
        erro = true
        break
      }
      else if(lista[0][j] == 'R') {
        html += '<div class="com">Raíz</div>'
        erro = true
        break
      }
      else {
        if(j == 0){
          html += '<div class="com">' + v1 + '</div>'
          html += '<div class="sem">➝</div>'
        }
        html += '<div class="com">' + lista[0][j] + '</div>'
      }
    }
  }
  if(!erro){
    html += '<div class="sem">➝</div>'
     html += '<div class="com">' + v2 + '</div>'
  }
  return html
}

function verConexoL(conexo, superLista){
  var html = '<div class="representacao ">'
  for(k = 0; conexo[k] != undefined && conexo[k][0] != undefined; k++){
    html += '<p class="title">Componente ' + (k+1) + '</p>'
    for(var i = 0; conexo[k][i] != undefined ; i++){
      html += '<div class="row " style="margin-bottom: 10px;">'
      html += '<div class="com">'+ conexo[k][i] + '</div>'

      for(var j = 0; superLista[k][i][j] != undefined; j++){
        html += '<div class="sem">➝</div>'
        html += '<div class="com">' + superLista[k][i][j].vertice + ' - Peso(' + superLista[k][i][j].peso +')</div>'
      }
      html += '</div>'
    }
  }
  return html
}

function verConexoM(conexo, matriz, quantVertice){
  var html = '<div class="representacao ">'
  for(var k = 0; conexo[k] != undefined && conexo[k][0] != undefined; k++){
    html += '<p class="title">Componente ' + (k+1) + '</p>'
    html += '<table class="table table-bordered">'
    html += '<thead>'
    html += '<th></th>'
    var cont = 0
    for(var i = 0; i < conexo[k].length; i++) {
      html += '<th>Vértice ' + conexo[k][i] + '</th>'
      cont++
    }
    html += '</thead><tbody>'

    for(var i = 0; conexo[k][i] != undefined; i++){
      html += '<tr>'
      html += '<td>Vértice ' + conexo[k][i] + '</td>'
      for(var j = 0; conexo[k][j] != undefined; j++){
        if(matriz[conexo[k][i]][conexo[k][j]] == "inf") html += '<td></td>'
        else html += '<td>Peso ' + matriz[conexo[k][i]][conexo[k][j]] + '</td>'
      }
      html += '</tr>'


    }
    html += '</tbody></table>'
  }

  html += '</div>'
  return html
}

function verCaminhoMin(cm, quantVertice, vertice){
  var html = '<div class="representacao ">'
  for(var i = 0; i < quantVertice; i++){
    var soma = 0
    if(i != vertice){
      html += '<div class="row " style="margin-bottom: 10px;">'
      html += '<div class="com">De ' + vertice +' para ' + i +'</div>'
      var j = i
      var aux = ''
      var pilha = []
      var trix = 0
      var sem = false

      while(trix < quantVertice){
        if(cm[j].pai != undefined){
          sem = true
          if(cm[j].pai != vertice) {
            pilha.push({peso: cm[j].peso, vertice: j})
            j = cm[j].pai
          }
          else break
          trix++
        }
        else break
      }

      if(trix != quantVertice && sem) pilha.push({peso: cm[j].peso, vertice: j})
      if(pilha[0] != undefined){
        
        aux += '<div class="sem">➝</div>'
        aux += '<div class="com">' + vertice +'</div>'
        while(pilha[0] != undefined){
          aux += '<div class="sem">➝</div>'
          var t = pilha.pop()
          soma += t.peso
          aux += '<div class="com">' + t.vertice +'</div>'
        }
        aux += '<div class="sem">➝</div>'
        aux += '<div class="com">Custo Total ' + soma +'</div>'
      }
      else{
        aux += '<div class="sem">➝</div>'
        aux += '<div class="com">Não possui Caminho</div>'
      }


      if(j < quantVertice) html += aux
      else html += '<div class="com">Não Possui Caminho</div>'
      html += '</div>'
    }
  }

  html += '</div>'


  return html
}

function verCaminhoWarshall(matriz, quantVertice){
  let html = "<p class='title'>Caminho mínimo Floyd Warshall</p>"
  html += '<div class="representacao " >'
  for(let i = 0; i < quantVertice; i++){
    
    for(let j = 0; j < quantVertice; j++){
      html += '<div class="row " style="margin-bottom: 10px;">'
      html += '<div class="com">De '+ i + ' Para ' + j +  '</div>'
      html += '<div class="sem">➝</div>'
      html += '<div class="com"> Menor Custo ' + matriz[i][j] + '</div>'
      html += '</div>'
    }

  }
  html += '</div>'
  return html
}

function verCaminhoGA(lista, quantVertice, verticeEscolhido){
  
  var html = '<p class="title">Caminho Mínimo a partir do vértice ' + verticeEscolhido + ' para os demais vértices</p>'
  html += '<div class="representacao ">'
  for(var i = 0; i < quantVertice; i++){
    html += '<div class="row " style="margin-bottom: 10px;">'
    html += '<div class="com">De '+ verticeEscolhido + ' Para ' + i +  '</div>'

    if(lista[i].length == 0){
      html += '<div class="sem">➝</div>'
      html += '<div class="com">Caminho Direto</div>'
    }
    else{
      var erro = false
      for(var j = 0; lista[i][j] != undefined ; j++){

        html += '<div class="sem">➝</div>'
        if(lista[i][j] == "f"){
          html += '<div class="com">Não Possui Caminho</div>'
          erro = true
          break
        }
        else if(lista[i][j] == 'R') {
          html += '<div class="com">Raíz</div>'
          erro = true
          break
        }
        else {
          if(j == 0){
            html += '<div class="com">' + verticeEscolhido + '</div>'
            html += '<div class="sem">➝</div>'
          }
          html += '<div class="com">' + lista[i][j] + '</div>'
        }
      }
      if(!erro){
        html += '<div class="sem">➝</div>'
        html += '<div class="com">' + i + '</div>'
      }
    }


    html += '</div>'
  }
  return html
}

