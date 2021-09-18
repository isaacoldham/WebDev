console.log("why you no working")
function updateContent() {
    const links = [
        {
          label: "Week1 notes",
          url: "week1/index.html"
        }
      ]

    var content = document.getElementById('content');
    content.innerHTML += "<li>" + label + "<li>";
    console.log("this is working")
    
    links.forEach(label => {
        content.innerHTML += "<li>" + label + "<li>";
    });
}