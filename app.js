document.querySelector('button').addEventListener('click', function() {
    document.querySelector('#link').textContent = "";
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('activity').textContent = data.activity
        if(data.link) {
            document.querySelector('#link').href = data.link;
            document.querySelector('#link').textContent = data.link;
        }
    });
})