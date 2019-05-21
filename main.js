document.getElementById('output').style.visibility = 'hidden';
document.getElementById("LbsInput").addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible';
    let dinar = e.target.value;
    document.getElementById('eurOutput').innerHTML = dinar / 61.8;
    document.getElementById('usdOutput').innerHTML = dinar / 55.1;
    document.getElementById('gbpOutput').innerHTML = dinar / 71.7;
});