const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");
botao.addEventListener("click", function(){
    const t1 = document.getElementById("n1").value.trim();
    const t2 = document.getElementById("n2").value.trim();
    const t3 = document.getElementById("n3").value.trim();
 // TODO 1: verifique se algum campo está vazio.
    if (t1 === "" || t2 === "" || t3 === ""){
        saida.textContent = "Informe os valores.";
        return;
    }
// TODO 2: converta t1, t2 e t3 com Number().
    const v1 = Number(t1)
    const v2 = Number(t2)
    const v3 = Number(t3)
// TODO 3: valide as notas entre 0 e 10.
    if (!Number.isFinite(v1) || v1 < 0 || v1 > 10 
    || !Number.isFinite(v2) || v2 < 0 || v2 > 10 
    || !Number.isFinite(v3) || v3 < 0 || v3 > 10){
        saida.textContent = "Valores Inválidos. Apenas notas entre 0 e 10";
        return;
    }
// TODO 4: calcule a média.
    const media = (v1 + v2 + v3)/3

// TODO 5: use if/else para definir a situação.
    if (media >= 6){
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }
// TODO 6: mostre média e situação em saida.textContent.
saida.textContent = `Média ${media} - ${situacao}`
}
);
