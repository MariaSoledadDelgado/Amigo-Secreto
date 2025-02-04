// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo()
{   
    var amigo = document.getElementById("amigo").value;

    if (amigo == "")
        alert("Porfavor, ingrese un nombre válido.");
    else
    {
        amigos.push(amigo);

        var lista = document.getElementById("listaAmigos");
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(amigo));
        lista.appendChild(entry);

        document.getElementById("amigo").value = "";
    }
}

function sortearAmigo()
{
    if (amigos.length <= 1)
    {
        alert("Porfavor, ingrese uno o más participantes.");
    }
    else
    {
        var ganador = Math.floor(Math.random() * amigos.length);
        //alert(ganador);
        //alert(amigos[ganador]);

        var lista = document.getElementById("resultado");
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode("El amigo sorteado es:"));
        lista.appendChild(entry);
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(amigos[ganador]));
        lista.appendChild(entry);
    }
}