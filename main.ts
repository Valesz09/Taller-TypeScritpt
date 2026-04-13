import { series } from "./data";

let tableBody: HTMLElement = document.getElementById("series-table")!;
let avgElement: HTMLElement = document.getElementById("average")!;
let detailElement: HTMLElement = document.getElementById("serie-detail")!;

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


        row.addEventListener("click", () => showDetail(serie));

        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });

    let average = totalSeasons / series.length;
    avgElement.innerHTML = `<strong>Seasons average:</strong> ${average.toFixed(2)}`;
}

function showDetail(serie: any) {
    detailElement.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank" class="btn btn-primary">
                    Go to website
                </a>
            </div>
        </div>
    `;
}

renderSeries();