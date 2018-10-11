var gabaritoJordan = [2, 3, 0, 2, 1];
var perguntasDaJordan = 
["What was Jordan Baker’s occupation?", 
"How did Jordan meet Gatsby?", 
"Why Nick believed that Jordan shouldn’t drive?", 
"In her last date with Nick, she tells something to him, what is that?",
"How did Jordan meet Nick?"]; 
var respostasDaJordan = 
["Singer", 
"Actress", 
"Golfer", 
"Softball pitcher", 

"At one of his parties", 
"Nick introduced them",
"In a train wagon", 
"During one of his dates with Daisy", 

"Because she wasn’t careful", 
"Because she was a woman",
"Because she had a knee problem", 
"Because she was too careful", 

"That she was pregnant", 
"That she was quitting being a golfer",
"That she was engaged to another man", 
"That she was moving from the city", 

"At one of Gatsby’s party", 
"During a dinner at the Buchanan’s house",
"At the wedding of Daisy and Tom", 
"At one of her golf games"];

var gabaritoNick = [2, 0, 1, 2, 1];
var perguntasDoNick = 
["At first Nick was going to move with a colleague, why he ended up living alone?", 
"When he moved to West egg, Nick felt really lonely, which situation made he feel better about it?", 
"How Nick and Daisy were related?", 
"Which one of the cardinal virtues Nick considered his most significant virtue?",
"Where were Nick educated?"];
var respostasDoNick = 
["Because Nick and his colleague had a fight one week before their moving", 
"Because his colleague met a woman and married her before their moving", 
"Because his colleague got a promotion and moved to another city before their moving", 
"Because Nick gave up the idea and decided to live by himself", 

"A man asked for informations about how to get to the West egg village and make him felt like a guide",
"Daisy invited him for a dinner and make him comfortable with the new neighborhood",
"Gatsby invited him to a party and he felt special for had received this invite",
"He became friend with Gatsby employers",

"They were friends",
"They were cousins",
"They were siblings",
"They were neighbors",

"Strenght",
"Justice",
"Honesty",
"Prudence",

"Harvard",
"Yale",
"Princeton",
"Duke"];

var gabaritoDaisy = [2, 0, 0, 1, 3];
var perguntasDaDaisy = 
["What Daisy wishes for her daughter when she was born?", 
"Where does Daisy’s reunion with Gatsby take place?", 
"How Daisy and Jordan were related?", 
"Why did Daisy almost give up of her marriage with Tom?",
"How Daisy told Gatsby that she married Tom?"];
var respostasDaDaisy = 
["That she was smart and successful",
"That she could get a good marriage",
"That she was pretty and fool",
"That she was an independent and strong woman",

"At Nick’s house",
"At Gatsby’s house",
"At the yacht race",
"By the pool",

"They were friends",
"They were cousins",
"They were sisters",
"They were neighbors",

"Because her parents didn’t approve the marriage",
"Because she got a letter from Gatsby one day before the wedding",
"Because her dress tore one day before the wedding",
"Because she caught Tom cheating on her",

"She sent an invite of her wedding to him",
"She told him in person during one of their dates",
"She didn’t tell him, he found out by a newspaper",
"She sent him a letter telling the new"];

var gabaritoTom = [0, 1, 1, 2, 0];
var perguntasDoTom = 
["How did Tom get famous in New York?", 
"How Tom hated being called by Daisy?", 
"How did Tom find out about Daisy and Gatsby?",
"What was Nick’s first impression of Tom after a few years without seeing him?",
"How did Tom meet Gatsby?"];
var respostasDoTom = 
["He got famous for being one of the best football players at his university",
"He got famous for having an exceptional intelligence for business",
"He got famous for having married Daisy, who had a wealthy and influent family",
"He got famous for going to the war and coming back as a hero",

"Rude",
"Hulking",
"Brute",
"Arrogant",

"He caught them together",
"Gatsby told him about it",
"Nick told him the truth about Daisy and Gatsby",
"He asked Daisy about it",

"That he was looking exhausted",
"That he was exactly like in the college times",
"That he had changed and had an air of superiority",
"That he was weird and different of the college times",

"Nick introduce them during a lunch",
"Daisy introduce them during one of the Gatsby’s parties",
"Jordan introduce them during one of the Gatsby’s parties",
"He met Gatsby in college and met him again a few years later"];

var gabaritoGatsby = [1, 1, 0, 1, 2];
var perguntasDoGatsby = 
["Why does Gatsby throw huge parties at his house?", 
"Why did Gatsby leave Daisy while they were together?", 
"Gatsby was the son of whom?",
"What was Gatsby’s name before he became rich?",
"When he renews his acquaintance with Daisy at Nick’s house, what does Gatsby knock off of the mantle?"];
var respostasDoGatsby = 
["Because he loved big parties, he thought they were intimate",
"Because he had hope that Daisy showed up in one of them",
"Because he felt really lonely at home",
"Because he wanted to show everyone how much money he had",

"Because he wasn’t sure about his feelings for her",
"Because he thought that she deserves someone better to her",
"Because her family didn’t approve their relationship",
"Because she wasn’t sure about her feelings between Gatsby and Tom",

"Of an old and poor man",
"Of a business man owner of a lot of pharmacies",
"Of a sailor called Dan Cody",
"Of a banker really rich",

"Jay Gatz",
"James Gatz",
"James Gatsby",
"Dan Gatsby",

"Nick’s pipe",
"Jordan’s golf trophy",
"A clock",
"Daisy’s picture"];

var gabaritoMyrtle = [1, 0, 2, 2, 1];
var perguntasDaMyrtle = 
["How did Myrtle meet Tom?", 
"Which gift Tom gave to her?", 
"How did George Wilson find out Myrtle’s cheating?",
"Who Myrtle tried to set up for Nick?",
"ow Myrtle was described on the book?"];
var respostasDaMyrtle = 
["At one of Gatsby’s parties",
"In a train wagon",
"At her husband’s car workshop",
"In a hotel in New York",

"A dog",
"A tiara",
"A car",
"A ring",

"He caught them together",
"Daisy told him about it",
"He saw a dog collar hided on her things and got suspicious",
"Her sister accidentally told him about her apartment in New York",

"Her best friend",
"Her cousin",
"Her sister",
"Her neighbour",

"As a red head, tall and gorgeous woman",
"As a faintly stout woman who carried her surplus flesh sensuously",
"As a sensual woman in the middle thirties",
"As a gorgeous woman with an angelic face"];
// VARIÁVEL QUE ARMAZENA QUAL PERGUNTA ESTÁ NA TELA DO JOGADOR
var numPergunta;
// VARIÁVEL QUE FAZ A CONTAGEM DE PONTOS DO JOGADOR
var pontos = 0;
var som0 = new Audio('musics/Abertura.mp3');
var som1 = new Audio('musics/Quiz.mp3');
var som2 = new Audio('musics/SomMansão.mp3');
var som3 = new Audio('musics/SomMenu.mp3');
var som4 = new Audio('musics/Botao.wav');
var som5 = new Audio('musics/BotaoQuiz.wav');
var som6 = new Audio('musics/PortaTrancada.mp3');
var som7 = new Audio('musics/PortaAberta.mp3');
var som8 = new Audio('musics/Key.wav');
var som9 = new Audio('musics/Papel.wav');
var som10 = new Audio('musics/Simbolo.wav');
var som11 = new Audio('musics/LanternaOn.wav');
var som12 = new Audio('musics/LanternaOff.wav');
var som13 = new Audio('musics/PegarLanterna.wav');

// VARIÁVEIS SEM USO
var TheGatsbysParty = new Array(); 
var checkCookie = 0;

// ARMAZENA O NOME DO JOGADOR
var nome;
// ARMAZENA A PÁGINA ATUAL, OBS: 0 PARA A INICIAL
var pagina = 0;
// ARMAZENA O PERSONAGEM ESCOLHIDO PARA O QUIZZ, 7 É O NÚMERO EMPTY, OU SEJA, O QUE SERVE PARA CHECAGEM SE 
// ALGUM PERSONAGEM FOI ESCOLHIDO OU NÃO
var personagem = 7;
// VARIÁVEL QUE ARMAZENA O NÚMERO DA ALTERNATIVA CLICADA, PARA QUE POSSA SER CHECADO SE ESTÁ CERTO OU NÃO
var alternativa;
var alternativaSelecionada = 0;
var fase;
var itemChaveBiblioteca = 0;
var chaveBiblioteca;
var itemChaveJardim = 0;
var chaveJardim;
var itemChavePorao = 0;
var chavePorao;
var itemLanterna = 0;
var lanterna;
var itemFotosDG = 0;
var FotosDG;
var foto;
var resolvoDG = 0;
var resolvoPersonagem = 0;
var pontosResolvoPersonagem = 0;
var opcaoPersonagemTexto;
var resolvoCofre = 0;
var imagemPorao;
var itemSimbolos = 0;
var Simbolos;
// VETOR QUE ARMAZENA O GABARITO DAS PERGUNTAS DA JORDAN
var game = {};

