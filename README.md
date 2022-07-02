# song-bird-v3

Demo: https://songbird-theta.vercel.app/

Проект выполнен с использованием Next.js и Sanity Studio v3.0

Предварительная версия Sanity Studio v3.0 для разработчиков вышла 14.06.20227

[Сообщение о релизе](https://www.sanity.io/blog/sanity-studio-v3-developer-preview)

Работа над v3 ещё продолжается, и в коммерческих целях пока рекомендуется использовать v2 но уже можно готовиться к переходу на версию v3.

Здесь рассмотрим различия в работе с Sanity v2 и v3.

1. Регистрируемся по ссылке https://www.sanity.io.

Зарегистрироваться можно через Google, GitHub или по e-mail. Запоминаем способ, который использовали для регистрации.

2. Создаём новый проект

- Sanity v2
  - переходим по ссылке https://www.sanity.io/get-started/create-project
  - Копируем предложенный код, выполняем его в терминале
  - Код выглядит примерно так:
  ```npm install -g @sanity/cli && sanity init --template get-started --project `projectId` --dataset production --provider github```
- Sanity v3
  - предполагается, что для создания нового проекта достаточно выполнить в терминале команду `npm create sanity@dev-preview`
  - если команда завершается ошибкой, для создания нового проекта выполненяем команды (по очереди)  
  ```npm install @sanity/cli@dev-preview```  
  ```npx @sanity/cli@dev-preview --version```  
  (здесь результат - `@sanity/cli version 3.0.0-dev-preview.9`)  
  ```npx @sanity/cli@dev-preview init```
  (здесь задают много вопросов - проверяют авторизацию на сайте sanity.io, спрашивают использовать ли TS, установить ли коллекцию научно-фантастических фильмов, предлагают указать имя sanity-проекта. В результате проект всё же создаётся, и он использует sanity v3

3. Проверка версии Sanity

- Sanity v2
  ```sanity -v //@sanity/cli version 2.30.0```
