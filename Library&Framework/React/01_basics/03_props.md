
Props in React

 **Passing Data:**
    Props are passed from a parent component to a child component as attributes.

  ```jsx
     function ParentComponent() {
       return <ChildComponent name="John" age={25} />;
     }
  ```

  The `name` and `age` are props passed to `ChildComponent`.


 **Functional Components:**
  This is how props are recieved.

  ```jsx
     function ChildComponent(props) {
       return <p>Name: {props.name}, Age: {props.age}</p>;
     }
  ```

 **Class Components:**
  In class components, props are accessed through `this.props`. For example:

 **Dynamic Values:**
    Props can contain various types of data, including strings, numbers, arrays, objects, and even functions.

 **Immutable:**
    Props value can't be modified in child compononet

 **Desturcturing and Default Props:**
    We can desturcture the props in parameter and can also give default values.

  ```jsx
     function ChildComponent({name ="Aditya",age}) {
       return <p>Name: {name}, Age: {age}</p>;
     }
  ```


 **Spread Operator:**
    The spread operator (`...`) can be used to pass all the props of a parent component to a child component.

  ```jsx
     function ParentComponent() {
       const data = { name: 'Bob', age: 28 };
       return <ChildComponent {...data} />;
     }
  ```