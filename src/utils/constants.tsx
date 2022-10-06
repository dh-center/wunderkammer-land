import Farfor from "../assets/images/articles_farfor.jpg";
import Grafin from "../assets/images/articles_grafin.jpg";
import Ikona from "../assets/images/articles_ikona.jpg";
import Petr from "../assets/images/articles_petr.jpg";

export const DATA_TYPES = {
  GEO_POINT: "GEO_POINT",
  RICH_TEXT: "RICH_TEXT",
  JULIAN_DATE: "JULIAN_DATE",
  MEDIA: "MEDIA",
  TEXT: "TEXT"
};

export const CALENDAR_TYPE = {
  GREGORIAN: 1,
  JULIAN: 2,
  STRING: 3
};

export const PROPERTIES_NAMES: { [key: string]: string } = {
  unknownProperty: "Неизвестное свойство",
  address: "Адрес",
  legalName: "Юридическое название",
  artisticText: "Художественный текст",
  tags: "Теги",
  sources: "Источники",
  quote: "Цитата",
  julianDate: "Дата",
  geoPoint: "Гео-точка",
  annotation: "Аннотация",
  media: "Медиа",
  bibliography: "Библиографическое описание",
  copyrightHolder: "Правообладатель",
  creationPlace: "Место создания",
  creator: "Создатель",
  family: "Родители (семья)",
  format: "Формат",
  originalText: "Оригинальный текст",
  participants: "Участники",
  profession: "Профессия",
  refutation: "Опровержение",
  socialNetworks: "Социальные сети",
  storage: "Место хранения",
  url: "URL"
};

type Article = {
  slug: string; // url
  title: string; // заголовок для списка и для страницы
  author: string; // автор для списка и для страницы статьи
  content: JSX.Element; // собственно контент статьи
  preview: string; // изображение для списка
};

