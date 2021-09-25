var creatorName = "Duduzin"
        console.log("Bem vindo " + creatorName + "!")
        console.log("Este é a sua calculadora de média, para você saber se passou de ano!")
        function calcularMedia() {
            var notaDoPrimeiroBimestre = parseFloat(document.getElementById('notaDoPrimeiroBimestre').value);
            var notaDoSegundoBimestre = parseFloat(document.getElementById('notaDoSegundoBimestre').value);
            var notaDoTerceiroBimestre = parseFloat(document.getElementById('notaDoTerceiroBimestre').value);
            var notaDoQuartoBimestre = parseFloat(document.getElementById('notaDoQuartoBimestre').value);
            


            var notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)
            console.log("A média resultante é: " + notaFinal)



            document.getElementById("resultado").innerHTML = "A média resultante é: " +
                ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)
            if (notaFinal >= 6.0) {
               document.getElementById("Parabens").innerHTML = "Parabéns, você passou de ano :)"
               
            }
            else {
                document.getElementById("Parabens").innerHTML = "Infelizmente você não conseguiu a mdia suficiente para passar de ano :("
                
            }
        }