## 教你朋友 CLI
#### What is CLI
CLI (Command Line Interface)是指沒有操作介面、僅透過純文字對電腦下指令的程式，與之相對的是 GUI (Graphic User Interface)。常見的CLI程式如 Windows 內建的 CMD.exe, 下載 git 提供的 git bash...等等。Command Line 適用在不需要有介面的程式，或是沒有提供介面的程式。例如用於診斷網路的 ping，`$ ping 8.8.8.8` 代表去丟網路封包道 Google DNS Server，並計算來回時間。所以 ping 本身就是一支程式，可以直接下 command 使用。  

#### Some Basic Command in CLI
這邊羅列幾個常用到的 Command：  
- pwd : 列出當前所在位置
- ls : 列出檔案清單，加上 `-al` 參數可以列出隱藏檔案並把清單詳細條列。
- cd : 切換目錄，`cd ..` 代表回到上一頁。
- man : 可以叫出指令的使用手冊，例如 `$ man ls` 列出 ls 的使用方法。
- touch : `$ touch <fileName>`，如果檔案不存在，則會建立一個新檔案；如果檔案存在，則會修改檔案時間。
- rm : `$ rm <fileName>` 刪除檔案，`$ rm -r <fileName>` 刪除資料夾。
- mkdir : `$ mkdir <directoryName>` 建立資料夾於當前目錄。
- mv : `$ mv <oldName> <newName>` 改檔案名字，`$ mv <oldName> /opt/<newName>` 移動檔案到 /opt 路徑下並改檔名。
- cp : `$ cp <fileName> /opt` 複製檔案到 /opt 目錄底下；　`$ cp <directoryName> -r /opt` 複製資料夾到 /opt 目錄底下。
- cat : `$ cat <fileName>`，印出檔案內容到 console。
- grep : 可以抓取指定關鍵字，例如 `$ cat hello.js | grep a`，把所有包含 a 的字印出來。
- wget : 下載檔案，例如 `$ wget <URL>`
- curl : 送出request，可用於測試 API，例如 `$ curl <api URL>`，會回傳 reponse、`$ curl -I <URL>`，會列出 Header。
- `>` : 指重新導向，`$ ls -al > result.txt`，將 ls -al 的資料保存到 result.txt。
- `>>` : 可以 append 到檔案結尾，`$ echo "append to the end" >> result.txt`。
- `|` : 唸做 pipe，指的是前面的輸出為後面的輸入，例如 `$ cat hello.txt | grep h` 會印出 hello.txt 中有 h 的地方。


#### 關於 How 哥叛徒的問題

「欸！能不能教我 command line 到底是什麼，然後怎麼用啊？我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。」

1. 開啟 CMD  
2. cd 到你想要去的目錄，假設是根目錄好了，`$ cd /`  
3. 新增 wifi 資料夾，`$ mkdir wifi`
4. cd 到剛剛建的資料夾下，`$ cd wifi`
4. 建一個 afu.js 的檔案，`$ touch afu.js`  
