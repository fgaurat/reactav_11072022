
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../../core/Todo';

describe("Testing TodoList", function() {

    let todos:Todo[]=[]
    
    beforeEach(function() {
        todos = [ {
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
          }
        ]    
    });

    it("create TodoList", function() {
      render(<TodoList todos={todos}/>)
    });

    it("TodoList must have 3 items", function() {
      const r = render(<TodoList todos={todos}/>)
      const tr = r.container.querySelectorAll('tbody>tr') 
      expect(tr.length).toBe(3)
    });


  });
  