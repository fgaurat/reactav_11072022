import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TodoListFetch from './index';


import {rest} from 'msw'
import {setupServer} from 'msw/node'
const  todos = [
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false,
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false,
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false,
    }
]

const server = setupServer(
    // capture "GET /todos" requests
    rest.get(process.env.REACT_APP_TODOS_URL!, (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json(todos))
    }),
    rest.delete(process.env.REACT_APP_TODOS_URL!, (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json(todos))
    }),
  )
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())




test('loads and displays TodolistFetch', async () => {
    const r = render(<TodoListFetch />)
    await waitFor(() =>{
        return screen.getByText('laboriosam')
        screen.debug()
    })
    const trs = r.container.querySelectorAll('tbody > tr')
    expect(trs.length).toBe(3)
    
  })
          
          