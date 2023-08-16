let lotteryTicketsArr = [];

window.onload = () => {
    loadData();
    document.getElementById("showData").onclick = onClickShowData;

}

function onClickShowData() {
    let rawData = document.getElementById("rawData");
    for(let ticket of lotteryTicketsArr) {
        let p = document.createElement("p");
        p.innerHTML = ticket["tixNum"] + " " + ticket["prize"];
        rawData.appendChild(p);
    }
}

function loadData() {
    fetch("http://127.0.0.1:5500/session2/workbook4/mod06/jsonExample/lotteryTickets.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            lotteryTicketsArr = data;
        });

}
