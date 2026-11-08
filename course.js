/* Программа курса «С нуля до A1».
   Формат: слово "english|IPA|перевод", фраза "english|перевод",
   пропуск "предложение с ___|ответ|неверный1,неверный2|подсказка". */
const COURSE = [
{
  id: "u01", icon: "👋", title: "Привет! Знакомство",
  goal: "Здороваться, представляться, благодарить и прощаться",
  theory: [
    { h: "С чего начинаем",
      t: "Первые фразы учим <b>целиком, как готовые блоки</b>, не разбирая на части. Так учат дети и так быстрее начинаете говорить.<br><br>Каждое слово и фразу <b>произносите вслух</b> за диктором: нажмите 🔊, послушайте и повторите. 🐢 включает медленную озвучку.",
      ex: [["Hello!", "Здравствуйте! / Привет!"], ["Hi!", "Привет! (с друзьями)"], ["Goodbye!", "До свидания!"]] },
    { h: "Как представиться",
      t: "<b>My name is …</b> — «Моё имя …», то есть «Меня зовут …».<br><b>I'm …</b> — короче и живее: «Я …».<br>Спросить имя: <b>What's your name?</b>",
      ex: [["My name is Dima.", "Меня зовут Дима."], ["I'm Dima.", "Я Дима."], ["What's your name?", "Как тебя зовут?"], ["Nice to meet you.", "Приятно познакомиться."]] },
    { h: "Вежливость",
      t: "<b>Please</b> — пожалуйста, когда <i>просите</i>.<br><b>You're welcome</b> — пожалуйста, когда <i>отвечаете</i> на спасибо.<br><b>Excuse me</b> — чтобы обратиться к незнакомцу. <b>Sorry</b> — чтобы извиниться.<br><br>💡 Англичане говорят please и thank you намного чаще русских — без них речь звучит грубо.",
      ex: [["Water, please.", "Воды, пожалуйста."], ["Thank you! — You're welcome.", "Спасибо! — Пожалуйста."], ["Excuse me, where is the bank?", "Извините, где банк?"]] }
  ],
  words: [
    "hello|həˈloʊ|привет, здравствуйте", "hi|haɪ|привет (неформально)", "goodbye|ɡʊdˈbaɪ|до свидания",
    "bye|baɪ|пока", "good morning|ɡʊd ˈmɔːrnɪŋ|доброе утро", "good afternoon|ɡʊd ˌæftərˈnuːn|добрый день",
    "good evening|ɡʊd ˈiːvnɪŋ|добрый вечер", "good night|ɡʊd naɪt|спокойной ночи", "please|pliːz|пожалуйста (просьба)",
    "thank you|ˈθæŋk juː|спасибо", "yes|jes|да", "no|noʊ|нет",
    "sorry|ˈsɑːri|простите, извините", "excuse me|ɪkˈskjuːz miː|извините (обращение)", "name|neɪm|имя",
    "nice|naɪs|приятный, милый", "meet|miːt|встречать, знакомиться", "friend|frend|друг",
    "you're welcome|jʊr ˈwelkəm|пожалуйста (в ответ на спасибо)", "see you|ˈsiː juː|увидимся"
  ],
  phrases: [
    "Hello! My name is Dima.|Привет! Меня зовут Дима.", "What is your name?|Как тебя зовут?",
    "Nice to meet you.|Приятно познакомиться.", "How are you?|Как дела?",
    "I am fine, thank you.|У меня всё хорошо, спасибо.", "See you tomorrow.|Увидимся завтра.",
    "Thank you very much.|Большое спасибо.", "Excuse me, please.|Извините, пожалуйста."
  ],
  gaps: [
    "My ___ is Anna.|name|nice,meet|Меня зовут Анна.", "Nice to ___ you.|meet|see,name|Приятно познакомиться.",
    "How ___ you?|are|is,am|Как дела?", "Thank you very ___.|much|many,good|Большое спасибо.",
    "Good ___!|morning|night,evening|Доброе утро!", "___ me, where is the bank?|Excuse|Sorry,Please|Извините, где банк?",
    "Thank you! — You're ___.|welcome|please,sorry|Спасибо! — Пожалуйста.", "Good ___! Sleep well.|night|morning,afternoon|Спокойной ночи! Спи хорошо."
  ]
},
{
  id: "u02", icon: "🔤", title: "Звуки и фразы для учёбы",
  goal: "Понять, как читаются английские звуки, и выучить фразы, которые помогают учиться",
  theory: [
    { h: "Почему английский читается «не так»",
      t: "В английском 26 букв, но около 44 звуков, поэтому одна буква читается по-разному. Не пугайтесь: <b>учите слово сразу со звуком</b>, а не по буквам.<br><br>Рядом с каждым словом стоит <b>транскрипция</b> в квадратных скобках — подсказка, как оно звучит. Главное — слушать 🔊.",
      ex: [["cat", "кошка — короткий звук между «а» и «э»"], ["car", "машина — долгое «а-а»"], ["cup", "чашка — короткое «а»"]] },
    { h: "Звуки, которых нет в русском",
      t: "<b>th</b> [θ] [ð] — кончик языка между зубами и дуем: <i>think, this, three, mother</i>. Не заменяйте на «с» или «з»!<br><br><b>w</b> [w] — губы трубочкой, как «уа»: <i>water, what, window</i>. Это не «в».<br><br><b>h</b> [h] — лёгкий выдох, как будто греете руки. Мягче русского «х».<br><br><b>r</b> [r] — язык не дрожит, кончик загнут назад.<br><br><b>ng</b> [ŋ] — звук в нос, без «г» на конце: <i>sing, morning</i>.",
      ex: [["think", "думать"], ["this", "этот"], ["water", "вода"], ["house", "дом"], ["sing", "петь"]] },
    { h: "Долгие и короткие гласные",
      t: "Долгота гласной меняет смысл! Двоеточие [ː] в транскрипции значит «тяни звук».<br><b>ship</b> [ʃɪp] — корабль, <b>sheep</b> [ʃiːp] — овца.<br><b>full</b> [fʊl] — полный, <b>fool</b> [fuːl] — дурак.<br><br>💡 Не «оглушайте» конец слова, как в русском: <b>bed</b> (кровать) ≠ <b>bet</b> (ставка), <b>dog</b> — с чётким [g].",
      ex: [["ship — sheep", "корабль — овца"], ["bed — bet", "кровать — ставка"], ["sit — seat", "сидеть — сиденье"]] },
    { h: "Фразы, которые спасают",
      t: "Выучите их сразу — с ними можно учиться у любого собеседника: попросить повторить, говорить медленнее, объяснить слово.",
      ex: [["Can you repeat, please?", "Повторите, пожалуйста."], ["Speak slowly, please.", "Говорите медленно, пожалуйста."], ["I don't understand.", "Я не понимаю."], ["What does it mean?", "Что это значит?"]] }
  ],
  words: [
    "cat|kæt|кошка", "dog|dɔːɡ|собака", "bed|bed|кровать", "ship|ʃɪp|корабль", "sheep|ʃiːp|овца",
    "car|kɑːr|машина", "cup|kʌp|чашка", "think|θɪŋk|думать", "this|ðɪs|этот, это", "three|θriː|три",
    "mother|ˈmʌðər|мама, мать", "water|ˈwɔːtər|вода", "window|ˈwɪndoʊ|окно", "what|wʌt|что, какой",
    "house|haʊs|дом (здание)", "sing|sɪŋ|петь", "word|wɜːrd|слово", "letter|ˈletər|буква; письмо",
    "repeat|rɪˈpiːt|повторять", "understand|ˌʌndərˈstænd|понимать"
  ],
  phrases: [
    "Can you repeat, please?|Повторите, пожалуйста.", "Speak slowly, please.|Говорите медленно, пожалуйста.",
    "I don't understand.|Я не понимаю.", "What does it mean?|Что это значит?",
    "How do you say it in English?|Как это сказать по-английски?", "How do you spell it?|Как это пишется?",
    "I speak a little English.|Я немного говорю по-английски.", "I am learning English.|Я учу английский."
  ],
  gaps: [
    "Can you ___, please?|repeat|understand,think|Повторите, пожалуйста.", "Speak ___, please.|slowly|slow,much|Говорите медленно, пожалуйста.",
    "I don't ___.|understand|repeat,speak|Я не понимаю.", "What does it ___?|mean|say,think|Что это значит?",
    "How do you ___ it?|spell|letter,word|Как это пишется?", "I speak a ___ English.|little|small,few|Я немного говорю по-английски."
  ]
},
{
  id: "u03", icon: "🙋", title: "Я, ты, он — глагол to be",
  goal: "Говорить, кто вы, какой вы и где находитесь",
  theory: [
    { h: "Местоимения",
      t: "<b>I</b> — я (всегда с большой буквы!)<br><b>you</b> — ты / вы (одно слово на оба случая)<br><b>he</b> — он (о человеке), <b>she</b> — она<br><b>it</b> — оно / он / она о вещах и животных<br><b>we</b> — мы, <b>they</b> — они",
      ex: [["I", "я"], ["you", "ты, вы"], ["he", "он"], ["she", "она"], ["it", "оно (вещь)"], ["we", "мы"], ["they", "они"]] },
    { h: "Главное правило: to be",
      t: "По-русски говорим «Я врач», «Он дома» — без глагола. В английском <b>глагол обязателен</b>. Его роль играет <b>to be</b> (быть), у него три формы:<br><br><b>I am</b><br><b>he / she / it is</b><br><b>you / we / they are</b><br><br>❌ I tired. ✅ I am tired. — Я устал.",
      ex: [["I am tired.", "Я устал."], ["She is a doctor.", "Она врач."], ["We are at home.", "Мы дома."], ["It is cold.", "Холодно."]] },
    { h: "Сокращения",
      t: "В разговоре формы сливаются: <b>I'm, you're, he's, she's, it's, we're, they're</b>. Значение то же, просто звучит естественнее.",
      ex: [["I'm ready.", "Я готов."], ["He's busy.", "Он занят."], ["They're here.", "Они здесь."]] }
  ],
  words: [
    "I|aɪ|я", "you|juː|ты, вы", "he|hiː|он", "she|ʃiː|она", "it|ɪt|оно (о вещах)", "we|wiː|мы", "they|ðeɪ|они",
    "man|mæn|мужчина", "woman|ˈwʊmən|женщина", "boy|bɔɪ|мальчик", "girl|ɡɜːrl|девочка, девушка",
    "student|ˈstuːdənt|студент, ученик", "teacher|ˈtiːtʃər|учитель", "doctor|ˈdɑːktər|врач",
    "happy|ˈhæpi|счастливый, довольный", "tired|ˈtaɪərd|уставший", "busy|ˈbɪzi|занятой",
    "ready|ˈredi|готовый", "here|hɪr|здесь, сюда", "there|ðer|там, туда"
  ],
  phrases: [
    "I am tired.|Я устал.", "She is my friend.|Она мой друг.", "We are here.|Мы здесь.",
    "They are students.|Они студенты.", "He is busy now.|Он сейчас занят.", "It is my car.|Это моя машина.",
    "You are right.|Ты прав.", "I'm ready.|Я готов."
  ],
  gaps: [
    "I ___ tired.|am|is,are|Я устал.", "She ___ a doctor.|is|am,are|Она врач.", "We ___ friends.|are|is,am|Мы друзья.",
    "They ___ here.|are|is,am|Они здесь.", "He ___ busy.|is|are,am|Он занят.", "___ am a student.|I|He,She|Я студент.",
    "___ are at home.|We|He,It|Мы дома.", "It ___ my phone.|is|are,am|Это мой телефон.", "You ___ right.|are|is,am|Ты прав."
  ]
},
{
  id: "u04", icon: "❓", title: "Вопросы и «не»",
  goal: "Задавать вопросы с to be и отвечать «да / нет»",
  theory: [
    { h: "Отрицание: + not",
      t: "Ставим <b>not</b> после am / is / are:<br><b>I am not</b> (I'm not)<br><b>he is not</b> (he isn't)<br><b>we are not</b> (we aren't)",
      ex: [["I'm not hungry.", "Я не голоден."], ["She isn't at home.", "Её нет дома."], ["They aren't busy.", "Они не заняты."]] },
    { h: "Вопрос: меняем местами",
      t: "Глагол встаёт <b>перед</b> подлежащим, как в русском «Готов ли ты?»:<br>You are ready. → <b>Are you</b> ready?<br>He is at work. → <b>Is he</b> at work?<br><br>Короткий ответ: <b>Yes, I am. / No, I'm not.</b> Просто «Yes» тоже можно, но с глаголом звучит лучше.",
      ex: [["Are you ready? — Yes, I am.", "Ты готов? — Да."], ["Is she married? — No, she isn't.", "Она замужем? — Нет."]] },
    { h: "Вопросительные слова",
      t: "Ставятся в самое начало: <b>What</b> — что, <b>Who</b> — кто, <b>Where</b> — где, <b>How</b> — как, <b>When</b> — когда, <b>Why</b> — почему.",
      ex: [["Where are you from?", "Откуда ты?"], ["Who is he?", "Кто он?"], ["What is this?", "Что это?"], ["Why are you sad?", "Почему ты грустный?"]] }
  ],
  words: [
    "not|nɑːt|не", "what|wʌt|что", "who|huː|кто", "where|wer|где, куда", "how|haʊ|как", "when|wen|когда",
    "why|waɪ|почему", "cold|koʊld|холодный; холодно", "hot|hɑːt|горячий; жарко", "hungry|ˈhʌŋɡri|голодный",
    "sick|sɪk|больной", "sad|sæd|грустный", "at home|ət hoʊm|дома", "at work|ət wɜːrk|на работе",
    "married|ˈmærid|женатый, замужем", "OK|oʊˈkeɪ|нормально, хорошо", "very|ˈveri|очень",
    "now|naʊ|сейчас", "today|təˈdeɪ|сегодня", "really|ˈriːəli|правда, действительно"
  ],
  phrases: [
    "I am not tired.|Я не устал.", "Are you a student?|Ты студент?", "Yes, I am.|Да (я).",
    "Is she at home?|Она дома?", "No, she isn't.|Нет (её нет).", "Where are you from?|Откуда ты?",
    "What is this?|Что это?", "We aren't hungry.|Мы не голодны."
  ],
  gaps: [
    "___ you married?|Are|Is,Am|Ты женат?", "___ he at work?|Is|Are,Am|Он на работе?", "I ___ not hungry.|am|is,are|Я не голоден.",
    "Where ___ you from?|are|is,do|Откуда ты?", "No, I'm ___.|not|no,don't|Нет (я не).", "___ is your name?|What|Who,Where|Как тебя зовут?",
    "___ is she? — My sister.|Who|What,How|Кто она? — Моя сестра.", "She ___ sick today.|isn't|aren't,not|Она сегодня не болеет.",
    "Yes, I ___.|am|is,are|Да (я).", "___ are you sad?|Why|Who,What|Почему ты грустный?"
  ]
},
{
  id: "u05", icon: "🌍", title: "Страны, работа и артикли",
  goal: "Рассказать, откуда вы, где живёте и кем работаете",
  theory: [
    { h: "Артикль a / an",
      t: "Перед одним предметом или профессией ставится <b>a</b> — это «один, какой-то». Его нет в русском, но пропускать нельзя:<br>❌ I am engineer. ✅ I am <b>an</b> engineer.<br><br><b>an</b> — перед гласным <i>звуком</i>: an engineer, an apple, an hour.<br><b>a</b> — перед согласным: a doctor, a car.",
      ex: [["She is a nurse.", "Она медсестра."], ["He is an engineer.", "Он инженер."], ["It's an apple.", "Это яблоко."]] },
    { h: "Страна или национальность",
      t: "Страна — <b>Russia</b>, национальность и язык — <b>Russian</b>. Всегда с большой буквы!<br><b>I'm from Russia.</b> — Я из России.<br><b>I'm Russian.</b> — Я русский.<br><b>I speak Russian.</b> — Я говорю по-русски.",
      ex: [["I'm from Russia.", "Я из России."], ["I live in Vietnam.", "Я живу во Вьетнаме."], ["She is Vietnamese.", "Она вьетнамка."]] },
    { h: "Спросить о работе",
      t: "<b>What do you do?</b> — Чем ты занимаешься? (готовая фраза)<br>Ответ: <b>I'm a … / I work as a …</b>",
      ex: [["What do you do?", "Кем работаешь?"], ["I'm a programmer.", "Я программист."], ["I work as a driver.", "Я работаю водителем."]] }
  ],
  words: [
    "country|ˈkʌntri|страна", "Russia|ˈrʌʃə|Россия", "Russian|ˈrʌʃən|русский", "Vietnam|ˌviːetˈnɑːm|Вьетнам",
    "Vietnamese|viˌetnəˈmiːz|вьетнамский, вьетнамец", "England|ˈɪŋɡlənd|Англия", "English|ˈɪŋɡlɪʃ|английский",
    "America|əˈmerɪkə|Америка", "China|ˈtʃaɪnə|Китай", "city|ˈsɪti|город", "language|ˈlæŋɡwɪdʒ|язык",
    "job|dʒɑːb|работа, должность", "engineer|ˌendʒɪˈnɪr|инженер", "driver|ˈdraɪvər|водитель",
    "manager|ˈmænɪdʒər|менеджер", "programmer|ˈproʊɡræmər|программист", "cook|kʊk|повар; готовить",
    "nurse|nɜːrs|медсестра", "live|lɪv|жить", "speak|spiːk|говорить (на языке)"
  ],
  phrases: [
    "I am from Russia.|Я из России.", "I am Russian.|Я русский.", "She is a nurse.|Она медсестра.",
    "He is an engineer.|Он инженер.", "What do you do?|Чем ты занимаешься?", "I live in Vietnam.|Я живу во Вьетнаме.",
    "I speak Russian and a little English.|Я говорю по-русски и немного по-английски.", "Where do you live?|Где ты живёшь?"
  ],
  gaps: [
    "He is ___ engineer.|an|a,the|Он инженер.", "She is ___ nurse.|a|an,the|Она медсестра.", "I'm ___ Russia.|from|of,in|Я из России.",
    "I live ___ Dalat.|in|on,at|Я живу в Далате.", "They are ___.|Vietnamese|Vietnam,Vietnamian|Они вьетнамцы.",
    "I speak ___.|English|England,Englishes|Я говорю по-английски.", "It's ___ apple.|an|a,two|Это яблоко.",
    "What do you ___?|do|work,make|Чем ты занимаешься?", "I work ___ a driver.|as|like,is|Я работаю водителем."
  ]
},
{
  id: "u06", icon: "🔢", title: "Числа 0–20 и возраст",
  goal: "Считать до двадцати, называть возраст и номер телефона",
  theory: [
    { h: "Числа 1–12 учим наизусть",
      t: "one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve.<br><br>С 13 до 19 добавляется <b>-teen</b>, и ударение падает на него: thir<b>teen</b>, four<b>teen</b>, fif<b>teen</b>…",
      ex: [["one, two, three", "один, два, три"], ["thirteen", "тринадцать"], ["fifteen", "пятнадцать"], ["twenty", "двадцать"]] },
    { h: "Возраст — через to be",
      t: "Русские говорят «мне 30 лет», а англичане «я есть 30»: <b>I am thirty</b> или <b>I'm thirty years old</b>.<br>❌ I have 30 years. ✅ I'm 30.<br><br>Спросить: <b>How old are you?</b>",
      ex: [["How old are you?", "Сколько тебе лет?"], ["I'm thirty years old.", "Мне тридцать лет."], ["My son is ten.", "Моему сыну десять."]] },
    { h: "Телефон по цифрам",
      t: "Номер читают <b>по одной цифре</b>. Ноль — <b>zero</b> или <b>oh</b>. Две одинаковые подряд — <b>double</b>: 077 → oh, double seven.",
      ex: [["What's your phone number?", "Какой у тебя номер телефона?"], ["It's zero, nine, eight…", "Ноль, девять, восемь…"]] }
  ],
  words: [
    "zero|ˈzɪroʊ|ноль", "one|wʌn|один", "two|tuː|два", "three|θriː|три", "four|fɔːr|четыре", "five|faɪv|пять",
    "six|sɪks|шесть", "seven|ˈsevən|семь", "eight|eɪt|восемь", "nine|naɪn|девять", "ten|ten|десять",
    "eleven|ɪˈlevən|одиннадцать", "twelve|twelv|двенадцать", "thirteen|ˌθɜːrˈtiːn|тринадцать",
    "fifteen|ˌfɪfˈtiːn|пятнадцать", "twenty|ˈtwenti|двадцать", "old|oʊld|старый; (о возрасте) лет",
    "year|jɪr|год", "number|ˈnʌmbər|число, номер", "phone|foʊn|телефон"
  ],
  phrases: [
    "How old are you?|Сколько тебе лет?", "I am thirty years old.|Мне тридцать лет.", "She is twelve.|Ей двенадцать.",
    "What is your phone number?|Какой у тебя номер телефона?", "My son is ten.|Моему сыну десять.",
    "I have two children.|У меня двое детей.", "Room number seven, please.|Номер семь, пожалуйста."
  ],
  gaps: [
    "How ___ are you?|old|many,much|Сколько тебе лет?", "I ___ thirty.|am|have,is|Мне тридцать.",
    "five + five = ___|ten|eleven,nine|5 + 5", "six + seven = ___|thirteen|thirty,twelve|6 + 7",
    "What's your phone ___?|number|name,count|Какой у тебя номер?", "He is fifteen years ___.|old|age,year|Ему пятнадцать лет.",
    "eight + four = ___|twelve|twenty,eleven|8 + 4"
  ]
},
{
  id: "u07", icon: "💵", title: "Большие числа и деньги",
  goal: "Понимать цены, торговаться и платить",
  theory: [
    { h: "Десятки: -ty",
      t: "twenty, thirty, forty (без u!), fifty, sixty, seventy, eighty, ninety. Ударение на первом слоге: <b>thir</b>ty.<br><br>⚠ Не путайте: thir<b>teen</b> (13) — <b>thir</b>ty (30). Если сомневаетесь, переспросите: «One-three or three-zero?»<br><br>Составные через дефис: <b>twenty-five</b>, <b>ninety-nine</b>.",
      ex: [["thirteen — thirty", "13 — 30"], ["forty-five", "45"], ["ninety-nine", "99"]] },
    { h: "Сотни и тысячи",
      t: "<b>hundred</b> — сто, <b>thousand</b> — тысяча, <b>million</b> — миллион. Без -s после числа: <b>two hundred</b>, <b>fifty thousand</b>.<br><br>Во Вьетнаме цены большие: 50 000 донгов — <b>fifty thousand dong</b>, 1 500 000 — <b>one million five hundred thousand</b>.",
      ex: [["two hundred", "двести"], ["fifty thousand dong", "50 000 донгов"], ["one million", "миллион"]] },
    { h: "Цены",
      t: "<b>How much is it?</b> — Сколько стоит?<br><b>It's too expensive.</b> — Слишком дорого.<br><b>Can you give me a discount?</b> — Можно скидку?",
      ex: [["How much is it?", "Сколько это стоит?"], ["It's very cheap.", "Это очень дёшево."], ["Can I pay by card?", "Можно оплатить картой?"]] }
  ],
  words: [
    "thirty|ˈθɜːrti|тридцать", "forty|ˈfɔːrti|сорок", "fifty|ˈfɪfti|пятьдесят", "sixty|ˈsɪksti|шестьдесят",
    "seventy|ˈsevənti|семьдесят", "eighty|ˈeɪti|восемьдесят", "ninety|ˈnaɪnti|девяносто", "hundred|ˈhʌndrəd|сто",
    "thousand|ˈθaʊzənd|тысяча", "million|ˈmɪljən|миллион", "money|ˈmʌni|деньги", "price|praɪs|цена",
    "cheap|tʃiːp|дешёвый", "expensive|ɪkˈspensɪv|дорогой", "dollar|ˈdɑːlər|доллар", "pay|peɪ|платить",
    "cash|kæʃ|наличные", "card|kɑːrd|карта", "how much|haʊ mʌtʃ|сколько (стоит)", "discount|ˈdɪskaʊnt|скидка"
  ],
  phrases: [
    "How much is it?|Сколько это стоит?", "It is too expensive.|Это слишком дорого.", "It is very cheap.|Это очень дёшево.",
    "Can I pay by card?|Можно оплатить картой?", "I will pay in cash.|Я заплачу наличными.", "Can you give me a discount?|Можете дать скидку?",
    "Fifty thousand dong, please.|Пятьдесят тысяч донгов, пожалуйста."
  ],
  gaps: [
    "How ___ is it?|much|many,old|Сколько это стоит?", "It's too ___.|expensive|cheap,money|Слишком дорого.",
    "Can I pay ___ card?|by|with,on|Можно оплатить картой?", "two ___|hundred|hundreds,hundreded|двести",
    "fifty ___ dong|thousand|thousands,million|50 000 донгов", "I will pay in ___.|cash|card,money|Я заплачу наличными.",
    "twenty + twenty = ___|forty|fourty,fourteen|20 + 20", "Can you give me a ___?|discount|price,cash|Можно скидку?"
  ]
},
{
  id: "u08", icon: "🎒", title: "Предметы: this, that и множественное число",
  goal: "Называть вещи вокруг и говорить о нескольких предметах",
  theory: [
    { h: "This / that",
      t: "<b>this</b> — это (рядом, можно потрогать), мн. ч. <b>these</b> — эти.<br><b>that</b> — то (далеко), мн. ч. <b>those</b> — те.",
      ex: [["This is my bag.", "Это моя сумка."], ["That is your car.", "Вон та — твоя машина."], ["These are my keys.", "Это мои ключи."], ["Are those your shoes?", "Те — твои туфли?"]] },
    { h: "Множественное число: +s",
      t: "Обычно добавляем <b>-s</b>: key → keys, phone → phones.<br>После s, x, sh, ch → <b>-es</b>: box → boxes, watch → watches.<br>Согласная + y → <b>-ies</b>: city → cities.<br><br>Исключения запомнить:<br><b>man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth</b>",
      ex: [["two boxes", "две коробки"], ["three cities", "три города"], ["two children", "двое детей"], ["many people", "много людей"]] }
  ],
  words: [
    "this|ðɪs|этот, это", "that|ðæt|тот, то", "these|ðiːz|эти", "those|ðoʊz|те", "thing|θɪŋ|вещь",
    "bag|bæɡ|сумка", "key|kiː|ключ", "book|bʊk|книга", "pen|pen|ручка", "table|ˈteɪbəl|стол",
    "chair|tʃer|стул", "door|dɔːr|дверь", "bottle|ˈbɑːtəl|бутылка", "box|bɑːks|коробка",
    "computer|kəmˈpjuːtər|компьютер", "glasses|ˈɡlæsɪz|очки; стаканы", "watch|wɑːtʃ|часы (наручные); смотреть",
    "child|tʃaɪld|ребёнок", "children|ˈtʃɪldrən|дети", "people|ˈpiːpəl|люди"
  ],
  phrases: [
    "This is my bag.|Это моя сумка.", "That is my house.|Вон там мой дом.", "These are my keys.|Это мои ключи.",
    "Is this your phone?|Это твой телефон?", "What is that?|Что это (там)?", "I have two bottles of water.|У меня две бутылки воды.",
    "There are many people here.|Здесь много людей."
  ],
  gaps: [
    "___ is my bag.|This|These,Those|Это моя сумка.", "___ are my keys.|These|This,That|Это мои ключи.",
    "two ___|boxes|boxs,boxies|две коробки", "three ___|children|childs,childrens|трое детей",
    "Is ___ your car over there?|that|these,this|Вон там твоя машина?", "two ___|men|mans,mens|двое мужчин",
    "a lot of ___|people|peoples,persons|много людей", "five ___|cities|citys,cityes|пять городов"
  ]
},
{
  id: "u09", icon: "👨‍👩‍👧", title: "Семья и «мой, твой»",
  goal: "Рассказать о семье и говорить, кому что принадлежит",
  theory: [
    { h: "Мой, твой, его…",
      t: "<b>I → my</b> (мой)<br><b>you → your</b> (твой, ваш)<br><b>he → his</b> (его), <b>she → her</b> (её), <b>it → its</b><br><b>we → our</b> (наш), <b>they → their</b> (их)<br><br>💡 Русского «свой» в английском нет: «Он любит свою жену» = He loves <b>his</b> wife.",
      ex: [["This is my wife.", "Это моя жена."], ["His name is Tom.", "Его зовут Том."], ["Their house is big.", "Их дом большой."]] },
    { h: "'s — чей?",
      t: "Принадлежность человеку — <b>'s</b>: <b>Anna's car</b> — машина Анны, <b>my brother's son</b> — сын моего брата.",
      ex: [["This is Anna's car.", "Это машина Анны."], ["My mother's name is Olga.", "Маму зовут Ольга."]] },
    { h: "У меня есть — have",
      t: "«У меня есть брат» = <b>I have a brother</b>, дословно «я имею брата».<br>С he / she / it — <b>has</b>: She <b>has</b> two sons.",
      ex: [["I have a sister.", "У меня есть сестра."], ["She has two sons.", "У неё два сына."], ["We have a big family.", "У нас большая семья."]] }
  ],
  words: [
    "family|ˈfæməli|семья", "father|ˈfɑːðər|отец", "parents|ˈperənts|родители", "son|sʌn|сын",
    "daughter|ˈdɔːtər|дочь", "brother|ˈbrʌðər|брат", "sister|ˈsɪstər|сестра", "wife|waɪf|жена",
    "husband|ˈhʌzbənd|муж", "grandmother|ˈɡrænmʌðər|бабушка", "grandfather|ˈɡrænfɑːðər|дедушка", "baby|ˈbeɪbi|малыш",
    "my|maɪ|мой", "your|jʊr|твой, ваш", "his|hɪz|его", "her|hɜːr|её", "our|ˈaʊər|наш", "their|ðer|их",
    "have|hæv|иметь, у меня есть", "love|lʌv|любить; любовь"
  ],
  phrases: [
    "This is my wife.|Это моя жена.", "I have a brother and a sister.|У меня есть брат и сестра.",
    "She has two sons.|У неё два сына.", "His name is Tom.|Его зовут Том.", "Our family is big.|Наша семья большая.",
    "Do you have children?|У тебя есть дети?", "I love my family.|Я люблю свою семью.", "This is Anna's car.|Это машина Анны."
  ],
  gaps: [
    "This is ___ wife.|my|me,mine|Это моя жена.", "She loves ___ husband.|her|his,she|Она любит своего мужа.",
    "___ name is Tom.|His|He,Her|Его зовут Том.", "We love ___ children.|our|we,us|Мы любим наших детей.",
    "This is Anna___ car.|'s|s',is|Это машина Анны.", "I ___ a sister.|have|has,am|У меня есть сестра.",
    "She ___ two sons.|has|have,is|У неё два сына.", "They love ___ dog.|their|they,there|Они любят свою собаку."
  ]
},
{
  id: "u10", icon: "🎨", title: "Какой? Прилагательные и цвета",
  goal: "Описывать людей, вещи и места",
  theory: [
    { h: "Прилагательное не меняется",
      t: "В английском у прилагательных <b>нет окончаний</b>: big car, big house, big cars — всегда big. Ставится <b>перед</b> существительным, как в русском.",
      ex: [["a big house", "большой дом"], ["big houses", "большие дома"], ["a new phone", "новый телефон"]] },
    { h: "Два способа",
      t: "1) <b>It's a new car.</b> — Это новая машина.<br>2) <b>The car is new.</b> — Машина новая.<br><br><b>very</b> — очень: very good, very fast.",
      ex: [["The room is very small.", "Комната очень маленькая."], ["She is beautiful.", "Она красивая."], ["English is not difficult.", "Английский несложный."]] }
  ],
  words: [
    "big|bɪɡ|большой", "small|smɔːl|маленький", "new|nuː|новый", "young|jʌŋ|молодой", "good|ɡʊd|хороший",
    "bad|bæd|плохой", "beautiful|ˈbjuːtɪfəl|красивый", "long|lɔːŋ|длинный, долгий", "short|ʃɔːrt|короткий; невысокий",
    "fast|fæst|быстрый; быстро", "slow|sloʊ|медленный", "easy|ˈiːzi|лёгкий, простой", "difficult|ˈdɪfɪkəlt|трудный",
    "red|red|красный", "blue|bluː|синий, голубой", "green|ɡriːn|зелёный", "white|waɪt|белый", "black|blæk|чёрный",
    "yellow|ˈjeloʊ|жёлтый", "color|ˈkʌlər|цвет"
  ],
  phrases: [
    "It is a new car.|Это новая машина.", "The room is very small.|Комната очень маленькая.", "She is young and beautiful.|Она молодая и красивая.",
    "English is not difficult.|Английский не трудный.", "What color is it?|Какого это цвета?", "My bike is red.|Мой велосипед красный.",
    "This is a good idea.|Это хорошая идея."
  ],
  gaps: [
    "It's a ___ car.|new|news,newly|Это новая машина.", "The sky is ___.|blue|yellow,black|Небо голубое.",
    "This car is very ___.|fast|slow,short|Эта машина очень быстрая.", "two ___ houses|big|bigs,biges|два больших дома",
    "What ___ is it?|color|colors,red|Какого это цвета?", "English is ___.|easy|difficult,long|Английский — лёгкий.",
    "I have a ___ cat.|black|blacks,white|У меня чёрная кошка."
  ]
},
{
  id: "u11", icon: "⏰", title: "Мой день — Present Simple",
  goal: "Рассказывать, что вы делаете обычно, каждый день",
  theory: [
    { h: "Present Simple — «обычно»",
      t: "Это время для привычек и фактов: что вы делаете <b>обычно, каждый день, всегда</b>.<br><b>I work. We live in Dalat. They drink coffee.</b><br>С I / you / we / they глагол <b>не меняется</b>.",
      ex: [["I get up at seven.", "Я встаю в семь."], ["We drink coffee every morning.", "Мы пьём кофе каждое утро."], ["They live in Dalat.", "Они живут в Далате."]] },
    { h: "Не — don't",
      t: "Отрицание: <b>don't</b> (= do not) перед глаголом.<br><b>I don't eat meat.</b> — Я не ем мясо.<br>❌ I not work. ✅ I <b>don't</b> work.",
      ex: [["I don't like tea.", "Я не люблю чай."], ["We don't work on Sunday.", "Мы не работаем в воскресенье."]] },
    { h: "Вопрос — Do",
      t: "Ставим <b>Do</b> в начало: <b>Do you work here?</b> — Ты здесь работаешь?<br>Ответ: <b>Yes, I do. / No, I don't.</b><br>С вопросительным словом: <b>Where do you live? What do you eat?</b>",
      ex: [["Do you speak English?", "Ты говоришь по-английски?"], ["Yes, I do.", "Да."], ["Where do you work?", "Где ты работаешь?"]] }
  ],
  words: [
    "wake up|weɪk ʌp|просыпаться", "get up|ɡet ʌp|вставать", "go|ɡoʊ|идти, ехать", "work|wɜːrk|работать; работа",
    "eat|iːt|есть (кушать)", "drink|drɪŋk|пить; напиток", "sleep|sliːp|спать", "read|riːd|читать",
    "watch TV|wɑːtʃ ˌtiːˈviː|смотреть телевизор", "study|ˈstʌdi|учиться, изучать", "learn|lɜːrn|учить, узнавать",
    "play|pleɪ|играть", "walk|wɔːk|ходить пешком, гулять", "drive|draɪv|водить машину", "come back|kʌm bæk|возвращаться",
    "every day|ˈevri deɪ|каждый день", "morning|ˈmɔːrnɪŋ|утро", "evening|ˈiːvnɪŋ|вечер", "night|naɪt|ночь",
    "breakfast|ˈbrekfəst|завтрак"
  ],
  phrases: [
    "I get up at seven.|Я встаю в семь.", "I have breakfast at home.|Я завтракаю дома.", "We drink coffee every morning.|Мы пьём кофе каждое утро.",
    "I work from home.|Я работаю из дома.", "I don't eat meat.|Я не ем мясо.", "Do you speak English?|Ты говоришь по-английски?",
    "Yes, I do.|Да.", "I study English every day.|Я учу английский каждый день.", "Where do you work?|Где ты работаешь?"
  ],
  gaps: [
    "I ___ up at seven.|get|gets,getting|Я встаю в семь.", "We ___ coffee every morning.|drink|drinks,drinking|Мы пьём кофе каждое утро.",
    "I ___ like tea.|don't|doesn't,not|Я не люблю чай.", "___ you work here?|Do|Does,Are|Ты здесь работаешь?",
    "Yes, I ___.|do|am,does|Да.", "They ___ in Dalat.|live|lives,living|Они живут в Далате.",
    "I ___ English every day.|study|studies,studying|Я учу английский каждый день.", "Where ___ you live?|do|are,does|Где ты живёшь?"
  ]
},
{
  id: "u12", icon: "👩‍💼", title: "Он / она: окончание -s и does",
  goal: "Рассказывать о других людях и о том, как часто что-то происходит",
  theory: [
    { h: "He / she / it + s",
      t: "Самое важное правило уровня A1: с <b>he, she, it</b> к глаголу добавляем <b>-s</b>.<br>I work → She work<b>s</b>. We live → He live<b>s</b>.<br><br>-es после s, sh, ch, x, o: watch → watch<b>es</b>, go → go<b>es</b>, do → do<b>es</b>.<br>study → stud<b>ies</b>. Исключение: have → <b>has</b>.",
      ex: [["She works in an office.", "Она работает в офисе."], ["He watches TV.", "Он смотрит телевизор."], ["My brother has a car.", "У брата есть машина."]] },
    { h: "Doesn't и Does",
      t: "С he / she / it вместо don't — <b>doesn't</b>, вместо Do — <b>Does</b>. При этом -s у глагола <b>исчезает</b> (оно уже в does):<br>❌ She doesn't works. ✅ She <b>doesn't work</b>.<br>❌ Does he speaks? ✅ <b>Does he speak</b> English?",
      ex: [["She doesn't like coffee.", "Она не любит кофе."], ["Does he speak English?", "Он говорит по-английски?"], ["Yes, he does.", "Да."]] },
    { h: "Как часто?",
      t: "<b>always</b> — всегда, <b>usually</b> — обычно, <b>often</b> — часто, <b>sometimes</b> — иногда, <b>never</b> — никогда.<br>Ставятся <b>перед</b> глаголом: I <b>often</b> go… но <b>после</b> am/is/are: He is <b>always</b> late.<br><br>💡 never уже отрицание: I never eat meat (без don't!).",
      ex: [["I usually get up early.", "Я обычно встаю рано."], ["He is always late.", "Он всегда опаздывает."], ["I never drink beer.", "Я никогда не пью пиво."]] }
  ],
  words: [
    "always|ˈɔːlweɪz|всегда", "usually|ˈjuːʒuəli|обычно", "often|ˈɔːfən|часто", "sometimes|ˈsʌmtaɪmz|иногда",
    "never|ˈnevər|никогда", "every|ˈevri|каждый", "week|wiːk|неделя", "weekend|ˈwiːkend|выходные",
    "start|stɑːrt|начинать", "finish|ˈfɪnɪʃ|заканчивать", "open|ˈoʊpən|открывать; открытый", "close|kloʊz|закрывать",
    "want|wɑːnt|хотеть", "need|niːd|нуждаться, нужно", "know|noʊ|знать", "like|laɪk|нравиться, любить",
    "hate|heɪt|ненавидеть", "office|ˈɔːfɪs|офис", "late|leɪt|поздно; опаздывать", "early|ˈɜːrli|рано"
  ],
  phrases: [
    "She works in an office.|Она работает в офисе.", "He watches TV every evening.|Он смотрит телевизор каждый вечер.",
    "My brother has a car.|У моего брата есть машина.", "She doesn't like coffee.|Она не любит кофе.",
    "Does he speak English?|Он говорит по-английски?", "I usually get up early.|Я обычно встаю рано.",
    "He is always late.|Он всегда опаздывает.", "The shop opens at nine.|Магазин открывается в девять."
  ],
  gaps: [
    "She ___ in an office.|works|work,working|Она работает в офисе.", "He ___ TV every evening.|watches|watchs,watch|Он смотрит телевизор каждый вечер.",
    "My brother ___ two cars.|has|have,haves|У брата две машины.", "She ___ like coffee.|doesn't|don't,isn't|Она не любит кофе.",
    "___ he speak English?|Does|Do,Is|Он говорит по-английски?", "I ___ eat meat.|never|ever,not|Я никогда не ем мясо.",
    "He is ___ late.|always|never,often|Он всегда опаздывает.", "She doesn't ___ here.|work|works,working|Она здесь не работает.",
    "My son ___ English.|studies|studys,study|Мой сын учит английский.", "The shop ___ at nine.|opens|open,opening|Магазин открывается в девять."
  ]
},
{
  id: "u13", icon: "📅", title: "Время и дни недели",
  goal: "Спрашивать время, договариваться о встрече",
  theory: [
    { h: "Который час?",
      t: "<b>What time is it?</b> — Который час?<br><b>It's seven o'clock.</b> — Семь ровно.<br><b>It's half past seven.</b> — Половина восьмого (дословно «половина после семи»).<br><b>It's quarter past seven</b> — 7:15. <b>It's quarter to eight</b> — 7:45.<br><br>Проще всего называть цифрами: 7:20 — <b>seven twenty</b>.",
      ex: [["What time is it?", "Который час?"], ["It's seven o'clock.", "Семь часов."], ["It's half past six.", "Половина седьмого."], ["It's nine fifteen.", "Девять пятнадцать."]] },
    { h: "Предлоги времени: at, on, in",
      t: "<b>at</b> + точное время: at 7, at noon, at night<br><b>on</b> + день: on Monday, on Sunday<br><b>in</b> + часть дня, месяц, год: in the morning, in July, in 2025",
      ex: [["The shop opens at nine.", "Магазин открывается в девять."], ["See you on Friday.", "Увидимся в пятницу."], ["I study in the morning.", "Я занимаюсь утром."]] },
    { h: "Дни недели",
      t: "Пишутся <b>с большой буквы</b>: Monday, Tuesday, Wednesday (читается [ˈwenzdeɪ]), Thursday, Friday, Saturday, Sunday.",
      ex: [["Monday", "понедельник"], ["Wednesday", "среда"], ["Saturday", "суббота"]] }
  ],
  words: [
    "time|taɪm|время; раз", "hour|ˈaʊər|час", "minute|ˈmɪnɪt|минута", "o'clock|əˈklɑːk|ровно (о часах)",
    "half|hæf|половина", "quarter|ˈkwɔːrtər|четверть", "past|pæst|после (о времени); прошлое",
    "Monday|ˈmʌndeɪ|понедельник", "Tuesday|ˈtuːzdeɪ|вторник", "Wednesday|ˈwenzdeɪ|среда", "Thursday|ˈθɜːrzdeɪ|четверг",
    "Friday|ˈfraɪdeɪ|пятница", "Saturday|ˈsætərdeɪ|суббота", "Sunday|ˈsʌndeɪ|воскресенье", "day|deɪ|день",
    "tomorrow|təˈmɑːroʊ|завтра", "yesterday|ˈjestərdeɪ|вчера", "month|mʌnθ|месяц", "noon|nuːn|полдень", "meeting|ˈmiːtɪŋ|встреча, совещание"
  ],
  phrases: [
    "What time is it?|Который час?", "It is seven o'clock.|Сейчас семь часов.", "It is half past six.|Половина седьмого.",
    "See you on Friday.|Увидимся в пятницу.", "The shop opens at nine.|Магазин открывается в девять.",
    "I don't work on Sunday.|Я не работаю в воскресенье.", "Let's meet tomorrow at noon.|Давай встретимся завтра в полдень.",
    "I have a meeting at three.|У меня встреча в три."
  ],
  gaps: [
    "The shop opens ___ nine.|at|on,in|Магазин открывается в девять.", "I work ___ Monday.|on|at,in|Я работаю в понедельник.",
    "I sleep ___ night.|at|in,on|Я сплю ночью.", "I study ___ the morning.|in|at,on|Я занимаюсь утром.",
    "It's half ___ six.|past|to,after|Половина седьмого.", "It's seven ___.|o'clock|hours,clock|Семь часов.",
    "What ___ is it?|time|hour,clock|Который час?", "See you ___ Friday.|on|in,at|Увидимся в пятницу."
  ]
},
{
  id: "u14", icon: "🍜", title: "Еда и кафе",
  goal: "Заказывать еду, просить счёт, говорить что любите",
  theory: [
    { h: "Вежливый заказ",
      t: "<b>I'd like …</b> (= I would like) — я бы хотел. Это вежливее, чем I want.<br><b>Can I have …, please?</b> — Можно мне …?<br><b>The bill, please.</b> — Счёт, пожалуйста.",
      ex: [["I'd like a coffee, please.", "Мне кофе, пожалуйста."], ["Can I have the menu, please?", "Можно меню?"], ["The bill, please.", "Счёт, пожалуйста."]] },
    { h: "Считаемое и несчитаемое",
      t: "Одни вещи можно посчитать: an egg, two eggs. Другие нет: water, rice, milk, bread, sugar — у них нет мн. числа и нельзя ставить a.<br>❌ a water ✅ <b>some water</b>, <b>a bottle of water</b><br><br><b>some</b> — немного, несколько (в утверждениях)<br><b>any</b> — сколько-нибудь (в вопросах и с not)",
      ex: [["I'd like some water.", "Мне немного воды."], ["Do you have any milk?", "У вас есть молоко?"], ["We don't have any bread.", "У нас нет хлеба."]] }
  ],
  words: [
    "food|fuːd|еда", "lunch|lʌntʃ|обед", "dinner|ˈdɪnər|ужин", "bread|bred|хлеб", "rice|raɪs|рис", "egg|eɡ|яйцо",
    "meat|miːt|мясо", "chicken|ˈtʃɪkɪn|курица", "fish|fɪʃ|рыба; рыбачить", "soup|suːp|суп", "vegetables|ˈvedʒtəbəlz|овощи",
    "fruit|fruːt|фрукты", "coffee|ˈkɔːfi|кофе", "tea|tiː|чай", "milk|mɪlk|молоко", "sugar|ˈʃʊɡər|сахар",
    "juice|dʒuːs|сок", "menu|ˈmenjuː|меню", "bill|bɪl|счёт (в кафе)", "delicious|dɪˈlɪʃəs|очень вкусный"
  ],
  phrases: [
    "I'd like a coffee, please.|Мне кофе, пожалуйста.", "Can I have the menu, please?|Можно меню, пожалуйста?",
    "The bill, please.|Счёт, пожалуйста.", "Do you have any milk?|У вас есть молоко?", "I don't eat meat.|Я не ем мясо.",
    "The soup is delicious.|Суп очень вкусный.", "No sugar, please.|Без сахара, пожалуйста.", "Chicken with rice, please.|Курицу с рисом, пожалуйста."
  ],
  gaps: [
    "I'd ___ a coffee, please.|like|want,likes|Мне кофе, пожалуйста.", "Can I ___ the bill, please?|have|has,having|Можно счёт?",
    "Do you have ___ milk?|any|some,a|У вас есть молоко?", "I want ___ egg.|an|a,some|Я хочу яйцо.",
    "I'd like ___ water.|some|any,a|Мне немного воды.", "We don't have ___ bread.|any|some,a|У нас нет хлеба.",
    "The soup is ___!|delicious|delicate,deliver|Суп очень вкусный!", "Chicken ___ rice, please.|with|and,without|Курицу с рисом, пожалуйста."
  ]
},
{
  id: "u15", icon: "🏠", title: "Дом: there is / there are",
  goal: "Описывать квартиру и говорить, где что находится",
  theory: [
    { h: "There is / there are — «есть, находится»",
      t: "Когда сообщаем, что где-то <b>что-то есть</b>, начинаем с <b>there is</b> (один предмет) или <b>there are</b> (много):<br><b>There is a bed in the room.</b> — В комнате есть кровать.<br><b>There are two chairs.</b> — Там два стула.<br><br>Вопрос: <b>Is there…? Are there…?</b><br>💡 Русские говорят с конца («В комнате есть…»), англичане — с there is.",
      ex: [["There is a bed in the room.", "В комнате есть кровать."], ["There are two bedrooms.", "Здесь две спальни."], ["Is there a toilet here?", "Здесь есть туалет?"]] },
    { h: "Где? Предлоги места",
      t: "<b>in</b> — в, внутри · <b>on</b> — на (поверхности) · <b>under</b> — под<br><b>next to</b> — рядом с · <b>near</b> — недалеко от · <b>behind</b> — за, позади<br><b>between</b> — между · <b>in front of</b> — перед",
      ex: [["The keys are on the table.", "Ключи на столе."], ["The cat is under the bed.", "Кошка под кроватью."], ["The bank is next to the pharmacy.", "Банк рядом с аптекой."]] }
  ],
  words: [
    "home|hoʊm|дом (родной), домой", "room|ruːm|комната", "bedroom|ˈbedruːm|спальня", "bathroom|ˈbæθruːm|ванная",
    "toilet|ˈtɔɪlət|туалет", "kitchen|ˈkɪtʃɪn|кухня", "sofa|ˈsoʊfə|диван", "wall|wɔːl|стена", "floor|flɔːr|пол; этаж",
    "stairs|sterz|лестница", "garden|ˈɡɑːrdən|сад", "in|ɪn|в", "on|ɑːn|на", "under|ˈʌndər|под", "next to|nekst tuː|рядом с",
    "near|nɪr|недалеко, около", "behind|bɪˈhaɪnd|за, позади", "between|bɪˈtwiːn|между", "in front of|ɪn frʌnt əv|перед",
    "apartment|əˈpɑːrtmənt|квартира"
  ],
  phrases: [
    "There is a bed in the room.|В комнате есть кровать.", "There are two bedrooms.|Здесь две спальни.",
    "Is there a toilet here?|Здесь есть туалет?", "The keys are on the table.|Ключи на столе.",
    "The cat is under the bed.|Кошка под кроватью.", "The bank is next to the pharmacy.|Банк рядом с аптекой.",
    "Are there any shops near here?|Здесь поблизости есть магазины?", "My apartment is on the third floor.|Моя квартира на третьем этаже."
  ],
  gaps: [
    "There ___ a bed in the room.|is|are,am|В комнате есть кровать.", "There ___ two chairs.|are|is,be|Там два стула.",
    "___ there a toilet here?|Is|Are,Do|Здесь есть туалет?", "The keys are ___ the table.|on|in,under|Ключи на столе.",
    "The cat is ___ the bed.|under|on,behind|Кошка под кроватью.", "The bank is ___ the pharmacy.|next to|between,in|Банк рядом с аптекой.",
    "___ there any shops near here?|Are|Is,Do|Тут есть магазины?", "The phone is ___ my bag.|in|on,under|Телефон в сумке."
  ]
},
{
  id: "u16", icon: "💪", title: "Can — могу, умею",
  goal: "Говорить, что вы умеете, и вежливо просить о помощи",
  theory: [
    { h: "Can — простой глагол",
      t: "<b>can</b> — могу, умею. Одна форма для всех: I can, she can (без -s!). После него глагол <b>без to</b>:<br>❌ She cans swim. ❌ I can to swim. ✅ <b>I can swim.</b><br>Не могу — <b>can't</b> (= cannot).",
      ex: [["I can ride a motorbike.", "Я умею ездить на мотобайке."], ["She can speak English.", "Она говорит по-английски."], ["I can't swim.", "Я не умею плавать."]] },
    { h: "Просьбы",
      t: "<b>Can you …?</b> — Можешь …?<br><b>Could you …, please?</b> — Не могли бы вы …? (вежливее, для незнакомых)<br><b>Can I …?</b> — Можно мне …?",
      ex: [["Can you help me?", "Можешь помочь?"], ["Could you speak slowly, please?", "Не могли бы вы говорить медленнее?"], ["Can I sit here?", "Можно сесть здесь?"]] }
  ],
  words: [
    "can|kæn|мочь, уметь", "can't|kænt|не могу, не умею", "could|kʊd|мог бы (вежливо)", "swim|swɪm|плавать",
    "ride|raɪd|ездить (на байке, лошади)", "dance|dæns|танцевать", "help|help|помогать; помощь", "use|juːz|использовать",
    "wait|weɪt|ждать", "show|ʃoʊ|показывать", "write|raɪt|писать", "call|kɔːl|звонить; звать", "send|send|отправлять",
    "carry|ˈkæri|нести", "fix|fɪks|чинить, исправлять", "try|traɪ|пробовать, стараться", "bike|baɪk|велосипед",
    "motorbike|ˈmoʊtərbaɪk|мотобайк", "well|wel|хорошо (как?)", "sit|sɪt|сидеть, садиться"
  ],
  phrases: [
    "I can ride a motorbike.|Я умею ездить на мотобайке.", "She can speak English well.|Она хорошо говорит по-английски.",
    "I can't swim.|Я не умею плавать.", "Can you help me?|Можешь мне помочь?", "Could you speak slowly, please?|Не могли бы вы говорить медленнее?",
    "Can I sit here?|Можно мне сесть здесь?", "Wait a minute, please.|Подождите минутку, пожалуйста.", "Can you show me on the map?|Можете показать на карте?"
  ],
  gaps: [
    "I can ___ a motorbike.|ride|rides,to ride|Я умею ездить на мотобайке.", "She can ___ English well.|speak|speaks,speaking|Она хорошо говорит по-английски.",
    "___ you help me?|Can|Do,Are|Можешь помочь?", "I ___ swim.|can't|don't can,not can|Я не умею плавать.",
    "Can you ___ that, please?|repeat|repeats,to repeat|Повторите, пожалуйста.", "He ___ drive.|can|cans,can to|Он умеет водить.",
    "___ you speak slowly, please?|Could|Do,Are|Не могли бы вы говорить медленнее?", "___ I sit here?|Can|Do,Am|Можно мне сесть здесь?"
  ]
},
{
  id: "u17", icon: "🗺", title: "Город и дорога",
  goal: "Спрашивать дорогу и понимать, куда идти",
  theory: [
    { h: "Повелительное наклонение",
      t: "Просьба или указание — просто глагол без «ты»: <b>Turn left. Go straight. Stop here.</b><br>Запрет — <b>Don't</b> + глагол: <b>Don't stop!</b><br>Предложение — <b>Let's</b> + глагол: <b>Let's go!</b> — Пошли!",
      ex: [["Turn left at the corner.", "Поверните налево на углу."], ["Go straight ahead.", "Идите прямо."], ["Don't stop here.", "Не останавливайтесь здесь."], ["Let's take a taxi.", "Давай возьмём такси."]] },
    { h: "Как спросить дорогу",
      t: "<b>Excuse me, where is …?</b> — Извините, где …?<br><b>How do I get to …?</b> — Как добраться до …?<br><b>Is it far?</b> — Это далеко?",
      ex: [["Excuse me, where is the bus station?", "Извините, где автовокзал?"], ["How do I get to the airport?", "Как добраться до аэропорта?"], ["Is it far from here?", "Это далеко отсюда?"]] }
  ],
  words: [
    "street|striːt|улица", "road|roʊd|дорога", "left|left|налево; левый", "right|raɪt|направо; правый; верный",
    "straight|streɪt|прямо", "corner|ˈkɔːrnər|угол", "turn|tɜːrn|поворачивать", "stop|stɑːp|останавливаться; остановка",
    "bank|bæŋk|банк", "hospital|ˈhɑːspɪtəl|больница", "pharmacy|ˈfɑːrməsi|аптека", "supermarket|ˈsuːpərmɑːrkɪt|супермаркет",
    "market|ˈmɑːrkɪt|рынок", "station|ˈsteɪʃən|станция, вокзал", "airport|ˈerpɔːrt|аэропорт", "bus|bʌs|автобус",
    "taxi|ˈtæksi|такси", "map|mæp|карта (местности)", "far|fɑːr|далеко", "take|teɪk|брать; ехать (на транспорте)"
  ],
  phrases: [
    "Excuse me, where is the bank?|Извините, где банк?", "How do I get to the airport?|Как добраться до аэропорта?",
    "Turn left at the corner.|Поверните налево на углу.", "Go straight ahead.|Идите прямо.", "Is it far from here?|Это далеко отсюда?",
    "It is near the market.|Это недалеко от рынка.", "Stop here, please.|Остановите здесь, пожалуйста.", "Let's take a taxi.|Давай возьмём такси."
  ],
  gaps: [
    "___ left at the corner.|Turn|Turns,Turning|Поверните налево на углу.", "___ stop here!|Don't|Not,No|Не останавливайтесь здесь!",
    "Go ___ ahead.|straight|right,strong|Идите прямо.", "The airport is ___ from here.|far|near,next|Аэропорт далеко отсюда.",
    "How do I get ___ the station?|to|in,at|Как добраться до вокзала?", "Let's ___ a taxi.|take|takes,taking|Давай возьмём такси.",
    "Turn ___. (направо)|right|left,straight|Поверните направо.", "Excuse me, ___ is the pharmacy?|where|what,who|Извините, где аптека?"
  ]
},
{
  id: "u18", icon: "🛍", title: "Покупки и одежда",
  goal: "Покупать одежду и вещи, спрашивать размер и цену",
  theory: [
    { h: "Сколько стоит — is или are",
      t: "Один предмет — <b>How much is this shirt?</b><br>Пара или много — <b>How much are these shoes?</b> (shoes, jeans, glasses — всегда мн. ч.)",
      ex: [["How much is this T-shirt?", "Сколько стоит эта футболка?"], ["How much are these jeans?", "Сколько стоят эти джинсы?"]] },
    { h: "В магазине",
      t: "<b>Can I try it on?</b> — Можно примерить?<br><b>Do you have it in a bigger size?</b> — Есть размер побольше?<br><b>It's too small / too big.</b> — Слишком мал / велик. (<b>too</b> = слишком)<br><b>I'll take it.</b> — Беру.<br><b>Just looking, thanks.</b> — Просто смотрю, спасибо.",
      ex: [["Can I try it on?", "Можно примерить?"], ["It's too big.", "Слишком большой."], ["I'll take it.", "Я возьму это."], ["Just looking, thanks.", "Просто смотрю, спасибо."]] }
  ],
  words: [
    "shop|ʃɑːp|магазин", "buy|baɪ|покупать", "sell|sel|продавать", "size|saɪz|размер", "try on|traɪ ɑːn|примерять",
    "clothes|kloʊðz|одежда", "shirt|ʃɜːrt|рубашка", "T-shirt|ˈtiː ʃɜːrt|футболка", "dress|dres|платье", "jeans|dʒiːnz|джинсы",
    "shoes|ʃuːz|обувь, туфли", "hat|hæt|шляпа, кепка", "jacket|ˈdʒækɪt|куртка", "sale|seɪl|распродажа", "receipt|rɪˈsiːt|чек",
    "change|tʃeɪndʒ|сдача; менять", "too|tuː|слишком; тоже", "bigger|ˈbɪɡər|побольше", "smaller|ˈsmɔːlər|поменьше", "look|lʊk|смотреть; выглядеть"
  ],
  phrases: [
    "How much is this T-shirt?|Сколько стоит эта футболка?", "How much are these shoes?|Сколько стоят эти туфли?",
    "Can I try it on?|Можно примерить?", "Do you have it in a bigger size?|У вас есть размер побольше?",
    "It's too small.|Слишком маленький.", "I'll take it.|Я это возьму.", "Just looking, thanks.|Просто смотрю, спасибо.", "Keep the change.|Сдачи не надо."
  ],
  gaps: [
    "How much ___ these shoes?|are|is,do|Сколько стоят эти туфли?", "How much ___ this shirt?|is|are,do|Сколько стоит эта рубашка?",
    "Can I try it ___?|on|in,at|Можно примерить?", "It's ___ expensive.|too|to,two|Это слишком дорого.",
    "I'll ___ it.|take|took,taking|Я это возьму.", "Do you have it in a smaller ___?|size|price,sale|Есть размер поменьше?",
    "Just ___, thanks.|looking|look,see|Просто смотрю, спасибо.", "Keep the ___.|change|money,price|Сдачи не надо."
  ]
},
{
  id: "u19", icon: "🎬", title: "Прямо сейчас — Present Continuous",
  goal: "Рассказывать, что происходит в данный момент",
  theory: [
    { h: "am / is / are + -ing",
      t: "Действие идёт <b>прямо сейчас</b>: <b>I am working.</b> — Я (сейчас) работаю.<br>Формула: <b>to be + глагол-ing</b>.<br>She <b>is reading</b>. They <b>are sleeping</b>. It <b>is raining</b>.<br><br>Не: <b>I'm not working.</b> Вопрос: <b>Are you working? What are you doing?</b>",
      ex: [["I'm working now.", "Я сейчас работаю."], ["What are you doing?", "Что ты делаешь?"], ["It's raining.", "Идёт дождь."]] },
    { h: "Правописание -ing",
      t: "make → <b>making</b> (немая e уходит)<br>sit → <b>sitting</b>, run → <b>running</b>, swim → <b>swimming</b> (короткое слово — удваиваем согласную)<br>lie → <b>lying</b>",
      ex: [["I'm making dinner.", "Я готовлю ужин."], ["He is sitting on the sofa.", "Он сидит на диване."], ["She is running.", "Она бежит."]] },
    { h: "Обычно или сейчас?",
      t: "<b>I work in an office.</b> — Я работаю в офисе (вообще, постоянно).<br><b>I'm working from home today.</b> — Сегодня работаю из дома (временно, сейчас).<br><br>Слова-подсказки: <b>now, right now, at the moment, Look!, Listen!</b>",
      ex: [["I usually drink tea, but now I'm drinking coffee.", "Обычно я пью чай, но сейчас пью кофе."], ["Look! The bus is coming.", "Смотри! Автобус идёт."]] }
  ],
  words: [
    "at the moment|æt ðə ˈmoʊmənt|в данный момент", "listen|ˈlɪsən|слушать", "talk|tɔːk|разговаривать", "stand|stænd|стоять",
    "wear|wer|носить (одежду)", "rain|reɪn|дождь; идёт дождь", "snow|snoʊ|снег; идёт снег", "do|duː|делать",
    "make|meɪk|делать, создавать; готовить", "run|rʌn|бегать", "fly|flaɪ|летать", "travel|ˈtrævəl|путешествовать",
    "build|bɪld|строить", "wash|wɑːʃ|мыть, стирать", "clean|kliːn|убирать; чистый", "laugh|læf|смеяться",
    "smile|smaɪl|улыбаться", "cry|kraɪ|плакать", "come|kʌm|приходить, приезжать", "outside|ˌaʊtˈsaɪd|снаружи, на улице"
  ],
  phrases: [
    "I am working now.|Я сейчас работаю.", "What are you doing?|Что ты делаешь?", "It is raining outside.|На улице идёт дождь.",
    "She is talking on the phone.|Она разговаривает по телефону.", "I'm making dinner.|Я готовлю ужин.", "Look! The bus is coming.|Смотри! Автобус идёт.",
    "They are not listening.|Они не слушают.", "I'm waiting for you.|Я тебя жду."
  ],
  gaps: [
    "I ___ working now.|am|is,do|Я сейчас работаю.", "She is ___ a book.|reading|read,reads|Она читает книгу.",
    "What ___ you doing?|are|do,is|Что ты делаешь?", "It's ___ outside.|raining|rains,rain|На улице дождь.",
    "They ___ not listening.|are|is,do|Они не слушают.", "He is ___ on the sofa.|sitting|siting,sits|Он сидит на диване.",
    "Look! The bus ___.|is coming|comes,come|Смотри! Автобус идёт.", "I'm ___ dinner.|making|makeing,make|Я готовлю ужин."
  ]
},
{
  id: "u20", icon: "🎣", title: "Хобби и свободное время",
  goal: "Рассказать о своих увлечениях и о том, как отдыхаете",
  theory: [
    { h: "Like + -ing",
      t: "После <b>like, love, hate, enjoy</b> действие обычно с <b>-ing</b>:<br><b>I like fishing.</b> — Я люблю рыбалку.<br><b>She loves dancing.</b><br><br>Куда-то «пойти заниматься» — <b>go + -ing</b>: <b>go fishing, go swimming, go shopping</b>.",
      ex: [["I like fishing.", "Я люблю рыбачить."], ["We often go swimming.", "Мы часто ходим плавать."], ["She hates cooking.", "Она терпеть не может готовить."]] },
    { h: "Как часто?",
      t: "<b>How often do you …?</b> — Как часто ты …?<br><b>once a week</b> — раз в неделю, <b>twice a week</b> — дважды, <b>three times a week</b> — три раза.<br><br>💡 Play + спорт без артикля: <b>play football</b>. Play + инструмент с the: <b>play the guitar</b>.",
      ex: [["How often do you go fishing?", "Как часто ты ходишь на рыбалку?"], ["Once a week.", "Раз в неделю."], ["I play the guitar.", "Я играю на гитаре."]] }
  ],
  words: [
    "hobby|ˈhɑːbi|хобби", "free time|friː taɪm|свободное время", "music|ˈmjuːzɪk|музыка", "film|fɪlm|фильм",
    "game|ɡeɪm|игра", "sport|spɔːrt|спорт", "football|ˈfʊtbɔːl|футбол", "gym|dʒɪm|спортзал", "fishing|ˈfɪʃɪŋ|рыбалка",
    "swimming|ˈswɪmɪŋ|плавание", "photo|ˈfoʊtoʊ|фото", "guitar|ɡɪˈtɑːr|гитара", "beach|biːtʃ|пляж", "sea|siː|море",
    "mountain|ˈmaʊntən|гора", "lake|leɪk|озеро", "park|pɑːrk|парк", "together|təˈɡeðər|вместе", "favorite|ˈfeɪvərɪt|любимый",
    "once|wʌns|один раз"
  ],
  phrases: [
    "I like fishing.|Я люблю рыбалку.", "In my free time I go to the gym.|В свободное время я хожу в спортзал.",
    "How often do you go fishing?|Как часто ты ходишь на рыбалку?", "Once a week.|Раз в неделю.",
    "We often go to the lake together.|Мы часто ездим на озеро вместе.", "My favorite film is Titanic.|Мой любимый фильм — «Титаник».",
    "Do you like music?|Ты любишь музыку?", "I play the guitar.|Я играю на гитаре."
  ],
  gaps: [
    "I like ___.|fishing|fish,to fishing|Я люблю рыбачить.", "We often go ___ on Sunday.|swimming|swim,swims|По воскресеньям мы часто ходим плавать.",
    "She loves ___ to music.|listening|listen,listens|Она любит слушать музыку.", "How ___ do you go to the gym?|often|much,many|Как часто ты ходишь в спортзал?",
    "My ___ film is Titanic.|favorite|favor,best|Мой любимый фильм — «Титаник».", "I play ___ guitar.|the|a,—|Я играю на гитаре.",
    "I go fishing ___ a week.|once|one,first|Я хожу на рыбалку раз в неделю.", "I play ___ on Saturday.|football|the football,a football|По субботам я играю в футбол."
  ]
},
{
  id: "u21", icon: "⏪", title: "Прошлое: was / were",
  goal: "Рассказывать, где вы были и как всё было",
  theory: [
    { h: "To be в прошлом",
      t: "<b>I / he / she / it was</b><br><b>you / we / they were</b><br><br>Не: <b>wasn't, weren't</b>. Вопрос: <b>Were you …? Was it …?</b>",
      ex: [["I was at home yesterday.", "Вчера я был дома."], ["They were in Moscow.", "Они были в Москве."], ["It wasn't expensive.", "Это было недорого."], ["Were you tired?", "Ты устал?"]] },
    { h: "Слова прошлого",
      t: "<b>yesterday</b> — вчера, <b>last night</b> — вчера вечером, <b>last week</b> — на прошлой неделе, <b>last year</b> — в прошлом году, <b>two days ago</b> — два дня назад.<br><br>Родился: <b>I was born in 1990.</b>",
      ex: [["Where were you last night?", "Где ты был вчера вечером?"], ["Two days ago.", "Два дня назад."], ["I was born in 1990.", "Я родился в 1990 году."]] }
  ],
  words: [
    "was|wʌz|был, была, было", "were|wɜːr|были; был (с you)", "ago|əˈɡoʊ|назад", "last|læst|прошлый; последний",
    "born|bɔːrn|рождённый", "party|ˈpɑːrti|вечеринка", "trip|trɪp|поездка", "holiday|ˈhɑːlədeɪ|праздник; отпуск",
    "interesting|ˈɪntrəstɪŋ|интересный", "boring|ˈbɔːrɪŋ|скучный", "great|ɡreɪt|отличный", "terrible|ˈterəbəl|ужасный",
    "angry|ˈæŋɡri|злой, сердитый", "glad|ɡlæd|рад", "crowded|ˈkraʊdɪd|переполненный", "empty|ˈempti|пустой",
    "wonderful|ˈwʌndərfəl|чудесный", "before|bɪˈfɔːr|до, раньше", "school|skuːl|школа", "weather|ˈweðər|погода"
  ],
  phrases: [
    "I was at home yesterday.|Вчера я был дома.", "Where were you last night?|Где ты был вчера вечером?",
    "The party was great.|Вечеринка была отличной.", "It wasn't expensive.|Это было недорого.", "Were you tired?|Ты устал?",
    "I was born in 1990.|Я родился в 1990 году.", "The trip was wonderful.|Поездка была чудесной.", "We were at the beach two days ago.|Два дня назад мы были на пляже."
  ],
  gaps: [
    "I ___ at home yesterday.|was|were,am|Вчера я был дома.", "They ___ in Moscow last week.|were|was,are|На прошлой неделе они были в Москве.",
    "___ you tired?|Were|Was,Did|Ты устал?", "She ___ not happy.|was|were,did|Она была не рада.",
    "I was born ___ 1990.|in|on,at|Я родился в 1990.", "Two days ___.|ago|before,last|Два дня назад.",
    "We ___ at the party.|were|was,are|Мы были на вечеринке.", "___ night I was at home.|Last|Past,Yesterday|Вчера вечером я был дома."
  ]
},
{
  id: "u22", icon: "📖", title: "Что я делал — Past Simple",
  goal: "Рассказать, что вы делали вчера, в выходные, в поездке",
  theory: [
    { h: "Правильные глаголы: +ed",
      t: "Большинство глаголов в прошлом получают <b>-ed</b>, для всех лиц одинаково:<br>work → work<b>ed</b>, play → play<b>ed</b>, live → liv<b>ed</b>, study → stud<b>ied</b>, stop → stop<b>ped</b>.<br><br>Окончание звучит [t] после глухих (worked), [d] после звонких (played), [ɪd] после t/d (wanted).",
      ex: [["I worked late yesterday.", "Вчера я работал допоздна."], ["We played football.", "Мы играли в футбол."], ["She studied English.", "Она учила английский."]] },
    { h: "Неправильные — наизусть",
      t: "Самые частые глаголы меняются полностью:<br>go → <b>went</b>, come → <b>came</b>, see → <b>saw</b>, eat → <b>ate</b>, drink → <b>drank</b>, have → <b>had</b>, do → <b>did</b>, make → <b>made</b>, buy → <b>bought</b>, take → <b>took</b>, get → <b>got</b>, meet → <b>met</b>, pay → <b>paid</b>, sleep → <b>slept</b>.<br>Учите их как новые слова — в этом уроке они как раз в словаре.",
      ex: [["I went to the market.", "Я ходил на рынок."], ["We ate fish.", "Мы ели рыбу."], ["She bought a new phone.", "Она купила новый телефон."]] },
    { h: "Didn't и Did",
      t: "Не: <b>didn't</b> + обычная форма: <b>I didn't see him.</b> (❌ didn't saw)<br>Вопрос: <b>Did</b> + обычная форма: <b>Did you call me?</b> — <b>Yes, I did. / No, I didn't.</b><br>💡 Did уже показывает прошлое, поэтому сам глагол — в начальной форме.",
      ex: [["I didn't go to work.", "Я не ходил на работу."], ["Did you sleep well?", "Ты хорошо спал?"], ["What did you do yesterday?", "Что ты делал вчера?"]] }
  ],
  words: [
    "went|went|пошёл, поехал (go)", "came|keɪm|пришёл (come)", "saw|sɔː|увидел (see)", "ate|eɪt|съел (eat)",
    "drank|dræŋk|выпил (drink)", "had|hæd|имел (have)", "did|dɪd|сделал (do)", "made|meɪd|сделал, приготовил (make)",
    "got|ɡɑːt|получил, добрался (get)", "bought|bɔːt|купил (buy)", "took|tʊk|взял (take)", "gave|ɡeɪv|дал (give)",
    "said|sed|сказал (say)", "found|faʊnd|нашёл (find)", "met|met|встретил (meet)", "wrote|roʊt|написал (write)",
    "slept|slept|спал (sleep)", "paid|peɪd|заплатил (pay)", "lost|lɔːst|потерял (lose)", "caught|kɔːt|поймал (catch)"
  ],
  phrases: [
    "I went to the market yesterday.|Вчера я ходил на рынок.", "We ate fish for dinner.|На ужин мы ели рыбу.",
    "She bought a new phone.|Она купила новый телефон.", "I didn't see him.|Я его не видел.", "Did you call me?|Ты мне звонил?",
    "What did you do at the weekend?|Что ты делал на выходных?", "I caught a big fish.|Я поймал большую рыбу.", "I lost my keys.|Я потерял ключи."
  ],
  gaps: [
    "I ___ to the market yesterday.|went|go,goed|Вчера я ходил на рынок.", "She ___ a new phone.|bought|buyed,buy|Она купила новый телефон.",
    "We ___ fish for dinner.|ate|eated,eat|На ужин мы ели рыбу.", "I didn't ___ him.|see|saw,seen|Я его не видел.",
    "___ you call me?|Did|Do,Were|Ты мне звонил?", "He ___ late yesterday.|worked|work,worken|Вчера он работал допоздна.",
    "They ___ English last year.|studied|studyed,study|В прошлом году они учили английский.", "I ___ my keys.|lost|losed,lose|Я потерял ключи.",
    "What did you ___ yesterday?|do|did,done|Что ты делал вчера?", "I ___ a big fish!|caught|catched,catch|Я поймал большую рыбу!"
  ]
},
{
  id: "u23", icon: "🚀", title: "Планы: going to и will",
  goal: "Рассказывать о планах и обещать",
  theory: [
    { h: "Going to — план, намерение",
      t: "Уже решили и собираетесь: <b>am / is / are + going to + глагол</b>.<br><b>I'm going to visit my mother.</b> — Я собираюсь навестить маму.<br><b>Are you going to stay?</b> — Ты останешься?",
      ex: [["I'm going to learn English.", "Я собираюсь выучить английский."], ["We are going to move to Dalat.", "Мы собираемся переехать в Далат."], ["What are you going to do?", "Что ты собираешься делать?"]] },
    { h: "Will — решение сейчас, обещание",
      t: "<b>will</b> (I'll) + глагол — решили в момент речи, обещаете или предполагаете:<br><b>I'll help you.</b> — Я помогу.<br><b>I'll call you tomorrow.</b> — Позвоню завтра.<br><b>It will rain.</b> — Будет дождь.<br>Не — <b>won't</b>: I won't be late.",
      ex: [["I'll help you.", "Я помогу тебе."], ["I'll call you later.", "Я позвоню позже."], ["I won't be late.", "Я не опоздаю."]] }
  ],
  words: [
    "plan|plæn|план; планировать", "next|nekst|следующий", "soon|suːn|скоро", "later|ˈleɪtər|позже", "tonight|təˈnaɪt|сегодня вечером",
    "will|wɪl|будет (будущее)", "won't|woʊnt|не будет", "visit|ˈvɪzɪt|навещать, посещать", "move|muːv|переезжать; двигать",
    "stay|steɪ|оставаться, останавливаться", "leave|liːv|уезжать, уходить", "return|rɪˈtɜːrn|возвращаться", "ticket|ˈtɪkɪt|билет",
    "flight|flaɪt|рейс", "hotel|hoʊˈtel|отель", "vacation|veɪˈkeɪʃən|отпуск", "maybe|ˈmeɪbi|может быть", "hope|hoʊp|надеяться",
    "arrive|əˈraɪv|прибывать", "promise|ˈprɑːmɪs|обещать"
  ],
  phrases: [
    "I'm going to visit my mother.|Я собираюсь навестить маму.", "We are going to stay in Dalat.|Мы собираемся остаться в Далате.",
    "What are you going to do tonight?|Что ты собираешься делать сегодня вечером?", "I'll help you.|Я тебе помогу.",
    "I'll call you later.|Я позвоню тебе позже.", "I won't be late, I promise.|Я не опоздаю, обещаю.",
    "My flight is next week.|Мой рейс на следующей неделе.", "Maybe it will rain tomorrow.|Может быть, завтра будет дождь."
  ],
  gaps: [
    "I'm going ___ visit my mother.|to|for,—|Я собираюсь навестить маму.", "She ___ going to buy a car.|is|are,am|Она собирается купить машину.",
    "We are going to ___ in Dalat.|stay|staying,stays|Мы собираемся остаться в Далате.", "___ you going to come?|Are|Do,Will|Ты собираешься прийти?",
    "I ___ help you.|will|am,going|Я тебе помогу.", "See you ___ week.|next|last,after|Увидимся на следующей неделе.",
    "It will ___ tomorrow.|rain|rains,raining|Завтра будет дождь.", "I ___ be late, I promise.|won't|don't,not|Я не опоздаю, обещаю."
  ]
},
{
  id: "u24", icon: "🩺", title: "Здоровье и тело",
  goal: "Объяснить врачу или в аптеке, что болит",
  theory: [
    { h: "Что болит",
      t: "<b>My head hurts.</b> — У меня болит голова (дословно «моя голова болит»).<br>С частью тела всегда <b>my</b>, а не the.<br>Или: <b>I have a headache / a toothache / a stomachache</b> — головная / зубная боль / боль в животе.",
      ex: [["My back hurts.", "У меня болит спина."], ["I have a headache.", "У меня болит голова."], ["My stomach hurts.", "У меня болит живот."]] },
    { h: "Самочувствие и совет",
      t: "<b>I feel sick.</b> — Мне плохо. <b>I feel better.</b> — Мне лучше.<br><b>I have a fever / a cough / a cold.</b> — температура / кашель / простуда.<br><br>Совет — <b>should</b> + глагол: <b>You should rest.</b> — Тебе стоит отдохнуть.",
      ex: [["I have a fever.", "У меня температура."], ["I feel better today.", "Сегодня мне лучше."], ["You should see a doctor.", "Тебе стоит сходить к врачу."]] }
  ],
  words: [
    "head|hed|голова", "eye|aɪ|глаз", "ear|ɪr|ухо", "nose|noʊz|нос", "mouth|maʊθ|рот", "tooth|tuːθ|зуб", "teeth|tiːθ|зубы",
    "hand|hænd|рука (кисть)", "arm|ɑːrm|рука (от плеча)", "leg|leɡ|нога", "foot|fʊt|ступня", "back|bæk|спина; назад",
    "stomach|ˈstʌmək|живот, желудок", "hurt|hɜːrt|болеть, причинять боль", "headache|ˈhedeɪk|головная боль",
    "fever|ˈfiːvər|температура, жар", "cough|kɔːf|кашель", "medicine|ˈmedɪsən|лекарство", "feel|fiːl|чувствовать (себя)",
    "should|ʃʊd|следует, стоит"
  ],
  phrases: [
    "My head hurts.|У меня болит голова.", "I have a fever.|У меня температура.", "I feel sick.|Мне плохо.",
    "I need a doctor.|Мне нужен врач.", "Do you have medicine for a cough?|У вас есть лекарство от кашля?",
    "You should rest.|Тебе стоит отдохнуть.", "I feel better today.|Сегодня мне лучше.", "Call an ambulance!|Вызовите скорую!"
  ],
  gaps: [
    "My back ___.|hurts|hurt,pain|У меня болит спина.", "I have a ___.|headache|headpain,head|У меня болит голова.",
    "I ___ sick.|feel|fell,am feel|Мне плохо.", "You ___ rest.|should|must to,can to|Тебе стоит отдохнуть.",
    "two ___|teeth|tooths,teeths|два зуба", "I need some ___ for a cough.|medicine|doctor,pharmacy|Мне нужно лекарство от кашля.",
    "I have a ___. My temperature is 38.|fever|cough,cold|У меня жар, 38.", "I feel ___ today.|better|good,best|Сегодня мне лучше."
  ]
},
{
  id: "u25", icon: "🌦", title: "Погода и времена года",
  goal: "Говорить о погоде — любимая тема англичан",
  theory: [
    { h: "It's … — погода",
      t: "О погоде всегда начинаем с <b>It</b>, ведь «холодно» само по себе не работает: <b>It's cold. It's sunny. It's raining.</b><br>Спросить: <b>What's the weather like?</b> — Какая погода?<br><br>sun → <b>sunny</b>, rain → <b>rainy</b>, cloud → <b>cloudy</b>, wind → <b>windy</b>.",
      ex: [["What's the weather like today?", "Какая сегодня погода?"], ["It's sunny and warm.", "Солнечно и тепло."], ["It's cool in Dalat at night.", "Ночью в Далате прохладно."]] },
    { h: "Времена года",
      t: "<b>spring</b> — весна, <b>summer</b> — лето, <b>autumn</b> (в Америке <b>fall</b>) — осень, <b>winter</b> — зима. Предлог <b>in</b>: in summer.<br>Во Вьетнаме: <b>the rainy season</b> — сезон дождей, <b>the dry season</b> — сухой сезон.",
      ex: [["I love summer.", "Я люблю лето."], ["It often rains in the rainy season.", "В сезон дождей часто идёт дождь."]] }
  ],
  words: [
    "sun|sʌn|солнце", "sunny|ˈsʌni|солнечный", "rainy|ˈreɪni|дождливый", "cloud|klaʊd|облако", "cloudy|ˈklaʊdi|облачный",
    "wind|wɪnd|ветер", "windy|ˈwɪndi|ветреный", "warm|wɔːrm|тёплый", "cool|kuːl|прохладный; классный", "temperature|ˈtemprətʃər|температура",
    "degree|dɪˈɡriː|градус", "season|ˈsiːzən|сезон, время года", "spring|sprɪŋ|весна", "summer|ˈsʌmər|лето",
    "autumn|ˈɔːtəm|осень", "winter|ˈwɪntər|зима", "dry|draɪ|сухой", "wet|wet|мокрый", "umbrella|ʌmˈbrelə|зонт", "storm|stɔːrm|шторм, гроза"
  ],
  phrases: [
    "What's the weather like today?|Какая сегодня погода?", "It's sunny and warm.|Солнечно и тепло.", "It's cool in Dalat at night.|Ночью в Далате прохладно.",
    "It's twenty degrees.|Двадцать градусов.", "Take an umbrella.|Возьми зонт.", "I love summer.|Я люблю лето.",
    "It often rains in the rainy season.|В сезон дождей часто идёт дождь.", "The road is wet.|Дорога мокрая."
  ],
  gaps: [
    "It's ___ today.|sunny|sun,suns|Сегодня солнечно.", "What's the weather ___?|like|as,how|Какая погода?",
    "It's very ___ at night.|cool|warm,cools|Ночью очень прохладно.", "___ winter|in|on,at|зимой",
    "It often ___ in summer.|rains|rain,raining|Летом часто идут дожди.", "Take an ___.|umbrella|ambrella,rain|Возьми зонт.",
    "It's twenty ___.|degrees|degree,grades|Двадцать градусов.", "It's ___ and cloudy.|windy|wind,winds|Ветрено и облачно."
  ]
},
{
  id: "u26", icon: "🎂", title: "Месяцы и даты",
  goal: "Называть даты, день рождения, договариваться на число",
  theory: [
    { h: "Порядковые числа",
      t: "1-й — <b>first</b> (1st), 2-й — <b>second</b> (2nd), 3-й — <b>third</b> (3rd), дальше просто <b>-th</b>: fourth, fifth, tenth, twentieth.<br>21-й — twenty-first, 22-й — twenty-second.",
      ex: [["first, second, third", "первый, второй, третий"], ["the fifth floor", "пятый этаж"], ["twenty-first", "двадцать первый"]] },
    { h: "Даты",
      t: "Месяцы — с большой буквы, предлог <b>in</b>: in May.<br>Конкретное число — <b>on</b>: <b>on the 5th of May</b> или <b>on May 5th</b>.<br><b>When is your birthday?</b> — <b>It's on the 12th of March.</b>",
      ex: [["When is your birthday?", "Когда у тебя день рождения?"], ["My birthday is in May.", "Мой день рождения в мае."], ["See you on the 1st of June.", "Увидимся 1 июня."]] }
  ],
  words: [
    "January|ˈdʒænjueri|январь", "February|ˈfebrueri|февраль", "March|mɑːrtʃ|март", "April|ˈeɪprəl|апрель",
    "May|meɪ|май", "June|dʒuːn|июнь", "July|dʒʊˈlaɪ|июль", "August|ˈɔːɡəst|август", "September|sepˈtembər|сентябрь",
    "October|ɑːkˈtoʊbər|октябрь", "November|noʊˈvembər|ноябрь", "December|dɪˈsembər|декабрь", "first|fɜːrst|первый",
    "second|ˈsekənd|второй; секунда", "third|θɜːrd|третий", "fifth|fɪfθ|пятый", "tenth|tenθ|десятый", "birthday|ˈbɜːrθdeɪ|день рождения",
    "date|deɪt|дата; свидание", "calendar|ˈkæləndər|календарь"
  ],
  phrases: [
    "When is your birthday?|Когда у тебя день рождения?", "My birthday is in May.|Мой день рождения в мае.",
    "It's on the twelfth of March.|Двенадцатого марта.", "What's the date today?|Какое сегодня число?",
    "Happy birthday!|С днём рождения!", "See you on the first of June.|Увидимся первого июня.", "My apartment is on the second floor.|Моя квартира на втором этаже."
  ],
  gaps: [
    "My birthday is ___ May.|in|on,at|Мой день рождения в мае.", "See you ___ the 5th of June.|on|in,at|Увидимся 5 июня.",
    "January is the ___ month.|first|one,once|Январь — первый месяц.", "the ___ floor (3)|third|three,threeth|третий этаж",
    "___ birthday!|Happy|Good,Nice|С днём рождения!", "What's the ___ today?|date|day,data|Какое сегодня число?",
    "December is the twelfth ___.|month|mouth,year|Декабрь — двенадцатый месяц."
  ]
},
{
  id: "l01", icon: "💻", title: "Моя жизнь: код и техподдержка", life: true,
  goal: "Слова и фразы для работы с IT и поддержкой клиентов",
  theory: [
    { h: "Английский для работы",
      t: "Эти темы — из вашей жизни. Слова здесь сложнее A1, но вы их встретите каждый день. Многие русские IT-слова пришли из английского: сервер, логи, тикет, апдейт.",
      ex: [["I am investigating this issue.", "Я разбираюсь с этой проблемой."], ["Please restart the app.", "Пожалуйста, перезапустите приложение."]] }
  ],
  words: [
    "issue|ˈɪʃuː|проблема, инцидент", "request|rɪˈkwest|запрос, заявка", "update|ˌʌpˈdeɪt|обновление; обновить", "server|ˈsɜːrvər|сервер",
    "confirm|kənˈfɜːrm|подтверждать", "database|ˈdeɪtəbeɪs|база данных", "access|ˈækses|доступ", "restart|riːˈstɑːrt|перезапустить",
    "logs|lɔːɡz|логи", "account|əˈkaʊnt|аккаунт", "connect|kəˈnekt|подключаться", "settings|ˈsetɪŋz|настройки",
    "deploy|dɪˈplɔɪ|развернуть, выкатить", "bug|bʌɡ|баг, ошибка", "error|ˈerər|ошибка", "customer|ˈkʌstəmər|клиент",
    "password|ˈpæswɜːrd|пароль", "screen|skriːn|экран", "file|faɪl|файл", "download|ˈdaʊnloʊd|скачать"
  ],
  phrases: [
    "I am investigating this issue.|Я разбираюсь с этой проблемой.", "The server does not respond.|Сервер не отвечает.",
    "I can fix this bug quickly.|Я могу быстро исправить этот баг.", "Please confirm your email address.|Пожалуйста, подтвердите email.",
    "You do not have access.|У вас нет доступа.", "Send me the error logs.|Пришлите мне логи ошибок.",
    "Open settings and clear the cache.|Откройте настройки и очистите кэш.", "We deploy the website today.|Сегодня мы выкатываем сайт."
  ],
  gaps: [
    "The server does not ___.|respond|answer to,responds|Сервер не отвечает.", "Please ___ your email.|confirm|confirms,confirming|Подтвердите email.",
    "You do not have ___.|access|accept,account|У вас нет доступа.", "Send me the error ___.|logs|log,locks|Пришлите логи ошибок.",
    "Please ___ the app.|restart|restarts,start again to|Перезапустите приложение.", "I can ___ this bug.|fix|fixes,fixing|Я могу исправить этот баг."
  ]
},
{
  id: "l02", icon: "⚙️", title: "Моя жизнь: ЧПУ и производство", life: true,
  goal: "Язык цеха: станок, инструмент, безопасность",
  theory: [
    { h: "Команды в цеху",
      t: "В цеху говорят коротко — повелительным наклонением: <b>Stop the machine. Change the tool. Check the coolant.</b> Это то самое правило из темы «Город и дорога».",
      ex: [["Stop the machine immediately.", "Немедленно останови станок."], ["Check the coolant level.", "Проверь уровень СОЖ."]] }
  ],
  words: [
    "machine|məˈʃiːn|станок, машина", "spindle|ˈspɪndəl|шпиндель", "axis|ˈæksɪs|ось", "feed rate|ˈfiːd reɪt|скорость подачи",
    "tool|tuːl|инструмент", "emergency stop|ɪˈmɜːrdʒənsi stɑːp|аварийный стоп", "zero point|ˈzɪroʊ pɔɪnt|нулевая точка",
    "coolant|ˈkuːlənt|СОЖ", "drawing|ˈdrɔːɪŋ|чертёж", "offset|ˈɔːfset|корректор, смещение", "sensor|ˈsensər|датчик",
    "clamp|klæmp|зажим, прижим", "depth|depθ|глубина", "calibration|ˌkælɪˈbreɪʃən|калибровка", "safety|ˈseɪfti|безопасность",
    "speed|spiːd|скорость", "check|tʃek|проверять", "change|tʃeɪndʒ|менять", "part|pɑːrt|деталь, часть", "millimeter|ˈmɪlɪmiːtər|миллиметр"
  ],
  phrases: [
    "Stop the machine immediately.|Немедленно останови станок.", "Spindle speed is too high.|Скорость шпинделя слишком высокая.",
    "Move the Z axis up.|Подними ось Z.", "Reduce the feed rate by ten percent.|Снизь подачу на десять процентов.",
    "Change tool number two.|Смени инструмент номер два.", "Check the dimensions on the drawing.|Сверь размеры по чертежу.",
    "Tighten the clamp.|Затяни прижим.", "Safety rules are mandatory.|Правила безопасности обязательны."
  ],
  gaps: [
    "___ the machine immediately.|Stop|Stops,Stopping|Немедленно останови станок.", "Spindle speed is ___ high.|too|to,two|Скорость шпинделя слишком высокая.",
    "Move the Z axis ___.|up|on,top|Подними ось Z.", "Change tool ___ two.|number|count,numeral|Смени инструмент номер два.",
    "Check the ___ level.|coolant|cool,cooler|Проверь уровень СОЖ.", "Cut depth is two ___.|millimeters|millimeter,meters|Глубина реза два миллиметра."
  ]
},
{
  id: "l03", icon: "🔑", title: "Моя жизнь: жильё и аренда", life: true,
  goal: "Снять жильё и договориться с хозяином",
  theory: [
    { h: "Разговор с хозяином",
      t: "Здесь пригодится почти всё из курса: <b>Is there…?</b> (есть ли), <b>How much is…?</b> (цена), <b>Can I…?</b> (просьба), предлоги места и даты.",
      ex: [["Is the deposit refundable?", "Залог возвращается?"], ["Are utilities included?", "Коммуналка включена?"]] }
  ],
  words: [
    "deposit|dɪˈpɑːzɪt|залог", "landlord|ˈlændlɔːrd|хозяин жилья", "contract|ˈkɑːntrækt|договор", "utilities|juːˈtɪlətiz|коммунальные услуги",
    "quiet|ˈkwaɪət|тихий", "internet|ˈɪntərnet|интернет", "air conditioner|ˈer kənˌdɪʃənər|кондиционер", "hot water|hɑːt ˈwɔːtər|горячая вода",
    "mold|moʊld|плесень", "rent|rent|аренда; арендовать", "included|ɪnˈkluːdɪd|включено", "electricity|ɪˌlekˈtrɪsəti|электричество",
    "furniture|ˈfɜːrnɪtʃər|мебель", "balcony|ˈbælkəni|балкон", "view|vjuː|вид", "neighbor|ˈneɪbər|сосед", "noise|nɔɪz|шум",
    "broken|ˈbroʊkən|сломанный", "lock|lɑːk|замок", "parking|ˈpɑːrkɪŋ|парковка"
  ],
  phrases: [
    "Is the deposit refundable?|Залог возвращается?", "How much is the rent per month?|Сколько аренда в месяц?",
    "Are utilities included?|Коммунальные услуги включены?", "I need a quiet room for remote work.|Мне нужна тихая комната для удалённой работы.",
    "Fast internet is very important.|Быстрый интернет очень важен.", "The air conditioner is broken.|Кондиционер сломан.",
    "Does the hot water work all day?|Горячая вода есть весь день?", "We can sign the contract for six months.|Можем подписать договор на шесть месяцев."
  ],
  gaps: [
    "Is the ___ refundable?|deposit|depot,deposits|Залог возвращается?", "How much is the rent ___ month?|per|for,in|Сколько аренда в месяц?",
    "Are utilities ___?|included|include,including|Коммуналка включена?", "The air conditioner is ___.|broken|break,broke|Кондиционер сломан.",
    "I need a ___ room.|quiet|quite,quit|Мне нужна тихая комната.", "Is there ___ for my motorbike?|parking|park,a parking|Есть парковка для байка?"
  ]
},
{
  id: "l04", icon: "🧭", title: "Моя жизнь: город и выживание", life: true,
  goal: "Рынок, банк, ремонт байка и безопасность",
  theory: [
    { h: "Вежливость решает",
      t: "Во Вьетнаме английский у многих тоже не родной. Говорите <b>короткими простыми фразами</b>, медленно, с <b>please</b> и <b>thank you</b> — так вас поймут лучше, чем сложными конструкциями.",
      ex: [["Can you repair this tire?", "Можете починить эту шину?"], ["Is it safe to walk at night?", "Безопасно ли гулять ночью?"]] }
  ],
  words: [
    "transfer|trænsˈfɜːr|перевод (денег)", "tire|ˈtaɪər|шина", "repair|rɪˈper|ремонт; чинить", "gas station|ˈɡæs ˌsteɪʃən|заправка",
    "safe|seɪf|безопасный", "dangerous|ˈdeɪndʒərəs|опасный", "police|pəˈliːs|полиция", "passport|ˈpæspɔːrt|паспорт",
    "visa|ˈviːzə|виза", "SIM card|ˈsɪm kɑːrd|сим-карта", "charger|ˈtʃɑːrdʒər|зарядка", "battery|ˈbætəri|батарея",
    "laundry|ˈlɔːndri|прачечная", "delivery|dɪˈlɪvəri|доставка", "address|ˈædres|адрес", "open now|ˈoʊpən naʊ|открыто сейчас",
    "I'm lost|aɪm lɔːst|я заблудился","problem|ˈprɑːbləm|проблема", "fresh|freʃ|свежий", "kilo|ˈkiːloʊ|килограмм"
  ],
  phrases: [
    "Can I make a bank transfer?|Можно сделать банковский перевод?", "Can you repair this tire?|Можете починить эту шину?",
    "Where is the nearest gas station?|Где ближайшая заправка?", "Is it safe to walk at night?|Ночью безопасно гулять?",
    "I need a SIM card with internet.|Мне нужна сим-карта с интернетом.", "One kilo of fresh fish, please.|Килограмм свежей рыбы, пожалуйста.",
    "Is it open now?|Сейчас открыто?", "I'm lost. Can you help me?|Я заблудился. Можете помочь?"
  ],
  gaps: [
    "Can you ___ this tire?|repair|repairs,repairing|Можете починить эту шину?", "Where is the ___ gas station?|nearest|near,nearer|Где ближайшая заправка?",
    "Is it ___ to walk at night?|safe|save,safety|Безопасно ли гулять ночью?", "I need a SIM card ___ internet.|with|for,and|Мне нужна сим-карта с интернетом.",
    "One ___ of fish, please.|kilo|kilos,kg of|Килограмм рыбы, пожалуйста.", "I'm ___. Can you help me?|lost|lose,loss|Я заблудился. Помогите?"
  ]
},
{ id: "final", icon: "🏆", title: "Экзамен A1", final: true,
  goal: "40 вопросов по всему курсу. Сдайте на 80 % — и уровень A1 ваш" }
];
