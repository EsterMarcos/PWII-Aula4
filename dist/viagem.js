"use strict";
exports.__esModule = true;
var viagem = /** @class */ (function () {
    function viagem(tpgasto, vlmedia, rdveiculo) {
        this.tpgasto = tpgasto;
        this.vlmedia = vlmedia;
        this.rdveiculo = rdveiculo;
    }
    viagem.prototype.distancia = function () {
        return this.tpgasto * this.vlmedia;
    };
    viagem.prototype.consumo = function () {
        return this.distancia() / this.rdveiculo;
    };
    return viagem;
}());
exports.viagem = viagem;
