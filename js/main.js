const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
]

console.table(links);

function updateContent() {
    console.log("update content ran")

    var content = document.getElementById('content');
    console.log("this is working")
    

    for (var arrayIndex in links) {
        content.innerHTML += "<li>" + links[arrayIndex].label + "</li>";
    }
    // links.forEach(element => {
    //     content.innerHTML += "<li>" + links.label.this + "</li>";
    // });
}