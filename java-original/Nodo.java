class Nodo{
	private Nodo sgte;
	private String Nombre;
	private String Rut;
	private int Edad;
	Nodo(String n,String r,int e){
		this.sgte=null;
		this.Nombre=n;
		this.Rut=r;
		this.Edad=e;
	}
	Nodo(){
		this.sgte=null;
		this.Nombre=null;
		this.Rut=null;
		this.Edad=0;
	}
	
	Nodo getSgte(){
		return sgte;
	}
	void setSgte(Nodo next){
		this.sgte=next;
	}
	String getNombre(){
		return Nombre;
	}
	void setNombre(String nombre){
		this.Nombre=nombre;
	}
	String getRut(){
		return Rut;
	}
	void setRut(String rut){
		this.Rut=rut;
	}
	int getEdad(){
		return Edad;
	}
	void setEdad(int edad){
		this.Edad=edad;
	}	
}