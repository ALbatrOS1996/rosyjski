/* ============================================================
   TREŚCI: alfabet, fałszywi przyjaciele, wymowa, gramatyka, dialogi
   ============================================================ */
var UA = window.UA || (window.UA = {});

/* ---------- Alfabet ----------
   [litera, transliteracja PL, IPA, opis dla Polaka, przykład, znaczenie, pułapka dla Polaka?] */
UA.ALPHABET = [
  ['А а', 'a', 'a', 'jak polskie a', 'ма́ма', 'mama'],
  ['Б б', 'b', 'b', 'jak b; na końcu wyrazu ubezdźwięcznia się jak w polskim (хлеб [xlʲep])', 'брат', 'brat'],
  ['В в', 'w', 'v', 'jak w; na końcu wyrazu i przed bezdźwięczną jak f (Че́хов [ˈtʃexəf])', 'вода́', 'woda'],
  ['Г г', 'g', 'g', 'jak polskie g (inaczej niż w ukraińskim); w końcówce -ого/-его czytamy jak w: его́ [jɪˈvo]', 'го́род', 'miasto', 1],
  ['Д д', 'd', 'd', 'jak d; przed е, и, я, ю, ь miękkie [dʲ] – bliskie polskiemu „dź”, ale lżejsze', 'дом', 'dom'],
  ['Е е', 'je / ie / e', 'je', 'je na początku i po samogłosce; po spółgłosce ją zmiękcza (нет [nʲet])', 'е́сли', 'jeśli', 1],
  ['Ё ё', 'jo / io', 'jo', 'jo; zawsze akcentowane. W tekstach często pisane jako е – trzeba znać słowo', 'ёлка', 'choinka', 1],
  ['Ж ж', 'ż', 'ʐ', 'jak polskie ż – zawsze twarde (жи czytamy [ʐɨ])', 'жена́', 'żona'],
  ['З з', 'z', 'z', 'jak z', 'зима́', 'zima'],
  ['И и', 'i', 'i', 'jak polskie i; zmiękcza poprzedzającą spółgłoskę', 'и́мя', 'imię'],
  ['Й й', 'j', 'j', 'jak j', 'мой', 'mój'],
  ['К к', 'k', 'k', 'jak k', 'кот', 'kot'],
  ['Л л', 'ł / l', 'ɫ / lʲ', 'twarde л brzmi jak dawne polskie „ł” przedniojęzykowe (nie jak „u”!); przed е, и, ё, ю, я, ь – miękkie l', 'ла́мпа', 'lampa', 1],
  ['М м', 'm', 'm', 'jak m', 'мо́ре', 'morze'],
  ['Н н', 'n', 'n', 'jak n; miękkie н przed е, и, я, ю, ь', 'нос', 'nos'],
  ['О о', 'o', 'o / ɐ / ə', 'pod akcentem o; BEZ akcentu brzmi jak a lub ə (molokó → [məɫɐˈko]) – to tzw. akanie', 'молоко́', 'mleko', 1],
  ['П п', 'p', 'p', 'jak p', 'по́чта', 'poczta'],
  ['Р р', 'r', 'r', 'jak r; miękkie р przed е, и, я, ю, ь (рь ≈ „rj”)', 'рука́', 'ręka'],
  ['С с', 's', 's', 'jak s', 'сын', 'syn'],
  ['Т т', 't', 't', 'jak t; przed е, и, я, ю, ь miękkie [tʲ] – bliskie polskiemu „ć”, ale lżejsze', 'там', 'tam'],
  ['У у', 'u', 'u', 'jak polskie u', 'у́тро', 'ranek'],
  ['Ф ф', 'f', 'f', 'jak f', 'фо́то', 'zdjęcie'],
  ['Х х', 'ch', 'x', 'jak polskie ch / h', 'хлеб', 'chleb'],
  ['Ц ц', 'c', 'ts', 'jak c – zawsze twarde (цирк [tsɨrk])', 'цвет', 'kolor'],
  ['Ч ч', 'cz', 'tɕ', 'miękkie cz – bliżej polskiego „ć” niż twardego „cz”', 'час', 'godzina', 1],
  ['Ш ш', 'sz', 'ʂ', 'jak polskie sz – zawsze twarde', 'шко́ла', 'szkoła'],
  ['Щ щ', 'szcz', 'ɕː', 'dziś najczęściej długie, miękkie „śś” (nie „szcz”!): щи [ɕːi]', 'щи', 'kapuśniak', 1],
  ['Ъ ъ', '–', '', 'znak twardy: oddziela przedrostek od е, ё, ю, я – czytamy z j (подъе́зд [pədˈjest])', 'подъе́зд', 'klatka schodowa', 1],
  ['Ы ы', 'y', 'ɨ', 'jak polskie y, tylko głębiej i bardziej napięte', 'ты', 'ty'],
  ['Ь ь', 'ʹ (zmiękczenie)', 'ʲ', 'znak miękki: zmiękcza spółgłoskę przed nim (мать – matka, мат – mat)', 'мать', 'matka', 1],
  ['Э э', 'e', 'e', 'e bez zmiękczenia; głównie w zapożyczeniach i zaimkach (э́то)', 'э́то', 'to'],
  ['Ю ю', 'ju / iu', 'ju', 'ju; po spółgłosce ją zmiękcza', 'юг', 'południe'],
  ['Я я', 'ja / ia', 'ja', 'ja; po spółgłosce ją zmiękcza; bez akcentu brzmi bliżej „i” (язы́к [jɪˈzɨk])', 'я́блоко', 'jabłko', 1]
];

