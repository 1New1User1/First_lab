addBtn.onclick = function() {
  requestList.innerHTML += '<li>' + requestInput.value + '</li>';
  requestInput.value = '';
}
