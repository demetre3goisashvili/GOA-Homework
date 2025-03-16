
class Statistic {
    constructor(title, value) {
      this.title = title;
      this.value = value;
    }
  }
  
 
  const statistics = [
    new Statistic("Visits", 1200),
    new Statistic("Users", 340),
    new Statistic("Sales", 89),
  ];
  
 
  function renderStatistics() {
    const container = document.getElementById("statistics-container");
    container.innerHTML = "";
    
    statistics.forEach(stat => {
      const card = document.createElement("div");
      card.className = "stat-card";
      
      const title = document.createElement("h2");
      title.textContent = stat.title;
      title.className = "stat-title";
      
      const value = document.createElement("p");
      value.textContent = stat.value;
      value.className = "stat-value";
      
      card.appendChild(title);
      card.appendChild(value);
      container.appendChild(card);
    });
  }
  