/* ---------- Fałszywi przyjaciele ----------
   [rosyjski, prawdziwe znaczenie, mylące polskie skojarzenie, jak powiedzieć to polskie słowo po rosyjsku, przykład, przykład PL] */
UA.FRIENDS = [
  ['уро́д', 'brzydal, potwór', 'uroda', 'красота́', 'Не называ́й его́ уро́дом!', 'Nie nazywaj go brzydalem!'],
  ['неде́ля', 'tydzień', 'niedziela', 'воскресе́нье', 'Я верну́сь че́рез неде́лю.', 'Wrócę za tydzień.'],
  ['живо́т', 'brzuch', 'żywot', 'жизнь', 'У меня́ боли́т живо́т.', 'Boli mnie brzuch.'],
  ['дива́н', 'kanapa', 'dywan', 'ковёр', 'Ко́шка спит на дива́не.', 'Kot śpi na kanapie.'],
  ['стул', 'krzesło', 'stół', 'стол', 'Сади́сь на стул.', 'Usiądź na krześle.'],
  ['магази́н', 'sklep', 'magazyn', 'склад', 'Магази́н закры́т.', 'Sklep jest zamknięty.'],
  ['склеп', 'krypta, grobowiec', 'sklep', 'магази́н', 'Под це́рковью нахо́дится склеп.', 'Pod cerkwią znajduje się krypta.'],
  ['позо́р', 'hańba, wstyd', 'pozór', 'ви́димость', 'Како́й позо́р!', 'Co za wstyd!'],
  ['пыта́ть', 'torturować', 'pytać', 'спра́шивать', 'Его́ пыта́ли в тюрьме́.', 'Torturowano go w więzieniu.'],
  ['о́вощи', 'warzywa', 'owoce', 'фру́кты', 'Карто́шка – э́то о́вощ.', 'Ziemniak to warzywo.'],
  ['ды́ня', 'melon', 'dynia', 'ты́ква', 'Ды́ня сла́дкая, как мёд.', 'Melon jest słodki jak miód.'],
  ['пиро́г', 'placek, ciasto (pieczone)', 'pieróg', 'варе́ник', 'Ба́бушка испекла́ пиро́г с я́блоками.', 'Babcia upiekła placek z jabłkami.'],
  ['ру́чка', 'długopis (też klamka, rączka)', 'tylko rączka', 'ру́чка (tu się zgadza)', 'Пиши́те ру́чкой, не карандашо́м.', 'Piszcie długopisem, nie ołówkiem.'],
  ['уро́к', 'lekcja', 'urok', 'обая́ние', 'Сего́дня у нас шесть уро́ков.', 'Dziś mamy sześć lekcji.'],
  ['глаз', 'oko', 'głaz', 'валу́н', 'У неё зелёные глаза́.', 'Ona ma zielone oczy.'],
  ['час', 'godzina', 'czas', 'вре́мя', 'Фильм идёт два часа́.', 'Film trwa dwie godziny.'],
  ['пол', 'podłoga; płeć', 'pół', 'полови́на', 'Кни́га упа́ла на пол.', 'Książka spadła na podłogę.'],
  ['фами́лия', 'nazwisko', 'familia, rodzina', 'семья́', 'Как ва́ша фами́лия?', 'Jak brzmi pana nazwisko?'],
  ['кварти́ра', 'mieszkanie', 'kwatera', 'жильё на вре́мя', 'Мы сня́ли кварти́ру в це́нтре.', 'Wynajęliśmy mieszkanie w centrum.'],
  ['за́втрак', 'śniadanie', 'jutro', 'за́втра', 'За́втрак в во́семь.', 'Śniadanie jest o ósmej.'],
  ['кани́кулы', 'wakacje, ferie (szkolne)', 'kanikuła (upał)', 'жара́', 'Ле́тние кани́кулы начина́ются в ию́не.', 'Wakacje zaczynają się w czerwcu.'],
  ['поро́к', 'wada, występek', 'próg', 'поро́г', 'Лень – его́ гла́вный поро́к.', 'Lenistwo to jego główna wada.'],
  ['ду́ма', 'Duma (parlament); myśl', 'duma', 'го́рдость', 'Депута́ты Ду́мы при́няли зако́н.', 'Deputowani Dumy przyjęli ustawę.'],
  ['кра́сный', 'czerwony', 'krasny (piękny)', 'краси́вый', 'Кра́сная пло́щадь – в Москве́.', 'Plac Czerwony jest w Moskwie.'],
  ['маши́на', 'samochód (też maszyna)', 'tylko maszyna', 'стано́к (maszyna w fabryce)', 'У него́ но́вая маши́на.', 'On ma nowy samochód.'],
  ['то́же', 'też, także', 'to samo', 'то же са́мое', 'Я то́же хочу́ ча́ю.', 'Ja też chcę herbaty.']
];

