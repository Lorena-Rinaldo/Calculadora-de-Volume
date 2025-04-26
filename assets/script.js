function calcularValoresTetraedro() {
    altura = document.getElementById('altura').value
    largura = document.getElementById('largura').value
    comprimento = document.getElementById('comprimento').value

    if (altura == "" || largura == "" || comprimento == "") {
        alert("Preencha todos os campos!");
    } else {

        let volume = Math.pow(largura, 3) / (6 * Math.sqrt(2));
        document.getElementById('volume').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volume').style.display = "block";

        let area = Math.pow(largura, 2) * Math.sqrt(3);
        document.getElementById('area').innerHTML = "Área: " + area.toFixed(2) + " cm²";
        document.getElementById('area').style.display = "block";

        let perimetro = largura * 6;
        document.getElementById('perimetro').innerHTML = "Perímetro: " + perimetro + " cm";
        document.getElementById('perimetro').style.display = "block";
    }
}

function calcularValoresCubo() {
    altura = document.getElementById('altura').value
    largura = document.getElementById('largura').value
    comprimento = document.getElementById('comprimento').value

    if (altura == "" || largura == "" || comprimento == "") {
        alert("Preencha todos os campos!");
    } else {

        let volume = altura * largura * comprimento
        document.getElementById('volume').innerHTML = "Volume: " + volume + " cm³";
        document.getElementById('volume').style.display = "block";

        let area = 2 * (altura * largura + altura * comprimento + largura * comprimento)
        document.getElementById('area').innerHTML = "Área: " + area + " cm²";
        document.getElementById('area').style.display = "block";

        let perimetro = 12 * largura;
        document.getElementById('perimetro').innerHTML = "Perímetro: " + perimetro + " cm";
        document.getElementById('perimetro').style.display = "block";
    }
}

function calcularValoresOctaedro() {
    altura = document.getElementById('altura').value
    largura = document.getElementById('largura').value
    comprimento = document.getElementById('comprimento').value

    if (altura == "" || largura == "" || comprimento == "") {
        alert("Preencha todos os campos!");
    } else {

        let volume = (Math.sqrt(2) / 3) * Math.pow(largura, 3);
        document.getElementById('volume').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volume').style.display = "block";

        let area = 2 * Math.sqrt(3) * Math.pow(largura, 2);
        document.getElementById('area').innerHTML = "Área: " + area.toFixed(2) + " cm²";
        document.getElementById('area').style.display = "block";

        let perimetro = largura * 12;
        document.getElementById('perimetro').innerHTML = "Perímetro: " + perimetro + " cm";
        document.getElementById('perimetro').style.display = "block";
    }
}

function calcularValoresIcosaedro() {
    altura = document.getElementById('altura').value
    largura = document.getElementById('largura').value
    comprimento = document.getElementById('comprimento').value

    if (altura == "" || largura == "" || comprimento == "") {
        alert("Preencha todos os campos!");
    } else {

        let volume = (5 / 12) * (3 + Math.sqrt(5)) * Math.pow(largura, 3);
        document.getElementById('volume').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volume').style.display = "block";

        let area = 5 * Math.sqrt(3) * Math.pow(largura, 2);
        document.getElementById('area').innerHTML = "Área: " + area.toFixed(2) + " cm²";
        document.getElementById('area').style.display = "block";

        let perimetro = largura * 30;
        document.getElementById('perimetro').innerHTML = "Perímetro: " + perimetro + " cm";
        document.getElementById('perimetro').style.display = "block";
    }
}

function calcularValoresDodecaedro() {
    altura = document.getElementById('altura').value
    largura = document.getElementById('largura').value
    comprimento = document.getElementById('comprimento').value

    if (altura == "" || largura == "" || comprimento == "") {
        alert("Preencha todos os campos!");
    } else {

        let volume = ((15 + 7 * Math.sqrt(5)) / 4) * Math.pow(largura, 3);
        document.getElementById('volume').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volume').style.display = "block";

        let areaFace = (5 * Math.pow(largura, 2) / 4) * (1 / Math.tan(Math.PI / 5));
        let areaTotal = 12 * areaFace;
        document.getElementById('area').innerHTML = "Área: " + areaTotal.toFixed(2) + " cm²";
        document.getElementById('area').style.display = "block";

        let perimetro = 30 * largura;
        document.getElementById('perimetro').innerHTML = "Perímetro: " + perimetro + " cm";
        document.getElementById('perimetro').style.display = "block";
    }
}

function calcularEsfera() {
    let raio = document.getElementById('raio').value;

    if (raio == "") {
        alert("Por favor, preencha o campo do Raio!");
    } else {
        let area = 4 * Math.PI * Math.pow(raio, 2);
        let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

        document.getElementById('area').innerHTML = "Área da superfície: " + area.toFixed(2) + " cm²";
        document.getElementById('area').style.display = "block";

        document.getElementById('volume').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volume').style.display = "block";
    }
}

