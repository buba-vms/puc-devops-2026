const request = require('supertest');
const app = require('../src/app');

describe('GET /produtos', () => {
  it('deve retornar lista de produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve retornar um produto pelo id', async () => {
    const res = await request(app).get('/produtos/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('deve retornar 404 para produto inexistente', async () => {
    const res = await request(app).get('/produtos/999');
    expect(res.statusCode).toBe(404);
  });
});

describe('POST /produtos', () => {
  it('deve criar um novo produto', async () => {
    const res = await request(app)
      .post('/produtos')
      .send({ nome: 'Teclado', preco: 200 });
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe('Teclado');
  });
});
