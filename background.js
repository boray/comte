addToNotion = async function(word){
    // Load Notion API key and db id from storage
    var query = word.selectionText;
    var notion_key = "secret_YdTw5EEKOPtrOHtynzPRZvzlabrYC7PnwNxwq9I9ywL";
    var notion_db = "b8308d2e1c444be19cb95e4966ca27ed";

    // Add data to Notion by making an API request
    const headers = {
        "Authorization": "Bearer " + notion_key,
        "Content-Type": "application/json",
        "Notion-Version": "2021-08-16"
    };

    const notionData = {
        "parent": {
            "type": "database_id",
            "database_id": notion_db
        },
        "properties": {
          "word": {
             "id": "word",
             "type": "title",
             "title": [{ text: { content: query } }],
           },
           "meaning": {
             "id": "meaning",
            "type": "rich_text",
             "text": { name: "meaning" },
           },
           "dict": {
             "id": "dict",
             "type": "url",
             "url": "https://dictionary.cambridge.com/",
           },
        }
    };

    // Make request
    const response = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(notionData),
    });

    // Test if response is OK
    if(!response.ok){
        throw new Error("network error")
        return response;
    } else {
        // Response is OK, return
        return response;
    }
}

chrome.contextMenus.create({
id: "iaimpgfhobmflljadpdkhfmmfolhoddm",
title: "Add to Notion vocabulary list",
contexts:["selection"],
onclick: addToNotion
});
