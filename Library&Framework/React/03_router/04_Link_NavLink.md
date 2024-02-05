
Link and NavLink are used in place of anchor tag because a tag loads whole page and Link and LoadLink loads particular part of the page

Usage

```jsx
<NavLink to="/home" activeClassName="activeLink">Home</NavLink>
```

 activeClass name is given to the active link



other ways to give class to active link
```jsx
<NavLink to="/contact"
    className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    }
>
    Contact
</NavLink>
```