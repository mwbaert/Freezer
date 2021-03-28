fetch("http://localhost:3000/items")
    .then(data => data.json())
    .then(data => {
        console.log(data);
    });


/*
fetch("http://localhost:3000/items", {
method: "POST",
headers: { "content-type": "application/json" },
body: JSON.stringify({
    "id": 1,
    "name": "prei-zalm",
    "description": "",
    "createdAt": new Date()
})
});*/