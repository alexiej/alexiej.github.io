---
sidebar: auto
title: Kaggle Wyzwanie - Titanic
lang: pl-PL
---

# Kaggle Wyzwanie - Titanic

##  Wstęp

Witam wszystkich chętnych którzy chcieli by spróbować wyzwania Kaggle - Titanic. Jest to pierwsze zadanie z którym stykają się wszyscy na Kaggle zaraz po rejestracji.

Wyzwanie jest zaplanowane na 2 tygodnie od poniedziałku (09-07-2018) do następnego poniedziałku (23-07-2018). Jeśli termin już minął ta stroną będzie cały czas na Github tak żeby mieć możliwość przystąpić później.

Będzie on zarówno w R jak i Python tak żeby każdy nie był pokrzywdzony. Jest on podstawowy, dlatego można pytać o wszystko (od instalacji pythona, co to jest pip, po statystykę, itp..).

Planuje żeby w ciągu tygodnia robić 3 omówienia (w poniedziałek, środę i piątek) rozłożone na dwa tygodnie tak żeby każdy mógł mieć czas na przemyślenia, napisanie kodu i jeszcze pytania.

1. (poniedziałek) Opis problemu, Importowanie danych i podstawowe informacje
2. (środa) Wykresy i wyszukiwanie danych
3. (piątek) Wypełnianie pustych danych i normalizacja Danych
4. (poniedziałek) Klasyfikacja - algorytm
5. (środa) Poprawianie Modelu
6. (piątek) Podsumowanie

Podczas każdego omówienia postaram się opisać (github) co się dzieje i podać rozwiązanie dla każdego języka. W razie jakilkowiek pytań będzie można zadawać na slacku. Prosze mieć na uwadzę że też się uczę części rzeczy (zwłaszcza R), tak więc jak będzie jakiś błąd, niezrozumienie z mojej strony albo uwagi, proszę mnie o tym poinformować a ja to postaram się poprawić :)

Wyzwanie można śledzić na grupie: https://www.facebook.com/groups/1733307126704677/

Osoby chętne, proszę dołączyć do slacka:  https://kagglepolska.slack.com  (link na grupie)
A pytania można zadawać na grupie pod #titanic

Przed warto sobie zainstalować środowiska. Do pythona polecam Anaconda które zawiera Pythona oraz edytor Spyder:

