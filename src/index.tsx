import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Rendimento do Bomb Crypto",
          type: "deposit",
          category: "Investimentos",
          amount: 1500,
          createdAt: new Date("2022-01-06 09:00:00"),
        },
        {
          id: 2,
          title: "Produtos para o cabelo",
          type: "withdraw",
          category: "Compras",
          amount: 150,
          createdAt: new Date("2022-01-08 13:00:00"),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

