let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 item = document.getElementById('itemMenu'),
	 cp = document.getElementById('cp'),
	 imgCp = document.getElementById('imgCp'),
	 ia = document.getElementById('ia');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

item.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

imgCp.addEventListener('click', function(e){
	cp.classList.toggle('clicado');
	ia.classList.toggle('out');
});

seta.addEventListener("ForaSeta",
function(e){
	if($(this).scrollTop() >= $(document).height() - $(window).height() - $(window).scrollTop()){
		seta.classList.toggle('bottom');
	}
}
);

function fechar(){
	cp.classList.toggle('clicado');
	ia.classList.toggle('out');
}    
function confirmar(url, msg){
	
    event.preventDefault();  
    var resposta = confirm(msg);
    if (resposta == true){
        top.location.href = url;
	}
}

//Coloca o botão em uma varivel
var btn_subir = $(".botao-voltar-ao-topo");


//Faz a primeira verificacao ao carregar a pagina
$(document).ready(function(){
    var minhaposicao = $(this).scrollTop();
    if(minhaposicao >=100){
        btn_subir.fadeIn();
    }
    else{
        btn_subir.fadeOut();
    }
});

//Fica monitorando a rolagem de pagina
$(window).scroll(function(){
    var minhaposicao = $(this).scrollTop();
    
    if(minhaposicao >=100){
        btn_subir.fadeIn();
    }
    else{
        btn_subir.fadeOut();
    }
});

btn_subir.click(function(){
    $('html,body').animate({scrollTop:0},500);
})

var NavWidth= 375;
var NavHeight = 667;
var x = NavWidth/2;
var y = NavHeight/2;
var rotation = 0;
var crit = 0;
function walk()
{	
	//Rotation aléatoire
	var random = Math.floor((Math.random()*360));
	//Empêche le "personnage" de faire des angles >45 ou <-45
	while((rotation-90)-random>45||(rotation-90)-random<-45) 
	{
		random = Math.floor((Math.random()*360));
		//Vérifie si le "personnage" va sortir de l'écran
		if(x + Math.cos((random/180)*Math.PI)*50<0||y + Math.sin((random/180)*Math.PI)*50<0||x + Math.cos((random/180)*Math.PI)*50>NavWidth||y +Math.sin((random/180)*Math.PI)*50>NavHeight )
		{
			//Si oui, il fait demi-tour
			random += 180;
			break;
		}
		//Vérifie si le programme n'est pas coincé dans la boucle, si oui il en
		//sort au bout de 10 itérations
		if(crit>10){break;}
		
		crit++;
	}
	crit=0;
	//Détermine la future position en fonction de l'angle aléatoire précédent
	x = x + Math.cos((random/180)*Math.PI)*50;
	y = y +Math.sin((random/180)*Math.PI)*50;
	//Ajustement de la rotation en fonction de l'inclinaison de l'image originale
	rotation = random+90;
	//Création de l'élément
	var footprint = document.createElement('img');
	footprint.setAttribute("src","./img/paw.png");
	footprint.style.position="absolute";
	footprint.style.left=x+"px";
	footprint.style.top=y+"px";
	footprint.className="footprint";
	footprint.style.webkitTransform = "rotate("+rotation+"deg)";
	//Ajout de l'élément dans le body
	document.body.appendChild(footprint);

	var footprint2 = document.createElement('img');
	footprint2.setAttribute("src","./img/paw.png");
	footprint2.style.position="absolute";
	footprint2.style.left=x+15+"px";
	footprint2.style.top=y+20+"px";
	footprint2.className="footprint2";
	footprint2.style.webkitTransform = "rotate("+rotation+"deg)";
	//Ajout de l'élément dans le body
	document.body.appendChild(footprint2);
}
//Appel la fonction walk() toutes les secondes
setInterval(function(){walk();},1000);