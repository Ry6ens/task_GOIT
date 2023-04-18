# Tweets | GoIT_TEST

[task-goit.vercel](https://task-goit.vercel.app/)

## Реалізація проекту

- Проект зібраний за допомогою [create-react-app](https://create-react-app.dev/).
- В якості `backend` використано [mockapi.io](https://mockapi.io/).
- Стилі написані на [styled-components](https://styled-components.com/).
- Всі необхідні дані для роботи додатку зберігаються в `localStorage`.

### Реалізовано:

- Сторінки: `Home`, `Tweets`
- Сторінка `Home` з коротким описом про додаток
- Сторінка `Tweets` на якій відображаються картки користувачів (імʼя, кількість
  твіттів, підписників та кнопка Follow з можливістю підписатись на `tweet`):
  1. Кнопка `back` для повернення на сторінку `Tweets`;
  2. `Dropdown` з можливістю фільтрації карток за станом `follow` або `following`;
  3. Кнопка `load more` для отримання додаткових `tweets`.
- У випадку переходу на неіснуючій `route` автоматичне перенаправлення сторінку `Home`

## Стек технологій

![JavaScrip](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
