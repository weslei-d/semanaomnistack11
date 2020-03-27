const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should de able to create a new ONG', async () => {
        const resnponse = await request(app)
            .post('/ongs')
            .send({
                name: "OMS",
                email: "email@gmail.com",
                whatsapp: "14888889999",
                city: "Ourinhos",
                uf: "SP"
            });

        expect(resnponse.body).toHaveProperty('id');
        expect(resnponse.body.id).toHaveLength(8);

        console.log(resnponse.body);

    });
});