function calcularCone() {
    let raioCone = document.getElementById('raioCone').value;
    let alturaCone = document.getElementById('alturaCone').value;

    if (raioCone == "" || alturaCone == "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        let geratriz = Math.sqrt(Math.pow(raioCone, 2) + Math.pow(alturaCone, 2));
        let area = Math.PI * Math.pow(raioCone, 2) + Math.PI * raioCone * geratriz;
        let volume = (1 / 3) * Math.PI * Math.pow(raioCone, 2) * alturaCone;

        document.getElementById('areaCone').innerHTML = "Área: " + area.toFixed(2) + " cm²";
        document.getElementById('areaCone').style.display = "block";

        document.getElementById('volumeCone').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volumeCone').style.display = "block";
    }
}

function calcularCilindro() {
    let raioCilindro = document.getElementById('raioCilindro').value;
    let alturaCilindro = document.getElementById('alturaCilindro').value;

    if (raioCilindro == "" || alturaCilindro == "") {
        alert("Por favor, preencha todos os campos!");
    } else {

        let area = (2 * Math.PI * Math.pow(raioCilindro, 2)) + (2 * Math.PI * raioCilindro * alturaCilindro);
        let volume = Math.PI * Math.pow(raioCilindro, 2) * alturaCilindro;

        document.getElementById('areaCilindro').innerHTML = "Área: " + area.toFixed(2) + " cm²";
        document.getElementById('areaCilindro').style.display = "block";

        document.getElementById('volumeCilindro').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
        document.getElementById('volumeCilindro').style.display = "block";
    }
}

function limparMedidas() {
    document.getElementById('altura').value = "";
    document.getElementById('largura').value = "";
    document.getElementById('comprimento').value = "";
    document.getElementById('volume').style.display = "none";
    document.getElementById('area').style.display = "none";
    document.getElementById('perimetro').style.display = "none";
}

function limparMedidasEsfera() {
    document.getElementById('raio').value = "";
    document.getElementById('volume').style.display = "none";
    document.getElementById('area').style.display = "none";
}

function limparMedidasCone() {
    document.getElementById('raioCone').value = "";
    document.getElementById('alturaCone').value = "";
    document.getElementById('areaCone').style.display = "none";
    document.getElementById('volumeCone').style.display = "none";
}

function limparMedidasCilindro() {
    document.getElementById("raioCilindro").value = "";
    document.getElementById("alturaCilindro").value = "";
    document.getElementById("areaCilindro").innerHTML = "";
    document.getElementById("volumeCilindro").innerHTML = "";
}

function toggleFormula() {
    var formulaDiv = document.getElementById("formula");
    if (formulaDiv.style.display === "none") {
        formulaDiv.style.display = "flex";
    } else {
        formulaDiv.style.display = "none";
    }
}

function mostrarCalculadora(formaSelecionada) {
    baseTriangular.style.display = "none";
    baseQuadrangular.style.display = "none";
    basePentagonal.style.display = "none";
    baseHexagonal.style.display = "none";
    baseHeptagonal.style.display = "none";
    baseOctogonal.style.display = "none";

    if (formaSelecionada === "triangular") {
        baseTriangular.style.display = "block";
    } else if (formaSelecionada === "quadrangular") {
        baseQuadrangular.style.display = "block";
    } else if (formaSelecionada === "pentagonal") {
        basePentagonal.style.display = "block";
    } else if (formaSelecionada === "hexagonal") {
        baseHexagonal.style.display = "block";
    } else if (formaSelecionada === "heptagonal") {
        baseHeptagonal.style.display = "block";
    } else if (formaSelecionada === "octogonal") {
        baseOctogonal.style.display = "block";
    }
}

