console.log("Hello from chart.js");
import "https://cdn.jsdelivr.net/npm/chart.js";
import { data } from "./data.js";

const ctx = document.getElementById("myChart");

const labels = data.map((item) => item.desc);
let cumulativeAmount =
    data[0].type === "credit" ? data[0].amount : -data[0].amount;

const amounts = data.map((item, index) => {
    if (index === 0) return cumulativeAmount;

    if (item.type === "credit") {
        cumulativeAmount += item.amount;
    } else {
        cumulativeAmount -= item.amount;
    }
    return cumulativeAmount;
});

new Chart(ctx, {
    type: "line",
    data: {
        labels: amounts.map((_, index) => index + 1),
        datasets: [
            {
                label: "Montants des transactions",
                data: amounts,
                borderColor: "black",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                borderWidth: 1,
                pointRadius: 3,
                pointBackgroundColor: "red",
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});
