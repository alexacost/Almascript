$(document).ready(function(){
    $("button").click(function(){

        //nombre1

        var name = ($("#nombre1").val());
        var nameLower = name.toLowerCase();
        var count = name.length;
        var nameSplit = nameLower.split('');
        var suma = 0;

        for(i=0;i<count;i++) {
            if (nameSplit[i]==='a' || nameSplit[i]==='j' || nameSplit[i]==='s' ) {
                suma = suma + 1;
            }
            if (nameSplit[i]==='b' || nameSplit[i]==='k' || nameSplit[i]==='t' ) {
                suma = suma + 2;
            }
            if (nameSplit[i]==='c' || nameSplit[i]==='l' || nameSplit[i]==='u' ) {
                suma = suma + 3;
            }
            if (nameSplit[i]==='d' || nameSplit[i]==='m' || nameSplit[i]==='v' ) {
                suma = suma + 4;
            }
            if (nameSplit[i]==='e' || nameSplit[i]==='n' || nameSplit[i]==='v' ) {
                suma = suma + 5;
            }
            if (nameSplit[i]==='f' || nameSplit[i]==='o' || nameSplit[i]==='x' ) {
                suma = suma + 6;
            }
            if (nameSplit[i]==='g' || nameSplit[i]==='p' || nameSplit[i]==='y' ) {
                suma = suma + 7;
            }
            if (nameSplit[i]==='h' || nameSplit[i]==='q' || nameSplit[i]==='z' ) {
                suma = suma + 8;
            }
            if (nameSplit[i]==='i' || nameSplit[i]==='r') {
                suma = suma + 9;
            }
            if (nameSplit[i]==='i' || nameSplit[i]==='r') {
                suma = suma + 0;
            }
        }
        sumaIntoString = String(suma); 
        sumaSplit = sumaIntoString.split('');
        sumaFinal = parseInt(sumaSplit[0]) + parseInt(sumaSplit[1])

        //nombre2

        var name = ($("#nombre2").val());
        var nameLower = name.toLowerCase();
        var count = name.length;
        var nameSplit = nameLower.split('');
        var suma1 = 0;

        for(i=0;i<count;i++) {
            if (nameSplit[i]==='a' || nameSplit[i]==='j' || nameSplit[i]==='s' ) {
                suma1 = suma1 + 1;
            }
            if (nameSplit[i]==='b' || nameSplit[i]==='k' || nameSplit[i]==='t' ) {
                suma1 = suma1 + 2;
            }
            if (nameSplit[i]==='c' || nameSplit[i]==='l' || nameSplit[i]==='u' ) {
                suma1 = suma1 + 3;
            }
            if (nameSplit[i]==='d' || nameSplit[i]==='m' || nameSplit[i]==='v' ) {
                suma1 = suma1 + 4;
            }
            if (nameSplit[i]==='e' || nameSplit[i]==='n' || nameSplit[i]==='v' ) {
                suma1 = suma1 + 5;
            }
            if (nameSplit[i]==='f' || nameSplit[i]==='o' || nameSplit[i]==='x' ) {
                suma1 = suma1 + 6;
            }
            if (nameSplit[i]==='g' || nameSplit[i]==='p' || nameSplit[i]==='y' ) {
                suma1 = suma1 + 7;
            }
            if (nameSplit[i]==='h' || nameSplit[i]==='q' || nameSplit[i]==='z' ) {
                suma1 = suma1 + 8;
            }
            if (nameSplit[i]==='i' || nameSplit[i]==='r') {
                suma1 = suma1 + 9;
            }
            if (nameSplit[i]==='') {
                suma1 = suma1 + 0;
            }
        }

        suma1IntoString = String(suma1);
        suma1Split = suma1IntoString.split('');
        suma1Final = parseInt(suma1Split[0]) + parseInt(suma1Split[1])
        if (isNaN(suma1Final)) {
            suma1Final = 0
            console.log(suma1Final)
        }
        total = suma1Final + sumaFinal
        totalIntoString = String(total); 
        totalSplit = totalIntoString.split('');
        if (suma1Final === 0) {
            totalFinal = parseInt(totalSplit[0])
        }
        else {
        totalFinal = parseInt(totalSplit[0]) + parseInt(totalSplit[1])
        }
        $("#num").text(totalFinal)




    });

  });