export const ARTICLES: Article[] = [
  {
    slug: "1",
    title: "Приказал подать cамый большой бокал, какой только могли найти. Три этюда о кубке.",
    author: "Марина Брюханова",
    content: (
      <>
        <h2 className="article_subtitle">Kубок заздравный</h2>
        <p className="article_content">
          В образах ярких, выдающихся исторических личностей необыкновенно притягательны их человеческие, житейские привычки и
          пристрастия, которые многократно приближают к нам людей прошедших эпох, сокращая временную и социальную дистанцию. В
          этом смысле Петр Великий оставил потомкам исключительное нематериальное наследие, получившее воплощение в конкретных
          материальных памятниках. Мы же, со своей стороны, стремимся через них постичь личность первого российского императора.
        </p>

        <p className="article_content">
          В образах ярких, выдающихся исторических личностей необыкновенно притягательны их человеческие, житейские привычки и
          пристрастия, которые многократно приближают к нам людей прошедших эпох, сокращая временную и социальную дистанцию. В
          этом смысле Петр Великий оставил потомкам исключительное нематериальное наследие, получившее воплощение в конкретных
          материальных памятниках. Мы же, со своей стороны, стремимся через них постичь личность первого российского императора.
        </p>
        <img className="article_image" src={Petr} alt="" />
        <p className="article_content">
          В образах ярких, выдающихся исторических личностей необыкновенно притягательны их человеческие, житейские привычки и
          пристрастия, которые многократно приближают к нам людей прошедших эпох, сокращая временную и социальную дистанцию. В
          этом смысле Петр Великий оставил потомкам исключительное нематериальное наследие, получившее воплощение в конкретных
          материальных памятниках. Мы же, со своей стороны, стремимся через них постичь личность первого российского императора.
        </p>
      </>
    ),
    preview: Petr
  },
  {
    slug: "2",
    title: "Sed justo lectus, fermentum quis sapien vel, sagittis faucibus ex. Morbi pharetra gravida imperdiet.",
    author: "Оксана Каяндер",
    content: (
      <>
        <h2 className="article_subtitle">Lorem Ipsum</h2>
        <p className="article_content">
          Duis sed mi at massa dictum imperdiet vitae eget est. Morbi ac malesuada nunc. Sed dignissim, sapien nec tempor
          luctus, urna elit finibus justo, a sodales felis turpis nec eros. Suspendisse mollis eget neque vel eleifend. Donec a
          augue at metus placerat pulvinar. Cras maximus ante vel lacinia tincidunt. Phasellus aliquet semper convallis. In
          purus nunc, viverra nec nisi sodales, porta ornare leo. Etiam justo mi, posuere sed ante sit amet, bibendum euismod
          lorem. Etiam dui mi, vulputate a risus non, rutrum elementum nisi. Phasellus ut placerat diam, sit amet venenatis
          magna. Donec faucibus pellentesque bibendum.
        </p>

        <p className="article_content">
          Sed euismod elit ut mattis tincidunt. Duis a auctor felis. Nam efficitur non ipsum vitae vehicula. Praesent eleifend
          odio purus, at aliquam augue tincidunt eu. Duis dictum scelerisque justo. In quam dolor, efficitur pulvinar risus id,
          ornare vehicula metus. Etiam accumsan arcu eget risus malesuada, ac dignissim tellus efficitur. Maecenas viverra metus
          quam, ac cursus quam sagittis vel. Ut eleifend nunc at volutpat dapibus. Nunc suscipit vehicula metus, vitae dictum
          orci blandit et.
        </p>
        <img className="article_image" src={Ikona} alt="" />
        <p className="article_content">
          Quisque pretium turpis quis augue vestibulum, in feugiat mauris dictum. Phasellus efficitur sed ligula vitae eleifend.
          Phasellus maximus scelerisque justo, eget fringilla magna sollicitudin sit amet. Maecenas vitae est vestibulum,
          efficitur nunc quis, ornare nisi. Mauris fermentum, lacus id pretium vulputate, purus nisl aliquam mi, sit amet porta
          ligula purus sed tellus. Donec tempor orci metus, ac convallis leo faucibus euismod. Fusce quis lectus id felis
          ullamcorper interdum. Nulla vel quam mi. Curabitur commodo leo velit, efficitur egestas dolor auctor sed. Duis sed
          aliquet purus. Donec a velit vitae dui gravida accumsan. Cras eu ante mollis, tempor ligula ac, aliquet mauris. Sed
          molestie orci id luctus efficitur. In ac ipsum nunc.
        </p>
      </>
    ),
    preview: Ikona
  },
  {
    slug: "3",
    title: "Praesent vel feugiat quam. Nam non sapien facilisis, consectetur diam ut, viverra lacus.",
    author: "Оксана Каяндер",
    content: (
      <>
        <h2 className="article_subtitle">Fusce in neque iaculis</h2>
        <p className="article_content">
          Vivamus efficitur sapien maximus tortor dignissim semper. Etiam sit amet varius dolor. Donec quis libero lacus. Donec
          non tristique lorem, ac rutrum lectus. Proin cursus cursus ipsum eu venenatis. Donec sit amet neque nec dui iaculis
          ullamcorper id sed lorem. Sed iaculis metus est, vel luctus eros facilisis a. Duis semper neque non tortor ultricies
          placerat. Donec fringilla maximus est nec scelerisque. Quisque id metus et augue lacinia laoreet.
        </p>

        <p className="article_content">
          Praesent vel feugiat quam. Nam non sapien facilisis, consectetur diam ut, viverra lacus. Fusce in neque iaculis,
          pretium diam at, rutrum lorem. Nunc sit amet eros non arcu dapibus congue in accumsan quam. Etiam sit amet sem ex.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin tempus aliquet
          sem.
        </p>
        <img className="article_image" src={Grafin} alt="" />
        <p className="article_content">
          Mauris commodo justo a massa varius viverra. Donec ut felis mattis, luctus ipsum eget, porta justo. Sed tempus tempus
          eros et interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Suspendisse vitae quam eget velit aliquam auctor. Quisque finibus sodales pulvinar. Maecenas pretium mi in nisl tempor
          dapibus. Nullam non massa ac felis convallis dictum. Donec tincidunt, nisl non vulputate tincidunt, arcu magna
          ullamcorper est, sed iaculis lacus augue at dolor. Quisque gravida nisl justo, lacinia viverra enim elementum et.
        </p>
      </>
    ),
    preview: Grafin
  },
  {
    slug: "4",
    title: "Mauris accumsan ante a felis consectetur euismod. Quisque dictum laoreet nisi vitae mollis.",
    author: "Тамара Носович",
    content: (
      <>
        <h2 className="article_subtitle">Donec non sollicitudin felis.</h2>
        <p className="article_content">
          Proin sed lacus ac orci tempus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Mauris sem urna, iaculis at iaculis eu, placerat vitae tortor. Etiam malesuada mattis mi vel lacinia.
          Etiam turpis augue, feugiat ut risus non, sodales fermentum arcu. Fusce justo metus, viverra sed massa a, consequat
          sodales diam. Fusce vel magna facilisis, vulputate libero sed, sollicitudin lectus. Vivamus at magna vestibulum,
          consequat mauris nec, egestas nisl. Phasellus imperdiet sapien eu lectus accumsan, ut hendrerit mi pellentesque.
          Integer vel turpis sit amet lectus aliquet scelerisque. Praesent scelerisque pharetra libero at hendrerit. Phasellus a
          rhoncus justo. Sed egestas felis id cursus vestibulum.
        </p>

        <p className="article_content">
          Donec non sollicitudin felis. Etiam ac orci sit amet erat euismod aliquam id vitae sem. Etiam sit amet placerat
          libero. Vestibulum auctor massa nisi, ut cursus nulla hendrerit non. Aliquam erat volutpat. Ut orci mi, iaculis eu
          enim id, congue rhoncus libero. Vivamus vel feugiat neque. Etiam hendrerit orci ante. Vestibulum sagittis, magna
          bibendum iaculis iaculis, nisi nulla interdum nisl, sit amet malesuada enim leo sed ligula. Vestibulum egestas nulla
          et lobortis venenatis. In placerat laoreet aliquet.
        </p>
        <img className="article_image" src={Farfor} alt="" />
        <p className="article_content">
          Mauris accumsan ante a felis consectetur euismod. Quisque dictum laoreet nisi vitae mollis. Pellentesque pulvinar
          velit quis massa vehicula venenatis. Proin vel venenatis arcu, eget porta lectus. Vestibulum in facilisis quam,
          finibus finibus tellus. Vestibulum tincidunt eu odio in malesuada. Ut ac purus dignissim, fringilla risus at,
          facilisis felis. Fusce porttitor cursus lacus eget pulvinar. Quisque vitae elementum enim. Phasellus iaculis ultricies
          nibh, id congue justo feugiat eu. Aliquam sed lobortis lacus, id eleifend nunc. Nunc sit amet accumsan leo, sed
          lacinia eros. Mauris sit amet urna nec lorem laoreet maximus.
        </p>
      </>
    ),
    preview: Farfor
  }
];
