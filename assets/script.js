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

// Função para calcular a área e o volume da esfera
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
