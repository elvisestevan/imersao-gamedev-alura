let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let somDoJogo;
let somPulo;

const matrizGotinha = [
          [0, 0],
          [105, 0],
          [210, 0],
          [315, 0],
          [0, 100],
          [105, 100],
          [210, 100],
          [315, 100],
          [0, 200],
          [105, 200],
          [210, 200],
          [315, 200],
          [0, 300],
          [105, 300],
          [210, 300],
          [315, 300],
          [0, 400],
          [105, 400],
          [210, 400],
          [315, 400],
          [0, 500],
          [105, 500],
          [210, 500],
          [315, 500],
          [0, 600],
          [105, 600],
          [210, 600],
          [315, 600]
      ];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {  
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 10);
  personagem = new Personagem(imagemPersonagem);
  inimigo = new Inimigo(matrizGotinha, imagemInimigo, width - 50, 52, 50, 105, 100);
  frameRate(40);
  somDoJogo.loop();
}

function draw() {    
  cenario.exibe();
  cenario.move();  

  personagem.exibe();  
  personagem.aplicaGravidade();
  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    noLoop(); 
  }
}

function keyPressed() {
  if (key == 'ArrowUp') {
    somPulo.play();
    personagem.pula();
  }
}