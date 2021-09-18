const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
]



function updateContent() {
    console.log("update content ran")

    var content = document.getElementById('content');
    console.log("this is working")
    
    links.forEach(element => {
        content.innerHTML += "<li>" + links.label.this + "</li>";
    });
}