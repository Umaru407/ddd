const express=require("express")
const request = require("request");
const cheerio = require("cheerio");
const app = express();              // 例項化 express 物件



const server = app.listen(3000, function () { // 啟動伺服器
  console.log('全國最小的 node.js 爬蟲上線囉'); 
});



/* setInterval(myCrawler,'8000'); */
/* function myCrawler(){
const pttCrawler = () => {
    request({
        url: "https://aps.ncue.edu.tw/sign_up/index.php?keyword=1&sort_item=2",
        method: "GET"
    }, (error, res, body) => {
        // 如果有錯誤訊息，或沒有 body(內容)，就 return
        if (error || !body) {
            return;
        }

        const data = [];
        const $ = cheerio.load(body); // 載入 body
        const list = $("table tr");
        for (let i = 3; i < list.length-2; i++) {
            
            const title = list.eq(i).find('td:first-child a').text();
            const date = list.eq(i).find('.td3').eq(0).text()/* .replace(/(?<=\d{3}\/\d{2}\/\d{2}).*$/,"") */
         //   const numLimit = list.eq(i).find('.td3').eq(1).text()
          //  const numNow = list.eq(i).find('.td3').eq(2).text()
           // data.push({ title, date,numLimit,numNow});
      //  }
        
       // console.log(data);
 //   });
//};

//pttCrawler();

//} */
/* 
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul> */
