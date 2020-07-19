### 前四週心得
時間飛快，一轉眼就過了一個月了。
第一周學 cmd 及 git，git 之前聽過好幾次，但概念卻很模糊，也沒有機會真的使用到。上完課後有了概念再加上透過反覆交作業練習，覺得熟悉得很快！所以實作真的是一件很重要的事，如果單純學理論的話，應該過沒多久就會忘了。
第二周跟第三周學 Javascript，因為在課程開始前就看過 ALG101 了，所以又重新複習過一遍。第二次複習時又對語法更熟悉了，雖然在解 LIOJ 時，原先第一次卡比較久的題目，第二次解一樣需要想一下 XD。然後很有趣的是，自己的兩次解法以及跟老師的解法都不會完全一樣！一邊學習一些好的解法，然後在之後解題時用上，都覺得很有成就感。
第四周學 API，我覺得是四周以來最有趣的單元，而且學完之後比較踏實一點，因為串 api 就是以後工作明確會碰到的事。二三周雖然好像會寫簡單的 javascript 跟應用 Nodejs 的 module 了，但是卻不知道以後工作是不是也能用目前的實力應付(怕)。

### lidemy http challenge 解題心得
第三關新增一本書並回傳給管理員書的 id 的這關卡了一下子，因為我原先的 response 單純只丟 status code 看有沒有成功；並沒有丟出 body，本來新增完後要用 `get /books?q=大腦喜歡這樣學` 去拿到書籍資訊。結果儘管新增書籍的 response code 是 200，但我的 `get /books?q=大腦喜歡這樣學`  的 response body 總是空字串。不過後來發現在新增書籍印出 response body 後，就看得到 ID 了！
想一想其實也合理，畢竟這個是闖關遊戲，取得的 ID 一定要一致，如果新增真的改到 book list 的話，這樣大家拿到的 ID 就不一樣了，判斷過關就不是那麼容易，又或是要寫固定刪除資料的程式跑，就太麻煩了。所以這個 post 的 api 的背後其實什麼事都沒有做（亦即沒有真的新增書籍），成功的話會回復早就寫死的 response body。不曉得這麼理解有沒有錯，有誤的話再請提點，感恩。


在第六關身分驗證的時候卡了一下．因為題目讓我們先登入，而直覺上登入的功能是 post，所以剛開始都用 post，但一直收到 invalid authentication 的答覆。
可是堅持不看 hint XD。反覆看了題目跟 V2 API 文件後，文件指出在 header 加上 http basic authorization 就能驗證身分，而題目已經說要使用 /me ，然後獲取個人資訊的 api 是使用 get。所以重新使用 get 並帶上 header ，就成功拿到 email 了！
```js
const request = require('request');
const process = require('process');
const Buffer = require('buffer').Buffer
const auth = Buffer.from("admin:admin123").toString('base64')
//console.log(auth)
request(
  {
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/me',
    headers: {
        'Authorization': `Basic ${auth}`,
    },
  },
  (error, response, body) => {
    if(error){
        console.log(error)
    } else {
      console.log(response.statusCode)
      console.log(body)
    }
  },
);
```
然後最後一不 **把 email 放在 query string 上面帶過來，我看看是不是對的** 這句話也不是一步到位(OTZ。我的 API 繼續用圖書館資訊系統的 URL，而不是跟阿館溝通的 URL，所以一直拿不到通關密語，後來仔細想想，對吼！**我看看是不是對的。**＂**這句話就是代表要丟上去給館長看阿！最後在 LV6 的網址後面帶上 query string 後就順利拿到第七關的通關密語了~ 可喜可賀。

做到第九關又看到陌生的關鍵字 **user agent**，首先因為前面幾關都是使用 request 的 node module 實作，所以很幸運的看 [README](https://github.com/request/request) 之後發現到 header 就有一個欄位 `User-Agent` 可以新增，然後去找 [ie6 的值](https://developers.whatismybrowser.com/useragents/parse/2045-internet-explorer-windows-trident)放進程式後，就成功 request 到了 ~ 可喜可賀。

第十一關打招呼後回傳的訊息是"您的 origin 不被允許存取此資源，請確認您是從 lidemy.com 送出 request"，google 後發現 header origin 使用在一個叫 `CORS` 的東西。跨來源資源共用（Cross-Origin Resource Sharing (CORS)）是一個瀏覽器做跨網域連線的方式。透過 HTTP header 的設定，可以規範瀏覽器在進行跨網域連線時可以存取的資料權限與範圍，包括哪些來源可以存取，或是哪些 HTTP header 的 request 可以存取。
難怪這一題的 token 叫做 {IhateCORS}　XDDD


第十二關題目說 "A 到 C，C 才到 B，中間會經過一些轉運點才會到達目的地"，這一句話第一直覺就是上課學到的轉址，打開開發人員工具後監測，的確也想得沒錯，順利拿到 token 了 ~ 可喜可賀。

第十三關查了很久關鍵字都沒有結果，所以終於打開 hint 了，發現也是常常聽到但實際上不曉得到底是什麼的 **proxy**。參考了這篇[文章](https://dotblogs.com.tw/swater111/2012/08/28/74327)，設定完代理伺服器後，就順利拿到 token 了 ~ 可喜可賀。


破關遊戲就是有一種魔力，會想趕快制霸。我覺得 http challenge 讓我最有成就感的事就是撐到第 13 題才看提示，然後是用 request node module 一路完成的。做的過程中又再次驗證了 Huli 教的初學者新法－看懂題目以及 log 加爆的重要性。另外使用 module 的時候看 readme 寫的使用說明也很重要，解第四周作業以及這個闖關遊戲時我已經開了 request node module 的 github 好幾次了，而幾乎每次都能從中得到解答。

雖然到目前為止只學了基礎的 API ，不過現在當聽到 API ，就再也不會似懂非懂、甚至還能使用了！很有成就感！期待之後的課程能自己寫 API 給前端串。

