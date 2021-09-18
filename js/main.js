function updateContent() {
    const links = [
        {
          label: "Week1 notes",
          url: "week1/index.html"
        }
      ]

    var content = document.getElementById('content');
    links.forEach(label => {
        content.innerHTML += "<li>" + label + "<li>";
    });
}