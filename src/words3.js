/* ============================================================
   ŚCIEŻKI TEMATYCZNE (otwarte od razu, niezależne od A1–C2)
   TR – Podróż: praktyczne słownictwo na wyjazd
   AR – Archiwum i historia: kwerendy, typy dokumentów, stare teksty, historia
   W(...) jak w words.js; słowo docelowe w przykładzie w {…}.
   ============================================================ */
var UA = window.UA || (window.UA = {});
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur });
  }

  /* ===================== PODRÓŻ ===================== */
  L('TR', 'tr_vokzal', 'Dworzec i pociąg');
  W('расписа́ние', 'с', 'rozkład jazdy; plan zajęć', 'D. расписа́ния', 'o', 'Где мо́жно посмотре́ть {расписа́ние} поездо́в?', 'Gdzie można zobaczyć rozkład pociągów?');
  W('биле́тная ка́сса', 'ф', 'kasa biletowa', '', 'p', 'Биле́ты продаю́тся в {биле́тной ка́ссе} на пе́рвом этаже́.', 'Bilety sprzedaje się w kasie biletowej na parterze.');
  W('отправле́ние', 'с', 'odjazd', 'D. отправле́ния', 'p', 'До {отправле́ния} по́езда оста́лось пять мину́т.', 'Do odjazdu pociągu zostało pięć minut.');
  W('прибы́тие', 'с', 'przyjazd, przybycie', 'D. прибы́тия', 'p', 'Вре́мя {прибы́тия} – 18:40.', 'Godzina przyjazdu – 18:40.');
  W('платфо́рма', 'ж', 'peron', 'D. платфо́рмы', 't', 'По́езд отправля́ется с тре́тьей {платфо́рмы}.', 'Pociąg odjeżdża z trzeciego peronu.');
  W('путь', 'ч', 'tor; droga', 'D. пути́ (odmiana nieregularna)', 'p', 'По́езд стои́т на пя́том {пути́}.', 'Pociąg stoi na piątym torze.');
  W('ваго́н', 'ч', 'wagon', 'D. ваго́на', 't', 'Наш {ваго́н} – седьмо́й.', 'Nasz wagon to siódmy.');
  W('купе́', 'с', 'przedział (też: wagon z przedziałami)', 'nieodmienne', 'p', 'Мы е́дем в {купе́}, нас че́тверо.', 'Jedziemy w przedziale, jest nas czworo.');
  W('плацка́рт', 'ч', 'wagon sypialny bez przedziałów (najtańszy)', 'D. плацка́рта', 'o', 'В {плацка́рте} деше́вле, но шу́мно.', 'W płackarcie jest taniej, ale głośno.');
  W('ни́жняя по́лка', 'ф', 'dolna kuszetka', 'ве́рхняя по́лка – górna', 'p', 'У меня́ {ни́жняя по́лка}.', 'Mam dolną kuszetkę.');
  W('проводни́к', 'ч', 'konduktor wagonu (opiekun wagonu)', 'D. проводника́ · ż. проводни́ца', 'p', '{Проводни́к} прове́рил биле́ты и па́спорта.', 'Konduktor sprawdził bilety i paszporty.');
  W('электри́чка', 'ж', 'pociąg podmiejski', 'D. электри́чки', 'p', 'До да́чи мы е́дем на {электри́чке}.', 'Na daczę jedziemy pociągiem podmiejskim.');
  W('туда́ и обра́тно', 'ф', 'tam i z powrotem (bilet w obie strony)', '', 'p', 'Оди́н биле́т {туда́ и обра́тно}, пожа́луйста.', 'Jeden bilet w obie strony, proszę.');
  W('ка́мера хране́ния', 'ф', 'przechowalnia bagażu', '', 'p', 'Мо́жно оста́вить чемода́н в {ка́мере хране́ния}?', 'Można zostawić walizkę w przechowalni?');
  W('опа́здывать / опозда́ть', 'д', 'spóźniać się / spóźnić się', 'опа́здываю · опозда́ю', 'p', 'По́езд {опа́здывает} на два́дцать мину́т.', 'Pociąg spóźnia się dwadzieścia minut.');
  W('Когда́ отправля́ется по́езд?', 'ф', 'kiedy odjeżdża pociąg?', '', 'p', 'Скажи́те, пожа́луйста, {когда́ отправля́ется по́езд} на Ри́гу?', 'Proszę powiedzieć, kiedy odjeżdża pociąg do Rygi?');

  L('TR', 'tr_aeroport', 'Lotnisko i samolot');
  W('рейс', 'ч', 'lot, kurs (numer lotu)', 'D. ре́йса', 'o', 'Наш {рейс} заде́рживается на час.', 'Nasz lot jest opóźniony o godzinę.');
  W('вы́лет', 'ч', 'wylot, odlot', 'D. вы́лета', 'p', 'До {вы́лета} ещё два часа́.', 'Do wylotu są jeszcze dwie godziny.');
  W('регистра́ция на рейс', 'ф', 'odprawa (check-in)', '', 'p', '{Регистра́ция на рейс} начина́ется за три часа́.', 'Odprawa zaczyna się trzy godziny przed lotem.');
  W('поса́дка', 'ж', 'wejście na pokład, boarding; lądowanie', 'D. поса́дки', 'p', '{Поса́дка} на рейс заверша́ется.', 'Boarding na lot się kończy.');
  W('поса́дочный тало́н', 'ф', 'karta pokładowa', '', 'o', 'Покажи́те ваш {поса́дочный тало́н}.', 'Proszę pokazać kartę pokładową.');
  W('бага́ж', 'ч', 'bagaż', 'D. багажа́', 'p', 'Мой {бага́ж} не пришёл.', 'Mój bagaż nie dotarł.');
  W('ручна́я кладь', 'ф', 'bagaż podręczny', '', 'o', 'Э́та су́мка – {ручна́я кладь}.', 'Ta torba to bagaż podręczny.');
  W('та́можня', 'ж', 'urząd celny, odprawa celna', 'D. та́можни', 'o', 'На {та́можне} попроси́ли откры́ть чемода́н.', 'Na odprawie celnej poproszono o otwarcie walizki.');
  W('па́спортный контро́ль', 'ф', 'kontrola paszportowa', '', 'p', 'На {па́спортном контро́ле} больша́я о́чередь.', 'Na kontroli paszportowej jest długa kolejka.');
  W('о́чередь', 'ж', 'kolejka', 'D. о́череди', 'o', 'Я стою́ в {о́череди} уже́ час.', 'Stoję w kolejce już godzinę.');
  W('заде́ржка', 'ж', 'opóźnienie', 'D. заде́ржки', 'o', 'Из-за́ пого́ды {заде́ржка} ре́йса.', 'Z powodu pogody lot jest opóźniony.');
  W('пересе́сть', 'д', 'przesiąść się', 'переся́ду · ndk. переса́живаться', 'p', 'В Стамбу́ле на́до {пересе́сть} на друго́й рейс.', 'W Stambule trzeba przesiąść się na inny lot.');
  W('Где получе́ние багажа́?', 'ф', 'gdzie jest odbiór bagażu?', '', 'p', 'Извини́те, {где получе́ние багажа́}?', 'Przepraszam, gdzie jest odbiór bagażu?');
  W('ничего́ не деклари́ровать', 'ф', 'nie mieć nic do oclenia', '', 'p', 'Мне {ничего́ не} ну́жно {деклари́ровать}.', 'Nie mam nic do oclenia.');

  L('TR', 'tr_gorod', 'Miasto, metro, taxi');
  W('проездно́й', 'ч', 'bilet okresowy', 'D. проездно́го (odmiana przymiotnikowa)', 'o', 'Я купи́л {проездно́й} на неде́лю.', 'Kupiłem bilet tygodniowy.');
  W('тра́нспортная ка́рта', 'ф', 'karta miejska (do metra i autobusów)', '', 'p', 'Пополни́те {тра́нспортную ка́рту} в ка́ссе.', 'Proszę doładować kartę miejską w kasie.');
  W('маршру́тка', 'ж', 'marszrutka, prywatny bus', 'D. маршру́тки', 'p', 'До це́нтра мо́жно дое́хать на {маршру́тке}.', 'Do centrum można dojechać marszrutką.');
  W('Останови́те здесь, пожа́луйста!', 'ф', 'proszę się tu zatrzymać!', '', 'o', 'Води́тель, {останови́те здесь, пожа́луйста}!', 'Panie kierowco, proszę się tu zatrzymać!');
  W('такси́', 'с', 'taksówka', 'nieodmienne', 't', 'Вы́зовите мне {такси́}, пожа́луйста.', 'Proszę mi wezwać taksówkę.');
  W('сда́ча', 'ж', 'reszta (pieniędzy)', 'D. сда́чи', 'o', '{Сда́чи} не на́до.', 'Reszty nie trzeba.');
  W('Ско́лько с меня́?', 'ф', 'ile płacę?', '', 'o', 'Спаси́бо. {Ско́лько с меня́}?', 'Dziękuję. Ile płacę?');
  W('Сле́дующая остано́вка …', 'ф', 'następny przystanek…', '', 'p', '«{Сле́дующая остано́вка} – Пло́щадь Револю́ции».', '„Następny przystanek – Plac Rewolucji”.');
  W('коне́чная', 'ж', 'pętla, przystanek końcowy', 'D. коне́чной (odmiana przymiotnikowa)', 'p', 'Мы выхо́дим на {коне́чной}.', 'Wysiadamy na pętli.');
  W('Осторо́жно, две́ри закрыва́ются!', 'ф', 'uwaga, drzwi się zamykają! (komunikat w metrze)', '', 'o', '«{Осторо́жно, две́ри закрыва́ются!} Сле́дующая ста́нция – Арба́тская».', '„Uwaga, drzwi się zamykają! Następna stacja – Arbatskaja”.');
  W('ста́нция', 'ж', 'stacja (metra, kolei)', 'D. ста́нции', 't', 'На како́й {ста́нции} мне вы́йти?', 'Na której stacji mam wysiąść?');
  W('про́бка', 'ж', 'korek (uliczny); korek (od butelki)', 'D. про́бки', 'p', 'Мы стоя́ли в {про́бке} час.', 'Staliśmy w korku godzinę.');
  W('Вы выхо́дите?', 'ф', 'czy pan wysiada? (prośba o przepuszczenie)', '', 'o', 'Извини́те, {вы выхо́дите} на сле́дующей?', 'Przepraszam, wysiada pan na następnym?');
  W('счётчик', 'ч', 'licznik (taksówki)', 'D. счётчика', 'o', 'Включи́те, пожа́луйста, {счётчик}.', 'Proszę włączyć licznik.');

  L('TR', 'tr_nochleg', 'Nocleg');
  W('У меня́ брони́рование.', 'ф', 'mam rezerwację', 'на фами́лию … – na nazwisko…', 'p', 'До́брый ве́чер, {у меня́ брони́рование} на фами́лию Нова́к.', 'Dobry wieczór, mam rezerwację na nazwisko Nowak.');
  W('но́мер', 'ч', 'pokój hotelowy; numer', 'D. но́мера · lm. номера́', 'p', 'Ваш {но́мер} на тре́тьем этаже́.', 'Pana pokój jest na trzecim piętrze.');
  W('одноме́стный', 'п', 'jednoosobowy', 'двухме́стный – dwuosobowy', 'p', 'У вас есть {одноме́стный} но́мер?', 'Macie pokój jednoosobowy?');
  W('за́втрак включён', 'ф', 'śniadanie w cenie', '', 'p', 'В сто́имость {за́втрак включён}?', 'Czy śniadanie jest w cenie?');
  W('администра́тор', 'ч', 'recepcjonista; administrator', 'D. администра́тора', 'p', 'Спроси́те у {администра́тора}.', 'Proszę zapytać recepcjonisty.');
  W('заселя́ться / засели́ться', 'д', 'zameldować się (w hotelu)', 'заселя́юсь · заселю́сь', 'o', 'Во ско́лько мо́жно {засели́ться}?', 'O której można się zameldować?');
  W('выселя́ться / вы́селиться', 'д', 'wymeldować się', 'выселя́юсь · вы́селюсь', 'o', 'Нам на́до {вы́селиться} до двена́дцати.', 'Musimy się wymeldować do dwunastej.');
  W('полоте́нце', 'с', 'ręcznik', 'D. полоте́нца', 'p', 'Принеси́те, пожа́луйста, ещё одно́ {полоте́нце}.', 'Proszę przynieść jeszcze jeden ręcznik.');
  W('кондиционе́р', 'ч', 'klimatyzacja; odżywka do włosów', 'D. кондиционе́ра', 'p', 'В но́мере не рабо́тает {кондиционе́р}.', 'W pokoju nie działa klimatyzacja.');
  W('Не рабо́тает …', 'ф', 'nie działa…', '', 'p', 'Извини́те, в ва́нной {не рабо́тает} душ.', 'Przepraszam, w łazience nie działa prysznic.');
  W('хо́стел', 'ч', 'hostel', 'D. хо́стела', 't', 'Мы останови́лись в {хо́стеле}.', 'Zatrzymaliśmy się w hostelu.');
  W('посу́точно', 'пр', 'na doby (wynajem)', '', 'o', 'Сдаю́ кварти́ру {посу́точно}.', 'Wynajmę mieszkanie na doby.');
  W('Како́й паро́ль от вай-фа́я?', 'ф', 'jakie jest hasło do Wi-Fi?', '', 'p', 'Скажи́те, {како́й паро́ль от вай-фа́я}?', 'Proszę powiedzieć, jakie jest hasło do Wi-Fi?');
  W('шу́мно', 'пр', 'głośno', 'ти́хо – cicho', 'o', 'В на́шем но́мере о́чень {шу́мно}.', 'W naszym pokoju jest bardzo głośno.');

  L('TR', 'tr_eda', 'Restauracja i jedzenie');
  W('Сто́лик на двои́х, пожа́луйста.', 'ф', 'stolik dla dwojga, proszę', '', 'p', 'До́брый ве́чер! {Сто́лик на двои́х, пожа́луйста}.', 'Dobry wieczór! Stolik dla dwojga, proszę.');
  W('Что вы посове́туете?', 'ф', 'co pan poleca?', '', 'p', '{Что вы посове́туете} из ме́стной ку́хни?', 'Co pan poleca z miejscowej kuchni?');
  W('У меня́ аллерги́я на …', 'ф', 'mam alergię na…', '', 'p', '{У меня́ аллерги́я на} оре́хи.', 'Mam alergię na orzechy.');
  W('Счёт, пожа́луйста.', 'ф', 'rachunek, proszę', '', 'p', 'Де́вушка, {счёт, пожа́луйста}!', 'Proszę pani, rachunek proszę!');
  W('Мо́жно ка́ртой?', 'ф', 'można kartą?', 'нали́чными – gotówką', 'p', 'А {мо́жно ка́ртой}?', 'A można kartą?');
  W('Прия́тного аппети́та!', 'ф', 'smacznego!', '', 'p', 'Вот ваш суп. {Прия́тного аппети́та}!', 'Oto pana zupa. Smacznego!');
  W('сто́ловая', 'ж', 'stołówka, tani bar', 'D. сто́ловой (odmiana przymiotnikowa)', 'p', 'В {сто́ловой} вку́сно и недо́рого.', 'W stołówce jest smacznie i niedrogo.');
  W('би́знес-ланч', 'ч', 'zestaw obiadowy (tańszy w porze lunchu)', 'D. би́знес-ла́нча', 'p', 'С двена́дцати до четырёх у нас {би́знес-ланч}.', 'Od dwunastej do czwartej mamy zestaw obiadowy.');
  W('борщ', 'ч', 'barszcz (gęsty, z mięsem i kapustą)', 'D. борща́', 'p', 'Таре́лку {борща́} со смета́ной.', 'Talerz barszczu ze śmietaną.');
  W('пельме́ни', 'мн', 'pielmieni (pierożki z mięsem)', 'D. пельме́ней', 'p', 'Мне по́рцию {пельме́ней}, пожа́луйста.', 'Dla mnie porcję pielmieni, proszę.');
  W('блины́', 'мн', 'naleśniki, bliny', 'lp. блин', 'p', 'На за́втрак – {блины́} с икро́й.', 'Na śniadanie – bliny z kawiorem.');
  W('шашлы́к', 'ч', 'szaszłyk', 'D. шашлыка́', 't', 'Попро́буйте {шашлы́к} из бара́нины.', 'Proszę spróbować szaszłyka z baraniny.');
  W('квас', 'ч', 'kwas chlebowy', 'D. ква́са', 't', 'Ле́том я пью холо́дный {квас}.', 'Latem piję zimny kwas chlebowy.');
  W('морс', 'ч', 'mors – napój z owoców leśnych', 'D. мо́рса', 'o', 'Клю́квенный {морс}, пожа́луйста.', 'Mors żurawinowy, proszę.');
  W('на вы́нос', 'ф', 'na wynos', 'здесь – na miejscu', 'o', 'Ко́фе {на вы́нос}, пожа́луйста.', 'Kawę na wynos, proszę.');
  W('без мя́са', 'ф', 'bez mięsa', 'вегетариа́нский – wegetariański', 'p', 'У вас есть что́-нибудь {без мя́са}?', 'Macie coś bez mięsa?');

  L('TR', 'tr_dengi', 'Pieniądze i zakupy');
  W('обме́н валю́ты', 'ф', 'wymiana walut, kantor', '', 'p', 'Где здесь {обме́н валю́ты}?', 'Gdzie tu jest kantor?');
  W('курс', 'ч', 'kurs (waluty); kurs (nauki)', 'D. ку́рса', 't', 'Како́й сего́дня {курс} е́вро?', 'Jaki jest dziś kurs euro?');
  W('нали́чные', 'мн', 'gotówka', 'D. нали́чных · нали́чными – gotówką', 'o', 'У меня́ нет {нали́чных}.', 'Nie mam gotówki.');
  W('банкома́т', 'ч', 'bankomat', 'D. банкома́та', 't', '{Банкома́т} не принима́ет мою́ ка́рту.', 'Bankomat nie przyjmuje mojej karty.');
  W('снима́ть / снять де́ньги', 'ф', 'wypłacać / wypłacić pieniądze', '', 'p', 'Мне ну́жно {снять де́ньги}.', 'Muszę wypłacić pieniądze.');
  W('торгова́ться', 'д', 'targować się', 'торгу́юсь, торгу́ешься', 'p', 'На ры́нке мо́жно {торгова́ться}.', 'Na targu można się targować.');
  W('сувени́р', 'ч', 'pamiątka', 'D. сувени́ра', 't', 'Я куплю́ {сувени́р} для ма́мы.', 'Kupię pamiątkę dla mamy.');
  W('матрёшка', 'ж', 'matrioszka', 'D. матрёшки', 't', 'Ско́лько сто́ит э́та {матрёшка}?', 'Ile kosztuje ta matrioszka?');
  W('чек', 'ч', 'paragon; czek', 'D. че́ка', 'p', 'Возьми́те, пожа́луйста, {чек}.', 'Proszę wziąć paragon.');
  W('приме́рочная', 'ж', 'przymierzalnia', 'D. приме́рочной (odmiana przymiotnikowa)', 'p', 'Где {приме́рочная}?', 'Gdzie jest przymierzalnia?');
  W('Э́то сли́шком до́рого.', 'ф', 'to za drogo', '', 'p', '{Э́то сли́шком до́рого}. А подеше́вле есть?', 'To za drogo. A coś tańszego jest?');
  W('Я про́сто смотрю́.', 'ф', 'tylko się rozglądam', '', 'p', 'Спаси́бо, {я про́сто смотрю́}.', 'Dziękuję, tylko się rozglądam.');

  L('TR', 'tr_pomosh', 'Zdrowie i nagłe wypadki');
  W('Мне пло́хо.', 'ф', 'źle się czuję', '', 'p', 'Извини́те, {мне пло́хо}.', 'Przepraszam, źle się czuję.');
  W('Помоги́те!', 'ф', 'pomocy!', '', 'p', '{Помоги́те}! Вы́зовите ско́рую!', 'Pomocy! Wezwijcie karetkę!');
  W('Вы́зовите врача́!', 'ф', 'proszę wezwać lekarza!', '', 'p', 'Челове́ку пло́хо, {вы́зовите врача́}!', 'Człowiek źle się czuje, proszę wezwać lekarza!');
  W('обезбо́ливающее', 'с', 'lek przeciwbólowy', 'D. обезбо́ливающего', 'o', 'У вас есть {обезбо́ливающее}?', 'Macie coś przeciwbólowego?');
  W('пла́стырь', 'ч', 'plaster', 'D. пла́стыря', 'p', 'Мне ну́жен {пла́стырь}.', 'Potrzebuję plastra.');
  W('поли́ция', 'ж', 'policja', 'D. поли́ции', 't', 'Где ближа́йший отде́л {поли́ции}?', 'Gdzie jest najbliższy komisariat policji?');
  W('Меня́ обокра́ли.', 'ф', 'okradziono mnie', '', 'o', '{Меня́ обокра́ли} в метро́.', 'Okradziono mnie w metrze.');
  W('Я потеря́л па́спорт.', 'ф', 'zgubiłem paszport', 'потеря́ла (ż.)', 'p', 'Что де́лать? {Я потеря́л па́спорт}.', 'Co robić? Zgubiłem paszport.');
  W('посо́льство', 'с', 'ambasada', 'D. посо́льства · ко́нсульство – konsulat', 'p', 'Мне на́до в По́льское {посо́льство}.', 'Muszę iść do polskiej ambasady.');
  W('бюро́ нахо́док', 'ф', 'biuro rzeczy znalezionych', '', 'o', 'Обрати́тесь в {бюро́ нахо́док}.', 'Proszę się zwrócić do biura rzeczy znalezionych.');
  W('Э́то сро́чно.', 'ф', 'to pilne', '', 'p', 'Пожа́луйста, {э́то сро́чно}.', 'Proszę, to pilne.');
  W('Я не понима́ю, напиши́те, пожа́луйста.', 'ф', 'nie rozumiem, proszę napisać', '', 'p', '{Я не понима́ю, напиши́те, пожа́луйста}, а́дрес.', 'Nie rozumiem, proszę napisać adres.');

  L('TR', 'tr_orient', 'Orientacja w mieście');
  W('Как пройти́ к …?', 'ф', 'jak dojść do…?', '', 'p', 'Скажи́те, {как пройти́ к} Эрмита́жу?', 'Proszę powiedzieć, jak dojść do Ermitażu?');
  W('Где нахо́дится …?', 'ф', 'gdzie się znajduje…?', '', 'p', '{Где нахо́дится} ближа́йшая апте́ка?', 'Gdzie znajduje się najbliższa apteka?');
  W('на углу́', 'ф', 'na rogu', '', 'p', 'Ка́сса {на углу́}.', 'Kasa jest na rogu.');
  W('напро́тив', 'пр', 'naprzeciwko', '', 'p', 'Гости́ница {напро́тив} вокза́ла.', 'Hotel jest naprzeciwko dworca.');
  W('ря́дом', 'пр', 'obok, w pobliżu', 'ря́дом с – obok', 'p', 'Метро́ совсе́м {ря́дом}.', 'Metro jest zaraz obok.');
  W('пешко́м', 'пр', 'pieszo', '', 'p', 'Мо́жно дойти́ {пешко́м}?', 'Można dojść pieszo?');
  W('перекрёсток', 'ч', 'skrzyżowanie', 'D. перекрёстка', 'p', 'На {перекрёстке} поверни́те напра́во.', 'Na skrzyżowaniu proszę skręcić w prawo.');
  W('светофо́р', 'ч', 'sygnalizacja świetlna', 'D. светофо́ра', 'o', 'Иди́те до {светофо́ра}.', 'Proszę iść do świateł.');
  W('переу́лок', 'ч', 'zaułek, przecznica', 'D. переу́лка', 'p', 'Кафе́ в ма́леньком {переу́лке}.', 'Kawiarnia jest w małym zaułku.');
  W('проспе́кт', 'ч', 'aleja, prospekt', 'D. проспе́кта', 'p', 'Мы гуля́ли по Не́вскому {проспе́кту}.', 'Spacerowaliśmy po Newskim Prospekcie.');
  W('на́бережная', 'ж', 'nabrzeże, bulwar', 'D. на́бережной (odmiana przymiotnikowa)', 'p', 'Гости́ница на {на́бережной} реки́.', 'Hotel jest na nabrzeżu rzeki.');
  W('Я заблуди́лся.', 'ф', 'zgubiłem się, zabłądziłem', 'заблуди́лась (ż.)', 'p', 'Извини́те, {я заблуди́лся}. Где мы?', 'Przepraszam, zgubiłem się. Gdzie jesteśmy?');
  W('Покажи́те на ка́рте, пожа́луйста.', 'ф', 'proszę pokazać na mapie', '', 'p', 'Я не понима́ю. {Покажи́те на ка́рте, пожа́луйста}.', 'Nie rozumiem. Proszę pokazać na mapie.');

  L('TR', 'tr_ekskursii', 'Zwiedzanie');
  W('музе́й', 'ч', 'muzeum', 'D. музе́я', 't', '{Музе́й} закры́т по понеде́льникам.', 'Muzeum jest zamknięte w poniedziałki.');
  W('входно́й биле́т', 'ф', 'bilet wstępu', '', 'p', 'Ско́лько сто́ит {входно́й биле́т}?', 'Ile kosztuje bilet wstępu?');
  W('льго́тный', 'п', 'ulgowy', 'льго́тный биле́т', 'p', 'Для студе́нтов есть {льго́тный} биле́т.', 'Dla studentów jest bilet ulgowy.');
  W('экскурсово́д', 'ч', 'przewodnik (osoba)', 'D. экскурсово́да', 'o', '{Экскурсово́д} говори́т по-англи́йски?', 'Czy przewodnik mówi po angielsku?');
  W('ау́диогид', 'ч', 'audioprzewodnik', 'D. ау́диогида', 'p', 'Мо́жно взять {ау́диогид} на по́льском?', 'Można wziąć audioprzewodnik po polsku?');
  W('часы́ рабо́ты', 'ф', 'godziny otwarcia', '', 'p', 'Каки́е у вас {часы́ рабо́ты}?', 'Jakie są godziny otwarcia?');
  W('выходно́й день', 'ф', 'dzień wolny (muzeum zamknięte)', '', 'p', 'Вто́рник – {выходно́й день}.', 'Wtorek to dzień, w którym jest zamknięte.');
  W('Фотографи́ровать запрещено́.', 'ф', 'fotografowanie zabronione', '', 'p', 'В э́том за́ле {фотографи́ровать запрещено́}.', 'W tej sali nie wolno fotografować.');
  W('собо́р', 'ч', 'sobór, katedra', 'D. собо́ра', 'p', '{Собо́р} Васи́лия Блаже́нного стои́т на Кра́сной пло́щади.', 'Sobór Wasyla Błogosławionego stoi na Placu Czerwonym.');
  W('монасты́рь', 'ч', 'klasztor, monaster', 'D. монастыря́', 'p', 'Мы е́здили в ста́рый {монасты́рь}.', 'Jeździliśmy do starego klasztoru.');
  W('кремль', 'ч', 'kreml (gród warowny w centrum miasta)', 'D. кремля́', 'p', 'В Ка́зани то́же есть {кремль}.', 'W Kazaniu też jest kreml.');
  W('уса́дьба', 'ж', 'dwór, posiadłość ziemska', 'D. уса́дьбы', 'o', 'Мы посети́ли {уса́дьбу} Толсто́го.', 'Odwiedziliśmy posiadłość Tołstoja.');
  W('кре́пость', 'ж', 'twierdza', 'D. кре́пости', 'p', 'Петропа́вловская {кре́пость} – в Петербу́рге.', 'Twierdza Pietropawłowska jest w Petersburgu.');

  L('TR', 'tr_obshchenie', 'Rozmowa i grzeczność');
  W('Отку́да вы?', 'ф', 'skąd pan(i) jest?', 'na „ty”: Отку́да ты?', 'p', 'Вы хорошо́ говори́те. {Отку́да вы}?', 'Dobrze pan mówi. Skąd pan jest?');
  W('Я из По́льши.', 'ф', 'jestem z Polski', '', 'p', '{Я из По́льши}, из Кра́кова.', 'Jestem z Polski, z Krakowa.');
  W('Говори́те, пожа́луйста, ме́дленнее.', 'ф', 'proszę mówić wolniej', '', 'p', 'Извини́те, {говори́те, пожа́луйста, ме́дленнее}.', 'Przepraszam, proszę mówić wolniej.');
  W('Повтори́те, пожа́луйста.', 'ф', 'proszę powtórzyć', '', 'p', 'Я не расслы́шал. {Повтори́те, пожа́луйста}.', 'Nie dosłyszałem. Proszę powtórzyć.');
  W('Как э́то по-ру́сски?', 'ф', 'jak to jest po rosyjsku?', '', 'p', '{Как э́то по-ру́сски}? Я забы́л сло́во.', 'Jak to jest po rosyjsku? Zapomniałem słowa.');
  W('Ничего́ стра́шного.', 'ф', 'nic nie szkodzi', '', 'o', '— Извини́те! — {Ничего́ стра́шного}.', '— Przepraszam! — Nic nie szkodzi.');
  W('Без пробле́м.', 'ф', 'nie ma problemu', '', 'p', '— Мо́жно здесь сесть? — {Без пробле́м}.', '— Można tu usiąść? — Nie ma problemu.');
  W('Дава́йте на «ты».', 'ф', 'przejdźmy na „ty”', '', 'p', 'Мы же рове́сники, {дава́йте на «ты»}.', 'Jesteśmy rówieśnikami, przejdźmy na „ty”.');
  W('С удово́льствием!', 'ф', 'z przyjemnością!', '', 'p', '— Пойдём в кино́? — {С удово́льствием}!', '— Pójdziemy do kina? — Z przyjemnością!');
  W('Счастли́вого пути́!', 'ф', 'szczęśliwej podróży!', '', 'p', 'Спаси́бо за всё и {счастли́вого пути́}!', 'Dziękuję za wszystko i szczęśliwej podróży!');
  W('Всего́ хоро́шего!', 'ф', 'wszystkiego dobrego! (na pożegnanie)', '', 'p', 'До свида́ния, {всего́ хоро́шего}!', 'Do widzenia, wszystkiego dobrego!');
  W('Бу́дьте добры́ …', 'ф', 'bardzo proszę… (uprzejma prośba)', '', 'o', '{Бу́дьте добры́}, переда́йте соль.', 'Bądź pan łaskaw, proszę podać sól.');

  /* ===================== ARCHIWUM I HISTORIA ===================== */
  L('AR', 'ar_arhiv', 'W archiwum');
  W('архи́в', 'ч', 'archiwum', 'D. архи́ва', 't', 'Я рабо́таю в {архи́ве} уже́ неде́лю.', 'Pracuję w archiwum już tydzień.');
  W('чита́льный зал', 'ф', 'czytelnia', '', 'p', '{Чита́льный зал} рабо́тает с десяти́ до пяти́.', 'Czytelnia jest czynna od dziesiątej do piątej.');
  W('архиви́ст', 'ч', 'archiwista', 'D. архиви́ста', 't', '{Архиви́ст} помо́г мне найти́ о́пись.', 'Archiwista pomógł mi znaleźć inwentarz.');
  W('фонд', 'ч', 'zespół archiwalny (fond); fundusz', 'D. фо́нда · skrót: ф.', 'p', 'Докуме́нты храня́тся в {фо́нде} губе́рнского правле́ния.', 'Dokumenty są przechowywane w zespole rządu gubernialnego.');
  W('о́пись', 'ж', 'inwentarz, spis (seria w zespole)', 'D. о́писи · skrót: оп.', 'o', 'В {о́писи} два ты́сячи дел.', 'W inwentarzu jest dwa tysiące jednostek.');
  W('де́ло', 'с', 'jednostka archiwalna, teczka (sprawa)', 'D. де́ла · lm. дела́ · skrót: д.', 'f', 'Я заказа́л пять {дел} из э́той о́писи.', 'Zamówiłem pięć teczek z tego inwentarza.');
  W('лист', 'ч', 'karta (archiwalna), arkusz; liść', 'D. листа́ · skrót: л. · об. – verso', 'p', 'Ну́жная за́пись на тре́тьем {листе́}.', 'Potrzebny zapis jest na trzeciej karcie.');
  W('шифр', 'ч', 'sygnatura (archiwalna); szyfr', 'D. ши́фра', 'p', 'Укажи́те по́лный архи́вный {шифр}.', 'Proszę podać pełną sygnaturę archiwalną.');
  W('едини́ца хране́ния', 'ф', 'jednostka archiwalna', 'skrót: ед. хр.', 'p', 'В фо́нде три́ста {едини́ц хране́ния}.', 'W zespole jest trzysta jednostek archiwalnych.');
  W('путеводи́тель', 'ч', 'przewodnik (po zasobie archiwum); przewodnik turystyczny (książka)', 'D. путеводи́теля', 'o', 'Снача́ла посмотри́те {путеводи́тель} по фо́ндам.', 'Najpierw proszę przejrzeć przewodnik po zasobie.');
  W('тре́бование', 'с', 'rewers, zamówienie (akt do czytelni)', 'D. тре́бования', 'o', 'Запо́лните {тре́бование} на вы́дачу дел.', 'Proszę wypełnić rewers na wydanie akt.');
  W('по́длинник', 'ч', 'oryginał', 'D. по́длинника', 'o', 'Нам вы́дали не ко́пию, а {по́длинник}.', 'Wydano nam nie kopię, tylko oryginał.');
  W('ко́пия', 'ж', 'kopia', 'D. ко́пии · заве́ренная ко́пия – uwierzytelniona', 't', 'Мо́жно заказа́ть {ко́пию} э́того листа́?', 'Można zamówić kopię tej karty?');
  W('до́пуск', 'ч', 'dopuszczenie, zgoda na dostęp', 'D. до́пуска', 'p', 'Для рабо́ты с э́тим фо́ндом ну́жен {до́пуск}.', 'Do pracy z tym zespołem potrzebna jest zgoda.');
  W('рассекре́чивать / рассекре́тить', 'д', 'odtajniać / odtajnić', 'рассекре́чиваю · рассекре́чу', 'p', 'Докуме́нты {рассекре́тили} то́лько в девяно́стые.', 'Dokumenty odtajniono dopiero w latach dziewięćdziesiątych.');
  W('сканко́пия', 'ж', 'skan, kopia cyfrowa', 'D. сканко́пии', 'p', 'Архи́в присыла́ет {сканко́пии} по электро́нной по́чте.', 'Archiwum przesyła skany pocztą elektroniczną.');

  L('AR', 'ar_dokumenty', 'Rodzaje dokumentów');
  W('гра́мота', 'ж', 'dokument, przywilej, dyplom; (st.) list', 'D. гра́моты · берестяна́я гра́мота – list na korze brzozowej', 'p', 'Ца́рская {гра́мота} подтвержда́ла права́ го́рода.', 'Carski dokument potwierdzał prawa miasta.');
  W('ука́з', 'ч', 'ukaz, dekret', 'D. ука́за', 'p', 'Импера́тор подписа́л {ука́з} о сво́боде крестья́н.', 'Cesarz podpisał ukaz o wolności chłopów.');
  W('манифе́ст', 'ч', 'manifest', 'D. манифе́ста', 't', 'Ца́рский {манифе́ст} объяви́ли в це́рквах.', 'Carski manifest ogłoszono w cerkwiach.');
  W('донесе́ние', 'с', 'meldunek, raport (np. wywiadu, władz)', 'D. донесе́ния', 'o', 'Губерна́тор отпра́вил {донесе́ние} в Петербу́рг.', 'Gubernator wysłał meldunek do Petersburga.');
  W('ра́порт', 'ч', 'raport (służbowy, wojskowy)', 'D. ра́порта', 't', 'В {ра́порте} офице́р опи́сывает бой.', 'W raporcie oficer opisuje bitwę.');
  W('проше́ние', 'с', 'prośba, podanie, petycja', 'D. проше́ния', 'p', 'Вдова́ пода́ла {проше́ние} о пе́нсии.', 'Wdowa złożyła podanie o rentę.');
  W('протоко́л допро́са', 'ф', 'protokół przesłuchania', '', 'p', 'В де́ле сохрани́лся {протоко́л допро́са}.', 'W teczce zachował się protokół przesłuchania.');
  W('перепи́ска', 'ж', 'korespondencja', 'D. перепи́ски', 'p', 'Его́ {перепи́ска} с ма́терью опублико́вана.', 'Jego korespondencja z matką została opublikowana.');
  W('рукопи́сь', 'ж', 'rękopis', 'D. рукопи́си', 'p', '{Рукопи́сь} рома́на храни́тся в архи́ве.', 'Rękopis powieści jest przechowywany w archiwum.');
  W('по́дпись', 'ж', 'podpis', 'D. по́дписи', 'p', 'Под докуме́нтом стои́т {по́дпись} мини́стра.', 'Pod dokumentem widnieje podpis ministra.');
  W('печа́ть', 'ж', 'pieczęć; druk, prasa', 'D. печа́ти', 'p', 'На гра́моте сохрани́лась воскова́я {печа́ть}.', 'Na dokumencie zachowała się woskowa pieczęć.');
  W('ле́топись', 'ж', 'latopis, kronika', 'D. ле́тописи', 'p', '«По́весть временны́х лет» – древне́йшая {ле́топись}.', '„Powieść minionych lat” to najstarszy latopis.');
  W('метри́ческая кни́га', 'ф', 'księga metrykalna (urodzeń, ślubów, zgonów)', '', 'p', 'За́пись о рожде́нии нашли́ в {метри́ческой кни́ге}.', 'Akt urodzenia znaleziono w księdze metrykalnej.');
  W('ревизска́я ска́зка', 'ф', 'rewizja (spis ludności podatkowej, XVIII–XIX w.)', '', 'o', 'В {ревизско́й ска́зке} перечи́слены все крестья́не дере́вни.', 'W rewizji wymieniono wszystkich chłopów wsi.');
  W('пе́репись', 'ж', 'spis (ludności)', 'D. пе́реписи · пе́репись населе́ния', 'p', 'Пе́рвая всео́бщая {пе́репись} прошла́ в 1897 году́.', 'Pierwszy powszechny spis ludności odbył się w 1897 roku.');
  W('мемуа́ры', 'мн', 'pamiętniki, wspomnienia', 'D. мемуа́ров', 'p', 'Генера́л написа́л {мемуа́ры} в эмигра́ции.', 'Generał napisał wspomnienia na emigracji.');

  L('AR', 'ar_paleografia', 'Stare teksty i daty');
  W('дорефо́рменная орфогра́фия', 'ф', 'ortografia sprzed reformy 1918 r.', '', 'p', 'Кни́га напеча́тана в {дорефо́рменной орфогра́фии}.', 'Książka jest wydrukowana w ortografii sprzed reformy.');
  W('ять', 'ж', 'jać (ѣ) – dawna litera, czytana jak е', 'D. ятя́', 'o', 'Бу́ква {ять} пи́шется в сло́ве «хлѣбъ».', 'Literę jać pisze się w słowie „chleb”.');
  W('ер', 'ч', 'jer (ъ) – w starej pisowni na końcu wyrazów po spółgłosce', 'D. ера́', 'o', 'Ра́ньше {ер} писа́ли в конце́ сло́ва: «домъ».', 'Dawniej jer pisano na końcu wyrazu: „domъ”.');
  W('и десятери́чное', 'ф', 'і – „i dziesiętne”, dawna litera przed samogłoską', '', 'o', 'В сло́ве «Россія» пи́шется {и десятери́чное}.', 'W słowie „Rossija” pisze się „i dziesiętne”.');
  W('скоро́пись', 'ж', 'skoropis (szybkie pismo kancelaryjne XVI–XVIII w.)', 'D. скоро́писи', 'o', 'Докуме́нт XVII ве́ка напи́сан {скоро́писью}.', 'Dokument z XVII wieku jest napisany skoropisem.');
  W('по́черк', 'ч', 'charakter pisma', 'D. по́черка', 'o', 'У писаря́ неразбо́рчивый {по́черк}.', 'Pisarz ma nieczytelny charakter pisma.');
  W('неразбо́рчиво', 'пр', 'nieczytelnie', '', 'o', 'Фами́лия напи́сана {неразбо́рчиво}.', 'Nazwisko jest napisane nieczytelnie.');
  W('ти́тло', 'с', 'titło (znak skrótu nad wyrazem)', 'D. ти́тла', 'o', 'Под {ти́тлом} пропу́щены бу́квы.', 'Pod titłem opuszczono litery.');
  W('по ста́рому сти́лю', 'ф', 'według starego stylu (kalendarz juliański)', 'по но́вому сти́лю – gregoriański', 'p', 'Да́та ука́зана {по ста́рому сти́лю}.', 'Data jest podana według starego stylu.');
  W('юлиа́нский календа́рь', 'ф', 'kalendarz juliański', '', 't', 'До 1918 го́да в Росси́и де́йствовал {юлиа́нский календа́рь}.', 'Do 1918 roku w Rosji obowiązywał kalendarz juliański.');
  W('сокраще́ние', 'с', 'skrót', 'D. сокраще́ния', 'o', 'Расшифру́йте {сокраще́ние} «ед. хр.».', 'Proszę rozwinąć skrót „ed. chr.”.');
  W('расшифро́вывать / расшифрова́ть', 'д', 'odczytywać, rozwijać (skrót); deszyfrować', 'расшифро́вываю · расшифру́ю', 'p', 'Мне не удаётся {расшифрова́ть} э́то сло́во.', 'Nie udaje mi się odczytać tego słowa.');

  L('AR', 'ar_imperiya', 'Imperium: urzędy i stany');
  W('губе́рния', 'ж', 'gubernia', 'D. губе́рнии', 'p', 'Ви́ленская {губе́рния} входи́ла в Се́веро-За́падный край.', 'Gubernia wileńska wchodziła w skład Kraju Północno-Zachodniego.');
  W('уе́зд', 'ч', 'powiat (ujezd)', 'D. уе́зда', 'o', 'Име́ние находи́лось в Пи́нском {уе́зде}.', 'Majątek znajdował się w powiecie pińskim.');
  W('во́лость', 'ж', 'gmina (wołość)', 'D. во́лости', 'p', 'Крестья́не {во́лости} вы́брали старшину́.', 'Chłopi gminy wybrali wójta.');
  W('губерна́тор', 'ч', 'gubernator', 'D. губерна́тора · генера́л-губерна́тор', 'p', '{Губерна́тор} доложи́л о волне́ниях.', 'Gubernator zameldował o rozruchach.');
  W('наме́стник', 'ч', 'namiestnik', 'D. наме́стника', 'p', '{Наме́стник} Ца́рства По́льского жил в Варша́ве.', 'Namiestnik Królestwa Polskiego mieszkał w Warszawie.');
  W('чино́вник', 'ч', 'urzędnik', 'D. чино́вника', 'p', 'Ме́лкий {чино́вник} – геро́й мно́гих расска́зов Го́голя.', 'Drobny urzędnik to bohater wielu opowiadań Gogola.');
  W('та́бель о ра́нгах', 'ф', 'tabela rang (hierarchia urzędnicza od 1722 r.)', '', 'o', '{Та́бель о ра́нгах} ввёл Пётр I.', 'Tabelę rang wprowadził Piotr I.');
  W('дворяни́н', 'ч', 'szlachcic', 'D. дворяни́на · lm. дворя́не · дворя́нство', 'p', 'Его́ пра́дед был {дворяни́ном}.', 'Jego pradziadek był szlachcicem.');
  W('купе́ц', 'ч', 'kupiec', 'D. купца́ · купе́чество – kupiectwo', 'p', '{Купе́ц} пе́рвой ги́льдии вёл торго́влю с Кита́ем.', 'Kupiec pierwszej gildii prowadził handel z Chinami.');
  W('меща́нин', 'ч', 'mieszczanin', 'D. меща́нина · lm. меща́не', 'p', 'В ме́трике он запи́сан как {меща́нин}.', 'W metryce jest zapisany jako mieszczanin.');
  W('крестья́нин', 'ч', 'chłop', 'D. крестья́нина · lm. крестья́не', 'p', 'Ка́ждый {крестья́нин} плати́л поду́шную пода́ть.', 'Każdy chłop płacił podatek pogłówny.');
  W('поме́щик', 'ч', 'ziemianin, właściciel majątku', 'D. поме́щика', 'p', '{Поме́щик} владе́л тремя́ деревня́ми.', 'Ziemianin posiadał trzy wsie.');
  W('духове́нство', 'с', 'duchowieństwo', 'D. духове́нства', 'p', 'Правосла́вное {духове́нство} вело́ метри́ческие кни́ги.', 'Duchowieństwo prawosławne prowadziło księgi metrykalne.');
  W('зе́мство', 'с', 'ziemstwo (samorząd terytorialny od 1864 r.)', 'D. зе́мства', 'o', '{Зе́мство} открыва́ло шко́лы и больни́цы.', 'Ziemstwo otwierało szkoły i szpitale.');

  L('AR', 'ar_polsha', 'Polska i Rosja');
  W('разде́лы Ре́чи Посполи́той', 'ф', 'rozbiory Rzeczypospolitej', '', 'p', 'По́сле {разде́лов Ре́чи Посполи́той} Литва́ отошла́ к Росси́и.', 'Po rozbiorach Rzeczypospolitej Litwa przypadła Rosji.');
  W('Ца́рство По́льское', 'ф', 'Królestwo Polskie (Kongresowe)', '', 'p', '{Ца́рство По́льское} со́здано в 1815 году́.', 'Królestwo Polskie utworzono w 1815 roku.');
  W('Янва́рское восста́ние', 'ф', 'powstanie styczniowe (1863–1864)', '', 'p', 'По́сле {Янва́рского восста́ния} уси́лилась русифика́ция.', 'Po powstaniu styczniowym nasiliła się rusyfikacja.');
  W('повста́нец', 'ч', 'powstaniec', 'D. повста́нца', 'p', '{Повста́нца} сосла́ли в Сиби́рь.', 'Powstańca zesłano na Syberię.');
  W('ссы́лка', 'ж', 'zesłanie; odsyłacz, przypis, link', 'D. ссы́лки · ссы́льный – zesłaniec', 'o', 'Его́ пригово́рили к {ссы́лке} на поселе́ние.', 'Skazano go na zesłanie na osiedlenie.');
  W('ка́торга', 'ж', 'katorga, ciężkie roboty', 'D. ка́торги', 'p', 'Он провёл де́сять лет на {ка́торге}.', 'Spędził dziesięć lat na katordze.');
  W('конфиска́ция', 'ж', 'konfiskata', 'D. конфиска́ции', 't', 'Име́ние подве́рглось {конфиска́ции}.', 'Majątek uległ konfiskacie.');
  W('русифика́ция', 'ж', 'rusyfikacja', 'D. русифика́ции', 't', 'Поли́тика {русифика́ции} косну́лась школ.', 'Polityka rusyfikacji objęła szkoły.');
  W('по́льский вопро́с', 'ф', 'sprawa polska', '', 'p', '{По́льский вопро́с} обсужда́ли на Ве́нском конгре́ссе.', 'Sprawę polską omawiano na kongresie wiedeńskim.');
  W('Каты́нское преступле́ние', 'ф', 'zbrodnia katyńska (1940)', '', 'p', '{Каты́нское преступле́ние} СССР призна́л лишь в 1990 году́.', 'ZSRR przyznał się do zbrodni katyńskiej dopiero w 1990 roku.');
  W('депорта́ция', 'ж', 'deportacja', 'D. депорта́ции', 't', '{Депорта́ции} 1940–1941 годо́в косну́лись со́тен ты́сяч поля́ков.', 'Deportacje lat 1940–1941 dotknęły setki tysięcy Polaków.');
  W('спецпоселе́ние', 'с', 'specjalne osiedle (miejsce zesłania)', 'D. спецпоселе́ния · спецпереселе́нец', 'o', 'Семью́ отпра́вили на {спецпоселе́ние} в Казахста́н.', 'Rodzinę wysłano do specjalnego osiedla w Kazachstanie.');

  L('AR', 'ar_sssr', 'ZSRR: instytucje i represje');
  W('доно́с', 'ч', 'donos', 'D. доно́са', 'p', 'Его́ арестова́ли по {доно́су} сосе́да.', 'Aresztowano go na podstawie donosu sąsiada.');
  W('сле́дственное де́ло', 'ф', 'akta śledztwa', '', 'p', 'Внук прочита́л {сле́дственное де́ло} де́да.', 'Wnuk przeczytał akta śledztwa dziadka.');
  W('обвине́ние', 'с', 'oskarżenie, zarzut', 'D. обвине́ния', 'p', '{Обвине́ние} в шпиона́же бы́ло ло́жным.', 'Oskarżenie o szpiegostwo było fałszywe.');
  W('расстре́л', 'ч', 'rozstrzelanie', 'D. расстре́ла', 'o', 'Его́ приговори́ли к {расстре́лу} в 1937 году́.', 'Skazano go na rozstrzelanie w 1937 roku.');
  W('ла́герь', 'ч', 'obóz', 'D. ла́геря · lm. лагеря́', 'p', 'Он прошёл че́рез {лагеря́} ГУЛА́Га.', 'Przeszedł przez obozy Gułagu.');
  W('реабилита́ция', 'ж', 'rehabilitacja (pośmiertne uniewinnienie)', 'D. реабилита́ции', 't', 'Спра́вку о {реабилита́ции} вы́дали в 1956 году́.', 'Zaświadczenie o rehabilitacji wydano w 1956 roku.');
  W('колхо́з', 'ч', 'kołchoz', 'D. колхо́за', 't', 'Крестья́н заставля́ли вступа́ть в {колхо́з}.', 'Chłopów zmuszano do wstępowania do kołchozu.');
  W('раскула́чивание', 'с', 'rozkułaczanie', 'D. раскула́чивания', 'o', '{Раскула́чивание} уничто́жило зажи́точное крестья́нство.', 'Rozkułaczanie zniszczyło zamożne chłopstwo.');
  W('пропи́ска', 'ж', 'meldunek (w ZSRR)', 'D. пропи́ски', 'p', 'Без {пропи́ски} нельзя́ бы́ло устро́иться на рабо́ту.', 'Bez meldunku nie można było dostać pracy.');
  W('самизда́т', 'ч', 'samizdat (drugi obieg)', 'D. самизда́та', 'p', 'Кни́гу чита́ли в {самизда́те}.', 'Książkę czytano w drugim obiegu.');
  W('диссиде́нт', 'ч', 'dysydent', 'D. диссиде́нта', 't', 'Акаде́мик Са́харов был изве́стным {диссиде́нтом}.', 'Akademik Sacharow był znanym dysydentem.');
  W('Мемориа́л', 'ч', 'Memoriał (stowarzyszenie badające represje)', 'D. Мемориа́ла', 't', 'Да́нные о репресси́рованных собира́л «{Мемориа́л}».', 'Dane o represjonowanych zbierał „Memoriał”.');

  L('AR', 'ar_istorik', 'Warsztat historyka');
  W('истори́ческий исто́чник', 'ф', 'źródło historyczne', '', 'p', 'Ле́топись – ва́жный {истори́ческий исто́чник}.', 'Latopis to ważne źródło historyczne.');
  W('историогра́фия', 'ж', 'historiografia', 'D. историогра́фии', 't', 'В ру́сской {историогра́фии} э́тот вопро́с спо́рный.', 'W historiografii rosyjskiej ta kwestia jest sporna.');
  W('сно́ска', 'ж', 'przypis', 'D. сно́ски', 'o', 'Укажи́те архи́вный шифр в {сно́ске}.', 'Proszę podać sygnaturę archiwalną w przypisie.');
  W('моногра́фия', 'ж', 'monografia', 'D. моногра́фии', 't', 'Он написа́л {моногра́фию} о ссы́льных поля́ках.', 'Napisał monografię o polskich zesłańcach.');
  W('диссерта́ция', 'ж', 'rozprawa (doktorska); praca naukowa', 'D. диссерта́ции', 'p', 'Её {диссерта́ция} посвящена́ Сиби́ри.', 'Jej rozprawa jest poświęcona Syberii.');
  W('публика́ция исто́чников', 'ф', 'edycja źródeł', '', 'p', 'Вы́шла но́вая {публика́ция исто́чников} по исто́рии Каты́ни.', 'Ukazała się nowa edycja źródeł do historii Katynia.');
  W('достове́рность', 'ж', 'wiarygodność', 'D. достове́рности', 'o', '{Достове́рность} э́того свиде́тельства сомни́тельна.', 'Wiarygodność tego świadectwa jest wątpliwa.');
  W('подде́лка', 'ж', 'fałszerstwo, falsyfikat', 'D. подде́лки', 'p', 'Экспе́рты доказа́ли, что гра́мота – {подде́лка}.', 'Eksperci dowiedli, że dokument jest falsyfikatem.');
  W('датиро́вка', 'ж', 'datowanie', 'D. датиро́вки', 'p', '{Датиро́вка} ру́кописи вызыва́ет сомне́ния.', 'Datowanie rękopisu budzi wątpliwości.');
  W('свиде́тельство', 'с', 'świadectwo, relacja; zaświadczenie', 'D. свиде́тельства', 'p', 'Мы собира́ем {свиде́тельства} очеви́дцев.', 'Zbieramy relacje naocznych świadków.');
  W('очеви́дец', 'ч', 'naoczny świadek', 'D. очеви́дца', 'p', 'Воспомина́ния {очеви́дца} опублико́ваны.', 'Wspomnienia naocznego świadka zostały opublikowane.');
  W('у́стная исто́рия', 'ф', 'historia mówiona', '', 'p', 'Прое́кт {у́стной исто́рии} запи́сывает интервью́ ветера́нов.', 'Projekt historii mówionej nagrywa wywiady z weteranami.');
})();
