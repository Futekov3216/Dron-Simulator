<template>
    <div class="wrapper">
        <sui-form-field>
            <sui-button @click="addTodo()">Submit</sui-button>
            <sui-input placeholder="Enter task..." value="" focus v-model="newTodo" @keyup.esc="cancelEdit(todo)" @keyup.enter="addTodo()" />
            <h1 is="sui-header">TO DO LIST</h1>
                <sui-segment class="segmentw" v-for="(todo, i) in todos" :key="todo.id + todo.title + 1">
                    <h3 v-if="!todo.editing" @dblclick="editTodo(todo)">{{ todo.title }} <sui-button negative floated="right" content="DELETE" @click="removeTodo(i)"/></h3>
                    <sui-input v-else type="text" v-model="todo.title" v-focus></sui-input>
                </sui-segment>
        </sui-form-field>
    </div>
</template>
<style>
    .wrapper{
        max-width: 500px;
        margin: auto;
    }
    .segmentw{
        min-height: 65px;
    }
</style>
<script>
export default {
    data () {
        return {
          newTodo: '',
          show: true,
          todos:[
                    {
                    'id': 1,
                    'title': 'hi',
                    'complete': false,
                    'editing': false
                    },
                    {
                    'id': 2,
                    'title': 'bye',
                    'complete': false,
                    'editing': false
                    }
                ]
        } 
    },
    directives:{
        focus: {
            inserted: function(el){
                el.focus()
            }
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo == '') return
            this.show = true
            this.todos.push({
                id: this.todos.length + 1,
                title: this.newTodo,
                completed: false,
                editing: false
            })
            this.newTodo = ''
            console.log("added to do")         
        },
        removeTodo(i){
            this.todos.splice(i, 1)
            this.show = false
            console.log("removed to do")
        },
        editTodo(todo){
            console.log("edit to do")
            todo.editing = true
        },
        // doneEdit(todo){
        //     todo.editing = true
        // },
        // cancelEdit(todo){
        //    todo.title = this.beforeEditCache
        //    todo.editing = false 
        // }
    }
}
</script>


