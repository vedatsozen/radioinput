

function hesapla() {

const selected = document.getElementsByName("number");

for ( let i=0; i < selected.length ;i++) {

    if ( selected[i].checked ) {

        form1 = selected[i].value ;

        form1value = parseInt(form1) ;

    }

}

const selected2 = document.getElementsByName("number2");

for ( let i=0; i < selected2.length ;i++) {

if ( selected2[i].checked ) {

    form2 = selected2[i].value ;

    form2value = parseInt(form2) ;

}

}

const selected3 = document.getElementsByName("number3");

for ( let i=0; i < selected3.length ;i++) {

if ( selected3[i].checked ) {

    form3 = selected3[i].value ;

    form3value = parseInt(form3) ;

}

}


document.getElementById("result").innerHTML = form1value + form2value + form3value ;

}


