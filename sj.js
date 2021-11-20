chrome.runtime.onInstalled.addListener(function() {
   chrome.contextMenus.create ({
       "id": "iaimpgfhobmflljadpdkhfmmfolhoddm",
       "title": "View Top Posts From This Subreddit",
       "contexts": ["selection"],
   });
});

chrome.contextMenus.onClicked.addListener(function(){
    function(info, tab){
       let text = info.selectionText;
       let redditLink = "https://www.reddit.com/" + format(text) + "/top/?t=all"
       chrome.tabs.create ({index: tab.index + 1, url: redditLink, selected: true});
   }
})
