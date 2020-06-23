class Personagem extends Animacao {
    constructor(imagem) {        
        let matriz = [
            [0, 0],
            [220,0],
            [440,0],
            [660,0],
            [0,270],
            [220,270],
            [440,270],
            [660,270],
            [0,540],
            [220,540],
            [440,540],
            [660,540],
            [0,810],
            [220,810],
            [440,810],
            [660,810]
        ];        
        super(matriz, imagem, 0, 110, 135, 220, 270);
        this.yInicial = height - 135;
        this.gravidade = 5;
        this.velocidadePulo = 0;
    }

    pula() {
        this.velocidadePulo = -30;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
        }
    }

    estaColidindo(inimigo) {
        const precisao = .7;
        return collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    }

}