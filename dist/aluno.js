"use strict";
exports.__esModule = true;
var aluno = /** @class */ (function () {
    function aluno(nome) {
        this.nome = nome;
    }
    aluno.prototype.exibir = function () {
        console.log("Nome:" + this.nome);
    };
    return aluno;
}());
exports.aluno = aluno;
