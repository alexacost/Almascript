$(document).ready(function(){
    $("button").click(function(){
        var name = ($("#nombre").val());
        var nameLower = name.toLowerCase();
        var count = name.length;
        var nameSplit = nameLower.split('');
        var suma = 0;
        for(i=0;i<count;i++) {
            if (nameSplit[i]==='a' || nameSplit[i]==='j') {
                suma = suma + 1;
            }
        }
        console.log(suma);

    });
  });