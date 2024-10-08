// functions/getMastercad.js

export async function onRequestGet(request, env) {
    try {
      // 查询 D1 数据库中的 mastercad 表
      const result = await env.MY_D1_DB.prepare("SELECT * FROM mastercad").all();
      return new Response(JSON.stringify(result.results), {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  