game.elements = 18;
game.selected = "";
game.stage = 1;
game.success = [
                ['0px','0px'],
                ['-100px', '0px'],
                ['-200px', '0px'],
                ['-300px', '0px'],
                ['-400px', '0px'],
                ['-500px', '0px'],
                ['0px', '-100px'],
                ['-100px', '-100px'],
                ['-200px', '-100px'],
                ['-300px', '-100px'],
                ['-400px', '-100px'],
                ['-500px', '-100px'],
                ['0px', '-200px'],
                ['-100px', '-200px'],
                ['-200px', '-200px'],
                ['-300px', '-200px'],
                ['-400px', '-200px'],
                ['-500px', '-200px']
               ]
game.current = game.success.slice(0);
//

var sobre;
var sumiuSobre = 0;
var btnVoltar;
var sumiubtnVoltar = 0;
var page0; //Página Inicial
var sumiuPage0 = 1;
var page1; //Quizz 
var sumiuPage1 = 0;
var page2; //Seleção de Fases
var sumiuPage2 = 0;
var page3; //Sala Principal
var sumiuPage3 = 0;
var page4; //Sala 
var sumiuPage4 = 0;
var page5; //Sala Jardim
var sumiuPage5 = 0;
var page6; //Sala Visitas
var sumiuPage6 = 0;
var page7; //Porta Escada
var sumiuPage7 = 0;
var page8; //Sala dos Quadros
var sumiuPage8 = 0;
var page9; //Biblioteca
var sumiuPage9 = 0;
var page10;//Sala Secreta
var sumiuPage10 = 0;
var page11;//Porão
var sumiuPage11 = 0;
var page12;///Porta Sala de Visitas
var sumiuPage12 = 0;
var page13;
var sumiuPage13 = 0;
var page15;
var sumiuPage15 = 0;
var page99;///INÍCIO
var sumiuPage99 = 0;
//FUNÇÃO QUE TROCA A PÁGINA DO JOGO, trocaPagina(numero da página)
function trocaPagina(p){
	pagina = p;
	//ESSE SWITCH CHECA QUALPÁGINA ESTÁ SENDO CARREGADA, E DE TAL FORMA, RODA AS FUNÇÕES DA MESMA
	switch(pagina){
		case 0://Página Inicial
			//MUDA A IMAGEM DE FUNDO DA PÁGINA
			document.body.style.backgroundImage = "url('./images/inicio.jpg')";
			//CASO A PROFUNDIDADE DESSA TELA ESTEJA BAIXA, VAI PARA O MÁXIMO 
			if(sumiubtnVoltar == 0){
				btnVoltar = $("#voltar").detach();	
				sumiubtnVoltar = 1;
			}
			if(sumiuSobre == 1){
				//sobre = $("#box-principal-sobre").detach();	
				$("body").prepend(sobre);
				sumiuSobre = 0;
			}
			if(sumiuPage15 == 0){
				page15 = $("#pre-fim").detach();	
				sumiuPage15 = 1;
			}
			if(sumiuPage13 == 0){
				page13 = $("#fase1-fim").detach();	
				sumiuPage13 = 1;
			}
			if(sumiuPage12 == 0){
				page12 = $("#fase1-PortaSalaDeVisitas").detach();	
				sumiuPage12 = 1;
			}
			if(sumiuPage11 == 0){
				page11 = $("#fase1-Porao").detach();	
				sumiuPage11 = 1;
			}
			if(sumiuPage10 == 0){
				page10 = $("#fase1-SalaSecreta").detach();	
				sumiuPage10 = 1;
			}
			if(sumiuPage9 == 0){
				page9 = $("#fase1-Biblioteca").detach();	
				sumiuPage9 = 1;
			}
			if(sumiuPage8 == 0){
				page8 = $("#fase1-SalaQuadros").detach();	
				sumiuPage8 = 1;
			}
			if(sumiuPage7 == 0){
				page7 = $("#fase1-portaDG").detach();	
				sumiuPage7 = 1;
			}
			if(sumiuPage6 == 0){
				page6 = $("#fase1-SalaVisitas").detach();	
				sumiuPage6 = 1;
			}
			if(sumiuPage5 == 0){
				page5 = $("#fase1-Jardim").detach();	
				sumiuPage5 = 1;
			}
			if(sumiuPage4 == 0){
				page4 = $("#fase1-Sala").detach();	
				sumiuPage4 = 1;
			}
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if (sumiuPage2 == 0) {
				page2 = $("#box-progress").detach();	
				sumiuPage2 = 1;
			}
			if (sumiuPage1 == 0) {
				page1 = $("#box-quizz").detach();	
				sumiuPage1 = 1;
			}	
			if (sumiuPage99 == 0) {
				page99 = $("#box-inicio").detach();	
				sumiuPage1 = 0;
			}		
			if(sumiuPage0 == 1){
				$("body").prepend(page0);
				sumiuPage0 = 0;
				$('#myModal').modal('show');
				document.getElementById("exampleModalLabel").innerHTML = "FOR A FULL EXPERIENCE, CLICK ON F11!";
			}
			document.getElementById("box-principal").style.opacity = 1;
	
		break;
		case 1://Quizz
			//CHECA SE O NOME DO JOGADOR FOI DIGITADO OU SE O PERSONAGEM FOI ESCOLHIDO
			som4.play();
			if (document.getElementById("box-principal-nome").value == "" || personagem == 7 || personagem == null) {
				//CASO O PERSONAGEM NÃO TENHA SIDO ESCOLHIDO ROLA ESSE IF
				if (document.getElementById("box-principal-nome").value == "" && personagem == 7 || personagem == null) {
					$('#myModal').modal('show');
					document.getElementById("exampleModalLabel").innerHTML = "CHOOSE YOUR CHARACTER, AND ENTER YOUR NAME.";
					//VOLTA PARA A PÁGINA INICIAL
					trocaPagina(0);	
				}else if (personagem == 7 || personagem == null) {
					$('#myModal').modal('show');
					document.getElementById("exampleModalLabel").innerHTML = "CHOOSE YOUR CHARACTER";
					//VOLTA PARA A PÁGINA INICIAL
					trocaPagina(0);	
				} else if (document.getElementById("box-principal-nome").value == "") {
					$('#myModal').modal('show');
					document.getElementById("exampleModalLabel").innerHTML = "ENTER YOUR NAME";
					trocaPagina(0);	
				}		
			//CASO O JOGADOR TENHA DIGITADO O NOME E ESCOLHIDO O PERSONAGEM, A PÁGINA QUIZZ É CARREGADA		
			}else{
				switch(personagem){
					case 0:
						document.body.style.backgroundImage = "url('./images/quizz-gatsby.jpg')";
					break;
					case 1:
						document.body.style.backgroundImage = "url('./images/quizz-daisy.jpg')";
					break;
					case 2:
						document.body.style.backgroundImage = "url('./images/quizz-nick.jpg')";
					break;
					case 3:
						document.body.style.backgroundImage = "url('./images/quizz-jordan.jpg')";
					break;
					case 4:
						document.body.style.backgroundImage = "url('./images/quizz-tom.jpg')";
					break;
					case 5:
						document.body.style.backgroundImage = "url('./images/quizz-myrtle.jpg')";
					break;
				}
				$("body").prepend(page1);
				if (numPergunta == 7) {
					document.getElementById("alternativa0").style.opacity = 1;
					document.getElementById("alternativa1").style.opacity = 1;
					document.getElementById("alternativa2").style.opacity = 1;
					document.getElementById("alternativa3").style.opacity = 1;
					document.getElementById("pergunta").style.fontSize = "23px";
					document.getElementById("pergunta").style.textAlign = "none";
					document.getElementById("quizz-next").style.fontSize = "16px";
					document.getElementById("quizz-next").style.top = "92%";
					document.getElementById("quizz-next").style.left = "43.5%";
					document.getElementById("quizz-next").style.transform = "translate(-43.5%, 0);";
				}
				document.getElementById("box-quizz").style.opacity = 1;
				sumiuPage1 = 0;
				nomeJogador();
				numPergunta = 99;
				mudaPergunta();
				if(sumiuPage0 == 0){
					page0 = $("#box-principal").detach();
					sumiuPage0 = 1;
				}
				if(sumiuSobre == 0){
					sobre = $("#box-principal-sobre").detach();	
					//$("body").prepend(sobre);
					sumiuSobre = 1;
				}
				//COMEÇA PELA PERGUNTA INICIAL
				}
		break;
		case 2://Tela troca de fases
			if(sumiubtnVoltar == 0){
				btnVoltar = $("#voltar").detach();	
				sumiubtnVoltar = 1;
			}
			page99 = $("#box-inicio").detach();	
			if(sumiuPage15 == 0){
				page15 = $("#pre-fim").detach();	
				sumiuPage15 = 1;
			}
			if(sumiuPage13 == 0){
				page13 = $("#fase1-fim").detach();	
				sumiuPage13 = 1;
			}
			if(sumiuPage12 == 0){
				page12 = $("#fase1-PortaSalaDeVisitas").detach();	
				sumiuPage12 = 1;
			}
			if(sumiuPage11 == 0){
				page11 = $("#fase1-Porao").detach();	
				sumiuPage11 = 1;
			}
			if(sumiuPage10 == 0){
				page10 = $("#fase1-SalaSecreta").detach();	
				sumiuPage10 = 1;
			}
			if(sumiuPage9 == 0){
				page9 = $("#fase1-Biblioteca").detach();	
				sumiuPage9 = 1;
			}
			if(sumiuPage8 == 0){
				page8 = $("#fase1-SalaQuadros").detach();	
				sumiuPage8 = 1;
			}
			if(sumiuPage7 == 0){
				page7 = $("#fase1-portaDG").detach();	
				sumiuPage7 = 1;
			}
			if(sumiuPage6 == 0){
				page6 = $("#fase1-SalaVisitas").detach();	
				sumiuPage6 = 1;
			}
			if(sumiuPage5 == 0){
				page5 = $("#fase1-Jardim").detach();	
				sumiuPage5 = 1;
			}
			if(sumiuPage4 == 0){
				page4 = $("#fase1-Sala").detach();	
				sumiuPage4 = 1;
			}
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if (sumiuPage1 == 0) {
				page1 = $("#box-quizz").detach();	
				sumiuPage1 = 1;
			}
			if(sumiuPage0 == 0){
				page0 = $("#box-principal").detach();	
				sumiuPage0 = 1;
			}
			if (sumiuPage2 == 1) {
				$("body").prepend(page2);
				sumiuPage2 = 0;
			}
			document.body.style.backgroundImage = "url('./images/fase1.jpg')";
			document.getElementById("box-progress").style.opacity = 1;
			document.getElementById("box-progress-seta-e").style.opacity = 0;
			document.getElementById("box-progress-seta-e").style.cursor = 'auto';
			fase = 1;
			carregaPersonagem();
			TheGatsbysParty[1] = personagem;
			TheGatsbysParty[2] = fase;
			salvarJogo();
		break;
		case 3://Salão Principal			
			if (sumiuPage2 == 0) {
				som4.play();
				page2 = $("#box-progress").detach();	
				sumiuPage2 = 1;
			}
			if(sumiuPage12 == 0){
				page12 = $("#fase1-PortaSalaDeVisitas").detach();	
				sumiuPage12 = 1;
			}
			if(sumiuPage9 == 0){
				page9 = $("#fase1-Biblioteca").detach();	
				sumiuPage9 = 1;
			}
			if(sumiuPage8 == 0){
				page8 = $("#fase1-SalaQuadros").detach();	
				sumiuPage8 = 1;
			}
			if(sumiuPage7 == 0){
				page7 = $("#fase1-portaDG").detach();	
				sumiuPage7 = 1;
			}
			if(sumiuPage6 == 0){
				page6 = $("#fase1-SalaVisitas").detach();	
				sumiuPage6 = 1;
			}
			if(sumiuPage5 == 0){
				page5 = $("#fase1-Jardim").detach();	
				sumiuPage5 = 1;
			}
			if (sumiuPage4 == 0) {
				page4 = $("#fase1-Sala").detach();	
				sumiuPage4 = 1;
			}
			if(sumiuPage3 == 1){
				$("body").prepend(page3);
				sumiuPage3 = 0;
			}
			if(sumiubtnVoltar == 1){
				$("body").prepend(btnVoltar);
				sumiubtnVoltar = 0;
				$('#box-mentor').modal('show');
				document.getElementById("box-mentor-fala").innerHTML = "I’m p-paralyzed with happiness for seeing you again! This is the entrance room of the Gatsby Mansion. What about trying to open some doors or finding some objects to continue the game?";
			}
			document.body.style.backgroundImage = "url('./images/fase1-sala-principal.jpg')";
			document.getElementById("voltar-btn").style.opacity = 1;
		break;
		case 4://Sala
			if(sumiuPage8 == 0){
				page8 = $("#fase1-SalaQuadros").detach();	
				sumiuPage8 = 1;
			}
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if(sumiuPage4 == 1){
				$("body").prepend(page4);
				sumiuPage4 = 0;
			}
			if(itemChaveJardim == 1){
				document.body.style.backgroundImage = "url('./images/fase1-salaS.jpg')";
			}else{
				document.body.style.backgroundImage = "url('./images/fase1-salaC.jpg')";
			}
			resolvoDG = 1;
			TheGatsbysParty[8] = resolvoDG;
			salvarJogo();
		break;
		case 5://Jardim
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if(sumiuPage5 == 1){
				$("body").prepend(page5);
				sumiuPage5 = 0;
			}
			if(itemLanterna == 1){
				document.body.style.backgroundImage = "url('./images/fase1-jardim.jpg')";
			}else{
				document.body.style.backgroundImage = "url('./images/fase1-jardimLanterna.jpg')";
			}
		break;
		case 6://Sala de Visitas
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if(sumiuPage12 == 0){
				page12 = $("#fase1-PortaSalaDeVisitas").detach();	
				sumiuPage12 = 1;
			}
			if(sumiuPage6 == 1){
				$("body").prepend(page6);
				sumiuPage6 = 0;
			}
			som7.pause();
			if(chaveBiblioteca == 1){
				document.body.style.backgroundImage = "url('./images/fase1-sala-visitasS.jpg')";
			}else{
				document.body.style.backgroundImage = "url('./images/fase1-sala-visitasC.jpg')";
			}
		break;
		case 7://Porta da Escada
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if(sumiuPage7 == 1){
				$("body").prepend(page7);
				sumiuPage7 = 0;
			}
			document.body.style.backgroundImage = "url('./images/fase1-portaL.jpg')";
			if(itemFotosDG == 1){
				document.getElementById("box-dg-fala").style.opacity = 0;
				document.getElementById("box-dg-fala").style.zIndex = -1;
				$("body").prepend(foto);
				game.startGame();
			}else{
				foto = $("box-dg-image").detach();
				document.getElementById("box-dg-fala").style.opacity = 1;
			}
			$('#box-dg').modal('show');
		break;
		case 8://Sala dos Quadros
			if (sumiuPage4 == 0) {
				page4 = $("#fase1-Sala").detach();	
				sumiuPage4 = 1;
			}
			if(sumiuPage8 == 1){
				$("body").prepend(page8);
				sumiuPage8 = 0;
			}
			som7.play();
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "I’m seeing some symbols in the paintings. Maybe is some code… Wow!";
			document.body.style.backgroundImage = "url('./images/fase1-sala-quadros.jpg')";
			document.getElementById("fase1-SalaQuadros-quadro1").style.opacity = 1;
			if(itemSimbolos == 1){
				som10.play();
				document.getElementById("fase1-simbolos0").style.opacity = 1;
			}
		break;
		case 9://Biblioteca
			if(sumiuPage10 == 0){
				page10 = $("#fase1-SalaSecreta").detach();	
				sumiuPage10 = 1;
			}
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if(sumiuPage9 == 1){
				$("body").prepend(page9);
				sumiuPage9 = 0;
			}
			if(itemFotosDG == 1){
				document.body.style.backgroundImage = "url('./images/fase1-bibliotecaS.jpg')";
			}else{
				document.body.style.backgroundImage = "url('./images/fase1-bibliotecaC.jpg')";
			}
		break;
		case 10://Sala Secreta
			if(sumiuPage11 == 0){
				page11 = $("#fase1-Porao").detach();	
				sumiuPage11 = 1;
				if(itemLanterna == 1){
					som12.play();
				}
			}
			if(sumiuPage9 == 0){
				page9 = $("#fase1-Biblioteca").detach();	
				sumiuPage9 = 1;
			}
			if(sumiuPage10 == 1){
				$("body").prepend(page10);
				sumiuPage10 = 0;
			}
			clear();
			document.body.style.backgroundImage = "url('./images/fase1-sala-secreta.jpg')";
			document.getElementById("fase1-SalaSecreta-cofre").style.opacity = 1;
		break;
		case 11://Porão
			if(sumiuPage10 == 0){
				page10 = $("#fase1-SalaSecreta").detach();	
				sumiuPage10 = 1;
			}
			if(sumiuPage11 == 1){
				$("body").prepend(page11);
				sumiuPage11 = 0;
			}
			if(itemLanterna == 0 || itemLanterna == null){
				$('#box-mentor').modal('show');
				document.getElementById("box-mentor-fala").innerHTML = "This room doesn’t have energy… Wait a minute! I know what to do! Let’s look for a flashlight outside.";
			}else{
				som11.play();
				document.getElementById("fase1-Porao-lanterna").style.opacity = 1;
			}
			document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,1),rgba(0,0,0,1)),url('./images/fase1-porao.jpg')";
		break;
		case 12:
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if(sumiuPage12 == 1){
				$("body").prepend(page12);
				sumiuPage12 = 0;
			}
			document.body.style.backgroundImage = "url('./images/fase1-portaDG.jpg')";
			gamePersonagem();
		break;
		case 13:
			if(sumiubtnVoltar == 0){
				btnVoltar = $("#voltar").detach();	
				sumiubtnVoltar = 1;
			}
			if(sumiuPage15 == 0){
				page15 = $("#pre-fim").detach();	
				sumiuPage15 = 1;
			}
			if(sumiuPage11 == 0){
				page11 = $("#fase1-Porao").detach();	
				sumiuPage11 = 1;
			}
			if(sumiuPage13 == 1){
				$("body").prepend(page13);
				sumiuPage13 = 0;
			}
			clear();
			document.getElementById("jogo-creditos-id").style.opacity = 1;
			document.getElementById("fase1-fim-next").style.opacity = 1;
			document.body.style.backgroundImage = "url('./images/escuro.jpg')";
			setTimeout(function(){
				trocaPagina(14);
			}, 52000);	
		break;
		case 14:
			location.reload();
		break;
		case 15:
			if(sumiubtnVoltar == 0){
				btnVoltar = $("#voltar").detach();	
				sumiubtnVoltar = 1;
			}
			if(sumiuPage11 == 0){
				page11 = $("#fase1-Porao").detach();	
				sumiuPage11 = 1;
			}
			if(sumiuPage15 == 1){
				$("body").prepend(page15);
				sumiuPage15 = 0;
			}
			clear();
			document.getElementById("fase1-pre-fim-next").style.opacity = 1;
			document.body.style.backgroundImage = "url('./images/fase1-fim.jpg')";
		break;
		case 99:
			if(sumiubtnVoltar == 0){
				btnVoltar = $("#voltar").detach();	
				sumiubtnVoltar = 1;
			}
			if(sumiuPage15 == 0){
				page15 = $("#pre-fim").detach();	
				sumiuPage15 = 1;
			}
			if(sumiuPage13 == 0){
				page13 = $("#fase1-fim").detach();	
				sumiuPage13 = 1;
			}
			if(sumiuPage12 == 0){
				page12 = $("#fase1-PortaSalaDeVisitas").detach();	
				sumiuPage12 = 1;
			}
			if(sumiuPage11 == 0){
				page11 = $("#fase1-Porao").detach();	
				sumiuPage11 = 1;
			}
			if(sumiuPage10 == 0){
				page10 = $("#fase1-SalaSecreta").detach();	
				sumiuPage10 = 1;
			}
			if(sumiuPage9 == 0){
				page9 = $("#fase1-Biblioteca").detach();	
				sumiuPage9 = 1;
			}
			if(sumiuPage8 == 0){
				page8 = $("#fase1-SalaQuadros").detach();	
				sumiuPage8 = 1;
			}
			if(sumiuPage7 == 0){
				page7 = $("#fase1-portaDG").detach();	
				sumiuPage7 = 1;
			}
			if(sumiuPage6 == 0){
				page6 = $("#fase1-SalaVisitas").detach();	
				sumiuPage6 = 1;
			}
			if(sumiuPage5 == 0){
				page5 = $("#fase1-Jardim").detach();	
				sumiuPage5 = 1;
			}
			if(sumiuPage4 == 0){
				page4 = $("#fase1-Sala").detach();	
				sumiuPage4 = 1;
			}
			if(sumiuPage3 == 0){
				page3 = $("#fase1-SalaoPrincipal").detach();	
				sumiuPage3 = 1;
			}
			if (sumiuPage2 == 0) {
				page2 = $("#box-progress").detach();	
				sumiuPage2 = 1;
			}
			if (sumiuPage1 == 0) {
				page1 = $("#box-quizz").detach();	
				sumiuPage1 = 1;
			}
			if(sumiuSobre == 0){
				sobre = $("#box-principal-sobre").detach();	
				//$("body").prepend(sobre);
				sumiuSobre = 1;
			}	
			if(sumiuPage99 == 0){
				$("body").prepend(page99);
				sumiuPage99 = 0;
			}
		    var img1;
		    var img2 = $('#inicio2').detach();
		    var img3 = $('#inicio3').detach();
		    var tudo;
		    document.body.style.backgroundImage = "url('./images/fase1-porao-escuro.jpg')";

		    document.getElementById("inicio1").style.opacity = 1;
		    setTimeout(function(){
		    	img1 = $('#inicio1').detach();
		    	$("body").prepend(img2);
		    }, 4000);
		    setTimeout(function(){
		    	img2 = $('#inicio2').detach();
		    	$("body").prepend(img3);
		    }, 8000);
		    setTimeout(function(){
		    	img3 = $('#inicio3').detach();
		    	tudo = $('#box-inicio').detach();
		    	trocaPagina(0);
		    }, 12000);

		break;
	}
}

