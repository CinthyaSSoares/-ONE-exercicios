
public class TesteSacaValorNegativo {
	public static void main(String[] args) {
		
		Conta conta = new Conta();
		conta.deposita(100);
				
		System.out.println(conta.getSaldo());	//invocando método
		
		//proibido:
		//conta.saldo = conta.saldo - 101;
		//System.out.println(conta.saldo);
		
	}
}
