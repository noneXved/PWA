function notifyMe() {         
    if (Notification.permission === "granted") {
      // jeżeli są tworzymy powiadomienie
      alert("Hello World!");
    }
  
    // W innym przypadku tworzymy zapytanie o uprawnienia
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                alert("Hello world!");
            }

        }); 
    }
  
   
  }