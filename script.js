const adjectifs = [
  "sympathique", "malicieux", "rapide", "roux", "farceur", "timide", "élégant",
  "grognon", "ténébreux", "flamboyant", "sauvage", "craintif", "puissant",
  "charmant", "colérique", "mystique", "joyeux", "paresseux", "pétillant",
  "sérieux", "bruyant", "serein", "furtif", "adorable", "vif"
];

function genererCrabe() {
  const index = Math.floor(Math.random() * adjectifs.length);
  const nom = "crabe" + adjectifs[index];
  document.getElementById("crabe-name").innerText = nom;
}

// Génère un crabe au chargement
window.onload = genererCrabe;
