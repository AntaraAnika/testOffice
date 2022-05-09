
document.addEventListener("DOMContentLoaded", function (event) {


    const tableData = [
        {
            name: "Rahim Uddin",
            thana: "Savar",
            post: "Savar",
            regCattleNumber: 12
        },
        {
            name: "Rahim Uddin",
            thana: "Savar",
            post: "Savar",
            regCattleNumber: 12
        },
        {
            name: "Rahim Uddin",
            thana: "Savar",
            post: "Savar",
            regCattleNumber: 12
        },
        {
            name: "Rahim Uddin",
            thana: "Savar",
            post: "Savar",
            regCattleNumber: 12
        }
    ]

    const tableBody = document.querySelector("#insurance_table tbody");
    let html = ``;
    tableData.forEach((e) => {
        html += `
                    <tr>
                        <td scope="row"><a href="../agent_information/agent_information.html">${e.name}</></td>
                        <td>${e.thana}</td>
                        <td>${e.post}</td>
                        <td>${e.regCattleNumber}</td>
                    </tr>
        `

    })

    // console.log(html);

    tableBody.innerHTML = html;


});