//FUNÇÃO QUE CARREGA QUAL PERSONAGEM FOI ESCOLHIDO
function escolhePersonagem(p){
	if(personagem != p){
		document.getElementById("box-principal-personagem" + p).style.outline = '5px solid #646464';
		document.getElementById("box-principal-personagem" + p).style.filter = 'grayscale(100%)';
		if(personagem != 7 && personagem != null){
			document.getElementById("box-principal-personagem" + personagem).style.outline = 'none';
			document.getElementById("box-principal-personagem" + personagem).style.filter = 'grayscale(0%)';	
		}
	}
	personagem = p;
}

function carregaPersonagem(){
	switch(personagem){
		case 0:
			document.getElementById("box-mentor-Label").innerHTML = "Gatsby";
			document.getElementById("box-mentor0-Label").innerHTML = "Gatsby";
		break;
		case 1:
			document.getElementById("box-mentor-Label").innerHTML = "Daisy";
			document.getElementById("box-mentor0-Label").innerHTML = "Daisy";
		break;
		case 2:
			document.getElementById("box-mentor-Label").innerHTML = "Nick";
			document.getElementById("box-mentor0-Label").innerHTML = "Nick";
		break;
		case 3:
			document.getElementById("box-mentor-Label").innerHTML = "Jordan";
			document.getElementById("box-mentor0-Label").innerHTML = "Jordan";
		break;
		case 4:
			document.getElementById("box-mentor-Label").innerHTML = "Tom";
			document.getElementById("box-mentor0-Label").innerHTML = "Tom";
		break;
		case 5:
			document.getElementById("box-mentor-Label").innerHTML = "Myrtle";
			document.getElementById("box-mentor0-Label").innerHTML = "Myrtle";
		break;
		case 7:
			document.getElementById("box-mentor-Label").innerHTML = "Sarah Cat";
			document.getElementById("box-mentor0-Label").innerHTML = "Sarah Cat";
		break;
	}
}

