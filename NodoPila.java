class NodoPila{
	private Cola dato;
	private NodoPila sgte;
	NodoPila(){
		this.dato=null;
		this.sgte=null;
	}
	Cola getDato(){
		return dato;
	}
	void setDato(Cola colita){
		this.dato=colita;
	}
	NodoPila getSgte(){
		return sgte;
	}
	void setSgte(NodoPila sgte){
		this.sgte=sgte;
	}

}