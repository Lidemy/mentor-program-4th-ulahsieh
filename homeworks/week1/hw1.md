## 交作業流程
	
1.  新增一個 branch  
```
$ git branch week1
``` 
	
2.  切換到 branch  
```
$ git checkout week1`
```
p.s. 或是直接用 `git checkout -b week1`，合併第一以及第二步驟
	
3.  開始寫當周功課，請留意：  
	a. 文章格式為 markdown  
	b. 檔案內容請遵守中文文案排版指北  
	c. 當周所有功課寫完後才交  
		
4.  編寫完作業後將所有改動的檔案加入 staged 區  
```
$ git add .
```  
	
5.  Commit  
```
$ git  commit -am 'week1's homework done'
```  
	
6.  確認檔案狀態  
```
$ git status
```
確認 working directory 已經是乾淨狀態沒有需要 commit 的了

7.  把 local 的當前 branch week1 push 到 github 的 repository 的 branch week1
```
$ git push origin week1
```
8.  前往 github 的 repo 中可發現 week1 的 branch 可以 merge 了
![](https://imgur.com/zftIT73.png)
請按 `Compare & pull request`
		
9.  如果沒有看到這一行，則可以直接按再下方的 `New pull request`
![](https://imgur.com/RcuaBKe.png)
選擇要 merge 的 branch
![](https://imgur.com/wYz8vkX.png)
		
10. 打 merge 的標題跟 comment
![](https://imgur.com/nd8east.png)
送出前可以往下拉，在下面再次確認改動的地方
![](https://imgur.com/cpNWwUe.png)

11. 最後按下 `Create pull request`
![](https://imgur.com/luIRyg5.png)
		
12. 前往 Lidemy Learning System 的 `作業列表`，並選擇 `新增作業` 然後貼上**該 pull request 的 URL**，確認作業沒問題以及也看過檢討後，按確認
![](https://imgur.com/rWGRwfp.png)
		
13. 等待助教批改並協助 merge 以及 delete branch，merge 完成後長這樣：
![](https://imgur.com/43jFzLx.png)
		
14. 就可以回到本地端做 git pull 同步遠端以及地端的 master
```
$ git checkout master
$ git pull origin master
```
		
15. 同步完成後，就可以刪掉地端的 week1 branch，然後用 `$ git branch -v` 確認是否刪除成功
```
$ git branch -d week1
$ git branch -v
```

## 小結	
每一周作業以此類推，流程示意圖如下：
![](https://imgur.com/srmUJMh.png)
	
## 額外筆記－更新課綱
這個課綱是從 Huli 的 repo 用 github classroom 的功能複製過來自己的 github。所以當 Huli 改了他那邊的課綱時，我這邊的課綱不會跟著改，需要重新更新。
請注意在更新前如果手邊正在寫作業，則要先寫完作業再來做更新，不然就是一定要先 git commit，不然絕對會亂掉。所以同步前請先checkout 到 master，然後確認 git status 是在以下狀態：
![](https://imgur.com/LQwfgiQ.png)
更新時下 `$ git pull git@github.com:Lidemy/mentor-program-4th.git master` 把改動拉下來，此時會進入 vim 編輯器，直接按 `:wq` 跳出編輯器，再用 `$ git push origin master` 跟自己的 github 上的 master 同步，大功告成！