//FUNÇÃO QUE MANDA O NOME DO JOGADOR NO CAMPO DE TEXTO PARA A VARÍAVEL NOME
function nomeJogador(){
	nome = document.getElementById("box-principal-nome").value;
	TheGatsbysParty[0] = nome;
	salvarJogo();
}

//FUNÇÃO QUE CHECA QUAL ALTERNATIVA FOI SELECIONADA
function selecionarAlternativa(alt){
	if(alternativa != null){
		if (alt != alternativa) {
			document.getElementById("alternativa" + alt).style.backgroundColor = "#8e8e8e";		
			document.getElementById("alternativa" + alt).style.color = "white";
			document.getElementById("alternativa" + alternativa).style.backgroundColor = "transparent";		
			document.getElementById("alternativa" + alternativa).style.color = "#bbb";
			alternativaSelecionada = 1;
		}else {
			document.getElementById("alternativa" + alt).style.backgroundColor = "#8e8e8e";		
			document.getElementById("alternativa" + alt).style.color = "white";
			alternativaSelecionada = 1;
		}
	}else {
		document.getElementById("alternativa" + alt).style.backgroundColor = "#8e8e8e";		
		document.getElementById("alternativa" + alt).style.color = "white";
		alternativaSelecionada = 1;
	}
	alternativa = alt;			
}

