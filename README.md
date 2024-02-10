### Домашнее задание 1

#### Декомпозиция проекта, работа с хуками useState, useEffect

1. Создайте репозиторий и добавьте в Collaborators проверяющего. Разверните сборку, запустите линтинг и проверьте работу pre-commit хуков <sup>(1 балл)</sup>
   **DONE**

- Создайте репозиторий на GitLab и добавьте проверяющего в Collaborators (логин проверяющего получите в Telegram-канале).
- Разверните окружение на своей или предоставленной Webpack-сборке. Вы также можете использовать сторонние решения, например Vite.
- Настройте скрипты для линтинга кода и хуки Git для запуска линтинга перед коммитом.

2. Декомпозируйте на компоненты страницу каталога, реализуйте компоненты: <sup>(3 балла)</sup>
   **DONE**

- Header — шапка сайта.
- Footer — подвал сайта.
- Card — анонс карточки товара.
- CardList — список карточек.
- Logo — логотип.
- Sort — компонент сортировки.
- Search — компонент поиска, можно отдельно выделить компонент инпута и кнопки.
- Spinner/Skeleton — компонент ожидания загрузки или скелетон анонса карточки товара.

3. Сделайте рендеринг товаров из массива <sup>(3 балла)</sup>
   **DONE**

- Реализуйте рендер карточек товаров в компоненте CardList, данные для рендеринга возьмите из файла.
- Отрендерите 12 карточек на странице.

4. Сделайте фильтрацию товаров при вводе в поисковую строку <sup>(2 балла)</sup>
   **NOT DONE**

- Фильтрация товаров осуществляется при вводе в компонент Search, фактически производится фильтрация исходного массива.

5. Реализуйте пагинацию товаров <sup>(3 балла)</sup>
   **NOT DONE**

- Реализуйте логику пагинации списков.
- Компонент должен быть универсальным.