function calcularVolume(tipoBase) {
    let areaBase, altura, volume;

    altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, insira um valor válido para a altura.");
        return;
    }

    if (tipoBase === "triangular") {
        let ladoTriangular = parseFloat(document.getElementById("ladoTriangular").value);
        if (isNaN(ladoTriangular) || ladoTriangular <= 0) {
            alert("Por favor, insira um valor válido para o lado do triângulo.");
            return;
        }
        areaBase = (Math.pow(ladoTriangular, 2) * Math.sqrt(3)) / 4;
    } else if (tipoBase === "quadrangular") {
        let comprimento = parseFloat(document.getElementById("comprimento").value);
        let largura = parseFloat(document.getElementById("largura").value);
        if (isNaN(comprimento) || comprimento <= 0 || isNaN(largura) || largura <= 0) {
            alert("Por favor, insira valores válidos para o comprimento e a largura.");
            return;
        }
        areaBase = comprimento * largura;
    } else if (tipoBase === "pentagonal") {
        let ladoPentagonal = parseFloat(document.getElementById("ladoPentagonal").value);
        if (isNaN(ladoPentagonal) || ladoPentagonal <= 0) {
            alert("Por favor, insira um valor válido para o lado da base pentagonal.");
            return;
        }
        areaBase = (5 * Math.pow(ladoPentagonal, 2)) / (4 * Math.tan(Math.PI / 5));
    } else if (tipoBase === "hexagonal") {
        let ladoHexagonal = parseFloat(document.getElementById("ladoHexagonal").value);
        if (isNaN(ladoHexagonal) || ladoHexagonal <= 0) {
            alert("Por favor, insira um valor válido para o lado da base hexagonal.");
            return;
        }
        areaBase = (3 * Math.sqrt(3) * Math.pow(ladoHexagonal, 2)) / 2;
    } else if (tipoBase === "heptagonal") {
        let ladoHeptagonal = parseFloat(document.getElementById("ladoHeptagonal").value);
        if (isNaN(ladoHeptagonal) || ladoHeptagonal <= 0) {
            alert("Por favor, insira um valor válido para o lado da base heptagonal.");
            return;
        }
        areaBase = (7 * Math.pow(ladoHeptagonal, 2)) / (4 * Math.tan(Math.PI / 7));
    } else if (tipoBase === "octogonal") {
        let ladoOctogonal = parseFloat(document.getElementById("ladoOctogonal").value);
        if (isNaN(ladoOctogonal) || ladoOctogonal <= 0) {
            alert("Por favor, insira um valor válido para o lado da base octogonal.");
            return;
        }
        areaBase = 2 * (1 + Math.sqrt(2)) * Math.pow(ladoOctogonal, 2);
    }

    volume = (areaBase * altura) / 3;

    document.getElementById("area").innerHTML = "Área da base: " + areaBase.toFixed(2) + " cm²";
    document.getElementById("volume").innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
    document.getElementById("area").style.display = "block";
    document.getElementById("volume").style.display = "block";
}

function limparCampos() {
    document.getElementById("ladoTriangular").value = "";
    document.getElementById("comprimento").value = "";
    document.getElementById("largura").value = "";
    document.getElementById("ladoPentagonal").value = "";
    document.getElementById("ladoHexagonal").value = "";
    document.getElementById("ladoHeptagonal").value = "";
    document.getElementById("ladoOctogonal").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("volume").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}

function toggleFormulaPiramides() {
    const tipoBase = document.getElementById('tipo').value;
    const formulaContainer = document.getElementById('formula');
    const descricaoFormula = document.getElementById('descricaoFormula');

    if (tipoBase === "triangular") {
        descricaoFormula.innerHTML = `
            <b>Fórmula para Pirâmide de Base Triangular:</b><br>
            Área da base (triangular):<br> 
            <b>A = (l² * √3) / 4</b><br>
            Volume da pirâmide:<br>
            <b>V = (A_b * h) / 3</b><br>
            <b>Fim.</b>
        `;
    } else if (tipoBase === "quadrangular") {
        descricaoFormula.innerHTML = `
            <b>Fórmula para Pirâmide de Base Quadrangular:</b><br>
            Área da base (quadrangular): <br>
            <b>A = comprimento × largura</b><br>
            Volume da pirâmide: <br>
            <b>V = (A_b * h) / 3</b><br>
            <b>Fim.</b>
        `;
    } else if (tipoBase === "pentagonal") {
        descricaoFormula.innerHTML = `
            <b>Fórmula para Pirâmide de Base Pentagonal:</b><br>
            Área da base (pentagonal):<br>
             <b>A = (5 * l²) / (4 * tan(π / 5))</b><br>
            Volume da pirâmide:<br>
             <b>V = (A_b * h) / 3</b><br>
            <b>Fim.</b>
        `;
    } else if (tipoBase === "hexagonal") {
        descricaoFormula.innerHTML = `
            <b>Fórmula para Pirâmide de Base Hexagonal:</b><br>
            Área da base (hexagonal):<br>
             <b>A = (3 * √3 * l²) / 2</b><br>
            Volume da pirâmide:<br>
             <b>V = (A_b * h) / 3</b><br>
            <b>Fim.</b>
        `;
    } else if (tipoBase === "heptagonal") {
        descricaoFormula.innerHTML = `
            <b>Fórmula para Pirâmide de Base Heptagonal:</b><br>
            Área da base (heptagonal):<br>
             <b>A = (7 * l²) / (4 * tan(π / 7))</b><br>
            Volume da pirâmide:<br>
             <b>V = (A_b * h) / 3</b><br>
            <b>Fim.</b>
        `;
    } else if (tipoBase === "octogonal") {
        descricaoFormula.innerHTML = `
            <b>Fórmula para Pirâmide de Base Octogonal:</b><br>
            Área da base (octogonal):<br>
             <b>A = 2 * (1 + √2) * l²</b><br>
            Volume da pirâmide:<br>
             <b>V = (A_b * h) / 3</b><br>
            <b>Fim.</b>
        `;
    }

    formulaContainer.style.display = formulaContainer.style.display === 'none' ? 'block' : 'none';
}






