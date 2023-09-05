// Funktion zum Ausführen der Suche
function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    // Füge hier deine Logik zur Durchsuchung der Webseite ein

    // Beispiel: Weiterleitung zu einer Suchergebnisseite
    window.location.href = "suchergebnisse.html?query=" + encodeURIComponent(searchInput);
  }

  // Event-Handler für Klick auf den Suchbutton
  document.getElementById("searchButton").addEventListener("click", search);

  // Event-Handler für Enter-Taste in der Suchleiste
  document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });