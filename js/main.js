const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week2",
        url: "week2/index.html"
    },
    {
        label: "Week3",
        url: "week3/index.html"
    },
    {
        label: "Week4",
        url: "week4/index.html"
    },
    {
        label: "Week5",
        url: "week5/index.html"
    },
    {
        label: "Week6",
        url: "week6/index.html"
    },
    {
        label: "Week7",
        url: "week7/index.html"
    }
]

console.table(links);

function updateContent() {
    console.log("update content ran")

    var content = document.getElementById('content');
    console.log("this is working")
    

    for (var i in links) {
        content.innerHTML += "<li><a href="+links[i].url+" class='links'><h3>" + links[i].label + "</h3></a></li>";
    }
    // links.forEach(element => {
    //     content.innerHTML += "<li>" + links.label.this + "</li>";
    // });
}