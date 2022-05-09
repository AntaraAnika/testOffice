document.addEventListener("DOMContentLoaded", function (event) {

    const tableData = [

        {
            cattleId: 1010,
            ownerName: "Rahim Uddin", 
            thana: "Savar",
            bread: "Desi",
            age: "2 Year",
            weight: "350 Kg",
            gender: "Male"
        },
        {
            cattleId: 1011,
            ownerName: "Rasal Khan",
            thana: "Mirpur",
            bread: "Desi",
            age: "3 year",
            weight: "450 Kg",
            gender: "Male"
        },
        {
            cattleId: 1012,
            ownerName: "Karim Ali",
            thana: "Khulna",
            bread: "Brahman",
            age: "1 year",
            weight: "160 Kg",
            gender: "Male"
        },
        {
            cattleId: 1013,
            ownerName: "Satu Rahman",
            thana: "Kushtia",
            bread: "friesian",
            age: "1.5 year",
            weight: "220 Kg",
            gender: "Female"
        },
        {
            cattleId: 1014,
            ownerName: "Asif Rahman",
            thana: "Bagura",
            bread: "Braford",
            age: "2.5 year",
            weight: "360 Kg",
            gender: "Male"
        },
        {
            cattleId: 1015,
            ownerName: "Salman Khan",
            thana: "Rangpur",
            bread: "Braford",
            age: "2.5 year",
            weight: "360 Kg",
            gender: "Male"
        },
        {
            cattleId: 1016,
            ownerName: "Raju Uddin",
            thana: "Uttara",
            bread: "Brahman",
            age: "3 year",
            weight: "450 Kg",
            gender: "Male"
        },
        {
            cattleId: 1017,
            ownerName: "Imran Khan",
            thana: "Manikganj",
            bread: "Brahman",
            age: "2.5 year",
            weight: "300 Kg",
            gender: "Male"
        },
        {
            cattleId: 1018,
            ownerName: "Nur Ahmed",
            thana: "Cumilla",
            bread: "friesian",
            age: "1.5 year",
            weight: "160 Kg",
            gender: "Female"
        },
        {
            cattleId: 1019,
            ownerName: "Sayed Khan",
            thana: "Chandpur",
            bread: "friesian",
            age: "2 year",
            weight: "280 Kg",
            gender: "Female"
        }
    ]

    const tableBody = document.querySelector("#cow-list-table tbody");
    let html = ``;

    tableData.forEach((e) => {
        html += `
                    <tr>
                        <td scope="row">${e.cattleId}</td>
                        <td scope="row"><a href="../cow_details/cow_details.html">${e.ownerName}</></td>
                        <td scope="row">${e.thana}</td>
                        <td scope="row">${e.bread}</td>
                        <td scope="row">${e.age}</td>
                        <td scope="row">${e.weight}</td>
                        <td scope="row">${e.gender}</td>
                    </tr>
        `
        // console.log(html);
        tableBody.innerHTML = html;

    })
});