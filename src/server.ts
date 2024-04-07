import fastify from "fastify";

const app = fastify()

app.post('/events', (request, reply) => {
  console.log(request.body)

  return 'Hello NLW Unite'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})