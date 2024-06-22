document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', function() {
      const searchTerm = searchBox.value;
      chrome.tabs.create({ url: `https://nhentai.net/g/${searchTerm}` });
    });
  });