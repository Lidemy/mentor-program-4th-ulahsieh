## 跟你朋友介紹 Git
### 前言
在沒有版本控制系統前，如果有一個常常在修改的檔案，又想保留每個版本狀態時，我們常會在編輯檔案前複製一個備份，時間久了就會變得非常不便且難以維護，有可能造成命名混亂，也很難比較各版本間的差異，尤其是在多人協作的狀況下時還可能會發生衝突。　

### 版本控制概念－用一般資料夾闡述
如果是以資料夾去做版控概念會是如下－
<table><tr><td bgcolor=AliceBlue>
  1. 需要新版本：開一個新的資料夾</br>
  2. 不想加入版控：不要加入資料夾</br> 
  3. 避免版本號衝突：用看似亂數的東西當作資料夾名稱</br>
  4. 知道資料夾順序：用一個檔案來紀錄</br>
  5. 知道最新版本：用一個檔案來存</br>
</td></tr></table>

### GIT 是什麼
git 就是個幫你做版控的程式，不用像上面那樣做很多動作！

### 開始使用
#### git init
進入要做版控的資料夾/專案，並下 `$ git init` 做初始化。初始化完成後可以看到目錄下多了一個 `.git` 的隱藏子資料夾，其中包含 Git 所有必需的倉儲檔案，也就是 Git 倉儲的骨架。

