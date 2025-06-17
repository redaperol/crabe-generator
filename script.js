const adjectifs = [
  "sympathique", "malicieux", "rapide", "roux", "farceur", "timide", "élégant",
  "grognon", "ténébreux", "flamboyant", "sauvage", "craintif", "puissant",
  "charmant", "colérique", "mystique", "joyeux", "paresseux", "pétillant",
  "sérieux", "bruyant", "serein", "furtif", "adorable", "vif", "romantique"
];

function toPascalCase(mot) {
  return mot.charAt(0).toUpperCase() + mot.slice(1);
}

function genererCrabe() {
  const index = Math.floor(Math.random() * adjectifs.length);
  const adjectifChoisi = adjectifs[index];
  const nom = "Crabe" + toPascalCase(adjectifChoisi);

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
