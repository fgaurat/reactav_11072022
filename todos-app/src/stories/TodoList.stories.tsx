import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from '../components/TodoList';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TodosApp/TodoList',
  component: TodoList,

} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;


export const EmptyTodos = Template.bind({});
EmptyTodos.args = {
    todos:[]
}
export const ThreeItems = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

ThreeItems.args = {
    todos:[{
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      }]
};