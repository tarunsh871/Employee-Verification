function setStatus(status) {
 const statusText = document.getElementById("status-text");

 // Reset button classes
 document.getElementById('active-btn').classList.remove('active');
 document.getElementById('inactive-btn').classList.remove('inactive');
 statusText.classList.remove('active');
 statusText.classList.remove('inactive');

 if (status === 'active') {
     // Display 'ACTIVE' message
     statusText.innerText = "ACTIVE";
     statusText.classList.add('active');
     document.getElementById('active-btn').classList.add('active');
 } else if (status === 'inactive') {
     // Display 'INACTIVE' message
     statusText.innerText = "INACTIVE";
     statusText.classList.add('inactive');
     document.getElementById('inactive-btn').classList.add('inactive');
 }
}
