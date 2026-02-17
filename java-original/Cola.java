public class Cola{
	private Nodo primero;
	private Nodo ultimo;
	private int tamano;

	public Cola(){
		primero=null;
		ultimo=null;
		tamano=0;
	}
	public boolean isEmpty(){
		return primero==null;
	}
	public int size(){
		return tamano;
	}
	public void insertar(Nodo nodo){
		if (isEmpty()) {
			primero=nodo;
			primero.setSgte(null);
			ultimo=nodo;
		}else{
			ultimo.setSgte(nodo);
			nodo.setSgte(null);
			ultimo=nodo;
		}
		ultimo=nodo;
		tamano++;
	}
	public void desplejarCola(){
		Nodo actual= new Nodo();
		actual=primero;
		if(primero!=null){
			while(actual!=null){
				System.out.println(" " + actual.getNombre());
				System.out.println(" " + actual.getRut());
				System.out.println(" " + actual.getEdad());
				actual=actual.getSgte();
			}
		}else{
			System.out.println("No hay datos");
		}
	}

	public Nodo getPrimero(){
		return primero;
	}
	public Nodo getUltimo(){
		return ultimo;
	}	
}