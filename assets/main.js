let form_auth = document.getElementById("form_auth");
let nomorTelepon = document.getElementById('nomortelepon')
let namaLengkap = document.getElementById('namalengkap')
let alamat = document.getElementById('alamat')
let ketetangan = document.getElementById('keterangan')


nomorTelepon.addEventListener("input", (e) => {
    nomorTelepon = e.target.value;
});
namaLengkap.addEventListener("input", (e) => {
    namaLengkap = e.target.value;
});
alamat.addEventListener("input", (e) =>{
    alamat = e.target.value;
});
keterangan.addEventListener('input', (e) =>{
    keterangan = e.target.value;
});
// function buku tamu 
form_auth,addEventListener('submit', (e) => {
    // cegah form reload page
    e.preventDefault();

    let totalData = tbody.childElementCount;
    tbody.innerHTML += `
    <tr>
    <td> ${totalData + 1}</td>
    <td> ${nomorTelepon}</td>
    <td> ${namaLengkap}</td>
    <td> ${keterangan}</td>
    <td> ${alamat}</td>
    </tr>
    `
    console.log(nomorTelepon)
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}