document.addEventListener("DOMContentLoaded", function () {
  const data = {
    
      "dashboard": {
        "date": "2024-11-06",
        "summary": {
          "total_sales": 1800000,
          "total_collection": 1490000,
          "target_achieved": {
            "sales_percentage": 8.53,
            "collection_percentage": 5.2,
            
          },
          "return_percentage": 16.22
        },
        "sales_by_date": [
          { "date": "2024-11-01", "sales": 36000, "collection": 10000 },
          { "date": "2024-11-02", "sales": 20000, "collection": 18000 },
          { "date": "2024-11-03", "sales": 32000, "collection": 5000 },
          { "date": "2024-11-04", "sales": 50000, "collection": 20000 },
          { "date": "2024-11-05", "sales": 15604, "collection": 24476 },
          // Additional dates...
        ],
        "areas": [
          {
            "name": "Riyadh",
            "sales_target": 405000,
            "collection_target": 300000,
            "achieved_sales": 17768,
            "achieved_collection": 16056,
            "remainder_sales": 387232,
            "remainder_collection": 283944,
            "sales_percentage": 4.39,
            "collection_percentage": 5.35,
            "return_percentage": 22.23
          },
          {
            "name": "Eastern",
            "sales_target": 260000,
            "collection_target": 200000,
            "achieved_sales": 6384,
            "achieved_collection": 6463,
            "remainder_sales": 253616,
            "remainder_collection": 193537,
            "sales_percentage": 2.46,
            "collection_percentage": 3.23,
            "return_percentage": 0.00
          },
          {
            "name": "Western",
            "sales_target": 250000,
            "collection_target": 200000,
            "achieved_sales": 19020,
            "achieved_collection": 925,
            "remainder_sales": 230980,
            "remainder_collection": 199075,
            "sales_percentage": 7.61,
            "collection_percentage": 0.46,
            "return_percentage": 19.66
          },
          {
            "name": "South",
            "sales_target": 235000,
            "collection_target": 190000,
            "achieved_sales": 54971,
            "achieved_collection": 4106,
            "remainder_sales": 180029,
            "remainder_collection": 185894,
            "sales_percentage": 23.39,
            "collection_percentage": 2.16,
            "return_percentage": 27.88
          },
          {
            "name": "Al-Qassim and Hail",
            "sales_target": 110000,
            "collection_target": 100000,
            "achieved_sales": 9630,
            "achieved_collection": 2066,
            "remainder_sales": 100370,
            "remainder_collection": 97934,
            "sales_percentage": 8.75,
            "collection_percentage": 2.07,
            "return_percentage": 18.25
          },
          {
            "name": "North",
            "sales_target": 240000,
            "collection_target": 200000,
            "achieved_sales": 11474,
            "achieved_collection": 13504,
            "remainder_sales": 228526,
            "remainder_collection": 186496,
            "sales_percentage": 4.78,
            "collection_percentage": 6.75,
            "return_percentage": 1.24
          },
          {
            "name": "Apps",
            "sales_target": 200000,
            "collection_target": 200000,
            "achieved_sales": 29883,
            "achieved_collection": 29883,
            "remainder_sales": 170117,
            "remainder_collection": 170117,
            "sales_percentage": 14.94,
            "collection_percentage": 14.94,
            "return_percentage": 0.00
          },
          {
            "name": "Salla",
            "sales_target": 100000,
            "collection_target": 100000,
            "achieved_sales": 4475,
            "achieved_collection": 4475,
            "remainder_sales": 95525,
            "remainder_collection": 95525,
            "sales_percentage": 4.47,
            "collection_percentage": 4.47,
            "return_percentage": 0.00
          },
          // Additional areas as per the data...
        ],
        "representatives": [
          {
            "name": "Mohamed Oraby",
            "region": "Riyadh",
            "sales_target": 135000,
            "achieved_sales": 6551,
            "collection_target": 100000,
            "achieved_collection": 6663,
            "remainder_sales": 128449,
            "remainder_collection": 93337,
            "sales_percentage": 4.85,
            "collection_percentage": 6.66,
            "return_percentage": 29.67
          },
          {
            "name": "Ahmed Adel",
            "region": "Riyadh",
            "sales_target": 135000,
            "achieved_sales": 1728,
            "collection_target": 100000,
            "achieved_collection": 9093,
            "remainder_sales": 133272,
            "remainder_collection": 90907,
            "sales_percentage": 1.28,
            "collection_percentage": 9.09,
            "return_percentage": 0
          },
          {
            "name": "Yasser Ashraf",
            "region": "Riyadh",
            "sales_target": 135000,
            "achieved_sales": 9489,
            "collection_target": 100000,
            "achieved_collection": 300,
            "remainder_sales": 125511,
            "remainder_collection": 99700,
            "sales_percentage": 7.03,
            "collection_percentage": 0.30,
            "return_percentage": 0.00
          },
          {
            "name": "Omar Farhan",
            "region": "Eastern",
            "sales_target": 130000,
            "achieved_sales": 4824,
            "collection_target": 100000,
            "achieved_collection": 2944,
            "remainder_sales": 125176,
            "remainder_collection": 97056,
            "sales_percentage": 3.71,
            "collection_percentage": 2.94,
            "return_percentage": 0.00
          },
          {
            "name": "Ahmed Hegazy",
            "region": "Eastern",
            "sales_target": 130000,
            "achieved_sales": 1560,
            "collection_target": 100000,
            "achieved_collection": 3519,
            "remainder_sales": 128440,
            "remainder_collection": 96481,
            "sales_percentage": 1.20,
            "collection_percentage": 3.52,
            "return_percentage": 0.00
          },
          {
            "name": "Mohamed Essam",
            "region": "Western",
            "sales_target": 140000,
            "achieved_sales": 3221,
            "collection_target": 110000,
            "achieved_collection": 525,
            "remainder_sales": 136779,
            "remainder_collection": 109475,
            "sales_percentage": 2.30,
            "collection_percentage": 0.48,
            "return_percentage": 27.75
          },
          {
            "name": "Karim Elfezray",
            "region": "Western",
            "sales_target": 110000,
            "achieved_sales": 15799,
            "collection_target": 90000,
            "achieved_collection": 400,
            "remainder_sales": 94202,
            "remainder_collection": 89600,
            "sales_percentage": 14.36,
            "collection_percentage": 0.44,
            "return_percentage": 18.0
          },
          {
            "name": "Mohamed Mosaad",
            "region": "South",
            "sales_target": 120000,
            "achieved_sales": 15435,
            "collection_target": 100000,
            "achieved_collection": 450,
            "remainder_sales": 104565,
            "remainder_collection": 99550,
            "sales_percentage": 12.86,
            "collection_percentage": 0.45,
            "return_percentage": 15.76
          },
          {
            "name": "Ahmed Elqersh",
            "region": "South",
            "sales_target": 115000,
            "achieved_sales": 39537,
            "collection_target": 90000,
            "achieved_collection": 3656,
            "remainder_sales": 75463,
            "remainder_collection": 86344,
            "sales_percentage": 34.38,
            "collection_percentage": 4.06,
            "return_percentage": 32.61
          },
          {
            "name": "Ibrahim Khalaf",
            "region": "Al-Qassim and Hail",
            "sales_target": 110000,
            "achieved_sales": 9630,
            "collection_target": 100000,
            "achieved_collection": 2066,
            "remainder_sales": 100370,
            "remainder_collection": 97934,
            "sales_percentage": 8.75,
            "collection_percentage": 2.07,
            "return_percentage": 18.25
          },
          {
            "name": "Saleh Selim",
            "region": "North",
            "sales_target": 110000,
            "achieved_sales": 8456,
            "collection_target": 100000,
            "achieved_collection": 10039,
            "remainder_sales": 101544,
            "remainder_collection": 89961,
            "sales_percentage": 7.69,
            "collection_percentage": 10.04,
            "return_percentage": 0.00
          },
          {
            "name": "Islam Elsayed",
            "region": "North",
            "sales_target": 130000,
            "achieved_sales": 3018,
            "collection_target": 100000,
            "achieved_collection": 3465,
            "remainder_sales": 126982,
            "remainder_collection": 96535,
            "sales_percentage": 2.32,
            "collection_percentage": 3.47,
            "return_percentage": 4.73
          },
          {
            "name": "Waleed Elkharasany",
            "region": "Apps",
            "sales_target": 200000,
            "achieved_sales": 29883,
            "collection_target": 200000,
            "achieved_collection": 29883,
            "remainder_sales": 170117,
            "remainder_collection": 170117,
            "sales_percentage": 14.94,
            "collection_percentage": 14.94,
            "return_percentage": 0.00
          },
          {
            "name": "Taher Nasab",
            "region": "Salla",
            "sales_target": 100000,
            "achieved_sales": 4475,
            "collection_target": 100000,
            "achieved_collection": 4475,
            "remainder_sales": 95525,
            "remainder_collection": 95525,
            "sales_percentage": 4.47,
            "collection_percentage": 4.47,
            "return_percentage": 0.00
          },
          // Additional representatives as per the data...
        ]
      }
    
  };

  // Update summary section
  function updateSummary() {
    document.getElementById("total-sales").innerText = `Total Sales Target: ${data.dashboard.summary.total_sales}`;
    document.getElementById("total-collection").innerText = `Total Collection Target: ${data.dashboard.summary.total_collection}`;
    document.getElementById("sales-target-achievement").innerText = `Sales Target Achievement: ${data.dashboard.summary.target_achieved.sales_percentage}%`;
    document.getElementById("collection-target-achievement").innerText = `Collection Target Achievement: ${data.dashboard.summary.target_achieved.collection_percentage}%`;
    document.getElementById("returns").innerText = `Return Percentage: ${data.dashboard.summary.return_percentage}%`;
  }

  // Populate area table
  function populateAreaTable() {
    const areaTable = document.getElementById("areaSalesTable").getElementsByTagName("tbody")[0];
    data.dashboard.areas.forEach(area => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${area.name}</td>
        <td>${area.sales_target}</td>
        <td>${area.achieved_sales}</td>
        <td>${area.remainder_sales}</td>
        <td>${area.sales_percentage}%</td>
        <td>${area.collection_target}</td>
        <td>${area.achieved_collection}</td>
        <td>${area.remainder_collection}</td>
        <td>${area.collection_percentage}%</td>
        <td>${area.return_percentage}%</td>
      `;
      areaTable.appendChild(row);
    });
  }

  // Populate representative table
  function populateRepTable() {
    const repTable = document.getElementById("repPerformanceTable").getElementsByTagName("tbody")[0];
    data.dashboard.representatives.forEach(rep => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${rep.name}</td>
        <td>${rep.region}</td>
        <td>${rep.sales_target}</td>
        <td>${rep.achieved_sales}</td>
        <td>${rep.remainder_sales}</td>
        <td>${rep.sales_percentage}%</td>
        <td>${rep.collection_target}</td>
        <td>${rep.achieved_collection}</td>
        <td>${rep.remainder_collection}</td>
        <td>${rep.collection_percentage}%</td>
        <td>${rep.return_percentage}%</td>
      `;
      repTable.appendChild(row);
    });
  }

  // Create line chart for sales and collection trends
  function createSalesTrendChart() {
    const dates = data.dashboard.sales_by_date.map(entry => entry.date);
    const salesData = data.dashboard.sales_by_date.map(entry => entry.sales);
    const collectionData = data.dashboard.sales_by_date.map(entry => entry.collection);

    new Chart(document.getElementById("salesByDate"), {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Sales',
            data: salesData,
            borderColor: 'rgb(75, 192, 192)',
            fill: false
          },
          {
            label: 'Collection',
            data: collectionData,
            borderColor: 'rgb(255, 99, 132)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Sales and Collection Trends'
        }
      }
    });
  }

  // Create pie chart for collection distribution by area
  function createCollectionByAreaChart() {
    const areaNames = data.dashboard.areas.map(area => area.name);
    const collectionData = data.dashboard.areas.map(area => area.achieved_collection);

    new Chart(document.getElementById("collectionByArea"), {
      type: 'pie',
      data: {
        labels: areaNames,
        datasets: [{
          label: 'Collection by Area',
          data: collectionData,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Collection Distribution by Area'
        }
      }
    });
  }

  // Create bar chart for representative performance
  function createRepPerformanceChart() {
    const repNames = data.dashboard.representatives.map(rep => rep.name);
    const salesData = data.dashboard.representatives.map(rep => rep.achieved_sales);
    const collectionData = data.dashboard.representatives.map(rep => rep.achieved_collection);

    new Chart(document.getElementById("repPerformanceChart"), {
      type: 'bar',
      data: {
        labels: repNames,
        datasets: [
          {
            label: 'Sales',
            data: salesData,
            backgroundColor: 'rgb(75, 192, 192)'
          },
          {
            label: 'Collection',
            data: collectionData,
            backgroundColor: 'rgb(255, 99, 132)'
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Representative Performance (Sales vs Collection)'
        }
      }
    });
  }

  // Initialize all functions
  updateSummary();
  populateAreaTable();
  populateRepTable();
  createSalesTrendChart();
  createCollectionByAreaChart();
  createRepPerformanceChart();
});
