"use strict";
exports.__esModule = true;
var diaria = /** @class */ (function () {
    function diaria(qtdhoras, vlrhora, hradicional) {
        this.qtdhoras = qtdhoras;
        this.vlrhora = vlrhora;
        this.hradicional = hradicional;
    }
    diaria.prototype.distancia = function () {
        return this.vlrhora + this.hradicional * (this.qtdhoras - 1);
    };
    return diaria;
}());
exports.diaria = diaria;