[https://www.anaconda.com/download/](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.anaconda.com%2Fdownload%2F&h=AT3KBJmnbNForgOyaBAthdtEwHokEBcN5wxhecOaP6KHrogmjIahWy5QBvC4EQrI4zT_Hn-gux-DYbjT5GdcrRikdd1G-dSwlIoSoD2moZzk9goafB4NGDL3m9YJjespZhktWV1t-Xv--ij3KT0cpm62)

Do R 
Edytor: Rstudio <https://www.rstudio.com/products/rstudio/download/>
oraz interpretator: Microsoft R Open
[https://mran.microsoft.com/open](https://l.facebook.com/l.php?u=https%3A%2F%2Fmran.microsoft.com%2Fopen&h=AT2yK6gYzYee0aJb_MNB13kBtZsBowTu2_O0sXZuGF7sn0rUwGD2hBEe1-MZkXgCYwsdh1m3HxZ3BzYtVHgzQoQO_Ba6-MwwfnZhMLOkYFf4W9y5Nu4g2nqeId-jk6QmwA3X_DKB5zOJyhCVFM03quuV)

Link do Titanic na kaggle:
[https://www.kaggle.com/c/titanic](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.kaggle.com%2Fc%2Ftitanic&h=AT2raqxH5o2kx34UcBIb47BhFisW4MaJQlXqEfze91zsu8UjNqyx5wOVzLWE7PJTjF2pMD6XwaQ3IegwUZ72RHuMPDNy57d-aRDREXwfMl3ULS4hOsCTT6FO2bqTEzyptCDQd_tU_iWk_kK2T48rt7C4)

Zaczynamy od poniedziałku, i życzę powodzenia :)

## Titanic, Wstęp



Jak można wyczytać, głównym zamiarem jest sklasyfikowanie pasażerów pod względem przeżycia podczas zatonięcia Tytanika które to miało miejsce w 15 kwietnia 1912. Jest to przykład binarnej klasyfikacji w której na podstawie danych wejściowych  (takich jak klasa, numer biletu, płeć itp..) mamy wywnioskować czy osoba ta przeżyła wypadek.

Nie licząc żę był to zwykły łut szczescia można wyobrażić sobie kilka czynników które rzeczywiście miały na to wpływ.
Do nich można zaliczyć:

* Jak blisko ich kajuty były łodzi ratunkowych
* W jakim wieku byli, np: młodsze osoby albo kobiety z dziećmi miały większe prawdopobieństwo dostania się do kajuty.
* Osoby mające droższe bilety a więc wyżej sytuowane mogli mieć jakieś przywileje

I tutaj to badanie ma za zadanie wyliczyć to powiązanie.
Na początku warto zobaczyć sobie dane wejściowe. Na wstępie mamy takie oto kolumny:

| Variable           |                                                              |
| ------------------ | ------------------------------------------------------------ |
| Zmienna (Variable) | Opis                                                         |
| Survived           | Czy dana osoba przeżyła. 0 - Nie, 1 - Tak. Ta wartość pojawia się tylko w test |
| PClass             | Klasa socio-economic (SEC), 1- Upper, 2 - Middle, 3rd - Lower |
| Name               | Imi i nazwisko oddzielone przecinkiem                        |
| Sex                | Płeć, ‘male’ - męzczyzna , ‘female’- kobieta                 |
| Age                | wiek                                                         |
| SibSp              | (siblink) liczba rodzeństwa (brat i siostra) / (spouses) małżonków na pokładzie |
| parchl             | iczba rodziców / dziecie na pokładzie                        |
| fare               | opłata za bilet                                              |
| cabin              | numer kabiny                                                 |
| embarked           | Port źródłowy /załadunkowy (C - Cherbourk, Q - Quenstown, S - Southampton) |

Pełny wygląd klas można zobaczyć na stronie:
[https://www.encyclopedia-titanica.org/class-gender-titanic-disaster-1912~chapter-2.html](https://www.encyclopedia-titanica.org/class-gender-titanic-disaster-1912~chapter-2.html)

Przeglądając pobieżnie można zobaczyć że nie wszystkie dane są wypełnione, więc trzeba je  w pewnym momencie wypełnić.

##  Podstawowe operacje

Zaczynając prace z Kaggle mamy tak naprawdę 3 możliwości:

1. Możemy ściągnąć dane train i test i działać na nim lokalnie
2. Możemy utworzyć Kernel i wysłać skrypt który rozwiąże zadanie
3. Możemy utworzyć Kernel i za pomocą edytora “Jupyter Notebooks”nie tylko wykonać wszystkie operacje ale także dodać w wygodnym edytorze MarkDown własne przypisy czy wykresy.

Ja wybrałem Markdown bo można na bieżąco kontrolować co się dzieje.
Jeśli chcesz utworzyć nowy kernel na stronie [https://www.kaggle.com/c/titanic](https://www.kaggle.com/c/titanic) wybieramy Kernels -> New Kernel -> Notebook u góry po prawej możemy zmienić język z Python (który jest domyślny) na R.

##  Python/Podstawowe Operacje

Do podstawowych operacji pandas dobrze popatrzeć na cheatsheet:

[http://pandas.pydata.org/Pandas_Cheat_Sheet.pdf](http://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)

Krótkie porównanie znalezione na facebook-u.

![No automatic alt text available.](../assets/img/33869776_1049764301843195_3825253901389529088_n.jpg) 

###  Biblioteki

Pierwsze co pozostaje to zaimportowanie najważniejszych bibliotek które przydadzą się do operacji na danych.

```R
import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

from subprocess import check_output
print(check_output(["ls", "../input"]).decode("utf8"))
```

- numpy - podstawowy biblioteka do algebry liniowej
- pandas - biblioteka dzięki której można używać powszechne struktury data.frame bardzo pomocne przy obliczeniach

### pd.read_csv(name,header, index_col)

Do importu danych służy polecenia pd.read_csv() z biblioteki pandas. Bibliotek ta zwraca nam automatycznie obiekt DataFrame. Ten obiekt po pierwsze jest wygodniejszy do obliczeń typowych danych które są w formie dwuwymiarowej (wiersze i kolumny) a po drugie szybszy.

* header - 0 wskazuje że zerowy wiersze będzie nam wskazywał nazwy kolumn
* index_col - Wskazuje gdzie się znajduje kolumna z id (tutaj PassengerID)

```python
# Load the data, we set that index_col is the first column, therefore there will be standard index start from 0 for each data.
train_df = pd.read_csv('../input/train.csv', header=0,index_col=0)
test_df = pd.read_csv('../input/test.csv', header=0,index_col=0)
```

### pd.concat(a,b)

To polecenie na początku łączy nam oba obiekty po wierszach. Analizę danych powinniśmy robić na całym obszarze, bo może się zdarzyć że np: w train kolumna ma wszystkie pola wypełnione ale w tests już nie.

```Python
full = pd.concat([train_df , test_df]) # concatenate two dataframes
```

### df.info()

Pokazuje podstawowe informacje obiektu, pozwala się rozejrzeć co za dane są w posczególnych kolumnach.

```Python
full.info()   # info about dataframe
```

```Python
<class 'pandas.core.frame.DataFrame'>
Int64Index: 1309 entries, 1 to 1309
Data columns (total 11 columns):
Age         1046 non-null float64
Cabin       295 non-null object
Embarked    1307 non-null object
Fare        1308 non-null float64
Name        1309 non-null object
Parch       1309 non-null int64
Pclass      1309 non-null int64
Sex         1309 non-null object
SibSp       1309 non-null int64
Survived    891 non-null float64
Ticket      1309 non-null object
dtypes: float64(3), int64(3), object(5)
memory usage: 122.7+ KB
```

* Ponieważ 1309 to jest łączna liczba wierszy, to tam gdzie znajduje się ich mniej (poza Survived które nie występuje w test_df) znajdują się wartości które nie są wypełniona. 

### df.head()

Pokazuje pierwsze wiersze danych i można się spostrzec że Cabin, Embarked, Name, Sex oraz Ticket które .info() są jako object tak naprawdę to tekst. 

```Python
full.head()
```

![1531139493410](../assets/img/1531139493410.png)

### Wybieranie kolumn

```R
# import matplotlib.pyplot as plt
    
full[["Age","Pclass"]][5:30]
```

![1531308637239](../assets/img/1531308637239.png)



### Filtrowanie

Przykłady wybierania wierszy:

* Jak w pythonie do każdej listy można wybierać przez indeks

```R
full[:10] # Pierwszych 10 elementów
```

![1531140219285](../assets/img/1531140219285.png)

* 5 ostatnich elementów 

```Python
full[-5:] 
```

![1531140338132](../assets/img/1531140338132.png)

* Konkretnie od konkretnego wiersza idąc co 2, 891 - to pierwszy wiersz z bazy test_df

```Python
SURV = 891
full[SURV:SURV+10:2] # Like in regular Python you can get to the Item by Index
```

* filtrowanie po kolumnie

```R
full[(full['Age'] > 5.0) & (full['Age'] < 7.0 ) ] #filter data by columns
```

![1531140453333](../assets/img/1531140453333.png)

* Filtrowanie po tekście

```python
full[(full['Cabin'].str.contains('B2',na=False)) ] #filter data by columns
```

![1531140486070](../assets/img/1531140486070.png)

* filtrowanie po pustych wartościach

```Python
 full[full['Embarked'].isnull()]
```

![1531470776132](../assets/img/1531470776132.png)

### df.isnull()

Najważniejsze jest znalezielenie pustych wierszy. .isnull() zwraca nam cały zbiór z wartościami False,True czy jest pusta, .sum grupuje je dla wszystkich kolumn.

```Python
full.isnull().sum()  # Check with alues are empty
```

```R
Age             263
Cabin          1014
Embarked          2
Fare              1
Name              0
Parch             0
Pclass            0
Sex               0
SibSp             0
Survived        418
Ticket            0
CabinType         0
_CabinType        0
CabinType2        0
_CabinType2       0
dtype: int64

```

* Wartości Age,Cabin, Embarked, Fare, trzeba będzie uzupełnić danymi przed dalszym przetwarzaniem
* Istnieje także wykres który pokazuje puste wartości

```R
#Missing values in the plot
import missingno as msno
msno.matrix(full)
```

![1531140669235](../assets/img/1531140669235.png)

### groupby()

Dane też można grupować by zobaczyć jak wyglądają zmienne na poszczególne grupy (np: sumujemy sobie ilość osób które przeżyły w podziale na klasy i płeć)

```R
train_df.groupby(['Pclass','Sex'])['Survived'].sum() # grouping data
```

```R
Pclass  Sex   
1       female    91
        male      45
2       female    70
        male      17
3       female    72
        male      47
Name: Survived, dtype: int64
```

##  Podstawowe operacje: R

Podstawowe funkcje można znaleść w:

[https://www.rstudio.com/wp-content/uploads/2016/10/r-cheat-sheet-3.pdf](https://www.rstudio.com/wp-content/uploads/2016/10/r-cheat-sheet-3.pdf)

[https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Tidyverse+Cheat+Sheet.pdf](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Tidyverse+Cheat+Sheet.pdf)

[https://www.rstudio.com/wp-content/uploads/2015/02/data-wrangling-cheatsheet.pdf](https://www.rstudio.com/wp-content/uploads/2015/02/data-wrangling-cheatsheet.pdf)

### Biblioteki

Najpierw importujemy biblioteki

```R
library(tidyverse) # metapackage with lots of helpful functions
list.files(path = "../input")
```

* tidyverse - kolekcja paczek do data-science, zawiera w sobie już wiele potrzebnych paczek

W R podobnie jak w python podstawowym obiektem na którym operujemy jest data.frame (w książce Biecka “Przewodnik po pakiecie R” nazywane także  jako“ramki danych”) który jest 2 wymiarową tablicą z kolumnami i wierszami. W przypadku większych danych jest jeszcze struktura data.table ale dla 1309 tysiąca wierszy wystarczy zwykły data.frame. 

### read_csv()

```R
train <- read_csv('../input/train.csv')
test  <- read_csv('../input/test.csv')
```

import danych, funkcja już wie że pierwszy wiersz opisuje kolumny, nie trzeba to zaznaczać w metodzie.

### rbind()

Połączenie wierszy danych, tak żeby móc zobaczyć pełną informację o danych. Nie można łączyć danych o różnych ilościach kolumn dlatego do kolumny test$Survived dodajemy pustą informację.

```R
test$Survived <- NA
full <- rbind(train, test)
```

### str()

Podaje podstawe informacje o danych, jak typ - przykłady wartości.

```R
str(full)
```

```R
Classes ‘tbl_df’, ‘tbl’ and 'data.frame':	1309 obs. of  12 variables:
 $ PassengerId: num  1 2 3 4 5 6 7 8 9 10 ...
 $ Survived   : num  0 1 1 1 0 0 0 0 1 1 ...
 $ Pclass     : num  3 1 3 1 3 3 1 3 3 2 ...
 $ Name       : chr  "Braund, Mr. Owen Harris" "Cumings, Mrs. John Bradley (Florence Briggs Thayer)" "Heikkinen, Miss. Laina" "Futrelle, Mrs. Jacques Heath (Lily May Peel)" ...
 $ Sex        : chr  "male" "female" "female" "female" ...
 $ Age        : num  22 38 26 35 35 NA 54 2 27 14 ...
 $ SibSp      : num  1 1 0 1 0 0 0 3 0 1 ...
 $ Parch      : num  0 0 0 0 0 0 0 1 2 0 ...
 $ Ticket     : chr  "A/5 21171" "PC 17599" "STON/O2. 3101282" "113803" ...
 $ Fare       : num  7.25 71.28 7.92 53.1 8.05 ...
 $ Cabin      : chr  NA "C85" NA "C123" ...
 $ Embarked   : chr  "S" "C" "S" "S" ...
 - attr(*, "spec")=
  .. cols(
  ..   PassengerId = col_double(),
  ..   Survived = col_double(),
  ..   Pclass = col_double(),
  ..   Name = col_character(),
  ..   Sex = col_character(),
  ..   Age = col_double(),
  ..   SibSp = col_double(),
  ..   Parch = col_double(),
  ..   Ticket = col_character(),
  ..   Fare = col_double(),
  ..   Cabin = col_character(),
  ..   Embarked = col_character()
  .. )
```

### dim()

Zwraca rozmiar data.frame (wiersze i kolumny )

```R
dim(full)
nrow(full) #liczba kolumn
ncol(full) #liczba wierszy
```

```R
1309 12
```

### head()

Zwraca kilka pierwszych wierszy do rozeznania się.

```R
head(full)
```

![1531141911613](../assets/img/1531141911613.png)



### summary()

```R
summary(full)
```

Zwraca podstawowe informacje o kolumnach - jak liczba pustych wartości, wartość minimalna, maksymalna, mediana itp… Już widać że kilka kolumn ma puste wartości które to trzeba będzie uzupełnić póżniej. (NA’s)

```R
 PassengerId      Survived          Pclass          Name          
 Min.   :   1   Min.   :0.0000   Min.   :1.000   Length:1309       
 1st Qu.: 328   1st Qu.:0.0000   1st Qu.:2.000   Class :character  
 Median : 655   Median :0.0000   Median :3.000   Mode  :character  
 Mean   : 655   Mean   :0.3838   Mean   :2.295                     
 3rd Qu.: 982   3rd Qu.:1.0000   3rd Qu.:3.000                     
 Max.   :1309   Max.   :1.0000   Max.   :3.000                     
                NAs   :418                                        
     Sex                 Age            SibSp            Parch      
 Length:1309        Min.   : 0.17   Min.   :0.0000   Min.   :0.000  
 Class :character   1st Qu.:21.00   1st Qu.:0.0000   1st Qu.:0.000  
 Mode  :character   Median :28.00   Median :0.0000   Median :0.000  
                    Mean   :29.88   Mean   :0.4989   Mean   :0.385  
                    3rd Qu.:39.00   3rd Qu.:1.0000   3rd Qu.:0.000  
                    Max.   :80.00   Max.   :8.0000   Max.   :9.000  
                    NAs   :263

    Ticket               Fare            Cabin             Embarked        
 Length:1309        Min.   :  0.000   Length:1309        Length:1309       
 Class :character   1st Qu.:  7.896   Class :character   Class :character  
 Mode  :character   Median : 14.454   Mode  :character   Mode  :character  
                    Mean   : 33.295                                        
                    3rd Qu.: 31.275                                        
                    Max.   :512.329                                        
                    NAs   :1  
```

### Wybieranie kolumn

```R
full[,c("Survived","Pclass")]
```

* Lub przez select z dplyr

```r
library(dplyr)

select(full,Survived,Pclass)
```

![1531142375531](../assets/img/1531142375531.png)

### Filtrowanie

* Dane można zaznaczać przez indeksy

```R
full[1:9,]
```

![1531142283314](../assets/img/1531142283314.png)



* Do bardziej zaawansowango filtrowania po wartościach używa się biblioteki dplyr. Można używać złączeń typu AND “&”OR “|” NOT “!”

```R
library(dplyr)

filter(full, Age > 5.0 & Age < 7.0 )
```

![1531142536699](../assets/img/1531142536699.png)

* Dodatkowo można to kaskadować na kolejne wyrażenia z dplyr. W tym wypadku nie trzeba za każdym razem zaznaczać danych (full)

```R
full %>% 
	filter(Age > 5.0 & Age < 7.0 ) %>%
	select(Survived,Pclass)
```

* sprawdzanie pustych wartości

```R
full %>% 
	filter( is.na(Fare) )
```

![1531305635780](../assets/img/1531305635780.png)

* Filtrowanie po tekście używająć stringr

https://cran.r-project.org/web/packages/stringr/vignettes/stringr.html

```R
library(stringr)

full %>%
    filter( str_detect(Cabin, 'B2') )
```

![1531306666463](../assets/img/1531306666463.png)

### Grupowanie

* Do sumowania i groupowania przydaje się dplyr, tutaj wymagane jest jeszcze usunięcie pustych wartości survived ponieważ w przeciwnym wypadku pojawi się N/A w wyniku.

```R
full %>%
	drop_na(Survived) %>%
    group_by(Pclass,Sex) %>%
	summarise(Survived = sum(Survived))
```

* Można też nie używać drop_na a opcji <Badge text="na.rm=T" type="error"/> 

```R
full %>%
    group_by(Pclass,Sex) %>%
	summarise(Survived = sum(Survived, na.rm = T))
```

![1531143148049](../assets/img/1531143148049.png)

## Wykresy i wyszukiwanie danych

Tak naprawdę pod tym pojęciem chciałem napisać w jaki sposób można dodać kolumny zawierające dodatkowe informacje które kryją się w surowych danych ponieważ może się zdarzyć że:

* Jakieś informacje znajdują się w tekście a ponieważ znajdują się tam także inne informacje to algorytm nie wykryje że dana zmienna ma istotny wpływ
* Niektóre dane są zbyt rozdrobnione (np: wiek) przez co zaburzają obraz całego modelu. Przecięz podczas próby uratowania się nikt nie pytał dokładnie o wiek, więc można podzielić je na mniejsze grupy typu małe dzieci, dorośli itp..
* Część danych jest w postaci tekstowej, i trzeba je skategoryzować.

##  Dane: Python

### Kategoryzacja

* Pierwszym problemem  w danych są dane tekstowe którze trzeba skategoryzować. W tym wypadku można użyć pandas.Categorical()

```Python
full['_Sex'] = pd.Categorical(full.Sex).codes
full['_Embarked'] = pd.Categorical(full.Embarked).codes
```

W nowych kolumnach pojawią wartości 0  1

### Kategoryzacja kolumny Cabin

* Także tą kolumnę można skategoryzować. Można zauważyć że pierwsza litera może mieć jakieś znaczenie. Nie wszystkie dane są wypełnione, 

```Python
full['_CabinType'] = pd.Categorical(full['Cabin'].astype(str).str[0]).codes
```

### Korelacja

* Korelacja przydaje się do sprawdzenia zależności w kolumnach
  * Korelacja wynosząca 1.0 oznacza pełną dodanie powiązanie (Jest na przekątnych), 
  * Korelacja wynosząca -1.0 oznacza odwrotne powiązanie
  * Im bliższe 0 tym korelacja jest mniejsza

Z poniższego można wywnioskować że największy wpływ na przeżycie może mieć Pclass, \_Sex, Fare, oraz \_ CabinType. Musieliśmy wcześniej skategoryzować kolumnu ponieważ korelacji nie można sprawdzić na tekście.

```Python
cols = ['Age','_Embarked','Fare','Parch','Pclass','_Sex','SibSp','Survived','_CabinType']
full[cols].corr()
```

![1531313541410](../assets/img/1531313541410.png)

###  Tytuł - Pattern

* Warto sobie wyciągnąć tytuł z imienia i nazwiska czyli kolumny Name. Do tego przydaje się regular expression

```Python
pat = r",\s([^ .]+)\.?\s+"

full['Title'] =  full['Name'].str.extract(pat,expand=True)[0]
full.groupby('Title')['Title'].count()
```

```Python
Title
Capt          1
Col           4
Don           1
Dona          1
Dr            8
Jonkheer      1
Lady          1
Major         2
Master       61
Miss        260
Mlle          2
Mme           1
Mr          757
Mrs         197
Ms            2
Rev           8
Sir           1
the           1
Name: Title, dtype: int64
```

Najwięcej jest Miss, Master, Mr, oraz Mrs. Więc dla lepszego obrazu można zgrupować część danych.

```Python
full.loc[full['Title'].isin(['Mille','Ms','Lady']),'Title'] = 'Miss'
full.loc[full['Title'].isin(['Mme','Sir']),'Title'] = 'Mrs'
full.loc[~full['Title'].isin(['Miss','Master','Mr','Mrs']),'Title'] = 'Other' # NOT IN
full['_Title'] = pd.Categorical(full.Title).codes
full.groupby('Title')['Title'].count()
```

```Python
Title
Master     61
Miss      263
Mr        757
Mrs       199
Other      29
Name: Title, dtype: int64
```

- Od razu zmniejszyła się ilość kategorii

## Wykresy: Python

W pythonie do podstawowych wykresów głównie się używa matplotlib, seaborn oraz ggplot (bazujące na ggplot2 z R-a).

### Histogram

* Podstawowym wykresem jest histogram czyli rozłożenie wartości według częstości występowania.

```python
full['Age'].hist(); 
```

![1531308774581](../assets/img/1531308774581.png)

Od razu widać żę najwięcej jest osób w przedziale od 20 do 30 roku życia.

* Ale możemy chcieć też większy podział albo przefiltrowane na tylko te które przeżyły

```python
full[full['Survived']==1]['Age'].hist(bins=30)
```

![1531308927382](../assets/img/1531308927382.png)

* Można też nałożyć na siebie histogramy (za pomocą plt z matplotlib). Tworzymy dwa histogramy (plt_all i plt_survived), dodajemy legendę i wyświetlamy.

```Python
import matplotlib
import matplotlib.pyplot as plt

plt_all = plt.hist(full['Age'],bins = 30,  range = [0,100],label='all')
plt_survived =plt.hist(full[full['Survived']==1]['Age'], bins = 30, range = [0,100],label='Survived')

plt.legend()
plt.show()
```

![1531310603373](../assets/img/1531310603373.png)

Zauważyć można żę młodsi mają większą szansę przeżycia (pomarańczowa pokrywa połowę wartości albo większość dla od 0 do 10)

###  Boxplot

Zawiera on dużo informacji więc lepiej doczytać co oznaczają poszczególne wartości

https://www.wellbeingatschool.org.nz/information-sheet/understanding-and-interpreting-box-plots

```Python
full.boxplot(column='Age')
```

![1531311039013](../assets/img/1531311039013.png)



```Python
full.boxplot(column='Age',by='Pclass')
```

![1531311958613](../assets/img/1531311958613.png)

###  Dendrogram

* Jednym z ciekawszych wykresów jest dendogram, który pokazuje zależności danych  w postaci drzewa

Ten wykres można potraktować jako ciekawostkę, jedyne co można odczytać to to że Cabin i Age są najbardziej wpływowymi kolumnami.

```python
import missingno as msno
msno.dendrogram(full)
```

![1531313292348](../assets/img/1531313292348.png)

### Heatmap / Correlation Map

* Heatmap pozwala zobaczyć zależności z korelacji. Ujemne korelacje są na ciemniejsz, a dodanie na coraz jaśniejsze.

```Python
cols = ['Age','_Embarked','Fare','Parch','Pclass','_Sex','SibSp','Survived','_CabinType']
corr = full[cols].corr()

import seaborn as sns
sns.heatmap(corr)
```

![1531314238165](../assets/img/1531314238165.png)



### Wykresy zbiorowe

* Wykresy można grupować przez sublots() - podajemy ilość kolumn i wierszy. Np, ja mogę łatwo zobaczyć stosunek ilości przeżytych do całości.

```Python
for column in ['Pclass','Sex','SibSp','Parch','Embarked']: 
    fig, axes = plt.subplots(nrows=1, ncols=2)

    (train_df
        .groupby(column)['Survived']
        .agg(['count','sum'])
        ).plot.bar(ax=axes[0])
    (train_df
        .groupby(column)['Survived']
        .mean()
        ).plot.bar(ax=axes[1])
```



![1531314471042](../assets/img/1531314471042.png)

![1531314556333](../assets/img/1531314556333.png)

![1531314565053](../assets/img/1531314565053.png)

* Wyciągnałem tak też nową kolumnę TicketCounts które oznacza ile osób ma ten sam numer biletu.

```Python
full['TicketCounts'] = full.groupby(['Ticket'])['Ticket'].transform('count')

(full
.groupby('TicketCounts')['Survived']
.agg(['count','sum'])
).plot.bar()
plt.show()
(full
.groupby('TicketCounts')['Survived']
.mean()
).plot.bar()
plt.show()
```

![1531314658243](../assets/img/1531314658243.png)



## Dane: R

### Kategoryzacja

* W przypadku R kategoryzacja polega na przerobieniu na factor za pomocą as.factor a następnie na as.numeric

```R
full$Sex2 <- as.numeric(as.factor(full$Sex))
full$Embarked2 <- as.numeric(as.factor(full$Embarked))
```

### Kategoryzacja kolumny Cabin

```R
full$Cabin2 <-as.numeric(as.factor(substring(full$Cabin, 0, 1) ))
```

### Korelacja

* Korelacje można wwykonać przez funkcję 

```R
cols <- c('Age','Sex2','Embarked2','Fare','Parch','Pclass','SibSp','Survived','Cabin2')
cor( full[,cols], use="complete.obs")
```

![1531319057276](../assets/img/1531319057276.png)

Widać największą korelację przy kolumnie Sex2, Age, Fare. To pomoże przy określaniu kolumn dostępnych do algorytmu.

### Tytuł - Pattern

* Warto sobie wyciągnąć tytuł z imienia i nazwiska czyli kolumny Name. Do tego przydaje się regular expression
* Tytuł można wyłuskać przez str_match z biblioteki 

```R
library(stringr)
full$Title <- str_match(full$Name, ",\\s([^ .]+)\\.?\\s+")[,2]
```

```R
full %>% 
  group_by(Title) %>% 
  summarise(cnt = n()) %>%
  arrange(desc(cnt))
```

```R
 Title      cnt
   <chr>    <int>
 1 Mr         757
 2 Miss       260
 3 Mrs        197
 4 Master      61
 5 Dr           8
 6 Rev          8
 7 Col          4
 8 Major        2
 9 Mlle         2
10 Ms           2
11 Capt         1
12 Don          1
13 Dona         1
14 Jonkheer     1
15 Lady         1
16 Mme          1
17 Sir          1
18 the          1
```

* Część danych nie jest potrzebna, dlatego najlepiej zgrupować je sobie w kilka kategori do lepszego predykcji

```R
full$Title2 <- full$Title
full$Title2[ full$Title %in% c('Mille','Ms','Lady')] <- 'Miss'
full$Title2[ full$Title %in% c('Mme','Sir')] <- 'Mrs'
full$Title2[ ! full$Title %in% c('Miss','Master','Mr','Mrs')] <- 'Other' 
full$TitleN <- as.numeric(as.factor(full$Title2))


full %>% 
  group_by(Title2) %>% 
  summarise(cnt = n()) %>%
  arrange(desc(cnt))
```

```R
 Title2   cnt
  <chr>  <int>
1 Mr       757
2 Miss     260
3 Mrs      197
4 Master    61
5 Other     34
```

## Wykresy: R

###  Histogram

histogram można wyświetlić przez prostą funkcję hist

```R
hist(full$Age)
```

![1531320637716](../assets/img/1531320637716.png)

Ilość podziałów można ustawić przez breaks

```R
hist(full$Age, breaks=60)
```



![1531382898556](../assets/img/1531382898556.png)

Histogram można takżę narysować przez funkcję ggplot.



```R
ggplot(data=full, aes(full$Age)) + geom_histogram()
```

![1531320658550](../assets/img/1531320658550.png)

```R
ggplot(data=full, aes(full$Age)) + geom_histogram(bins=60)
```

![1531382977609](../assets/img/1531382977609.png)

Dzięki ggplot można nawet nałożyć kilka wykresów (jak histogram) 

```R
ggplot(data=full, aes(x=Age)) +
  geom_histogram(binwidth = 2.5, alpha = 0.2) + 
  geom_histogram(data = subset(full,Survived == 1), fill = "blue", alpha = 0.2) +
  geom_density(aes(y=2.5 * ..count..),color="red",na.rm = T) +
  geom_density(data = subset(full,Survived == 1), aes(y=2.5 * ..count..),color="blue",na.rm = T)
```

* geom_denisty - powoduje narysowanie szacowanej linii gęstości. Ponieważ wynik jest od 0 do 1, trzeba albo histogram zmniejszyć albo geom_density powiększyć do histogramu (```aes=(y=2.5* ..count..)```)

![1531384908536](../assets/img/1531384908536.png)

### Boxplot

Zawiera on dużo informacji więc lepiej doczytać co oznaczają poszczególne wartości

https://www.wellbeingatschool.org.nz/information-sheet/understanding-and-interpreting-box-plots



```R
ggplot(data=full, aes(Survived, Age, group = Survived)) + geom_boxplot()
```

![1531385440163](../assets/img/1531385440163.png)

Co można wywnionskować

* Mediana przeżycia jest równa co do wieku
* Zwykle młodsi przeżywają

```R
ggplot(data=full, aes(Pclass, Age, group = Pclass)) + geom_boxplot()
```

![1531385467441](../assets/img/1531385467441.png)

Co można wywnioskować że 

* Osoby z 3 klasy są najmłodsze i rozrzut jest najmniejszy ze wszystkich. 
* 50% osób w pierwszej klasie znajduje się między 30 a 50 rokiem życia

### Heatmap / Correlation Map

Prosty wykres korelacji danych można zrobić przez funkcję heatmap

```R
cols <- c('Age','Sex2','Embarked2','Fare','Parch','Pclass','SibSp','Survived','Cabin2')
corr <- cor( full[,cols], use="complete.obs")

heatmap(corr, 
        na.rm = T,  # same data set for cell labels
        )
```

![1531388385563](../assets/img/1531388385563.png)



Bardziej zaawansowany  heatmap oferuje ggplot, trzeba tylko wynik korelacji (który jest typu matrix) zamienić na data.frame. Można to zrobić przez funkcje melt

```R
library(reshape2)
corr_df <- melt(corr, na.rm = TRUE)

ggplot(corr_df, aes(x=Var1,y=Var2, fill=value)) +
  geom_tile() +
  geom_text(aes(Var2, Var1, label = round(value,2)), color = "white", size = 4) 
```

![1531389001159](../assets/img/1531389001159.png)

### Performance Analytics

Dość ciekawym wykresem jest Performance Analytics. Pozwala na jedynm wykresie pokazać histogram, zależności między zmiennymi i jak zmieniają się dane w zależności od zmiennych.

```R
cols <- c('Age','Sex2','Embarked2','Fare','Parch','Pclass','SibSp','Survived','Cabin2','TitleN')

# install.packages("PerformanceAnalytics")
library("PerformanceAnalytics")
chart.Correlation(full[,cols], histogram=TRUE, pch=19, font.size = 15)
```



![1531389722537](../assets/img/1531389722537.png)

* Po przekątnej mamy histogram, po lewej na dole wykresy punktowe i szacowany wykres zależności między punktami. 
* Np: wiersz Survived z kolumną Age widzimy żę wraz ze wzrostem wieku przeżywalność spada, odwrotnie jak w przypadku opłaty za bilet Fare, wraz ze wzrostem przeżywalność rośnie
* Na górze mamy corelację między zmiennymi.

### Grupowe analizy

Można także zgrupować wykresy w przeliczeniu na przeżywalność i umieścić je na jednym wykresie

W tym wypadku można użyć funkcji grid.arrange z gridExtra() a przedtem dla każdego wygenerować wykres który dodajemy do listy ```vector[[col]] <-plot```

Ponieważ Age i Fare są wartościami ciągłymi dobrze jest je podzielić na obszary przez funkcje ```cut```

```R
library(ggplot2)
require(gridExtra)


full$AgeCut <- cut(full$Age,breaks = seq(0, 100, by = 10))
full$FareCut <- cut(full$Fare,10)


cols <- c('AgeCut','Sex','Embarked','FareCut','Parch','Pclass','SibSp', 'Cabin2','Title2')
vector <- list()


get_plot <- function (data, col) {
  data_group <- data[,c(col,"Survived")] %>% 
    select(x = col, "Survived") %>%
    drop_na(Survived) %>% 
    group_by(x) %>% 
    summarise(Total = n(),Survived = sum(Survived,na.rm = T), ratio = sum(Survived,na.rm = T)/n())
  
  plot <- ggplot(data_group ,aes(x, Survived, label='A')) +
    geom_bar(aes(y=Total), stat="identity", fill="red") +
    geom_bar(aes(y=Survived), stat="identity", fill="lightgreen")  +
    geom_text(aes(label = (round(Survived/Total,4) * 100)), color='blue', vjust = -5.25) + 
    xlab(col)
  
  return(plot)
}

for (col in cols) {
    vector[[col]] <- get_plot(full,col)
}

grid.arrange( grobs = vector, ncol = 2)
```

![1531398194635](../assets/img/1531398194635.png)

* Wyciągnałem tak też nową kolumnę TicketCounts które oznacza ile osób ma ten sam numer biletu.

```R
full <- full %>% group_by(Ticket) %>% mutate(TicketCount = n())
get_plot(full,"TicketCount")
```

![1531397934979](../assets/img/1531397934979.png) 

## Uzupełnianie pustych wartości

Jak zauważyliśmy wiele wartości jest pustych i dochodzimy do ważnego momentu kiedy te wartości trzeba uzupełnić pewnymi danymi. Można to zrobić na kilka sposobów:

* Usunąć wiersze które posiadają puste wartości, ale w tym wypadku w modelu pozostałoby zbyt mało danych do analiz
* Usunąć kolumny które posiadają puste wartości, ale część kolumn ma istotny wpływ na wynik (np: Age)
* Wstawić wartość zerową - np: 0, ale może to zaburzyć bardzo póżniejszy model.
* Interpolate Value - Wstawiś średnią, medianę ze zbioru. Wtedy nie zaburza aż tak bardzo wyników ale nie jest tak dokładna
* Forward Fill/Backward Fill - Wtedy wypełniane są wartości na podstawie tego co było we wcześniejszym wierszu idąc od początku (Forward) lub idąc od końca co było w następnym wierszu (Backward).

**Przykład R:**

```R
data <- data.frame(country=c("AUT", "AUT", "AUT", "AUT", "GER", "GER", "GER", "GER", "GER"), value=c(NA, 5, NA, NA, NA, NA, 7, NA, NA))

require(zoo)
na.locf(data, na.rm=FALSE) # Forward
na.locf(data, fromLast = TRUE, na.rm=FALSE) #Backward
```

**Przykład Python:**

```Python
data = pd.DataFrame({ 
  'country': ["AUT", "AUT", "AUT", "AUT", "GER", "GER", "GER", "GER", "GER"],
  'value:':  [np.nan, 5, np.nan, np.nan, np.nan, np.nan, 7, np.nan, np.nan]
})

data.fillna(method='ffill')  #forward
data.fillna(method='bfill') #backward
```

| Przed                                      | Forward                                    | Backward                                   |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ![1531456435579](../assets/img/1531456435579.png) | ![1531456471691](../assets/img/1531456471691.png) | ![1531456498785](../assets/img/1531456498785.png) |

* Impute value - Możemy wyliczyć metodami statystycznymi albo innymi jak dane mają zostać uzupełnione

## Python / uzupełnianie NaN

### Embarked

* Embarked jest tylko dwóch i pochodzą z tej samej kabiny, w dodatku to dwie osoby które zapłaciły tyle samo za bilet

```Python
full[full['Embarked'].isnull()]
```

![1531470782941](../assets/img/1531470782941.png)

Z tego można wysnuć wniosek że można Embarked wypełnić wartościami z wierwszy o zbliżonych wartościach. Najpierw sprawdzimy korelacji wartości _Embarked od czego ona najbardziej zależy. Według danych zależy od _CabinType i Pclass

```Python
full[cols].corr()['_Embarked'].sort_values(ascending=False)
```

```R
_Embarked     1.000000
_CabinType    0.242810
Pclass        0.192867
_Sex          0.104818
SibSp         0.067802
Parch         0.046957
_Title       -0.025390
Age          -0.089292
Survived     -0.176509
Fare         -0.241442
Name: _Embarked, dtype: float64
```

Wyświetliłem sobie iloe kosztował bilet 1 klasy dla kabin ‘B’ ```_CabinType = 1```

```Python
val = full[  (full['Pclass'] == 1) 
     & (full['_CabinType'] == 1) 
     ][['Fare','Embarked']];
val.groupby(['Embarked' ])['Fare'].agg(['count','min','max','mean','median'])
```

![1531471015516](../assets/img/1531471015516.png)

Mogę także wyświetlić boxplot pomiędzy tymi wartościami aby zobaczyć która opłata jest bliższa naszej wartości. Na czerwonej linii zaznaczyłem wartość 80.0 (czyli opłata która jest tu wypełniona)

```Python
ax = val.boxplot(column='Fare',by='Embarked');
ax.axhline(80,color='red')
```

![1531471161133](../assets/img/1531471161133.png)

Wartości są bardzo zbliżone, i wartość 80 jest bliska zarówno miediany dla ‘C’jak i dla ‘S‘.  Ponieważ jednak port ‘C’ma ceny bardziej rozsztrzelone mogę podejrzewać że portem źródłowym jest ‘S’(Southampton).

```Python
full.set_value(62,'Embarked','S');
full.set_value(830,'Embarked','S');
full['_Embarked'] = pd.Categorical(full.Embarked).codes
```

Potrzeba także przeliczenia kolumny _Embarked żeby zawierała także kody.

### Fare

Dla Fare postąpiłem podobnie, znalazłem najbardziej skorelowane zmienne i wyznaczyłem średnie wartości.

```Python
 full[full['Fare'].isnull()]
```

![1531471776097](../assets/img/1531471776097.png)

```Python
full[cols].corr()['Fare'].abs().sort_values(ascending=False)
```

```R
Fare          1.000000
Pclass        0.558629
_CabinType    0.547292
Survived      0.257307
_Embarked     0.238005
Parch         0.221539
_Sex          0.185523
Age           0.178740
SibSp         0.160238
_Title        0.028608
Name: Fare, dtype: float64
```

```Python
val = full[  (full['Pclass'] == 3) 
     & (full['Embarked'] == 'S') 
     & (full['Parch'] == 0) 
     & (full['Sex'] == 'male')
     & (full['Age'] >40.0)      
      ][['Age','Fare']];
val.groupby('Age').agg(['min','max','count','mean','median'])
```

![1531472297591](../assets/img/1531472297591.png)

Można przypuszczać że osoby w tym wieku średnio płaciły między 6 a 7 funtów.  Możemy w takim razie przyjąć średnią z tych dwóch wartości. Różnica między 6 a 7 jest zbyt mała aby mieć istotny wpływ w porównaniu do całego obszaru cen (od 0 do 512, gdzie średnia to 33 a mediana to 14)

```Python
full.at[1044,'Fare'] =  (7.25 + 6.2375)/2; # we set average for this values
```

### Age

Tutaj jest już spora ilość brakujących elementów, więc nie możemy jak poprzednio uzupełniać pojedyńcze wartości. Z pomocą idzie Scikit-learn który potrafi wartośći uzupełnić na podstawie średniej. 

```Python
from sklearn.preprocessing import Imputer

imp = Imputer(missing_values='NaN', strategy='mean', axis=0)
full['_AgeImputer'] = imp.fit_transform(full[['Age']])
```

### Cabin

Dla Cabin możemy użyć uzupełnienia przez najczęściej występujący element, ale nie chcemy używać elementu Cabin ponieważ jest za bardzo rozproszony. Dlatego użyjemy _CabinType. Najpierw wypełniamy go np.NANA

```Python
from sklearn.preprocessing import Imputer

full.loc[full['Cabin'].isnull(),'_CabinType'] = np.NAN

imp = Imputer(missing_values='NaN', strategy='most_frequent', axis=0)
full['_CabinType'] = imp.fit_transform(full[['_CabinType']])

full.at[1304,'_CabinType']
```

```R
2.0
```

Puste wartości zostały wypełnione  wartością 2.0.

```Python
full.isnull().sum()
```

```R
Age             263
Cabin          1014
Embarked          0
Fare              0
Name              0
Parch             0
Pclass            0
Sex               0
SibSp             0
Survived        418
Ticket            0
_Sex              0
_Embarked         0
_CabinType        0
Title             0
_Title            0
_AgeImputer       0
AgeCategory       0
dtype: int64
```

Nie licząć Age (które nie będzie brało udziału),  Cabin które nie wypełnialiśmy. Nie ma już pustych wartości

## R / Uzupełnianie NaN

### Embarked

Wpierw sprawdzamy jaka wartość jest pusta

```R
full %>% 
	filter( is.na(Embarked) )
```

![1531482983865](../assets/img/1531482983865.png)

Z tego można wysnuć wniosek że można Embarked wypełnić wartościami z wierwszy o zbliżonych wartościach. Najpierw sprawdzimy korelacji wartości _Embarked od czego ona najbardziej zależy. Według danych zależy od _CabinType i Pclass

```R
cols <- c('Age','Sex2', 'Embarked2','Fare', 'Parch' , 'Pclass', 'SibSp', 'Cabin2','TitleN')
abs(cor(full[,cols],use="complete.obs")[,"Embarked2"]) %>% .[order(., decreasing = TRUE)]
```

```R
Embarked2 1
Cabin2 0.262454554103353
Fare 0.251148302194369
Pclass 0.227288284895879
TitleN 0.0905833350473123
Age 0.0856017843323628
SibSp 0.065656436575671
Parch 0.0596918664937904
Sex2 0.022812259698426
```

Tak więc potrzebujemy dla Pclass, Cabin2 obliczyć Fare i zobaczyć który Embarked jest najbliżej

```R
full %>% 
filter(Pclass == 1 & Cabin2 == 2  ) %>% 
group_by(Embarked) %>% 
summarise( sum = sum(Fare), count = n(), mean = mean(Fare), median = median(Fare))
```

![1531484138136](../assets/img/1531484138136.png)

Mogę także wyświetlić boxplot pomiędzy tymi wartościami aby zobaczyć która opłata jest bliższa naszej wartości. Na czerwonej linii zaznaczyłem wartość 80.0 (czyli opłata która jest tu wypełniona)

```python
ax = val.boxplot(column='Fare',by='Embarked');
ax.axhline(80,color='red')
```

![1531484412189](../assets/img/1531484412189.png)

Wartości są bardzo zbliżone, i wartość 80 jest bliska zarówno miediany dla ‘C’jak i dla ‘S‘.  Ponieważ jednak port ‘C’ma ceny bardziej rozsztrzelone mogę podejrzewać że portem źródłowym jest ‘S’(Southampton).

```R
full[62,'Embarked'] = 'S'
full[830,'Embarked'] = 'S'

full$Embarked2 <- as.numeric(as.factor(full$Embarked))
```

Potrzeba także przeliczenia kolumny Embarked2 żeby zawierała także kody.

### Fare

Dla Fare postąpiłem podobnie, znalazłem najbardziej skorelowane zmienne i wyznaczyłem średnie wartości.

```R
full %>% 
	filter( is.na(Fare) )
```

![1531484645409](../assets/img/1531484645409.png)

```R
cols <- c('Age','Sex2', 'Embarked2','Fare', 'Parch' , 'Pclass', 'SibSp', 'Cabin2','TitleN')
abs(cor(full[,cols],use="complete.obs")[,"Fare"]) %>% .[order(., decreasing = TRUE)]
```

```R
   Fare      Parch     Pclass     Cabin2      SibSp  Embarked2       Sex2     TitleN        Age 
1.00000000 0.39000359 0.31001901 0.30240349 0.26803086 0.25114830 0.14894854 0.08180847 0.01432193 
```

```R
full %>% 
  filter(Pclass == 3 & Embarked == 'S' & Parch == 0 & Sex =='male'  & Age > 40) %>% 
  group_by(Age) %>% 
  summarise( sum = sum(Fare), count = n(), mean = mean(Fare), median = median(Fare))
```

![1531484915279](../assets/img/1531484915279.png)

Można przypuszczać że osoby w tym wieku średnio płaciły między 6 a 7 funtów.  Możemy w takim razie przyjąć średnią z tych dwóch wartości. Różnica między 6 a 7 jest zbyt mała aby mieć istotny wpływ w porównaniu do całego obszaru cen (od 0 do 512, gdzie średnia to 33 a mediana to 14)

```python
full[1044,'Fare'] =  (7.25 + 6.2375)/2 # we set average for this values
```

### Age

Tutaj jest już spora ilość brakujących elementów, więc nie możemy jak poprzednio uzupełniać pojedyńcze wartości. Z pomocą przychodzi na.aggregate który uzupełnia domyślnie wartością średnią.

```R
library(zoo)
full$Age <- na.aggregate(full[,"Age"],na.rm=FALSE)
```

### Cabin

Dla Cabin możemy użyć uzupełnienia przez najczęściej występujący element, ale nie chcemy używać elementu Cabin ponieważ jest za bardzo rozproszony. Dlatego użyjemy Cabin2. 

```R
val <- (full %>% drop_na(Cabin2) %>% count(Cabin2) %>% slice(which.max(n)) %>% select(Cabin2))$Cabin2
val
```

```r
3
```

Puste wartości zostały wypełnione  wartością 3.

```R
full <-  full %>% mutate(Cabin2 = ifelse( is.na(Cabin2),3, Cabin2) )
```

Można teraz wyświetlić sobie sumarycznie puste elementy. Nie licząc Survived, Cabin (które nie jest potrzebne), nie posiadamy już pustych wartości.

```R
  full %>%
    select(everything()) %>%  # replace to your needs
    summarise_all(funs(sum(is.na(.))))
```

![1531488116990](../assets/img/1531488116990.png)

