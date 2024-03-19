# Task:

1. Created the react-components repository.
2. All task components are rendered on a single page, inside the common container - the root
   component `<App>`.
3. When visiting the working page (GitHub pages) of the task, there are no errors or warnings in the
   console.
4. Each component has a separate folder with a React component file and a styles file.
5. Everything that the component expects as props is passed to it during invocation.
6. Component names are clear and descriptive.
7. JS code is clean and understandable, Prettier is used.
8. Styling is done using CSS modules or Styled Components, so the classes in the resulting DOM will
   differ from the examples.
9. Sufficient basic styling of the application, primarily it should work, and then be beautiful.
   Allocate 20% of the time to CSS and 80% to JS.

---

## ✅ Social media profile:

It is necessary to create the `<Profile>` component, through which we could display information
about a social media user. User data is stored in the user.json file.

**Description of the `<Profile>` component:**

The component should accept several props with user information:

-   `username` - user's name
-   `tag` - tag in the social network without @
-   `location` - city and country
-   `avatar` - link to the image
-   `stats` - object with activity information

**The component should create a DOM element with the following structure.**

```jsx
<div class="profile">
    <div class="description">
        <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            class="avatar"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
    </div>
    <ul class="stats">
        <li>
            <span class="label">Followers</span>
            <span class="quantity">1000</span>
        </li>
        <li>
            <span class="label">Views</span>
            <span class="quantity">2000</span>
        </li>
        <li>
            <span class="label">Likes</span>
            <span class="quantity">3000</span>
        </li>
    </ul>
</div>
```
