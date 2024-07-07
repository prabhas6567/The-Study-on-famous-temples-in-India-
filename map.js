function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 5,
    });
  
    const temples = [
      { lat: 19.0760, lng: 72.8777, name: "Siddhivinayak Temple" },
      { lat: 13.0593, lng: 80.2493, name: "Kapaleeshwarar Temple" },
      { lat: 22.3039, lng: 70.8021, name: "Somnath Temple" },
      // Add more temples here
    ];
  
    for (const temple of temples) {
      new google.maps.Marker({
        position: temple,
        map,
        title: temple.name,
      });
    }
  }