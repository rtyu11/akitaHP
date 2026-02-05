function doPost(e) {
    try {
        // 1. Parse the incoming JSON data
        // The 'no-cors' mode in fetch might start sending data as text/plain or complex. 
        // Usually standard JSON.stringify body comes in postData.contents
        var data = JSON.parse(e.postData.contents);

        // 2. Configure Email
        var recipient = "r-otake@t-carry.co.jp"; // テスト送信先
        var subject = "【HPより問い合わせ】" + data.name + "様";

        var body = "";
        body += "ホームページより新しいお問い合わせがありました。\n\n";
        body += "--------------------------------------\n";
        body += "お名前: " + data.name + "\n";
        body += "メール: " + data.email + "\n";
        body += "ご用件: " + data.type + "\n";
        body += "--------------------------------------\n";
        body += "\n【お問い合わせ内容】\n";
        body += data.message + "\n\n";
        body += "--------------------------------------\n";
        body += "送信日時: " + new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

        // 3. Send Email
        MailApp.sendEmail({
            to: recipient,
            subject: subject,
            body: body
        });

        // 4. Return Success Response
        // We return a text output to avoid CORS preflight issues sometimes associated with pure JSON return in simple setups,
        // though 'no-cors' fetch mode ignores the response anyway.
        return ContentService.searchTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);

    } catch (error) {
        // Log error
        Logger.log(error);
        return ContentService.searchTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
    }
}

/*
【設定手順 / Setup Instructions】
1. Go to https://script.google.com/ and create a new project.
2. Copy and paste this code into the editor (replace default myFunction).
3. Change 'recipient' variable to your email address.
4. Click 'Deploy' (デプロイ) > 'New deployment' (新しいデプロイ).
5. Select 'Web app' (ウェブアプリ).
6. Description: "Contact Form" etc.
7. Execute as: "Me" (自分).
8. Who has access: "Anyone" (全員) <--- IMPORTANT!
9. Click 'Deploy'.
10. Copy the "Web App URL" (xxx.google.com/macros/s/...).
11. Paste this URL into 'js/main.js' variable 'SCRIPT_URL'.
*/