/* ---------- Pary minimalne (słuchanie) ---------- */
UA.PAIRS = [
  { id: 'yi', name: 'ы [ɨ] czy и [i]?', items: [
    ['был', 'był', 'бил', 'bił'], ['мыл', 'mył', 'мил', 'miły (krótka forma)'], ['быть', 'być', 'бить', 'bić'],
    ['выть', 'wyć', 'вить', 'wić, pleść'], ['ры́ба', 'ryba', 'ри́фма', 'rym'], ['сыр', 'ser', 'сир', 'sierota (przest.)']
  ]},
  { id: 'soft', name: 'Twarda czy miękka spółgłoska?', items: [
    ['брат', 'brat', 'брать', 'brać'], ['мат', 'mat (w szachach)', 'мать', 'matka'], ['у́гол', 'kąt, róg', 'у́голь', 'węgiel'],
    ['вес', 'waga', 'весь', 'cały'], ['кон', 'runda (w grze)', 'конь', 'koń'], ['ел', 'jadł', 'ель', 'jodła, świerk']
  ]}
];

/* о czy а? – pisownia samogłoski nieakcentowanej (akanie: obie brzmią podobnie) */
UA.GG = ['молоко́|mleko', 'вода́|woda', 'хорошо́|dobrze', 'каранда́ш|ołówek', 'соба́ка|pies', 'доро́га|droga', 'голова́|głowa',
  'стака́н|szklanka', 'пого́да|pogoda', 'карто́шка|ziemniaki', 'Москва́|Moskwa', 'бога́тый|bogaty', 'коро́ва|krowa', 'сапо́г|but (kozak)',
  'трава́|trawa', 'гора́|góra', 'окно́|okno', 'каза́к|kozak'];

/* Pary akcentowe – ten sam zapis, inne znaczenie */
UA.STRESS_PAIRS = [
  ['за́мок', 'zamek (budowla)', 'замо́к', 'zamek (do drzwi), kłódka'],
  ['му́ка', 'męka', 'мука́', 'mąka'],
  ['о́рган', 'narząd; organ', 'орга́н', 'organy (instrument)'],
  ['а́тлас', 'atlas', 'атла́с', 'atłas (tkanina)'],
  ['пла́чу', 'płaczę', 'плачу́', 'płacę'],
  ['ду́хи', 'perfumy', 'духи́', 'duchy'],
  ['бе́рега', 'brzegu (D. lp.)', 'берега́', 'brzegi (M. lm.)']
];

/* ---------- Zasady wymowy (karty) ---------- */
UA.RULES = [
  { t: 'Akanie: nieakcentowane о brzmi jak a', b: 'Najważniejsza zasada rosyjskiej wymowy. Litera о pod akcentem to o, ale bez akcentu brzmi jak a (tuż przed akcentem) albo jak krótkie, niewyraźne ə (dalej od akcentu). молоко́ [məɫɐˈko], хорошо́ [xərɐˈʂo], Москва́ [mɐˈskva]. Polski nawyk czytania „jak się pisze” daje mocny akcent obcokrajowca.', ex: ['молоко́', 'хорошо́', 'Москва́', 'голова́'] },
  { t: 'Ikanie: е i я bez akcentu ≈ i', b: 'Po miękkiej spółgłosce nieakcentowane е i я brzmią podobnie do krótkiego i: сестра́ [sʲɪˈstra], язы́к [jɪˈzɨk], пятно́ [pʲɪtˈno]. Pod akcentem są wyraźne: се́стры, я́блоко.', ex: ['сестра́', 'язы́к', 'река́', 'понеде́льник'] },
  { t: 'Akcent jest ruchomy i trzeba go znać', b: 'Akcent może paść na dowolną sylabę i przesuwa się w odmianie: рука́ – ру́ки, го́род – города́. Od niego zależy, które o brzmi jak o. W zwykłych tekstach nie jest zaznaczany – dlatego w aplikacji każde słowo ma akcent.', ex: ['рука́', 'ру́ки', 'го́род', 'города́'] },
  { t: 'ы i и to dwa różne dźwięki', b: 'ы [ɨ] to „głębokie y”, jeszcze bardziej cofnięte niż polskie. и [i] zmiękcza poprzednią spółgłoskę. Opozycja odróżnia słowa: был (był) – бил (bił). Ćwicz w „Parach minimalnych”.', ex: ['был', 'бил', 'мыл', 'мил'] },
  { t: 'Twarde i miękkie spółgłoski', b: 'Prawie każda spółgłoska ma wersję twardą i miękką. Miękkość zaznaczają е, ё, и, ю, я i znak ь: мат – мать, брат – брать. Miękkie т, д brzmią lżej niż polskie ć, dź – język dotyka zębów, a nie podniebienia.', ex: ['мать', 'брать', 'день', 'тётя'] },
  { t: 'ж, ш, ц zawsze twarde; ч, щ zawsze miękkie', b: 'Po ж, ш, ц litera и brzmi jak ы: жить [ʐɨtʲ], цирк [tsɨrk]. Z kolei ч jest miękkie (bliżej polskiego „ć” niż „cz”), a щ to dziś długie, miękkie „śś”: щи [ɕːi], ещё [jɪˈɕːo].', ex: ['жить', 'шить', 'час', 'ещё'] },
  { t: 'Twarde ł, nie polskie „u”', b: 'Twarde л to dawne polskie przedniojęzykowe ł – język przy zębach, tył języka uniesiony. Nie wymawiaj go jak współczesne polskie „ł” [w], bo był zabrzmi jak „bywu”.', ex: ['был', 'стол', 'ла́мпа', 'молоко́'] },
  { t: 'Ubezdźwięcznienie – jak w polskim', b: 'Dobra wiadomość: dźwięczne spółgłoski na końcu wyrazu i przed bezdźwięcznymi ubezdźwięczniają się jak w polskim: хлеб [xlʲep], друг [druk], ло́дка [ˈɫotkə].', ex: ['хлеб', 'друг', 'глаз', 'ло́дка'] },
  { t: 'Końcówka -ого / -его czytana przez в', b: 'W dopełniaczu przymiotników i zaimków г czytamy jak в: его́ [jɪˈvo], сего́дня [sʲɪˈvodʲnʲə], хоро́шего [xɐˈroʂɨvə], ничего́ [nʲɪtɕɪˈvo].', ex: ['его́', 'сего́дня', 'ничего́', 'кого́'] },
  { t: 'Nieme litery w grupach spółgłosek', b: 'Niektóre spółgłoski w grupach nie są wymawiane: здра́вствуйте [ˈzdrastvujtʲe], со́лнце [ˈsontse], се́рдце [ˈsʲertse], пра́здник [ˈpraznʲik], что [ʂto].', ex: ['здра́вствуйте', 'со́лнце', 'се́рдце', 'что'] }
];

