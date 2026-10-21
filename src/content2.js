/* ============================================================
   TREŚCI ŚCIEŻEK TEMATYCZNYCH: ściągi „Dobrze wiedzieć”, dialogi, czytanki
   ============================================================ */
var UA = window.UA || (window.UA = {});

UA.TIPS = {
  tr_vokzal: ['Wagony dalekobieżne: <b>плацка́рт</b> (otwarty, najtańszy), <b>купе́</b> (4-osobowe przedziały), <b>СВ</b> (2-osobowe). Pościel (<b>бельё</b>) daje <b>проводни́к</b>, w wagonie jest kocioł z wrzątkiem (<b>кипято́к</b>).', 'Bilet dalekobieżny kupuje się zwykle imiennie – kasjer poprosi o paszport.', 'Peron to <b>платфо́рма</b>, a tor – <b>путь</b>: „по́езд на пя́том пути́” to „pociąg przy torze piątym”.'],
  tr_aeroport: ['Na tablicach: <b>вы́лет</b> – odloty, <b>прилёт</b> – przyloty, <b>заде́ржан</b> – opóźniony, <b>отменён</b> – odwołany.', 'Bagaż podręczny to <b>ручна́я кладь</b>, nadawany – <b>бага́ж</b>.'],
  tr_gorod: ['W metrze dobrze znać komunikaty: <b>Осторо́жно, две́ри закрыва́ются!</b> i <b>Сле́дующая ста́нция …</b>', 'W <b>маршру́тке</b> płaci się zwykle kierowcy, a żeby wysiąść, mówi się głośno: <b>Останови́те здесь, пожа́луйста!</b> albo <b>На остано́вке, пожа́луйста!</b>', 'W taksówkach coraz częściej zamawia się kurs przez aplikację; jeśli łapiesz auto na ulicy, ustal cenę przed jazdą.'],
  tr_nochleg: ['Hotele zwykle proszą o paszport przy zameldowaniu – w wielu krajach regionu muszą zarejestrować pobyt cudzoziemca.', 'Mieszkania na doby oferuje się jako <b>кварти́ра посу́точно</b>.'],
  tr_eda: ['<b>Сто́ловая</b> to tani bar z gotowymi daniami – dobry, szybki obiad. W porze lunchu wiele restauracji ma tańszy <b>би́знес-ланч</b>.', 'Kelnerkę woła się często po prostu: <b>Де́вушка!</b>, kelnera: <b>Молодо́й челове́к!</b> – to normalne, nie niegrzeczne.', 'Napiwek (<b>чаевы́е</b>) zwykle ok. 10%, nie jest obowiązkowy.'],
  tr_dengi: ['W Rosji od 2022 r. zagraniczne karty Visa i Mastercard nie działają – trzeba mieć gotówkę. W innych krajach regionu (np. Kazachstan, Gruzja, Armenia) karty zwykle działają.', 'Na bazarach (<b>ры́нок</b>, <b>база́р</b>) targowanie się jest normalne, w sklepach – nie.'],
  tr_pomosh: ['Numer alarmowy <b>112</b> działa w Rosji, Kazachstanie i wielu krajach regionu. W Rosji: <b>103</b> – pogotowie, <b>102</b> – policja, <b>101</b> – straż.', 'Apteka to <b>апте́ка</b>; leki przeciwbólowe i na przeziębienie zwykle bez recepty.'],
  tr_orient: ['Typy ulic: <b>у́лица</b> – ulica, <b>проспе́кт</b> – szeroka aleja, <b>переу́лок</b> – zaułek, <b>на́бережная</b> – bulwar nad rzeką, <b>шоссе́</b> – droga wylotowa.', 'Na znakach: <b>Вход</b> – wejście, <b>Вы́ход</b> – wyjście, <b>Перехо́д</b> – przejście, <b>Не прислоня́ться</b> – nie opierać się (na drzwiach w metrze).'],
  tr_ekskursii: ['W cerkwi prawosławnej kobiety zakrywają głowę chustą, mężczyźni zdejmują czapki. W wielu cerkwiach nie wolno fotografować w czasie nabożeństwa.', 'Muzea mają zwykle jeden dzień w tygodniu zamknięty – <b>выходно́й день</b> (często poniedziałek lub wtorek).', '<b>Кремль</b> to nie tylko moskiewski – wiele starych miast ma swój kreml (Kazań, Nowogród, Psków, Rostów).'],
  tr_obshchenie: ['Rosyjski bywa językiem porozumienia także w Kazachstanie, Kirgistanie czy na Kaukazie, ale w wielu krajach (Ukraina, kraje bałtyckie, Gruzja) lepiej zacząć od języka lokalnego lub angielskiego i zapytać: <b>Мо́жно по-ру́сски?</b>', 'Do obcych dorosłych mówi się <b>вы</b>; uprzejmie zwraca się po imieniu i otczestwie: <b>А́нна Серге́евна</b>.'],
  ar_arhiv: ['Sygnatura rosyjska: <b>Ф.</b> (фонд – zespół) · <b>Оп.</b> (о́пись – inwentarz) · <b>Д.</b> (де́ло – jednostka) · <b>Л.</b> (лист – karta) · <b>об.</b> (оборо́т – verso). Np. <b>ГАРФ. Ф. Р-8131. Оп. 37. Д. 4. Л. 12 об.</b>', 'Ważne archiwa: <b>РГАДА</b> (dawne akta do XVIII w.), <b>РГИА</b> (ministerstwa Imperium), <b>РГВИА</b> (wojsko do 1918), <b>ГАРФ</b> (państwo, XIX–XX w.), <b>РГАСПИ</b> (partia).', 'Akta z czasów Imperium dotyczące ziem polskich i litewskich leżą też w archiwach w Wilnie, Mińsku, Kijowie i Grodnie – często po rosyjsku.', 'W czytelni zamawia się akta na <b>тре́бование</b> (rewers) – zwykle z wyprzedzeniem kilku dni.'],
  ar_dokumenty: ['W Królestwie Polskim akta stanu cywilnego prowadzono po rosyjsku od 1868 r. – stąd rosyjskie wpisy w polskich księgach parafialnych.', '<b>Метри́ческая кни́га</b> to księga metrykalna (urodzenia, śluby, zgony), <b>ревизска́я ска́зка</b> – spis ludności podatkowej (rewizje 1719–1858), <b>пе́репись 1897</b> – pierwszy powszechny spis ludności Imperium.'],
  ar_paleografia: ['Reforma ortografii 1917–1918 usunęła litery <b>ѣ</b> (czytaj jak е), <b>і</b> (jak и), <b>ѳ</b> (jak ф), <b>ѵ</b> (jak и) oraz <b>ъ</b> na końcu wyrazów: <i>хлѣбъ → хлеб, Россія → Россия</i>.', 'Daty „starego stylu” (kalendarz juliański) były późniejsze od gregoriańskich o 11 dni w XVIII w., 12 dni w XIX w. i 13 dni od 1900 r. Rosja przeszła na nowy styl w 1918 r. (po 31 stycznia nastąpił 14 lutego).', 'W dokumentach często zapisuje się obie daty: <b>5/17 мая 1863 г.</b> – 5 maja starego stylu = 17 maja nowego.'],
  ar_imperiya: ['Królestwo Polskie od 1867 r. dzieliło się na 10 guberni; ziemie litewsko-białoruskie tworzyły <b>Се́веро-За́падный край</b>.', 'Społeczeństwo Imperium dzieliło się na stany (<b>сосло́вия</b>): дворя́нство, духове́нство, купе́чество, меща́нство, крестья́нство – stan zapisywano w dokumentach, co pomaga w genealogii.'],
  ar_polsha: ['Słowo <b>ссы́лка</b> ma dwa znaczenia: „zesłanie” i „odsyłacz / przypis / link” – w tekście naukowym zwykle chodzi o to drugie.', 'Akta zesłańców po 1863 r. znajdują się m.in. w archiwach syberyjskich (Irkuck, Tobolsk, Omsk) oraz w РГИА i ГАРФ.'],
  ar_sssr: ['Akta śledcze NKWD/KGB w Rosji są w dużej części niedostępne; łatwiej o akta w archiwach Ukrainy i państw bałtyckich, które je otworzyły.', 'Stowarzyszenie <b>«Мемориа́л»</b> (rozwiązane w Rosji w latach 2021–2022) zebrało bazy danych ofiar represji – część z nich nadal jest dostępna w internecie.'],
  ar_istorik: ['Rosyjskie nazwiska transliteruj w polskim tekście według polskiej transkrypcji (Чехов → Czechow), a w bibliografii – według normy przyjętej w danym wydawnictwie (np. ISO 9 lub tzw. transliteracja naukowa).', '<b>Сно́ска</b> to przypis dolny, <b>ссы́лка</b> – odsyłacz; „ук. соч.” = op. cit., „там же” = ibidem.']
};

