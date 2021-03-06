## 請解釋後端與前端的差異。
以一個訂單系統為例，在網頁上所看到的訂單頁面皆是前端的範疇，包含顯示網頁內容的 HTML、負責網頁樣式排版的 CSS 以及負責使用者的操作行為 (如點擊按鈕之後會出現什麼) 的 JavaScript。
而後端指的是背後運作的程序、資料交換或儲存，比如說在前台點選的那些商品，都是從後端資料庫撈出來的，這個撈出來再回傳的動作，就是後端程式完成的。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
我透過瀏覽器在 Google 搜尋欄位查找關鍵字，瀏覽器收到 request後會經由底層的作業系統再經由網路卡傳出，封包會丟給 google server，google server 會依照需求去尋找資料庫。
google server 從資料庫撈到資料後會再經由網路將 response 傳回給網路卡，再丟回作業系統，作業系統解析後再顯示結果再瀏覽器上。

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. chmod : 用於改變檔案或資料夾權限，`$chmod xxx file`，其中 xxx 各代表以下三個人的權限 <擁有者><群組><其它>，文件的權限類型分為讀 (r=4)，寫 (w=2) 以及執行 (x=1) ，共有以下八種組合：
	```
	rwx = 111 = 7
	rw- = 110 = 6
	r-x = 101 = 5
	r-- = 100 = 4
	-wx = 011 = 3
	-w- = 010 = 2
	--x = 001 = 1
	--- = 000 = 0
	```
	例如 `$ chmod 764 file.js` 代表所有者的權限 `rwx`、用戶組的權限 `rw-`、其它用戶的權 `r--`。

2. find : 用於尋找檔案或資料夾。
	```
	$ find . -iname '*.html' -type d` # 尋找副檔名為 .html 的資料夾
	$ find . -iname '*.del' -type f` # 尋找名稱後綴為 .del 的檔案
	```
	
3. ifconfig：用來查詢與設定網路介面卡的指令。
	```
	$ ifconfig -l     # 列出所有介面卡名稱
	$ ifconfig -a    # 列出所有啟動和停用的網路介面卡
	$ ifconfig en0        # 查詢網路介面卡的狀態
	$ ifconfig en0 up      # 啟動網路介面卡
	$ ifconfig en0 down      # 停用網路介面卡
	```
