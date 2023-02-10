
Собрать скрипты в анонимную самовызывающуюся функцию и запутать.

После запуска надо указать имя `html-файла` (не должен быть `index.html`), в котором будут собираться скрипты. В этом файле необходимо указать `<!-- pack -->`, после которого во всех строках с `script` будут собираться скрипты. Код скриптов будет собран в один файл `scripts.js`, и обернут в анонимную самовызывающуюся функцию, а затем запутан с параметром `medium`. Будет создан новый `html-файл`, в котором адрес скриптов заменится на `<script src="scripts.js"></script>`.

В папке уже через `pkg packobf.js` создан `exe-файл`, который можно поместить в папку с нужным проектом, и запустить.

Пример:

`game.html`

```html
<body>
    <div id="winLogo" class="wins">
        <img class="mgm" src="Images/logo.png" id="winLogoImg" mgm-x="0" mgm-y="200" mgm-width="700">
        <div class="mgm" mgm-bottom="20" mgm-left="20" id="winLogoBTx">Клик, чтобы начать</div>
    </div>

    <script src="MGM.js"></script>

    <!-- pack -->
    <script src="Scripts/start.js"></script>
    <script src="Scripts/game.js"></script>
    <script src="Scripts/player.js"></script>
    <script src="Scripts/onMap.js"></script>
    <script src="Scripts/monsters.js"></script>
</body>
```

Будет создан `index.html`

```html
<body>
    <div id="winLogo" class="wins">
        <img class="mgm" src="Images/logo.png" id="winLogoImg" mgm-x="0" mgm-y="200" mgm-width="700">
        <div class="mgm" mgm-bottom="20" mgm-left="20" id="winLogoBTx">Клик, чтобы начать</div>
    </div>

    <script src="MGM.js"></script>

    <script src="scripts.js"></script>
</body>
```
