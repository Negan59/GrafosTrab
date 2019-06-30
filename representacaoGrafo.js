function verGrafo(tipoGrafo, represen, quantidadeVertice){
	if(tipoGrafo == 0){ //grafo não orientado
		var nos = []
		for(var i = 0; i < quantidadeVertice; i++){
			let no = {
				id:  i,
				label: i.toString()
			}
			nos.push(no)
		}

		var arestas = []
		for(var i = 0; i < quantidadeVertice; i++){
			for(var j = 0; represen[i][j] != undefined; j++){
				if(represen[i][j].vertice < i){
						let aresta = {
						from: i,
						to: represen[i][j].vertice,
						label: 'Peso ' + represen[i][j].peso,
						font: {align: 'top'}
					}
					arestas.push(aresta)
				}				
			}
		}
	}
	else{
		var nos = []
		for(var i = 0; i < quantidadeVertice; i++){
			let no = {
				id:  i,
				label: i.toString()
			}
			nos.push(no)
		}

		var arestas = []
		for(var i = 0; i < quantidadeVertice; i++){
			for(var j = 0; represen[i][j] != undefined; j++){
			
						let aresta = {
						from: i,
						to: represen[i][j].vertice,
						arrows: 'to',
						label: (represen[i][j].peso).toString(),
						font: {align: 'top'}
					}
					arestas.push(aresta)

				
			}
		}
	}

	var opcoes = {
	    nodes: { 
	    	font: {size: 25, color: '#fff'},
    	},
	    edges: {
	  	  color: {
	  	  	color: '#0056b3'
	  	  },
	  	  width: 3,
	      arrows: {
	        to: {
	          scaleFactor: 1
	        }
	      }
	    }
	  }

	return {nodes: nos, edges: arestas, options: opcoes}
}

function verOrdenacaoTopologica(tipoGrafo, represen, quantidadeVertice){
	var nos = []
	for(var i = 0; i < quantidadeVertice; i++){
		let no = {
			id:  i,
			label: i.toString()
		}
		nos.push(no)
	}

	var arestas = []
	for(var i = 0; i < quantidadeVertice; i++){
		for(var j = 0; represen[i][j] != undefined; j++){
		
					let aresta = {
					from: i,
					to: represen[i][j].vertice,
					arrows: 'to',
					label: (represen[i][j].peso).toString(),
					font: {align: 'top'}
				}
				arestas.push(aresta)

			
		}
	}

    var layoutMethod = "directed";
	var options = {
        layout: {
          hierarchical: {
            sortMethod: layoutMethod,
            direction: "LR",
            edgeMinimization: true
          }
        
        },
        edges: {
          smooth: true,
          arrows: {to : true }
        }
      };

  return {nodes: nos, edges: arestas, options}
}

function verGrafoColorido(represen, cores, quantidadeVertice){
	
	var nos = []
	for(var i = 0; i < quantidadeVertice; i++){
		let no = {
			id:  i,
			label: i.toString(),
			color: cores[i].cor
		}
		nos.push(no)
	}

	var arestas = []
	for(var i = 0; i < quantidadeVertice; i++){
		for(var j = 0; represen[i][j] != undefined; j++){
			if(represen[i][j].vertice < i){
					let aresta = {
					from: i,
					to: represen[i][j].vertice,
					label: represen[i][j].peso,
					font: {align: 'top'}
				}
				arestas.push(aresta)
			}				
		}
	}

	var opcoes = {
	    edges: {
	  	  color: {
	  	  	color: '#666'
	  	  },
	  	  width: 3,
	      arrows: {
	        to: {
	          scaleFactor: 1
	        }
	      }
	    }
	  }

	return {nodes: nos, edges: arestas, options: opcoes}
}

function verGrafoRFC(represen, cores, quantidadeVertice){
	
	var nos = []
	for(var i = 0; i < quantidadeVertice; i++){
		let no = {
			id:  i,
			label: i.toString(),
			color: cores[i]
		}
		nos.push(no)
	}

	var arestas = []
	for(var i = 0; i < quantidadeVertice; i++){
		for(var j = 0; represen[i][j] != undefined; j++){
		
					let aresta = {
					from: i,
					to: represen[i][j].vertice,
					arrows: 'to',
					font: {align: 'top'}
				}
				arestas.push(aresta)

			
		}
	}
	
	var opcoes = {
	    edges: {
	  	  
	  	  width: 3,
	      arrows: {
	        to: {
	          scaleFactor: 1
	        }
	      }
	    }
	  }

	return {nodes: nos, edges: arestas, options: opcoes}
}

function verAGM(represen, agm, quantidadeVertice){
	var nos = []
	for(var i = 0; i < quantidadeVertice; i++){
		let no = {
			id:  i,
			label: i.toString()
		}
		nos.push(no)
	}

	var arestas = []
	for(var i = 0; i < quantidadeVertice; i++){
		for(var j = 0; represen[i][j] != undefined; j++){
			if(represen[i][j].vertice > i){

				if(agm[i].pai == represen[i][j].vertice || agm[represen[i][j].vertice].pai == i){
					let aresta = {
						from: i,
						to: represen[i][j].vertice,
						label: 'Peso ' + represen[i][j].peso,
						font: {align: 'top'},
						color:{color:'red'}
					}	
					arestas.push(aresta)
				}
				else{
					let aresta = {
						from: i,
						to: represen[i][j].vertice,
						label: 'Peso ' + represen[i][j].peso,
						font: {align: 'top'}
					}	
					arestas.push(aresta)
				}
				
			}				
		}
	}

	console.log(represen)
	console.log(agm)

	var opcoes = {
	    nodes: { 
	    	font: {size: 25, color: '#fff'},
		},
	    edges: {
	  	  width: 3,
	      arrows: {
	        to: {
	          scaleFactor: 1
	        }
	      }
	    }
	}

	return {nodes: nos, edges: arestas, options: opcoes}
}