UA.DIALOGS.push(
  { id: 'v_poezde', unit: 'tr_vokzal', t: 'W pociągu', ua: 'В по́езде', roles: ['Проводни́ца', 'Пассажи́р'], lines: [
    [0, 'До́брый ве́чер! Ваш биле́т и па́спорт, пожа́луйста.', 'Dobry wieczór! Proszę bilet i paszport.'],
    [1, 'Вот, пожа́луйста. У меня́ ни́жняя по́лка в тре́тьем купе́.', 'Proszę. Mam dolną kuszetkę w trzecim przedziale.'],
    [0, 'Проходи́те. Бельё бу́дете брать?', 'Proszę przejść. Weźmie pan pościel?'],
    [1, 'Да, пожа́луйста. А где мо́жно взять кипято́к?', 'Tak, proszę. A gdzie można wziąć wrzątek?'],
    [0, 'В нача́ле ваго́на, ря́дом с мои́м купе́.', 'Na początku wagonu, obok mojego przedziału.'],
    [1, 'Спаси́бо. Во ско́лько мы прибыва́ем в Каза́нь?', 'Dziękuję. O której przyjeżdżamy do Kazania?'],
    [0, 'В семь утра́. Я вас разбужу́ за полчаса́.', 'O siódmej rano. Obudzę pana pół godziny wcześniej.'],
    [1, 'Отли́чно, спаси́бо большо́е!', 'Świetnie, dziękuję bardzo!']
  ]},
  { id: 'v_gostinice', unit: 'tr_nochleg', t: 'W hotelu', ua: 'В гости́нице', roles: ['Администра́тор', 'Гость'], lines: [
    [1, 'До́брый ве́чер! У меня́ брони́рование на фами́лию Нова́к.', 'Dobry wieczór! Mam rezerwację na nazwisko Nowak.'],
    [0, 'Здра́вствуйте! Одноме́стный но́мер на три но́чи, ве́рно?', 'Dzień dobry! Pokój jednoosobowy na trzy noce, zgadza się?'],
    [1, 'Да. За́втрак включён?', 'Tak. Czy śniadanie jest w cenie?'],
    [0, 'Да, с семи́ до десяти́. Ваш па́спорт, пожа́луйста.', 'Tak, od siódmej do dziesiątej. Proszę paszport.'],
    [1, 'Вот. И како́й паро́ль от вай-фа́я?', 'Proszę. A jakie jest hasło do Wi-Fi?'],
    [0, 'Он напи́сан на ка́рточке. Ваш но́мер на четвёртом этаже́, лифт напра́во.', 'Jest na karteczce. Pana pokój jest na czwartym piętrze, winda po prawej.'],
    [1, 'Во ско́лько на́до вы́селиться?', 'Do której trzeba się wymeldować?'],
    [0, 'До двена́дцати. Бага́ж мо́жно оста́вить у нас.', 'Do dwunastej. Bagaż można zostawić u nas.']
  ]},
  { id: 'v_arhive', unit: 'ar_arhiv', t: 'W czytelni archiwum', ua: 'В чита́льном за́ле', roles: ['Сотру́дница', 'Иссле́дователь'], lines: [
    [1, 'Здра́вствуйте! Я истори́к из По́льши. Мо́жно офо́рмить про́пуск в чита́льный зал?', 'Dzień dobry! Jestem historykiem z Polski. Czy można wyrobić przepustkę do czytelni?'],
    [0, 'Да, нужны́ па́спорт и письмо́ из ва́шего институ́та и́ли шко́лы. Кака́я у вас те́ма?', 'Tak, potrzebny jest paszport i pismo z instytutu albo szkoły. Jaki jest pana temat?'],
    [1, 'По́льские ссы́льные по́сле Янва́рского восста́ния.', 'Polscy zesłańcy po powstaniu styczniowym.'],
    [0, 'Посмотри́те путеводи́тель и о́писи фо́нда губе́рнского правле́ния.', 'Proszę przejrzeć przewodnik i inwentarze zespołu rządu gubernialnego.'],
    [1, 'Я хоте́л бы заказа́ть три де́ла. Как запо́лнить тре́бование?', 'Chciałbym zamówić trzy jednostki. Jak wypełnić rewers?'],
    [0, 'Укажи́те фонд, о́пись и но́мер де́ла. Дела́ вы́дадут послеза́втра.', 'Proszę podać zespół, inwentarz i numer jednostki. Akta wydamy pojutrze.'],
    [1, 'Мо́жно фотографи́ровать докуме́нты?', 'Czy można fotografować dokumenty?'],
    [0, 'Мо́жно, без вспы́шки. А заве́ренные ко́пии зака́зывают отде́льно.', 'Można, bez lampy błyskowej. A uwierzytelnione kopie zamawia się osobno.']
  ]},
  { id: 'o_predke', unit: 'ar_dokumenty', t: 'Szukam przodka', ua: 'В по́исках пре́дка', roles: ['Архиви́ст', 'Посети́тель'], lines: [
    [1, 'Я ищу́ све́дения о праде́де. Он роди́лся в Ви́ленской губе́рнии о́коло 1870 го́да.', 'Szukam informacji o pradziadku. Urodził się w guberni wileńskiej około 1870 roku.'],
    [0, 'Како́го он был вероиспове́дания?', 'Jakiego był wyznania?'],
    [1, 'Като́лик. И, ка́жется, меща́нин.', 'Katolik. I chyba mieszczanin.'],
    [0, 'Тогда́ начни́те с метри́ческих книг като́лических прихо́дов.', 'W takim razie proszę zacząć od ksiąg metrykalnych parafii katolickich.'],
    [1, 'Они́ напи́саны по-ру́сски?', 'Są napisane po rosyjsku?'],
    [0, 'В э́то вре́мя – ча́ще всего́ по-ру́сски, и́ногда по-лати́ни. И не забу́дьте: да́ты по ста́рому сти́лю.', 'W tym okresie najczęściej po rosyjsku, czasem po łacinie. I proszę nie zapomnieć: daty według starego stylu.'],
    [1, 'Зна́чит, на́до приба́вить двена́дцать дней?', 'Czyli trzeba dodać dwanaście dni?'],
    [0, 'Ве́рно, для девятна́дцатого ве́ка – двена́дцать.', 'Zgadza się, dla dziewiętnastego wieku – dwanaście.']
  ]}
);

