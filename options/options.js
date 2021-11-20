
// Saves options to chrome.storage
function saveOptions() {
  var notion_key = document.getElementById('notion_key').value;
  var notion_db = document.getElementById('notion_db').value;
  chrome.storage.sync.set({
    notion_key: notion_key,
    notion_db: notion_db
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    notion_key: 'none',
    notion_db: 'none'
  }, function(items) {
    document.getElementById('notion_key').value = items.notion_key;
    document.getElementById('notion_db').value = items.notion_db;
  });
}


document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
    saveOptions);
