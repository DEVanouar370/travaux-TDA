var myArray = new Array();
n = 1;
y = 0;
var hundred = false;
myArray[y]= 0;

// Demande AGE UNTIL 100

while (hundred == false)
    {
    myArray[y] = parseFloat(prompt("Entrez la donnée numéro " + n ));
    if (myArray[y] >= 100)
    {
        hundred = true;
    }
    y++;
    n++;
}

document.write (myArray);

var arrLen = myArray.length;
let x = 0;
let jeune =0 ;
let moyens = 0;
let vieux = 0;
let und = 0;

// CHECK 
 
// IF < 20 = JEUNE
// IF > 40 = VIEUX
// ELSE = MOYENS
// +NAN INFOS

while ( x < arrLen)
{

    if ( myArray[x] < 20 )
    {
        console.log(myArray[x] + " = jeune")
        jeune++;
    }

    else if ( 40 < myArray[x] )
    {
        console.log(myArray[x] + " = vieux")

        vieux++;
    }

    else if ( 20 <= myArray[x] <= 40)
    {
        console.log(myArray[x] + " = moyen")

        moyens++;
    }

    else 
    {
        und++;
    }

    x++;
}


document.write ("<br> Dans les " + arrLen + " âges données, il y a: <br>" + jeune + " personnes de moins de 20 ans. <br>" + 
moyens + " personnes entre 20 et 40 ans. <br>" + vieux + " personnes de plus de 40 ans. <br><br>" + "Il y a également " + und + " données non-numérique.")

