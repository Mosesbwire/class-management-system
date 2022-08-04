new Chart(document.getElementById("assesment-test-chart"), {
    type: 'bar',
    data: {
      labels: ["Cat-1", "Cat-2", "Cat-3"],
      datasets: [
        {
          label: "Assesment Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [50,80,96,0]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Continuous Assesment Test'
      }
    }
});


new Chart(document.getElementById("assignment-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Pending", "Submitted", "Late-Submission"],
      datasets: [
        {
          label: "Assingment submission",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [3,5,1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Assignment Submission Rate'
      }
    }
});
