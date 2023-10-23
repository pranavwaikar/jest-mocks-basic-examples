// you can't mock the functions outside class so change to const
// export function foo () {  }
// export function bar () { foo() }

// hello.js
export const message = () => {
    return 'Hello world';
}

export const foo = () => {
    return message();
}