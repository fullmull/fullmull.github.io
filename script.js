const korpa = []; 

const kupi = document.querySelectorAll('.kupi');

kupi.forEach(function(dugme) {
    dugme.addEventListener('click', function() {
        
        let imeProizvoda = dugme.getAttribute('data-proizvod') || "Nepoznat proizvod";

        if (confirm("Da li želite da kupite: " + imeProizvoda + "?")) {
            
            korpa.push(imeProizvoda);

            console.log("Kupovina potvrđena za: " + imeProizvoda);
            alert("Uspešno ste kupili: " + imeProizvoda);

            console.log("Istorija prodaje:");
            for (let i = 0; i < korpa.length; i++) {
                console.log("Prodato: " + korpa[i]);
            }

            let potvrda = document.createElement('span');
            potvrda.innerText = " (Vlasnik)";
            potvrda.style.color = "gold";
            dugme.appendChild(potvrda);
            dugme.disabled = true;

        } else {
            console.log("Otkazana kupovina artikla: " + imeProizvoda);
        }
    });
});
function proveriDuzinu(tekst, min) {
    if (tekst.length >= min) {
        return true;
    } else {
        return false;
    }
}
function formatirajKorisnika(ime, prezime) {
    let Ime = ime.trim() + " " + prezime.trim();
    return Ime.toUpperCase();
}
const forma = document.querySelector('form');
const inputIme = document.getElementById('ime');
const inputPrezime = document.getElementById('prezime');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputMsg = document.getElementById('msg');

if (forma) {
    forma.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let imeVrednost = inputIme.value.trim();
        let prezimeVrednost = inputPrezime.value.trim();
        let emailVrednost = inputEmail.value.trim();
        let telVrednost = inputTel.value.trim();
        let msgVrednost = inputMsg.value.trim();

        if (imeVrednost === "" || prezimeVrednost === "" || emailVrednost === "" || telVrednost === "" || msgVrednost === "") {
            alert("Sva polja su obavezna!");
            
            [inputIme, inputPrezime, inputEmail, inputTel, inputMsg].forEach(el => {
                if(el.value.trim() === "") {
                    el.style.borderColor = "red";
                } else {
                    el.style.borderColor = "";
                }
            });
            return;
        }
        if (proveriDuzinu(imeVrednost, 3)) {
            let punIme = formatirajKorisnika(imeVrednost, prezimeVrednost);

            console.log("Podaci iz forme:");
            console.log("Ime: " + imeVrednost);
            console.log("Prezime: " + prezimeVrednost);
            console.log("Mejl: " + emailVrednost);
            console.log("Telefon: " + telVrednost);
            console.log("Poruka: " + msgVrednost);

            alert("Hvala Vam, " + punIme + ". Poruka je poslata!");
            
            forma.style.backgroundColor = "#5a5a5a";
            [inputIme, inputPrezime, inputEmail, inputTel, inputMsg].forEach(el => el.style.borderColor = "");
        } else {
            alert("Ime mora imati bar 3 slova!");
            inputIme.style.borderColor = "red";
        }
    });
}
if (inputTel) {
    inputTel.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value === "") {
            this.style.border = "2px solid red";
        } else {
            this.style.border = "";
        }
    });
}