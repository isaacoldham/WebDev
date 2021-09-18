console.log("why you no working")
function updateContent() {
    console.log("update content ran")
    const links = [
        {
          label: "Week1 notes",
          url: "week1/index.html"
        }
      ]

    var content = document.getElementById('content');
    console.log("this is working")
    
    links.forEach(element => {
        content.innerHTML += "<li>" + links.label + "</li>";
    });
}