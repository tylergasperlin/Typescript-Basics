import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }

    console.log(response)
    //response.data has properties of //id //title/ completed
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed

    logTodo(id, title, completed)

})


const logTodo = (id, title, completed) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished:  ${completed}
    `)
}
