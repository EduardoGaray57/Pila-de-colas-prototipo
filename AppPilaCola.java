import java.util.Scanner;
class AppPilaCola{
	public static void main(String[] args) {
		Scanner teclado= new Scanner(System.in);
		String nom;
		String rut;
		int eda;
		Pila lista= new Pila();
		Nodo persona= new Nodo("Eduardo","19.954.048-3",21);
		Nodo persona1= new Nodo("Elein","1.455-k",105);
		lista.push(persona);
		lista.push(persona1);
		boolean salir= false;
		int opciones;
		while(!salir){
			System.out.println("1.Ingrese nodo");				
			System.out.println("2.Mostrar lista");
			System.out.println("3.Salir");
			opciones= teclado.nextInt();
				switch(opciones){
					case 1:
					System.out.println("Ingrese nombre");
					nom=teclado.next();
					System.out.println("Ingrese rut de la forma xx.xxx.xxx-x");
					rut=teclado.next();
					while(!validarRut(rut)){
						System.out.println("Ingrese nuevamente");
						rut=teclado.next();
					}
					System.out.println(lista.rutANumero(rut));
					System.out.println("Ingrese edad");
					eda=teclado.nextInt();
					Nodo personas= new Nodo(nom,rut,eda);
					lista.push(personas);				
						break;
					case 2:
						lista.desplejarPila();
						break;
					case 3:
						salir=true;
						break;
				}
		}
	}
	public static boolean validarRut(String rut) {
 
	boolean validacion = false;
		try {
			rut =  rut.toUpperCase();
			rut = rut.replace(".", "");
			rut = rut.replace("-", "");
			int rutAux = Integer.parseInt(rut.substring(0, rut.length() - 1));
 
			char dv = rut.charAt(rut.length() - 1);
 
			int m = 0, s = 1;
				for (; rutAux != 0; rutAux /= 10) {
					s = (s + rutAux % 10 * (9 - m++ % 6)) % 11;
				}
				if (dv == (char) (s != 0 ? s + 47 : 75)) {
					validacion = true;
				}
 
		} catch (java.lang.NumberFormatException e) {
		} catch (Exception e) {
		}
		return validacion;
	}
}