![](https://imgur.com/d3kVM31.png)


#### git status
用於查看目前工作目錄 (working directory) 的檔案狀態，以下是檔案可能會有的四種狀態：

![](https://imgur.com/0n6e7EE.png)


- **未追蹤 (Untracked)**：沒有被 GIT 所追蹤控管的檔案，如新增的檔案。
- **已更改 (Modified)**：已提交版本後，又再次修改的檔案。
- **等待提交 (Staged)**：在工作目錄 (WD) 的檔案執行 git add 後，會放在暫存區 (Stage) 等待提交。
- **已提交 (Committed)**：在暫存區的檔案執行 git commit 後，檔案便置於儲存區 (Repo)，這些放在儲存區的檔案即是已提交的狀態。

第一次下 `$ git status` 可以發現目前目錄下的檔案狀態皆為 <font color=#FF5959>Untracked files</font>，表示這些是全新的檔案，沒有被加入版控。 

![](https://imgur.com/NssQJIh.png)


#### git add
輸入 `$ git add <filename>` 可將檔案指定加入版控 / 暫存區 (Stage)；  
輸入　`$ git add .` 可一次加入 <span class="dotunderletter">所有</span> 檔案
再查看狀態可以看到檔案狀態變為 <font color=green>Changes to be committed</font>。 

![](https://imgur.com/l10gh8Z.png)


#### git commit
輸入`$ git commit` 將建立新的版控，將放在暫存區的檔案放入 repository
如果單獨輸入`$ git commit`，則會先進入 vim 編輯器，要求在編輯器輸入 commit 訊息。  
或是下`$ git commit -m "commit message"` 直接在後面帶訊息。如果沒有 commit 訊息的話則會 commit 失敗。  

![](https://imgur.com/OAxsNhn.png)


#### git rm
`$ git rm --cached <filename>` 可以將檔案從 staged 或是 committed 狀態移除版控。

![](https://imgur.com/QxmpZZt.png)


#### git log
輸入 `$ git log` 可以查看所有提交紀錄。
   
![](https://imgur.com/GJawPx4.png)

新增參數 --oneline `$ git log --oneline`，可以顯示較為簡短的 git log。 

![](https://imgur.com/r7bmS5L.png)


#### git commit -am
在修改已經 commit 的檔案後，可以發現檔案變成 <font color=#FF5959>Changes not staged for commit</font> 的 <font color=#FF5959>modified</font> 狀態。 

![](https://imgur.com/UIEt4tF.png)

此時可以下 `$ git add .` 並下 `$ git commit -m "msg"`。或是直接下 **`$ git commit -am "msg"`** 將兩個指令合併。 `-a` 參數表示 `--all` (git add --all)，會把 <span class="dotunderletter">已修改過</span> 的檔案加入 staged 區。  
<table><tr><td bgcolor=#FDEDEC>
請注意，使用git commit -am 不會包含新增的檔案 newfile，需要先 git add 再 git commit 個別下。
</td></tr></table>
p.s. git add 後檔案狀態會變成 <font color=green>Changes to be commited (Modified)</font> 

![](https://imgur.com/lCUEpVZ.png)

#### git checkout
使用 `$ git check out <版本>` 可以回到指定的版本時的狀態。例如下圖回到了 first commit 當下。 

![](https://imgur.com/T95UVYe.png)


#### .gitignore
新增 .gitignore，若有檔案名稱寫入該檔案則會被 git 忽略，專門放與專案沒什麼關係、不須版控也可以的檔案，但 .gitignore 檔案本身會加入版控，要告知其他人什麼檔案不在版控中。

![](https://imgur.com/iGu6x8V.png)


#### git diff
`$ git diff` 可以查看這次要 commit **前**與上一個版本的差別。

![](https://imgur.com/OB2WhIl.png)


## branch 概念
一般在線性開發時會是以下這樣：

![](https://imgur.com/yxIhSIN.png)

當在開發新功能時，發現當下開發的版本有舊有的 bug，此時如果一邊開發一邊改 bug 可能會導致產出的東西有衝突。  
而如果引入分支 branch，讓開發新功能以及 debug 兩邊各自獨立完成，而後再進行合併，就可以把工作乾淨地切割開來。目的是為了保持主枝幹的穩定，因為在開發新功能的時候不可能隨時保持穩定狀態，所以在確定穩定前都不會影響到主幹。

![](https://imgur.com/KGfAOUW.png)


### git branch -v
可以查看目前有哪些 branch，顯示方式為 `<branch name> <latest commit version> <commit message>`，亮綠燈的代表目前工作目錄所在的分區。

![](https://imgur.com/t0qVj6k.png)

### git branch 
`$ git branch <branchname>` 可依目前 branch 為基準複製出一個新的分支。

![](https://imgur.com/9B0IRri.png)

### git checkout
`$ git checkout <branchname>` 可以將目前工作目錄切換到指定 branch 下，可以把 checkout 想像成移到該資料夾下的感覺。

![](https://imgur.com/Er1RrvV.png)

### git merge
`$ git merge <branchname>` 可以把指定的 branch 合併到當下的工作目錄來。如下圖，在 new-feature branch 下修改了 hello.js 的檔案，回到 master branch，先 cat 確認 hello.js 內容是舊的，再下 merge command 將 new-feature branch 合併到 master 後，就能發現 master 的檔案也更新了！

![](https://imgur.com/p80UcmR.png)


### git branch -d
`$ git branch -d <branchname>` ，-d 為 --delete，可刪除該 branch。通常在開發完該 branch 並合併進主支線後，就可以刪除分支以保持乾淨的專案內容。

![](https://imgur.com/eJETGfT.png)


### 處理 merge 後的 conflict
如果 branch 在合併的時候有檔案有衝突，意即同個檔案的檔案內容的同一行不一樣，git 不曉得該以哪一個為準，則會在 merge 時出現下面的訊息：

![](https://imgur.com/EpEnTVJ.png)

須先查看發生衝突的檔案

![](https://imgur.com/9IryZEM.png)

Git 把有衝突的段落標記出來了，上半部是 HEAD，也就是目前所在的 master 分支，中間是分隔線，接下是 new-feature 分支的內容。請做修改並儲存檔案，最後再次 `$ git commit -am 'reslove the conflict'`，結束這回合！


## Git v.s. Github
Github 就是一個幫你把 git repository 具象化的一個網站，一個有 UI 的 git server。

![](https://imgur.com/5q7iRqR.png)

### git push (from local)
![](https://imgur.com/pl7p1VW.png)

在 github 新增 repo 後回到本地端，要將本地端的 repo push 上去
```
$ git remote add origin https://github.com/ulahsieh/gitTest.git
$ git push -u origin master
```
第一個指令代表加入一個遠端的 repository 代號是 `origin`；第二行指令是把目前的 branch push 到 origin 的 master branch。  
```
-u 代表 -set-upstream，設定 upstream 可以使分支開始追蹤指定的遠端分支，只要做過一次 git push -u <remote name> <branch name>，並且成功 push 出去；當下本機端的 branch 就會自動與遠端的 <remote name>/<branch name> 分支設定好 upstream 連結，之後要上傳分支時，就只需要透過簡單的 git push 指令就可以了。
```
![](https://imgur.com/IfB7ZK0.png)

就能看到 github 上的 repo 與 local 同步

![](https://imgur.com/BLWrMNa.png)

當在本地端做 git commit 後，再下 git push 就可以在遠端分支更新 (因為前一次 push 有加 -u)。

![](https://imgur.com/zUU1ljm.png)


### push 其他分支
`$ git push origin <branch name>`，把當下分支 push 上 remote repository。

![](https://imgur.com/ZRnBUq1.png)

可以發現到 github 能切換剛剛 push 的分支

![](https://imgur.com/voSzmUU.png)


### git pull (pull remote repo at local)
github 可以在線上編輯 code，或是共同協做的時候，其他人做過更動想要同步在本地端時，下 `$ git pull origin master`，從遠端 origin pull master branch 下來。
<table><tr><td bgcolor=#FDEDEC>
請注意，如果在遠端做更新後，本地端一定要先 git pull 將最新版同步，才能再做 git push!
</td></tr></table>

![](https://imgur.com/lBtK1xX.png)

如果 git pull 後發現遠端的與本地端有檔案的內容有衝突，那在 pull 結束後會顯示 conflict，改掉衝突再 commit & push 即可。

### Pull request
github 上的 `Pull Request` 用於合併分支，通常在 github 做 merge 方便又可以很快追蹤到兩個 branch 的差異，所以通常在做 merge 的時候都會在 github 做。  
首先在本地的 new-feature branch 建一個新的 newfile.js， git add & commit 後再 git push 上遠端的 new-feature repo。

![](https://imgur.com/HPm3L42.png)

到 github 點選 `Compare & pull request` 進行合併，

![](https://imgur.com/umOt0Q1.png)

接著一步一步做下來即可。完成 merge 後，就可以直接在 github 上刪除該 branch。

![](https://imgur.com/OomNCs6.png)

最後記得回到 local 同步 repo，`$ git pull origin master` & `$ git branch -d new feature`

![](https://imgur.com/pfplGn1.png)

### Pull request 發生衝突
在 pull request 如果有 `can't automatically merge` 訊息出現的話代表有 conflict 出現，

![](https://imgur.com/6mTgbAd.png)

改掉衝突後

![](https://imgur.com/qSRL0tO.png)
![](https://imgur.com/Lubw3xf.png)

就可以順利 commit 了

![](https://imgur.com/tTtWGjJ.png)


### git clone
除了可以 pull 自己的 github repo 外，也可以下載其他人的 repository 到自己的本地端。按下 `clone or download` 即可使用 zip 下載，或是複製 git clone 語法到 git bash 裡用 command line 下載。

![](https://imgur.com/3Dkr3RS.png)


### Fork
但是如果想要修改從別人 github 的 repository 下載下來的 repo 到本地然後又想 git push 到自己的 github 的話是不允許的。必須按右上角的 `Fork`，先在 github 上將這個 repo fork 到自己的 github，

![](https://imgur.com/15OAr1b.png)

然後從自己的 repo git clone 下來，才可以做修改後再 push 上自己的 github。
<table><tr><td bgcolor=#FDEDEC>
請注意，用 fork 的情況是因為沒有該原 repo 的權限 (permission deny)，如果自己本身有被 repo 的作者開啟修改的權限的話，就可以直接在本地端 git push 上他的 repo
</td></tr></table>


### 想改最後一次的 commit message 
在本地端 git commit 後發現 commit message 打錯了，只要下 `$ git commit --amend`即可進入 vim 編輯器做修改。

![](https://imgur.com/7uZHzPo.png)

<table><tr><td bgcolor=#FDEDEC>
請注意，如果已經 commit 而且又 push to remote 了，那就乖乖認命吧，這種情形下你在 local 端改的話可能會造成其他人的困擾。最好的方法還是 push 之前先檢查一下，避免錯的東西被放到遠端。
</td></tr></table>

### commit 後但後悔了
使用 `$ git reset HEAD^ (--soft / --hard / --mixed)`

名詞 | 解釋  |
:-----:|:-----:|
head |所在位置|
^	|上一個|
index|變更狀態紀錄 (git status)|
working directory|工作目錄|

mode|head|index|working directory|說明|
:-----:|:-----:|:-----:|:-----:|:-----|
soft|changed|unchanged|unchanged|僅移除 commit 變成新版未 commit，內容仍是新版的。|
mixed(default)|changed|changed|unchanged|index 移除 staged 標記，變成 Modifiedor Untracked，內容是新版的。|
hard|changed|changed|changed|回到上一版版本，完全移除，內容及狀態皆是上一版。|
[1]


### 改了檔案還沒 commit 但想復原
用 `$ git restore <file>` 回復，或是 `$ git restore .`回復所有檔案
或是舊 command `$ git checkout -- <file>`

![](https://imgur.com/3yBqfnp.png)


### 想改 branch 名稱
`$ git branch -m <新名稱>`

![](https://imgur.com/GxP9UtR.png)


### 想把遠端的 branch 抓下來
設目前本地端無任何 branch，可以直接下 `$ git checkout <remote-branch-name>`。

![](https://imgur.com/drkR4Vc.png)


### 想在 commit 前做一些判斷 (git hooks)
在 `.git` 資料夾下有 `hooks` 資料夾，裡面存放了一些 shell script，可以讓使用在在針對某些狀況下設置一些判斷，然後 git 做一些反應，比如說在 commit 或是 push 前檢查是否有放帳號密碼等資訊，然後停止或允許動作。

![](https://imgur.com/noHMLbm.png)