//FUNÇÃO QUE MUDA A PERGUNTA
function mudaPergunta() {
	if(numPergunta > 0 && numPergunta < 98){
		som5.pause();
	}else{
		som5.play();
	}
	if(numPergunta != 99){
		document.getElementById("icon-check").style.opacity = 0;
		document.getElementById("icon-times").style.opacity = 0;
		document.getElementById("alternativa0").style.opacity = 1;
		document.getElementById("alternativa1").style.opacity = 1;
		document.getElementById("alternativa2").style.opacity = 1;
		document.getElementById("alternativa3").style.opacity = 1;
		document.getElementById("pergunta").style.fontSize = "23px";
		document.getElementById("pergunta").style.textAlign = "left";
		document.getElementById("quizz-next").style.fontSize = "16px";
		document.getElementById("quizz-next").style.left = "43.5%";
		document.getElementById("quizz-next").style.transform = "translate(-43.5%, 0)";
		document.getElementById("quizz-next").style.top = "92%";
		document.getElementById("quizz-next").onclick = corrigirAlternativa;
		//VARIÁVEL QUE CARREGA QUAIS ALTERNATIVAS SERÃO CARREGADAS
		var qq = 4*numPergunta+4;
		//MUDA O TEXTO DA PERGUNTA
		switch(personagem){
			case 0: 
				document.getElementById("pergunta").innerHTML = perguntasDoGatsby[numPergunta];
				//MUDA O TEXTO DAS ALTERNATIVAS
				document.getElementById("alternativa0").innerHTML = respostasDoGatsby[qq - 4];
				document.getElementById("alternativa1").innerHTML = respostasDoGatsby[qq - 3];
				document.getElementById("alternativa2").innerHTML = respostasDoGatsby[qq - 2];
				document.getElementById("alternativa3").innerHTML = respostasDoGatsby[qq - 1];
				
			break;
			case 1: 
				document.getElementById("pergunta").innerHTML = perguntasDaDaisy[numPergunta];
				//MUDA O TEXTO DAS ALTERNATIVAS
				document.getElementById("alternativa0").innerHTML = respostasDaDaisy[qq - 4];
				document.getElementById("alternativa1").innerHTML = respostasDaDaisy[qq - 3];
				document.getElementById("alternativa2").innerHTML = respostasDaDaisy[qq - 2];
				document.getElementById("alternativa3").innerHTML = respostasDaDaisy[qq - 1];
			break;
			case 2: 
				document.getElementById("pergunta").innerHTML = perguntasDoNick[numPergunta];
				//MUDA O TEXTO DAS ALTERNATIVAS
				document.getElementById("alternativa0").innerHTML = respostasDoNick[qq - 4];
				document.getElementById("alternativa1").innerHTML = respostasDoNick[qq - 3];
				document.getElementById("alternativa2").innerHTML = respostasDoNick[qq - 2];
				document.getElementById("alternativa3").innerHTML = respostasDoNick[qq - 1];
			break;
			case 3: 
				document.getElementById("pergunta").innerHTML = perguntasDaJordan[numPergunta];
				//MUDA O TEXTO DAS ALTERNATIVAS
				document.getElementById("alternativa0").innerHTML = respostasDaJordan[qq - 4];
				document.getElementById("alternativa1").innerHTML = respostasDaJordan[qq - 3];
				document.getElementById("alternativa2").innerHTML = respostasDaJordan[qq - 2];
				document.getElementById("alternativa3").innerHTML = respostasDaJordan[qq - 1];
			break;
			case 4: 
				document.getElementById("pergunta").innerHTML = perguntasDoTom[numPergunta];
				//MUDA O TEXTO DAS ALTERNATIVAS
				document.getElementById("alternativa0").innerHTML = respostasDoTom[qq - 4];
				document.getElementById("alternativa1").innerHTML = respostasDoTom[qq - 3];
				document.getElementById("alternativa2").innerHTML = respostasDoTom[qq - 2];
				document.getElementById("alternativa3").innerHTML = respostasDoTom[qq - 1];
			break;
			case 5: 
				document.getElementById("pergunta").innerHTML = perguntasDaMyrtle[numPergunta];
				//MUDA O TEXTO DAS ALTERNATIVAS
				document.getElementById("alternativa0").innerHTML = respostasDaMyrtle[qq - 4];
				document.getElementById("alternativa1").innerHTML = respostasDaMyrtle[qq - 3];
				document.getElementById("alternativa2").innerHTML = respostasDaMyrtle[qq - 2];
				document.getElementById("alternativa3").innerHTML = respostasDaMyrtle[qq - 1];
			break;
		}
		if(alternativaSelecionada == 1){
			document.getElementById('alternativa' + alternativa).style.backgroundColor = "transparent";		
			document.getElementById('alternativa' + alternativa).style.color = "#bbb";
			alternativaSelecionada = 0;
		}
	}else{
		corrigirAlternativa();
	}
}

//CORRIGI SE A ALTERNATIVA CLICADA ESTÁ CERTA
function corrigirAlternativa(){
	if(numPergunta > 4 && numPergunta < 98 && numPergunta != 6){
		som5.pause();
	}else{
		som5.play();
	}
	if (alternativaSelecionada == 1) {
		if (numPergunta > 4){
			if(numPergunta == 6){
				trocaPagina(2);
			}
			if (numPergunta == 7) {
				trocaPagina(0);
			}
			if(numPergunta == 5){
				document.getElementById("icon-check").style.opacity = 0;
				document.getElementById("icon-times").style.opacity = 0;
				document.getElementById("alternativa0").style.opacity = 0;
				document.getElementById("alternativa1").style.opacity = 0;
				document.getElementById("alternativa2").style.opacity = 0;
				document.getElementById("alternativa3").style.opacity = 0;
				if (pontos >= 3) {
					document.getElementById("pergunta").innerHTML = "Congratulations " + nome + "! You scored correctly " + pontos + " of 5 questions, now I can guide you through the rest of the game, see you soon!";
					numPergunta = 6;
					pontos = 0;
				}else{
					document.getElementById("pergunta").innerHTML = "I'm sorry " + nome + ", you only scored correctly " + pontos + " of 5 questions and I won't be able to be your guide during the rest of the game. But don't be sad, try again with one of my friends from the last page! Good luck!";
					numPergunta = 7;
					pontos = 0;
				}
				document.getElementById("pergunta").style.fontSize = "40px";
				document.getElementById("pergunta").style.textAlign = "center";
				document.getElementById("quizz-next").style.fontSize = "33px";
				document.getElementById("quizz-next").style.left = "52%";
				document.getElementById("quizz-next").style.transform = "translate(-52%, 0)";
				if(pontos < 3){
					document.getElementById("quizz-next").style.top = "75%";
				}else {
					document.getElementById("quizz-next").style.top = "50%";
				}
			}
		}else{
		//CASO A ALTERNATIVA SELECIONADA SEJA A CORRETA, ADICIONA UM PONTO AOS PONTOS
			switch(personagem){
				case 0:
					if(gabaritoGatsby[numPergunta] == alternativa){
						pontos += 1;
						var y = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = y - 10 + 'px';
					}else{
						var aa = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-times").style.opacity = 1;
						document.getElementById("icon-times").style.top = aa - 10 + 'px';

						var bb = getOffset(document.getElementById("alternativa" + gabaritoGatsby[numPergunta])).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = bb - 10 + 'px';
					}
				break;
				case 1:
					if(gabaritoDaisy[numPergunta] == alternativa){
						pontos += 1;
						var y = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = y - 10 + 'px';
					}else{
						var aa = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-times").style.opacity = 1;
						document.getElementById("icon-times").style.top = aa - 10 + 'px';

						var bb = getOffset(document.getElementById("alternativa" + gabaritoDaisy[numPergunta])).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = bb - 10 + 'px';
					}
				break;
				case 2:
					if(gabaritoNick[numPergunta] == alternativa){
						pontos += 1;
						var y = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = y - 10 + 'px';
					}else{
						var aa = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-times").style.opacity = 1;
						document.getElementById("icon-times").style.top = aa - 10 + 'px';

						var bb = getOffset(document.getElementById("alternativa" + gabaritoNick[numPergunta])).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = bb - 10 + 'px';
					}
				break;
				case 3:
					if(gabaritoJordan[numPergunta] == alternativa){
						pontos += 1;
						var y = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = y - 10 + 'px';
					}else{
						var aa = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-times").style.opacity = 1;
						document.getElementById("icon-times").style.top = aa - 10 + 'px';

						var bb = getOffset(document.getElementById("alternativa" + gabaritoJordan[numPergunta])).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = bb - 10 + 'px'; 
					}
				break;
				case 4:
					if(gabaritoTom[numPergunta] == alternativa){
							pontos += 1;
						var y = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = y - 10 + 'px';
					}else{
						var aa = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-times").style.opacity = 1;
						document.getElementById("icon-times").style.top = aa - 10 + 'px';

						var bb = getOffset(document.getElementById("alternativa" + gabaritoTom[numPergunta])).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = bb - 10 + 'px';
					}
				break;
				case 5:
					if(gabaritoMyrtle[numPergunta] == alternativa){
						pontos += 1;
						var y = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = y - 10 + 'px';
					}else{
						var aa = getOffset(document.getElementById("alternativa" + alternativa)).top;
						document.getElementById("icon-times").style.opacity = 1;
						document.getElementById("icon-times").style.top = aa - 10 + 'px';

						var bb = getOffset(document.getElementById("alternativa" + gabaritoMyrtle[numPergunta])).top;
						document.getElementById("icon-check").style.opacity = 1;
						document.getElementById("icon-check").style.top = bb - 10 + 'px';
					}
				break;
			}
			if (numPergunta < 5) {
				numPergunta += 1;
				if (numPergunta < 5) {
					setTimeout(mudaPergunta, 1000);		
				} else {
					setTimeout(corrigirAlternativa, 1000);
				}
			}	
			console.log(pontos);
		}
	}else if(numPergunta == 99){
		document.getElementById("pergunta").innerHTML = "Hi " + nome + "! Before we start the game, I need to test your knowledge about me, if you can answer correctly at least 3 of the following questions I’ll be your guide during the rest of the game. Good luck!";
		document.getElementById("icon-check").style.opacity = 0;
		document.getElementById("icon-times").style.opacity = 0;
		document.getElementById("alternativa0").style.opacity = 0;
		document.getElementById("alternativa1").style.opacity = 0;
		document.getElementById("alternativa2").style.opacity = 0;
		document.getElementById("alternativa3").style.opacity = 0;
		document.getElementById("pergunta").style.fontSize = "40px";
		document.getElementById("pergunta").style.textAlign = "center";
		document.getElementById("quizz-next").style.fontSize = "33px";
		document.getElementById("quizz-next").style.left = "52%";
		document.getElementById("quizz-next").style.transform = "translate(-52%, 0)";
		document.getElementById("quizz-next").style.top = "75%";
		document.getElementById("quizz-next").onclick = mudaPergunta;
		numPergunta = 0;
	}else{
		$('#myModal').modal('show');
		document.getElementById("exampleModalLabel").innerHTML = "Choose an alternative.";
	}
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}