/* ---------- Gramatyka kontrastowa ---------- */
UA.GRAMMAR = [
  { id: 'byt', t: 'Bez „być” w czasie teraźniejszym',
    b: '<p>W czasie teraźniejszym czasownik <b>быть</b> się pomija – tam, gdzie Polak mówi „jestem”, Rosjanin nic nie wstawia (w piśmie czasem stawia myślnik):</p><table class="tbl"><tr><td>Я учи́тель.</td><td>Jestem nauczycielem.</td></tr><tr><td>Он до́ма.</td><td>On jest w domu.</td></tr><tr><td>Москва́ – столи́ца Росси́и.</td><td>Moskwa jest stolicą Rosji.</td></tr></table><p>Forma <b>есть</b> pojawia się, gdy mówimy o istnieniu lub posiadaniu: <i>Здесь есть апте́ка?</i> – Czy jest tu apteka? <i>У меня́ есть брат.</i> – Mam brata.</p><p>Rzeczownik po pominiętym „być” stoi w <b>mianowniku</b> (<i>Я учи́тель</i>), a w czasie przeszłym zwykle w narzędniku: <i>Я был учи́телем</i>.</p>',
    quiz: [
      ['Jestem zmęczony.', ['Я уста́л.', 'Я есть уста́л.', 'Я быть уста́лый.'], 0],
      ['Czy jest tu sklep?', ['Здесь магази́н?', 'Здесь есть магази́н?', 'Здесь есть магази́ном?'], 1],
      ['Mam siostrę.', ['Я есть сестра́.', 'У меня́ есть сестра́.', 'Мне сестра́.'], 1],
      ['On jest lekarzem.', ['Он врачо́м.', 'Он есть врач есть.', 'Он врач.'], 2]
    ] },
  { id: 'past', t: 'Czas przeszły bez końcówek osobowych',
    b: '<p>Czas przeszły odmienia się tylko przez <b>rodzaj i liczbę</b> – jak polskie „czytał / czytała / czytali”, ale <b>bez końcówek -em, -eś, -śmy</b>. Osobę pokazuje zaimek, który jest prawie obowiązkowy.</p><table class="tbl"><tr><td>я, ты, он чита́<b>л</b></td><td>czytałem, czytałeś, czytał</td></tr><tr><td>я, ты, она́ чита́<b>ла</b></td><td>czytałam, czytałaś, czytała</td></tr><tr><td>оно́ чита́<b>ло</b></td><td>czytało</td></tr><tr><td>мы, вы, они́ чита́<b>ли</b></td><td>czytaliśmy, czytaliście, czytali</td></tr></table><p>Formy nieregularne: <i>мог, могла́</i> (móc), <i>шёл, шла</i> (iść), <i>ел, е́ла</i> (jeść), <i>нёс, несла́</i> (nieść).</p>',
    quiz: [
      ['Czytałem książkę. (mówi mężczyzna)', ['Я чита́л кни́гу.', 'Я чита́лем кни́гу.', 'Чита́л-я кни́гу.'], 0],
      ['Byłaś wczoraj w szkole?', ['Ты была́ вчера́ в шко́ле?', 'Ты была́сь вчера́ в шко́ле?', 'Ты был вчера́ в шко́ле?'], 0],
      ['Zrobiliśmy to.', ['Мы э́то сде́лалисмо.', 'Мы э́то сде́лали.', 'Мы э́то сде́лал.'], 1],
      ['Mógł przyjść.', ['Он могл прийти́.', 'Он мог прийти́.', 'Он могну́л прийти́.'], 1]
    ] },
  { id: 'vy', t: 'Forma grzecznościowa: Вы, nie „pan/pani”',
    b: '<p>Polskie „Czy pan ma czas?” (3. osoba) po rosyjsku brzmi <b>„У вас есть вре́мя?”</b> – 2. osoba liczby mnogiej, jak francuskie „vous”. W listach pisze się <b>Вы</b> wielką literą.</p><table class="tbl"><tr><td>Czy pani mówi po polsku?</td><td>Вы говори́те по-по́льски?</td></tr><tr><td>Gdzie pan pracuje?</td><td>Где вы рабо́таете?</td></tr><tr><td>Proszę usiąść.</td><td>Сади́тесь, пожа́луйста.</td></tr></table><p>Zamiast „panie Piotrze” mówi się <b>imię i otczestwo</b>: <i>Пётр Ива́нович</i>, <i>А́нна Серге́евна</i>. Słowa <i>господи́н / госпожа́</i> są oficjalne i rzadkie.</p>',
    quiz: [
      ['Czy pan ma długopis?', ['Пан име́ет ру́чку?', 'У вас есть ру́чка?', 'У тебя́ есть ру́чка, пан?'], 1],
      ['Skąd pani jest?', ['Отку́да вы?', 'Отку́да па́ни есть?', 'Отку́да она́?'], 0],
      ['Grzeczny zwrot do Piotra Iwanowicza', ['Пан Пётр, …', 'Пётр Ива́нович, …', 'Господи́н Пётр, …'], 1]
    ] },
  { id: 'kalki', t: 'Rząd i przyimki – gdzie Polak kalkuje',
    b: '<p>Większość konstrukcji jest wspólna, ale kilka polskich odruchów daje błędy:</p><table class="tbl"><tr><td>Mam 40 lat.</td><td><b>Мне</b> со́рок лет. (celownik!)</td></tr><tr><td>Mam na imię Marcin.</td><td><b>Меня́ зову́т</b> Марци́н.</td></tr><tr><td>Mam brata.</td><td><b>У меня́ есть</b> брат.</td></tr><tr><td>Myślę o tobie.</td><td>Ду́маю <b>о тебе́</b>. (о + miejscownik)</td></tr><tr><td>Mówię po rosyjsku.</td><td>Говорю́ <b>по-ру́сски</b>.</td></tr><tr><td>Tęsknię za tobą.</td><td>Скуча́ю <b>по тебе́</b>.</td></tr><tr><td>Za tydzień.</td><td><b>Че́рез</b> неде́лю.</td></tr><tr><td>Boli mnie głowa.</td><td><b>У меня́</b> боли́т голова́.</td></tr><tr><td>Czekam na ciebie.</td><td>Жду <b>тебя́</b>. (bez przyimka)</td></tr></table>',
    quiz: [
      ['Mam 15 lat.', ['Я име́ю пятна́дцать лет.', 'Мне пятна́дцать лет.', 'У меня́ пятна́дцать лет.'], 1],
      ['Tęsknię za domem.', ['Скуча́ю за до́мом.', 'Скуча́ю по до́му.', 'Скуча́ю о до́ме.'], 1],
      ['Za godzinę.', ['За час.', 'Че́рез час.', 'По ча́су.'], 1],
      ['Czekam na autobus.', ['Жду на авто́бус.', 'Жду авто́бус.', 'Жду за авто́бусом.'], 1]
    ] },
  { id: 'dvizh', t: 'Czasowniki ruchu: идти́ czy ходи́ть?',
    b: '<p>Rosyjski rozróżnia ruch <b>w jedną stronę, teraz</b> i ruch <b>wielokrotny lub tam i z powrotem</b> – podobnie jak polskie „iść / chodzić”, ale konsekwentniej:</p><table class="tbl"><tr><td>идти́ / ходи́ть</td><td>iść / chodzić (pieszo)</td></tr><tr><td>е́хать / е́здить</td><td>jechać / jeździć</td></tr><tr><td>лете́ть / лета́ть</td><td>lecieć / latać</td></tr><tr><td>нести́ / носи́ть</td><td>nieść / nosić</td></tr></table><p><i>Я иду́ в шко́лу</i> – idę (teraz) do szkoły. <i>Я хожу́ в шко́лу</i> – chodzę (regularnie). <i>Вчера́ я ходи́л в кино́</i> – byłem wczoraj w kinie (poszedłem i wróciłem).</p><p>Uwaga: idąc pieszo – <b>идти́</b>, jadąc czymkolwiek – <b>е́хать</b>. „Idę autobusem” to po rosyjsku <i>е́ду на авто́бусе</i>.</p>',
    quiz: [
      ['Teraz idę do domu.', ['Я хожу́ домо́й.', 'Я иду́ домо́й.', 'Я е́ду пешко́м домо́й.'], 1],
      ['Co roku jeździmy nad morze.', ['Ка́ждый год мы е́дем на мо́ре.', 'Ка́ждый год мы е́здим на мо́ре.', 'Ка́ждый год мы хо́дим на мо́ре.'], 1],
      ['Wczoraj byłem w teatrze.', ['Вчера́ я ходи́л в теа́тр.', 'Вчера́ я шёл в теа́тр.', 'Вчера́ я иду́ в теа́тр.'], 0],
      ['Jadę do pracy metrem.', ['Я иду́ на рабо́ту на метро́.', 'Я е́ду на рабо́ту на метро́.', 'Я хожу́ на рабо́ту метро́м.'], 1]
    ] },
  { id: 'rod', t: 'Rodzaj inny niż po polsku',
    b: '<p>Większość rzeczowników ma ten sam rodzaj co w polskim, ale są pułapki:</p><table class="tbl"><tr><td>ко́фе (r. męski!)</td><td>Чёрный ко́фе – czarna kawa</td></tr><tr><td>суп (r. męski)</td><td>zupa</td></tr><tr><td>боль, соль, роль (r. żeński)</td><td>ból (m), sól, rola</td></tr><tr><td>путь (r. męski)</td><td>droga</td></tr><tr><td>тигр, ле́бедь (r. męski)</td><td>tygrys, łabędź</td></tr><tr><td>шампу́нь, ту́фля</td><td>szampon (m), pantofel (ż)</td></tr><tr><td>мужчи́на, па́па, де́душка</td><td>r. męski, ale odmiana jak rz. żeńskie na -а</td></tr></table><p>Rzeczowniki na <b>-ь</b> mogą być męskie (день, ого́нь) lub żeńskie (ночь, мать) – trzeba je zapamiętać.</p>',
    quiz: [
      ['Czarna kawa', ['чёрная ко́фе', 'чёрный ко́фе', 'чёрное ко́фе'], 1],
      ['Silny ból', ['си́льный боль', 'си́льная боль', 'си́льное боль'], 1],
      ['Długa droga (путь)', ['дли́нная путь', 'дли́нный путь', 'дли́нное путь'], 1],
      ['Mój dziadek przyszedł.', ['Мой де́душка пришла́.', 'Моя́ де́душка пришёл.', 'Мой де́душка пришёл.'], 2]
    ] },
  { id: 'chisla', t: 'Liczebniki: 2 часа́, 5 часо́в',
    b: '<p>Po liczebnikach rzeczownik zmienia formę – podobnie jak w polskim, ale z inną granicą:</p><table class="tbl"><tr><td>1 (21, 31…)</td><td>оди́н час, одна́ мину́та – mianownik lp.</td></tr><tr><td>2, 3, 4 (22–24…)</td><td>два часа́, три мину́ты – <b>dopełniacz lp.</b></td></tr><tr><td>5–20, 25–30…</td><td>пять часо́в, де́сять мину́т – dopełniacz lm.</td></tr></table><p>Polak mówi „dwie minuty” (mianownik lm.), Rosjanin <b>две мину́ты</b> (dopełniacz lp.). Rok: 1 год, 2 го́да, но 5 <b>лет</b>.</p>',
    quiz: [
      ['3 godziny', ['три часы́', 'три часа́', 'три часо́в'], 1],
      ['5 lat', ['пять годо́в', 'пять го́да', 'пять лет'], 2],
      ['22 minuty', ['два́дцать две мину́ты', 'два́дцать две мину́т', 'два́дцать два мину́ты'], 0],
      ['21 rok', ['два́дцать оди́н год', 'два́дцать оди́н го́да', 'два́дцать оди́н лет'], 0]
    ] },
  { id: 'sya', t: '-ся piszemy razem',
    b: '<p>Polskie „się” to osobne, ruchome słowo. Rosyjskie <b>-ся</b> to końcówka – zawsze na końcu czasownika i pisana łącznie (po samogłosce: <b>-сь</b>):</p><table class="tbl"><tr><td>uczę się</td><td>учу́<b>сь</b></td></tr><tr><td>śmieje się</td><td>смеёт<b>ся</b></td></tr><tr><td>spotkamy się</td><td>встре́тим<b>ся</b></td></tr><tr><td>jak się nazywasz?</td><td>как тебя́ зову́т? (bez -ся!)</td></tr></table><p>Część polskich czasowników zwrotnych po rosyjsku nie ma -ся i odwrotnie: <i>улыба́ться</i> – uśmiechać się, ale <i>нра́виться</i> – podobać się, <i>боя́ться</i> – bać się, <i>учи́ться</i> – uczyć się.</p>',
    quiz: [
      ['Uczę się rosyjskiego.', ['Я ся учу́ ру́сский.', 'Я учу́ ру́сский язы́к.', 'Я учу́ ся ру́сский.'], 1],
      ['Spotkajmy się jutro.', ['Дава́й встре́тимся за́втра.', 'Дава́й ся встре́тим за́втра.', 'Дава́й встре́тим ся за́втра.'], 0],
      ['Lekcja zaczyna się o ósmej.', ['Уро́к ся начина́ет в во́семь.', 'Уро́к начина́ется в во́семь.', 'Уро́к начина́ет ся в во́семь.'], 1]
    ] }
];

