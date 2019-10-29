function elementoOl() {
    var nova_ol = document.createElement('ol');
    nova_ol.setAttribute('id','lista-ordenada');
    document.getElementById('principal').appendChild(nova_ol);
}

function inserirItem(nome_do_item, id) {
    var nova_li = document.createElement('li'); //Criando LI
    nova_li.setAttribute('id', id); //definindo ID para LI

    var nova_link = document.createElement('a'); //Criando Link (tag <a>)
    nova_link.setAttribute('href', '#'); //Definingo um link (href)
    var texto = document.createTextNode(nome_do_item); //Criando o texto do Link
    nova_link.appendChild(texto); //Adcionando texto a tag <a>
    nova_li.appendChild(nova_link); //Adcionando tag <a> ao LI

    document.getElementById('lista-ordenada').appendChild(nova_li); //Adcionando LI ao OL
}