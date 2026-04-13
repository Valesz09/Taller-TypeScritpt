import { series } from "./data";

let tableBody: HTMLElement = document.getElementById("series-table")!;
let avgElement: HTMLElement = document.getElementById("average")!;

function renderSeries() {
    let totalSeasons = 0;

    series.forEach((serie) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;

        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });

    let average = totalSeasons / series.length;
    avgElement.innerHTML = `<strong>Seasons average:</strong> ${average.toFixed(2)}`;
}

renderSeries();