function mudaFase(a){
	if(a == 0){
		switch(fase){
			case 2:
				fase = 1;
				document.getElementById("box-progress-titulo").innerHTML = "GATSBY'S MANSION";
				document.getElementById("box-progress-sinopseFase").innerHTML = "“In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.”";
				document.getElementById("box-progress-seta-e").style.opacity = 0;
				document.getElementById("box-progress-seta-e").style.cursor = 'auto';
				document.getElementById("box-progress-seta-d").style.opacity = 1;
				document.getElementById("box-progress-seta-d").style.cursor = 'pointer';
				document.body.style.backgroundImage = "url('./images/fase1.jpg')";
				document.getElementById("fase-bloqueada").style.opacity = 0;
				document.getElementById("fase-bloqueada").style.zIndex = -1;
			break;
		}
	}else if(a == 1){
		switch(fase){
			case 1:
				fase = 1;
				/*document.getElementById("box-progress-titulo").innerHTML = "BUCHANAN'S HOUSE";
				document.getElementById("box-progress-sinopseFase").innerHTML = "“I hope she'll be a fool-that's the best thing a girl can be in this world, a beautiful little fool.”";
				document.getElementById("box-progress-seta-e").style.opacity = 1;
				document.getElementById("box-progress-seta-e").style.cursor = 'pointer';
				document.getElementById("box-progress-seta-d").style.opacity = 0;
				document.getElementById("box-progress-seta-d").style.cursor = 'auto';
				document.body.style.backgroundImage = "url('./images/fase2.jpg')";
				document.getElementById("fase-bloqueada").style.opacity = 1;
				document.getElementById("fase-bloqueada").style.zIndex = 10;*/
			break;
		}
	}
}

function voltar(){
	if(pagina < 5){
		trocaPagina(pagina-1);
	}else if(pagina >= 5){
		if (pagina == 8) {
			document.getElementById("fase1-simbolos0").style.opacity = 0;
			trocaPagina(4);	
		}else if(pagina == 10){
			trocaPagina(9)
		}else if(pagina == 11){
			trocaPagina(10);
		}else{
			trocaPagina(3);
		}
	}
}

function pegaChave(a){
	switch(a){
		case 0:
			som8.play();
			itemChaveBiblioteca = 1;
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "You’ve found a key! Try to use it to open one of the locked doors.";
			document.body.style.backgroundImage = "url('./images/fase1-sala-visitasS.jpg')";
			TheGatsbysParty[3] = itemChaveBiblioteca;
			salvarJogo();
		break;
		case 1:
			som8.play();
			itemChaveJardim = 1;
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "You’ve found a key! Try to use it to open one of the locked doors.";
			document.body.style.backgroundImage = "url('./images/fase1-salaS.jpg')";
			TheGatsbysParty[4] = itemChaveJardim;
			salvarJogo();
		break;
	}	
}

function fase1(a){
	switch(a){
		case 1://Sala
				trocaPagina(4);
		break;
		case 2://Jardim
			if(itemChaveJardim == 0 || itemChaveJardim == null){
				som6.play();
				$('#box-mentor').modal('show');
				document.getElementById("box-mentor-fala").innerHTML = "This door is locked for now! Guess you’ll have to find the key to open it.";
			}else{
				som7.play();
				trocaPagina(5);
			}
		break;
		case 3://Porta sala lateral
			if(resolvoDG == 0 || resolvoDG == null){
				som6.play();
				trocaPagina(7);
			}else{
				som7.play();
				trocaPagina(4);
			}
		break;
		case 4://Porta Sala de Visitas
			if (resolvoPersonagem == 0 || resolvoPersonagem == null) {
				som6.play();
				trocaPagina(12);
			}else {
				som7.play();
				trocaPagina(6);
			}
		break;
		case 5://Sala dos Quadros
			trocaPagina(8);
		break;
		case 6://Biblioteca
			if(itemChaveBiblioteca == 0 || itemChaveBiblioteca == null){
				som6.play();
				$('#box-mentor').modal('show');
				document.getElementById("box-mentor-fala").innerHTML = "This door is locked for now! Guess you’ll have to find the key to open it.";
			}else{
				som7.play();
				trocaPagina(9);
			}
		break;
		case 7://Sala Secreta
			trocaPagina(10);
		break;
		case 8:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "What a beautiful art piece, but there's nothing here that we can use.";			
		break;
		case 9://Sala de Visitas
			trocaPagina(6);
		break;
		case 10:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "The sun is still shinning, we don’t need to turn up the lights.";
		break;
		case 11:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "These flowers are beautiful, but there’s nothing here.";
		break;
		case 12:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "The sun is still shinning, we don’t need to turn up the lights.";
		break;
		case 13:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "Why do you wanna sit? The fun is just beggining!";
		break;
		case 14:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "These books must be amazing, but there’s nothing here.";
		break;
		case 15:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "It's only a mirror... There's nothing here.";
		break;
		case 16:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "It’s a beautiful day!";
		break;
		case 17:
			$('#box-mentor0').modal('show');
			document.getElementById("box-mentor0-fala").innerHTML = "Do you wanna see whats behind that painting?";
		break;
		case 18:
			if(itemChavePorao == 1){
				som7.play();
				trocaPagina(11);
			}else{
				som6.play();
				$('#box-mentor').modal('show');
				document.getElementById("box-mentor-fala").innerHTML = "WOW! It looks like a secret door, unfortunally its locked. Let's try to find the key.";
			}		
		break;
		case 19:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "This painting is really beautiful.";			
		break;
		case 20:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "This fountain is beautiful, don’t	t you think?";			
		break;
		case 21:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "There's nothing inside here.";			
		break;
		case 22:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "This is a beautiful family crest!";			
		break;
		case 23:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "There's nothing inside this box, let's keep looking other ones.";			
		break;
		case 24:
			$('#myModal0').modal('hide');
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "It was wonderful to explore the Gatsby mansion with you! Hope I’ll see you again at the Buchanans house on the next level! See you around.";						
			document.getElementById("box-mentor-continuar").onclick = acabaJogo;
		break;
		case 25:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "These books must be amazing, but there’s nothing here.";						
		break;
		case 26:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "We don't have time to drink. We need to focus.";						
		break;
		case 27:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "Those silk curtains are gorgeous!";						
		break;
		case 28:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "You can't go outside.";						
		break;
		case 29:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "The Gatsby's gardener must work really hard to maintain these gorgeous garden.";						
		break;
		case 30:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "The Gatsby's gardener must work really hard to maintain these gorgeous garden.";						
		break;
		case 31:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "There's nothing here.";						
		break;
		case 32:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "There's nothing in this wall.";						
		break;
		case 33:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "I guess there's nothing else here;";						
		break;
		case 34:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "We can't go up stairs.";						
		break;
		case 35:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "These flowers are beautiful, but there’s nothing here.";						
		break;
		case 99:
			$('#box-mentor').modal('show');
			document.getElementById("box-mentor-fala").innerHTML = "It's just a bathroom, there's nothing here.";
		break;
	}
}

