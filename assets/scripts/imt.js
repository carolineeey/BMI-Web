
function count() {
    if (checkInput()) {
        let beratBadan = parseFloat(document.getElementById("beratBadan").value);
        let tinggiBadan=document.getElementById("tinggiBadan").value;
        let res = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));
        return res.toFixed(1);
    } else {
        return false;
    }
}

function checkInput() {
    let beratBadan = parseFloat(document.getElementById("beratBadan").value);
    let tinggiBadan=document.getElementById("tinggiBadan").value;
    if(tinggiBadan.length==3) {
        if(tinggiBadan.charAt(1)==".") {
            alert("Mohon masukkan tinggi badan Anda dengan format yang tepat. \nContoh : 160");
            reCount();
            return false;
        } else {
            tinggiBadan=parseFloat(tinggiBadan);
            return tinggiBadan;
        }
    } else {
        alert("Mohon masukkan tinggi badan Anda dengan format yang tepat. \nContoh : 160");
        reCount();
        return false;
    }
}

function searchClassification(result) {
    let classification;
    if (result < 17.0) {
        classification = "Berat badan kurus berat";
    } else if (result < 18.4) {
        classification = "Berat badan kurus ringan";
    } else if (result < 25.0) {
        classification = "Berat badan normal";
    } else if (result < 27.0) {
        classification = "Berat badan gemuk ringan";
    } else if (result > 27.0){
        classification = "Berat badan gemuk berat";
    } else {
        classification = "Klasifikasi tidak diketahui"
    }
    return classification;
}

function showResult() {
    const result = count()
    if (result) {
        document.getElementById("resultOutput").innerHTML = "";
        document.getElementById("resultOutput").innerHTML = result;
        classification = searchClassification(result);
        document.getElementById("resultClassification").innerHTML = "";
        document.getElementById("resultClassification").innerHTML = classification;
    } else {
        reCount();
    }
}

function reCount() {
    document.getElementById("beratBadan").value = "";
    document.getElementById("tinggiBadan").value = "";
    document.getElementById("resultOutput").innerHTML = "";
    document.getElementById("resultClassification").innerHTML = "";
}

const togButton = document.querySelector("button.toggle-nav");
const navItem = document.querySelectorAll("nav a");

togButton.addEventListener("click", function () {
    navItem.forEach(function (satuElm) {
        satuElm.classList.toggle("nav-item");
    });
});