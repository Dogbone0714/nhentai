chrome.contextMenus.create({
    id: "nhentai-search",
    title: "搜尋 Nhentai",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "nhentai-search") {
      chrome.tabs.create({ url: `https://nhentai.net/g/${info.selectionText}` });
    }
  });