function lerLivros(a){
	switch(a){
		case 0:
			som9.play();
			$('#myModal').modal('show');
			document.getElementById("exampleModalLabel").innerHTML = "The relationship between geography and social values is an important motif in The Great Gatsby. Each setting in the novel corresponds to a particular thematic idea or character type. The first chapter introduces two of the most important locales, East Egg and West Egg. Though each is home to fabulous wealth, and though they are separated only by a small expanse of water, the two regions are nearly opposite in the values they endorse. East Egg represents breeding, taste, aristocracy, and leisure, while West Egg represents ostentation, garishness, and the flashy manners of the new rich. East Egg is associated with the Buchanans and the monotony of their inherited social position, while West Egg is associated with Gatsby’s gaudy mansion and the inner drive behind his self-made fortune. The unworkable intersection of the two Eggs in the romance between Gatsby and Daisy will serve as the fault line of catastrophe.";
		break;
		case 1:
			som9.play();
			$('#myModal').modal('show');
			document.getElementById("exampleModalLabel").innerHTML = "According to Jordan, during the war, before Daisy married Tom, she was a beautiful young girl in Louisville, Kentucky, and all the military officers in town were in love with her. Daisy fell in love with Lieutenant Jay Gatsby, who was stationed at the base near her home. Though she chose to marry Tom after Gatsby left for the war, Daisy drank herself into numbness the night before her wedding, after she received a letter from Gatsby. Daisy has apparently remained faithful to her husband throughout their marriage, but Tom has not. Jordan adds that Gatsby bought his mansion in West Egg solely to be near Daisy.";
		break;
		case 2:
			som9.play();
			$('#box-cofre-aberto').modal('hide');
			$('#box-tm').modal('show');
			document.getElementById("box-tm-Label").innerHTML = "Halfway between West Egg and New York City sprawls a desolate plain, a gray valley where New York’s ashes are dumped. The men who live here work at shoveling up the ashes. Overhead, two huge, blue, spectacle-rimmed eyes—the last vestige of an advertising gimmick by a long-vanished eye doctor—stare down from an enormous sign. These unblinking eyes, the eyes of Doctor T. J. Eckleburg, watch over everything that happens in the valley of ashes.";
		break;
		case 20:
			som9.play();
			$('#box-cofre-aberto').modal('show');
		break;
	}
}

function abrirQuadro(a){
	switch(a){
		case 0:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-0.jpg";
		break;
		case 1:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-1.jpg";
		break;
		case 2:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-2.jpg";
		break;
		case 3:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-3.jpg";
		break;
		case 4:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-4.jpg";
		break;
		case 5:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-5.jpg";
		break;
		case 6:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-6.jpg";
		break;
		case 7:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-7.jpg";
		break;
		case 8:
			$('#box-quadro').modal('show');
			document.getElementById("fase1-SalaQuadros-quadro1-open").src = "./images/quadro-8.jpg";
		break;
	}	
}

function pegaLanterna(){
	som13.play();
	itemLanterna = 1;
	$('#box-mentor').modal('show');
	document.getElementById("box-mentor-fala").innerHTML = "You found a flashlight! Great! Now we can see on dark rooms.";
	TheGatsbysParty[6] = itemLanterna;
	salvarJogo();
}

function livroBiblioteca(){
	$('#box-mentor').modal('show');
	document.getElementById("box-mentor-fala").innerHTML = "These books must be amazing, but there’s nothing here.";	
}

function gamePersonagem(){
	$('#box-game-personagem').modal('show');
}

function gamePersonagemTexto(a){
	switch(a){
		case 0:
			som9.play();
			$('#box-textos').modal('show');
			document.getElementById("box-textosImagem").src = "./images/texto_tom.jpg";
		break;
		case 1:
			som9.play();
			$('#box-textos').modal('show');
			document.getElementById("box-textosImagem").src = "./images/texto_jordan.jpg";
		break;
		case 2:
			som9.play();
			$('#box-textos').modal('show');
			document.getElementById("box-textosImagem").src = "./images/texto_gatsby.jpg";
		break;
		case 3:
			som9.play();
			$('#box-textos').modal('show');
			document.getElementById("box-textosImagem").src = "./images/texto_myrtle.jpg";
		break;
		case 4:
			som9.play();
			$('#box-textos').modal('show');
			document.getElementById("box-textosImagem").src = "./images/texto_daisy.jpg";	
		break;
		case 5:
			som9.play();
			$('#box-textos').modal('show');
			document.getElementById("box-textosImagem").src = "./images/texto_nick.jpg";
		break;
		case 99:
			$('#box-game-personagem').modal('show');
		break;
	}
}

function selecionarGamePersonagemTexto(op){
	if(opcaoPersonagemTexto != null){
		if (op != opcaoPersonagemTexto) {
			if((op <= 5 && opcaoPersonagemTexto <=5) || (op >= 6 && opcaoPersonagemTexto >=6)){
				document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).checked = false;
				document.getElementById("fase1-Biblioteca-check" + op).checked = true;
			}else{
				op = corrigirGamePersonagem(op);
			}
		}else{
			document.getElementById("fase1-Biblioteca-check" + op).checked = false;
		}
	}else {
		document.getElementById("fase1-Biblioteca-check" + op).checked = true;
	}
	opcaoPersonagemTexto = op;			
}

function corrigirGamePersonagem(op){
	if ((opcaoPersonagemTexto == 0 || opcaoPersonagemTexto == 8) && (op == 0 || op == 8)) {	
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).disabled = true;	
		document.getElementById("fase1-Biblioteca-check" + op).disabled = true;			
		pontosResolvoPersonagem += 1;
	}else if ((opcaoPersonagemTexto == 1 || opcaoPersonagemTexto == 10) && (op == 1 || op == 10)) {
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).disabled = true;	
		document.getElementById("fase1-Biblioteca-check" + op).disabled = true;	
		pontosResolvoPersonagem += 1;
	}else if ((opcaoPersonagemTexto == 2 || opcaoPersonagemTexto == 11) && (op == 2 || op == 11)) {
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).disabled = true;	
		document.getElementById("fase1-Biblioteca-check" + op).disabled = true;	
		pontosResolvoPersonagem += 1;
	}else if ((opcaoPersonagemTexto == 3 || opcaoPersonagemTexto == 7) && (op == 3 || op == 7)) {
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).disabled = true;	
		document.getElementById("fase1-Biblioteca-check" + op).disabled = true;	
		pontosResolvoPersonagem += 1;
	}else if ((opcaoPersonagemTexto == 4 || opcaoPersonagemTexto == 6) && (op == 4 || op == 6)) {
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).disabled = true;	
		document.getElementById("fase1-Biblioteca-check" + op).disabled = true;	
		pontosResolvoPersonagem += 1;
	}else if ((opcaoPersonagemTexto == 5 || opcaoPersonagemTexto == 9) && (op == 5 || op == 9)) {
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).disabled = true;	
		document.getElementById("fase1-Biblioteca-check" + op).disabled = true;	
		pontosResolvoPersonagem += 1;
	}else{
		document.getElementById("fase1-Biblioteca-check" + opcaoPersonagemTexto).checked = false;	
		document.getElementById("fase1-Biblioteca-check" + op).checked = false;
	} 
	return null;
}

function fotoDG(){
	som9.play();
	$('#box-mentor').modal('show');
	document.getElementById("box-mentor-fala").innerHTML = "You found a photo! It may be useful for something.";
	document.body.style.backgroundImage = "url('./images/fase1-bibliotecaS.jpg')";
	itemFotosDG = 1;
	TheGatsbysParty[7] = itemFotosDG;
	salvarJogo();
}

function cofre(){
	if(resolvoCofre == 0 || resolvoCofre == null){
		$('#box-cofre').modal('show');
		if(itemSimbolos == 1){
			som10.play();
			document.getElementById("fase1-simbolos1").style.opacity = 1;
		}
	}else {
		cofreResolvido();
	}
}

function pegaSimbolos(){
	som10.play();
	$('#box-mentor').modal('show');	
	document.getElementById("box-mentor-fala").innerHTML = "You found a caption of codes. It may be useful later, I’ll keep it for you.";
	itemSimbolos = 1;
	TheGatsbysParty[11] = itemSimbolos;
	salvarJogo();
}

function tiraPapelSimbolos(){
	document.getElementById("fase1-simbolos1").style.opacity = 0;
}

function irSalaDeVisitas(){
	$('#box-game-personagem').modal('hide');
	fase1(4);
}

function cofreResolvido(){
	document.getElementById("fase1-simbolos1").style.opacity = 0;
	$('#box-cofre').modal('hide');
	$('#box-cofre-aberto').modal('show');
}

function pegaChavePorao(){
	som8.play();
	itemChavePorao = 1;
	$('#box-mentor').modal('show');	
	document.getElementById("box-mentor-fala").innerHTML = "You’ve found a key! Try to use it to open one of the locked doors.";
	document.getElementById("box-mentor-continuar").style.opacity = 0;
	setTimeout(someChavePorao, 3500);
	TheGatsbysParty[5] = itemChavePorao;
	salvarJogo();
}

function someChavePorao(){
	document.getElementById("box-mentor-continuar").style.opacity = 1;
	$('#box-mentor').modal('hide');	
	$('#box-cofre-aberto').modal('show');
	document.getElementById("box-cofre-aberto-cofre").src = "./images/fase1-cofreCarta.jpg";	
}

function abreCaixaPorao(){
	$('#box-caixa-aberta').modal('show');
}

