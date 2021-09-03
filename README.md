# wasa_test_v2
```
線上測試的項目：
我使用Vue CLI進行製作。樣式的部分使用bootstrap的utilities、隔線系統搭配我自己建立的mixin及樣式製作具有RWD功能的網頁。components的部分有製作ChooseView.vue來顯示景點資訊，只是我覺得稍嫌不足的部份是我只有做到props in 沒有 $emit out。在ChooseView.vue及MainPage.vue有使用到computed技巧，在MainPage.vue製作了兩個v-model進行雙向綁定(信件中有提到製作兩層v-model，這裡不太理解兩層v-model的意思)。
在MainPage.vue裡製作了搜尋、前10比瀏覽紀錄的功能。

頁面切換的部分使用vue-router製作，在public > index.html設定頁面的title、description。
第8點 設定Global參數、讓頁面的顏色、主題會隨著更換，這部分我沒有設定，不知道可以怎麼做。
我使用手邊現有的api來串接資料。我將變數、樣式設定的命名的比較通用，讓這些名稱不會只單一的使用在某個地方，而是許多地方都可以使用。

畫面的部分做得比較簡陋很不好意思，因為沒什麼靈感設計畫面的部分。但是對於基本的切板，我是做得到的。謝謝大家給我機會讓我做這個小小的測驗，希望有機會能參與面試，讓雙方都能夠有更近一步的了解。
最後謝謝這次的機會，很期待能夠接到回應，謝謝您們。
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
