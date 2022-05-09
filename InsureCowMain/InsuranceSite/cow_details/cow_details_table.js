document.addEventListener("DOMContentLoaded", function (event) {


    const tableData = [
        {
            disease: "Fever",
            details: "Cow temperature was high  ",
            issueDate: "12 Dec 2021"
        },
        {
            disease: "Foot Rot  ",
            details: "The cow had a leg wound  ",
            issueDate: "08 Dec 2021  "
            
        },
        {
            disease: "Grass Tetany  ",
            details: "Cow blood falls magnesium critical level  ",
            issueDate: "15 Nov 2021  "
            
        },
        {
            disease: "White Muscle  ",
            details: "The cow was affected by skeletal muscle  ",
            issueDate: "10 Oct 2021  "   
        },
        {
            disease: "Dysentery  ",
            details: "Affected by bacterial infections  ",
            issueDate: "15 Sep 2021  "
        }
    ]

    const tableBody = document.querySelector("#vet-support-table tbody");
    let html = ``;
    tableData.forEach((e) => {
        html += `
                    <tr>
                        <td scope="row">${e.disease}</td>
                        <td>${e.details}</td>
                        <td>${e.issueDate}</td>
                        
                    </tr>
        `

    })

    // console.log(html);

    tableBody.innerHTML = html;


});