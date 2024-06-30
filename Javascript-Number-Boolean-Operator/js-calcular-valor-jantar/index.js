const jantar = Number(prompt("Valor do Jantar R$: ")) // LÊ o valor do jantar
const garcom = jantar * 0.10                      // calcular variáveis de saida
const total = jantar + garcom

prompt(`Taxa Garçom R$: ${garcom.toFixed(2)}`)