function caixaPapel(){
	$('#box-caixa-aberta').modal('hide');
	/*if(sumiubtnVoltar == 0){
		btnVoltar = $("#voltar").detach();	
		sumiubtnVoltar = 1;
	}
	trocaPagina(13);*/
	$('#myModal0').modal('show');
	document.getElementById("exampleModalLabel0").innerHTML = "“Gatsby was born James Gatz on a North Dakota farm, and though he attended college at St. Olaf’s in Minnesota, he dropped out after two weeks, loathing the humiliating janitorial work by means of which he paid his tuition. He worked on Lake Superior the next summer fishing for salmon and digging for clams. One day, he saw a yacht owned by Dan Cody, a wealthy copper mogul, and rowed out to warn him about an impending storm. The grateful Cody took young Gatz, who gave his name as Jay Gatsby, on board his yacht as his personal assistant. Traveling with Cody to the Barbary Coast and the West Indies, Gatsby fell in love with wealth and luxury. Cody was a heavy drinker, and one of Gatsby’s jobs was to look after him during his drunken binges. This gave Gatsby a healthy respect for the dangers of alcohol and convinced him not to become a drinker himself. When Cody died, he left Gatsby $25,000, but Cody’s mistress prevented him from claiming his inheritance. Gatsby then dedicated himself to becoming a wealthy and successful man.”";
}

function acabaJogo(){
	trocaPagina(15);
}

function mostrarSobre(){
	$('#box-sobre').modal('show');
}

function setup() {
	//carregaJogo();
	//comecaJogo();
	trocaPagina(99);
	createCanvas(2000, 2000);
}

function draw(){
	if (pagina == 12) {
		if (pontosResolvoPersonagem == 6) {
			resolvoPersonagem = 1;
			TheGatsbysParty[9] = resolvoPersonagem;
			salvarJogo();
			setTimeout(irSalaDeVisitas, 1500);
		}
	}
	if (resolvoCofre == 0 || resolvoCofre == null) {
		var a = document.getElementById("box-cofre-num0").value;
		var b = document.getElementById("box-cofre-num1").value;
		var c = document.getElementById("box-cofre-num2").value;
		var d = document.getElementById("box-cofre-num3").value;

		if (a == 1 && b == 9 && c == 2 && d == 2) {
			resolvoCofre = 1;
			TheGatsbysParty[10] = resolvoCofre;
			salvarJogo();
			setTimeout(cofreResolvido, 500);
		}
	}
	if(pagina == 10){
		if(resolvoCofre == 0 || resolvoCofre == null){
			document.body.style.backgroundImage = "url('./images/fase1-sala-secreta.jpg')";
		}else{
			document.body.style.backgroundImage = "url('./images/fase1-sala-secreta-aberto.jpg')";
		}
	}
	/*if (chavePorao != null && pagina == 10) {
		$('#box-mentor').modal('hide');
		$('#box-cofre-aberto').modal('show');
		document.getElementById("box-mentor-continuar").style.opacity = 1;
		chavePorao = null;		
	}*/

	if(pagina == 11 && itemLanterna == 1){
		var top = mouseY;
        var left = mouseX;
        var torch = document.getElementById('fase1-Porao-lanterna');
        torch.style.clip = "rect("+(top-90)+"px,"+(left+90)+"px,"+(top+90)+"px,"+(left-90)+"px)";
        clear();
        noFill();
        stroke(0, 200);
        strokeWeight(30);
        ellipse(mouseX, mouseY, 170, 170);
        noFill();
        stroke(0);
        strokeWeight(68);
        ellipse(mouseX, mouseY, 243, 243);
	}
	if(pagina == 5 && itemLanterna == 1){
		document.body.style.backgroundImage = "url('./images/fase1-jardim.jpg')";
	}
	if(itemChaveBiblioteca == 1){
		if(chaveBiblioteca == null){
			chaveBiblioteca = $("#fase1-SalaoVisitas-chaveBiblioteca").detach();
		}
	}
	if(itemChaveJardim == 1){
		if(chaveJardim == null){
			chaveJardim = $("#fase1-Sala-chaveJardim").detach();
		}
	}
	if(itemChavePorao == 1){
		if(chavePorao == null){
			chavePorao = $("#box-cofre-aberto-chavePorao").detach();
		}
	}
	if(itemLanterna == 1){
		if(lanterna == null){
			lanterna = $("#fase1-Jardim-lanterna").detach();
		}
	}
	if(itemFotosDG == 1){
		if(FotosDG == null){
			FotosDG = $("#fase1-Biblioteca-dg").detach();					
		}
	}
	if(itemSimbolos == 1){
		if(Simbolos == null){
			Simbolos = $("#fase1-Biblioteca-simbolos").detach();
		}
	}
	if(pagina == 99){
		som0.play();
	}else if(pagina == 0){
		som0.pause();
		som3.play();
	}else if(pagina == 1){
		som3.pause();
		som1.play();
	}else if(pagina == 2){
		som1.pause();
		som2.pause();
		som3.play();
	}else if(pagina > 2 && pagina < 99){
		som3.pause();
		som2.play();
	}
}

game.createParts = function() {
  var pic = $("#box-dg-image");
  for(var i = 0; i < game.elements; i++) {
    pic.append('<div class="pics" id="img-' + i + '"></div>');
  }
}

game.updateParts = function() {
  var j = 0;
  $("#box-dg-image > div").each(function () {
    $(this).css('background', 'url("images/' + game.stage + '.jpg") no-repeat');
    $(this).css('background-position', '' + game.current[j][0] + ' ' + game.current[j][1]);
    if(game.stage === 1) {
      $(this).on("click", game.changePart)
    }
    j++;
  });
}

game.shuffle = function (o) {
  for(var j, x, i = o.length; i; 
    j = parseInt(Math.random() * i), //1
    x = o[--i], //x = o[17]
    o[i] = o[j], //o[18] = o[1]
    o[j] = x); //o[0] = o[17]
  return o;
}

game.changePart = function() {
  var x, y, s;
  if(game.selected === "") {
    game.selected = $(this).attr('id');
    $(this).addClass('selected');
  } else if(game.selected == $(this).attr('id')) {
      $(this).removeClass('selected');
      game.selected = "";
  } else {
    s = $("#" + game.selected);
    x = $(this).css('background-position-x');
    y = $(this).css('background-position-y');
    $(this).css('background-position-x', s.css('background-position-x'));
    $(this).css('background-position-y', s.css('background-position-y'));
    s.css('background-position-x', x);
    s.css('background-position-y', y);
    s.removeClass('selected');
    game.selected = "";
    game.checkParts();
  }
}

game.startGame = function() {
  game.createParts();
  game.loadStage();
}

game.loadStage = function() {
  $("#box-dg-result").hide();
  game.current = game.shuffle(game.current);
  game.updateParts(game.stage);
}

game.checkParts = function() {
  var win = false;
  for(var i = 0; i < game.elements; i++) {
    if($("#img-" + i).css('background-position-x') == game.success[i][0] && $("#img-" + i).css('background-position-y') == game.success[i][1]) {
      win = true;
    } else {
      win = false;
      break;
    }
  }
  console.log(win);
  if(win) {
    var e = $("#box-dg-end");
    var a = $("#box-dg-image");
    e.css('background', 'url("images/' + game.stage + '.jpg") no-repeat');
    a.fadeOut();
    e.fadeIn();
    $('#box-dg-result').delay(400).fadeIn();
    setTimeout(function(){
    	trocaPagina(4); 
    	$('#box-dg').modal('hide');
    }, 1300);
  }
}

function carregaJogo(){
	if (localStorage.gatsbysparty){
		TheGatsbysParty = JSON.parse(localStorage.gatsbysparty);
	}else {
		salvarJogo();
	}
}

function salvarJogo(){
	localStorage.gatsbysparty = JSON.stringify(TheGatsbysParty);
}

function comecaJogo(){
	nome = TheGatsbysParty[0];
	personagem = TheGatsbysParty[1];
	fase = TheGatsbysParty[2];
	itemChaveBiblioteca = TheGatsbysParty[3];
	itemChaveJardim = TheGatsbysParty[4];
	itemChavePorao = TheGatsbysParty[5];
	itemLanterna = TheGatsbysParty[6];
	itemFotosDG = TheGatsbysParty[7];
	resolvoDG = TheGatsbysParty[8];
	resolvoPersonagem = TheGatsbysParty[9];
	resolvoCofre = TheGatsbysParty[10];
	itemSimbolos = TheGatsbysParty[11];

	if(fase == 1){
		sumiuPage0 = 0;
		trocaPagina(2);
	}else{
		sumiuPage0 = 1;
		trocaPagina(99);
	}
}
/*function checarCookie(){
	nome = localStorage.getItem("nome");
	if(nome != ""){
		pagina = 1;
    	trocaPagina(pagina);
    	console.log(nome);
	}else {
		pagina = 0;
    	trocaPagina(pagina);
	}
}

function mandarCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}

function pegarCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checarCookie() {
    nome = document.cookie;
    if (nome != "") {
    	alert("Welcome again " + nome);
    	pagina = 1;
    	trocaPagina(pagina);
    } else {
    	pagina = 0;
    	trocaPagina(pagina);
    }
}*/