/* ---------- Dialogi ----------
   linie: [rola, rosyjski, polski] */
UA.DIALOGS = [
  { id: 'znakomstvo', t: 'Poznajmy się', ua: 'Знако́мство', roles: ['Ма́ша', 'Марци́н'], lines: [
    [0, 'Приве́т! Меня́ зову́т Ма́ша. А тебя́?', 'Cześć! Mam na imię Masza. A ty?'],
    [1, 'Приве́т! Я Марци́н. О́чень прия́тно.', 'Cześć! Jestem Marcin. Bardzo mi miło.'],
    [0, 'Ты из По́льши?', 'Jesteś z Polski?'],
    [1, 'Да, из Варша́вы. А ты?', 'Tak, z Warszawy. A ty?'],
    [0, 'Я из Петербу́рга. Ты хорошо́ говори́шь по-ру́сски!', 'Jestem z Petersburga. Dobrze mówisz po rosyjsku!'],
    [1, 'Спаси́бо, но я ещё учу́сь.', 'Dziękuję, ale wciąż się uczę.'],
    [0, 'А кем ты рабо́таешь?', 'A gdzie pracujesz? (kim jesteś z zawodu?)'],
    [1, 'Я учи́тель исто́рии.', 'Jestem nauczycielem historii.']
  ]},
  { id: 'magazin', t: 'W sklepie', ua: 'В магази́не', roles: ['Продаве́ц', 'Покупа́тель'], lines: [
    [0, 'Здра́вствуйте! Что вам?', 'Dzień dobry! Co podać?'],
    [1, 'Здра́вствуйте! Да́йте, пожа́луйста, хлеб и молоко́.', 'Dzień dobry! Poproszę chleb i mleko.'],
    [0, 'Что́-нибудь ещё?', 'Coś jeszcze?'],
    [1, 'Да, килогра́мм я́блок. Ско́лько с меня́?', 'Tak, kilogram jabłek. Ile płacę?'],
    [0, 'Сто два́дцать рубле́й.', 'Sto dwadzieścia rubli.'],
    [1, 'Мо́жно ка́ртой?', 'Można kartą?'],
    [0, 'Да, коне́чно. Вот ваш чек.', 'Tak, oczywiście. Oto paragon.'],
    [1, 'Спаси́бо! До свида́ния!', 'Dziękuję! Do widzenia!']
  ]},
  { id: 'doroga', t: 'Pytanie o drogę', ua: 'Как пройти́?', roles: ['Тури́ст', 'Прохо́жая'], lines: [
    [0, 'Извини́те, как пройти́ к вокза́лу?', 'Przepraszam, jak dojść na dworzec?'],
    [1, 'Иди́те пря́мо до светофо́ра.', 'Proszę iść prosto do świateł.'],
    [1, 'Пото́м поверни́те нале́во.', 'Potem proszę skręcić w lewo.'],
    [0, 'Э́то далеко́?', 'Czy to daleko?'],
    [1, 'Нет, мину́т де́сять пешко́м.', 'Nie, jakieś dziesięć minut pieszo.'],
    [0, 'А авто́бус туда́ хо́дит?', 'A czy jeździ tam autobus?'],
    [1, 'Да, пя́тый. Остано́вка вон там.', 'Tak, piątka. Przystanek jest tam.'],
    [0, 'Большо́е спаси́бо!', 'Dziękuję bardzo!'],
    [1, 'Не за что!', 'Nie ma za co!']
  ]},
  { id: 'vrach', t: 'U lekarza', ua: 'У врача́', roles: ['Врач', 'Пацие́нт'], lines: [
    [0, 'Здра́вствуйте! На что жа́луетесь?', 'Dzień dobry! Na co się pan skarży?'],
    [1, 'У меня́ боли́т голова́ и го́рло.', 'Boli mnie głowa i gardło.'],
    [0, 'С каки́х пор?', 'Od kiedy?'],
    [1, 'Со вчера́шнего дня. И ещё у меня́ температу́ра.', 'Od wczoraj. I mam jeszcze gorączkę.'],
    [0, 'Ка́шель есть?', 'Jest kaszel?'],
    [1, 'Да, немно́го.', 'Tak, trochę.'],
    [0, 'Вот реце́пт. Принима́йте э́то лека́рство три ра́за в день.', 'Oto recepta. Proszę brać ten lek trzy razy dziennie.'],
    [1, 'Спаси́бо, до́ктор.', 'Dziękuję, panie doktorze.']
  ]},
  { id: 'restoran', t: 'W restauracji', ua: 'В рестора́не', roles: ['Официа́нт', 'Гость'], lines: [
    [0, 'До́брый ве́чер! У вас заброни́ровано?', 'Dobry wieczór! Mają państwo rezerwację?'],
    [1, 'Да, на фами́лию Нова́к, на двои́х.', 'Tak, na nazwisko Nowak, dla dwóch osób.'],
    [0, 'Проходи́те, пожа́луйста. Что бу́дете пить?', 'Proszę wejść. Co państwo będą pili?'],
    [1, 'Два ча́я, пожа́луйста. Что вы посове́туете?', 'Dwie herbaty, proszę. Co pan poleci?'],
    [0, 'Сего́дня у нас о́чень вку́сные пельме́ни и борщ.', 'Dziś mamy bardzo smaczne pielmieni i barszcz.'],
    [1, 'Хорошо́, мне пельме́ни, а жене́ – борщ.', 'Dobrze, dla mnie pielmieni, a dla żony barszcz.'],
    [0, 'Вам всё понра́вилось?', 'Czy wszystko smakowało?'],
    [1, 'Да, о́чень вку́сно! Принеси́те, пожа́луйста, счёт.', 'Tak, bardzo smaczne! Proszę przynieść rachunek.']
  ]},
  { id: 'kvartira', t: 'Szukam mieszkania', ua: 'Съём кварти́ры', roles: ['Хозя́йка', 'Жиле́ц'], lines: [
    [0, 'Здра́вствуйте, вы по объявле́нию?', 'Dzień dobry, pan w sprawie ogłoszenia?'],
    [1, 'Да. Ско́лько ко́мнат в кварти́ре?', 'Tak. Ile pokoi ma mieszkanie?'],
    [0, 'Две ко́мнаты, ку́хня и ва́нная. Всего́ пятьдеся́т пять ме́тров.', 'Dwa pokoje, kuchnia i łazienka. W sumie pięćdziesiąt pięć metrów.'],
    [1, 'Ско́лько сто́ит в ме́сяц?', 'Ile kosztuje miesięcznie?'],
    [0, 'Со́рок ты́сяч плюс коммуна́льные услу́ги.', 'Czterdzieści tysięcy plus media.'],
    [1, 'Ну́жен зало́г?', 'Potrzebna jest kaucja?'],
    [0, 'Да, за оди́н ме́сяц. Когда́ хоти́те въе́хать?', 'Tak, za jeden miesiąc. Kiedy chce pan się wprowadzić?'],
    [1, 'Лу́чше всего́ с пе́рвого ма́рта.', 'Najlepiej od pierwszego marca.']
  ]},
  { id: 'vokzal', t: 'Na dworcu', ua: 'На вокза́ле', roles: ['Касси́р', 'Пассажи́р'], lines: [
    [0, 'Слу́шаю вас.', 'Słucham pana.'],
    [1, 'Мне ну́жен биле́т до Ни́жнего Но́вгорода на за́втра.', 'Potrzebuję biletu do Niżnego Nowogrodu na jutro.'],
    [0, 'Есть по́езд в семь утра́ и в два часа́ дня.', 'Jest pociąg o siódmej rano i o drugiej po południu.'],
    [1, 'Дава́йте в семь. Ско́лько идёт по́езд?', 'Poproszę na siódmą. Ile jedzie pociąg?'],
    [0, 'Четы́ре часа́. Ваш па́спорт, пожа́луйста.', 'Cztery godziny. Proszę paszport.'],
    [1, 'Вот, пожа́луйста. Мо́жно ме́сто у окна́?', 'Proszę. Czy można miejsce przy oknie?'],
    [0, 'Мо́жно. Ваго́н пя́тый, ме́сто двена́дцатое.', 'Można. Wagon piąty, miejsce dwunaste.'],
    [1, 'Спаси́бо большо́е!', 'Dziękuję bardzo!']
  ]},
  { id: 'diskussiya', t: 'Dyskusja: szkoła i smartfony', ua: 'Телефо́ны в шко́ле?', roles: ['А́нна', 'Ива́н'], lines: [
    [0, 'По-мо́ему, телефо́ны в шко́ле на́до запрети́ть.', 'Moim zdaniem telefony w szkole trzeba zakazać.'],
    [1, 'Я с тобо́й не согла́сен. Их мо́жно испо́льзовать на уро́ках.', 'Nie zgadzam się z tobą. Można ich używać na lekcjach.'],
    [0, 'С одно́й стороны́, э́то пра́вда, с друго́й – они́ постоя́нно отвлека́ют.', 'Z jednej strony to prawda, z drugiej – ciągle rozpraszają.'],
    [1, 'Но запре́т не реши́т пробле́му. Ученики́ должны́ научи́ться по́льзоваться и́ми отве́тственно.', 'Ale zakaz nie rozwiąże problemu. Uczniowie muszą nauczyć się korzystać z nich odpowiedzialnie.'],
    [0, 'Тут ты отча́сти прав. Мо́жет быть, компроми́сс – чёткие пра́вила.', 'Tu masz częściowo rację. Może kompromisem są jasne zasady.'],
    [1, 'Вот и́менно: на переме́нах мо́жно, на уро́ках – то́лько с разреше́ния.', 'Właśnie: na przerwach można, na lekcjach – tylko za zgodą.']
  ]}
];
