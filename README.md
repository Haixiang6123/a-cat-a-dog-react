# a-cat-a-dog-react

A React App for showing cats 🐱 and dogs 🐶.

[Click here to view the demo](https://haixiang6123.github.io/a-cat-a-dog-react/#)

## Screenshot

![](https://i.loli.net/2019/04/01/5ca195a99e045.png)

## How to use

### Before running it
Before running it, you need to add a file `secret.ts` to 
the directory `/src/axios`. So, it would be `/src/axios/secret.ts`.

Then place following codes in it.

```typescript
export const catKey = 'APPLY THE KEY ON https://thecatapi.com/'
export const dogKey = 'APPLY THE KEY ON https://thedogapi.com/'
```

For those 2 keys, you need to sign up in [thecatapi.com](https://thecatapi.com/) and [thedogapi.com](https://thedogapi.com/).

### Now run it

Now, enter following commands to run it :)
```bash
$ cd a-cat-a-dog-react

$ yarn install

$ yarn start
```

## Stacks

* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
* [Redux](https://redux.js.org/)
* [Material UI x React](https://material-ui.com/)
* [Axios](https://github.com/axios/axios)
* [Typescript](https://www.typescriptlang.org/)
