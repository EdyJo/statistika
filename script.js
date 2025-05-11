document.getElementById('sortBtn').addEventListener('click', function() {
  const rawData = document.getElementById('rawData').value;
  const numbers = rawData.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  
  if (numbers.length === 0) {
    alert("Masukkan data yang valid!");
    return;
  }

  // Tampilkan data terurut di kotak sortedData (mahasiswa harus menyalin manual)
  document.getElementById('sortedData').value = numbers.sort((a, b) => a - b).join(', ');
});

document.getElementById('submitBtn').addEventListener('click', function() {
  const studentName = document.getElementById('studentName').value;
  const sortedData = document.getElementById('sortedData').value;
  const medianValue = document.getElementById('medianValue').value;

  if (!studentName || !sortedData || !medianValue) {
    alert("Harap lengkapi semua field!");
    return;
  }

  // Simulasi POST request ke backend Jakarta EE
  fetch('http://localhost:8080/statistik-edukasi/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: studentName,
      data: sortedData,
      median: medianValue
    })
  })
  .then(response => response.json())
  .then(data => {
    alert("Data berhasil dikirim!");
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Gagal mengirim data. Coba lagi nanti.");
  });
});