UA.TEXTS.push(
  { id: 't_tr', level: 'TR', t: 'Koleją przez Kazachstan', ua: 'По́ездом по Казахста́ну',
    text: 'В про́шлом году́ я е́хал на по́езде из Алма́ты в Аста́ну. Биле́т в купе́ я купи́л зара́нее, по па́спорту. Проводни́ца принесла́ бельё и чай в стака́не с подста́канником. Мои́ сосе́ди по купе́ угоща́ли меня́ ди́нями и расспра́шивали о По́льше. Мы е́хали почти́ су́тки, но вре́мя прошло́ бы́стро: разгово́ры, чай и бесконе́чная степь за окно́м.',
    pl: 'W zeszłym roku jechałem pociągiem z Ałmaty do Astany. Bilet do przedziału kupiłem wcześniej, na paszport. Konduktorka przyniosła pościel i herbatę w szklance z koszyczkiem. Sąsiedzi z przedziału częstowali mnie melonami i wypytywali o Polskę. Jechaliśmy prawie dobę, ale czas minął szybko: rozmowy, herbata i niekończący się step za oknem.',
    qs: [['Jak kupił bilet?', ['w pociągu', 'wcześniej, na paszport', 'przez znajomych', 'w automacie'], 1], ['Czym częstowali go sąsiedzi?', ['melonami', 'pielmieniami', 'chlebem', 'czekoladą'], 0], ['Ile trwała podróż?', ['dwie godziny', 'prawie dobę', 'tydzień', 'pół dnia'], 1]] },
  { id: 't_ar', level: 'AR', t: 'Teczka zesłańca', ua: 'Де́ло ссы́льного',
    text: 'В чита́льном за́ле мне вы́дали то́нкое де́ло в карто́нной обло́жке. На пе́рвом листе́ – проше́ние ссы́льного поля́ка о разреше́нии верну́ться на ро́дину. Он писа́л, что его́ мать тяжело́ больна́ и что он «никако́го уча́стия в беспоря́дках бо́лее не принима́ет». Ни́же – резолю́ция губерна́тора: «Отказа́ть». Да́та ука́зана по ста́рому сти́лю, а по́черк писаря́ места́ми совсе́м неразбо́рчив.',
    pl: 'W czytelni wydano mi cienką teczkę w tekturowej okładce. Na pierwszej karcie – prośba polskiego zesłańca o zgodę na powrót do kraju. Pisał, że jego matka jest ciężko chora i że „żadnego udziału w rozruchach więcej nie bierze”. Niżej – rezolucja gubernatora: „Odmówić”. Data jest podana według starego stylu, a pismo kancelisty miejscami jest zupełnie nieczytelne.',
    qs: [['O co prosił zesłaniec?', ['o pieniądze', 'o zgodę na powrót do kraju', 'o pracę', 'o przeniesienie do innej guberni'], 1], ['Jaka była decyzja gubernatora?', ['zgoda', 'odmowa', 'odroczenie', 'skierowanie do sądu'], 1], ['Co utrudnia lekturę?', ['dokument jest po łacinie', 'nieczytelne pismo kancelisty', 'brak daty', 'dokument jest uszkodzony przez wodę'], 1]] }
);
