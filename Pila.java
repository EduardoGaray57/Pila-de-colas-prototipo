public class Pila{
	private NodoPila cima;
	private int tama;

	public Pila(){
		cima=null;
		tama=0;
	}
	public void push(Cola colita){
		NodoPila nuevo= new NodoPila();
		nuevo.setDato(colita);
		nuevo.setSgte(cima);
		cima=nuevo;
		tama++;			
	}
	public void desplejarPila(){
		NodoPila actual= new NodoPila();
		actual=cima;
		if(cima !=null){
			while(actual!=null){
				cima.getDato().desplejarCola();
				System.out.println("-------------------------");
				actual=actual.getSgte();
			}
		}else{
			System.out.println("No hay datos");
		}
	}
	public int rutANumero(String rut){
		rut =  rut.toUpperCase();
		rut = rut.replace(".", "");
		rut = rut.replace("-", "");
		int rutAux = Integer.parseInt(rut.substring(0, rut.length() ));
		return rutAux;
	}
	
}