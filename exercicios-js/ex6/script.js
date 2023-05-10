class Codigo {
  constructor(texto) {
    if (!this._valida(texto))
      throw new Error(`O texto:${texto} está no formato inválido!`);
    this._texto = texto;
  }

  _valida(texto) {
    return /^\d{4}-\d{2}-\d{2}$/.test(texto);
  }

  get texto() {
    return this._texto;
  }
}

let codigo1 = new Codigo("GWZ-JJ-12"); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo("1X1-JJ-12"); // inválido
console.log(codigo2.texto);
