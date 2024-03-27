function search() {
    window.location.href = `https://www.google.com/search?q=${document.getElementById("search").value}&ie=UTF-8`;
}
document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
})
window.onload = function() {
    document.body.style.zoom = "110%";
  };