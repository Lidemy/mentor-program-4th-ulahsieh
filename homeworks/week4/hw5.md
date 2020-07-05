## 請以自己的話解釋 API 是什麼
API 就是一個溝通介面，透過 API 可以用來交換資料。比如說常常看到一些網站的會員是連結 gmail 或 facebook 帳號，這個就是用 API 來達成的，在網站上加入 gmail 或 facebook 的登入 API 來拿到會員資料。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

#### 409 Conflict
表示請求存在衝突而無法處理該請求，例如多個同步更新之間的編輯衝突。

#### 415 Unsupported Media Type
客戶端請求中提交的資源並不是伺服器中所支援的格式，因此請求被拒絕。例如，伺服器要求圖像使用上傳格式為 jpg，但客戶端上傳格式為 svg。

#### 500 Internal Server Error
伺服器端發生未知或無法處理的錯誤。

#### 502 Bad Gateway
通常發生在伺服器的某個服務沒有正確執行時。

#### 503 Service Unavailable
代表著伺服器目前暫時無法使用，這可能是由於伺服器超載或伺服器維護中。這個狀況是暫時的，並且將在一段時間以後恢復。如果能夠預計延遲時間，那麼回應中可以包含一個 Retry-After 頭用以標明這個延遲時間。如果沒有給出這個Retry-After資訊，那麼客戶端應當以處理500回應的方式處理它。

#### 504 Gateway Timeout
伺服器上的服務在時間內沒有回應。

#### 非官方的惡搞 Http code
- 725 It works on my machine（在我的電腦上跑得動）
- 735 Fucking IE（去你的 IE）
- 740 Computer says no（電腦說不）

#### Reference
[wiki](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)  
[常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)  

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL：https://whattoeat.com/api/v1

| 說明 | Method | path | 參數 | 範例 |
|------|-------|-------|-------|-------|
|回傳所有餐廳資料|GET|/restaurants|limt:限制回傳數量|/restaurants?limit=5|
|回傳單一餐廳資料|GET|/restaurants/:id|無|/restaurants/13|
|新增餐廳|POST|/restaurants|name:餐廳名字</br>address:地址</br>contact:訂位電話</br>business_hour:營業時間|無|
|刪除餐廳|DELETE|/restaurants/:id|無|無|
|更改餐廳|PATCH|/restaurants/:id|name:餐廳名字</br>address:地址</br>contact:訂位電話</br>business_hour:營業時間|無|