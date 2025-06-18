const adjectifs = [
  "Sympathique", "Malicieux", "Rapide", "Roux", "Farceur", "Timide", "Élégant",
  "Grognon", "Ténébreux", "Flamboyant", "Sauvage", "Craintif", "Puissant",
  "Charmant", "Colérique", "Mystique", "Joyeux", "Paresseux", "Pétillant",
  "Sérieux", "Bruyant", "Serein", "Furtif", "Adorable", "Vif", "Romantique"
];


function genererCrabe() {
  const index = Math.floor(Math.random() * adjectifs.length);
  const adjectifChoisi = adjectifs[index];
  const nom = "Crabe" + adjectifChoisi;

  const crabeElement = document.getElementById("crabe-name");
  const boutonCopier = document.querySelector("button[onclick='copierNom()']");

  crabeElement.innerText = nom;

  if (adjectifChoisi === "romantique") {
    crabeElement.classList.add("crabe-special");
    boutonCopier.disabled = true;
  } else {
    crabeElement.classList.remove("crabe-special");
    boutonCopier.disabled = false;
  }
}

function copierNom() {
  const nom = document.getElementById("crabe-name").innerText;
  navigator.clipboard.writeText(nom)
    .then(() => alert(`"${nom}" copié dans le presse-papiers !`))
    .catch(() => alert("Échec de la copie."));
}

// Génère un crabe au chargement
window.onload = genererCrabe;
