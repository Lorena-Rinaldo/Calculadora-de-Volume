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

function limparMedidas() {
    document.getElementById('altura').value = "";
    document.getElementById('largura').value = "";
    document.getElementById('comprimento').value = "";
    document.getElementById('volume').style.display = "none";
    document.getElementById('area').style.display = "none";
    document.getElementById('perimetro').style.display = "none";
}

function toggleFormula() {
    var formulaDiv = document.getElementById("formula");
    if (formulaDiv.style.display === "none") {
        formulaDiv.style.display = "flex";  // Exibe o conteúdo
    } else {
        formulaDiv.style.display = "none";  // Oculta o conteúdo
    }
}