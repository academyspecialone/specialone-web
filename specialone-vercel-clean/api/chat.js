export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, lang = "es" } = req.body;

    const systemPrompt =
      lang === "en"
        ? `
You are the AI assistant of Special One Academy.

You help users in English.

Answer questions about:
- football training
- goalkeeper training
- academy methodology
- clinics
- international experiences
- registrations
- schedules
- player development

Be concise, friendly and professional.

If user wants to join or register, recommend completing the form on the website.
`
        : `
Eres el asistente IA de Special One Academy.

Ayudas a usuarios en español.

Responde dudas sobre:
- tecnificación
- porteros
- metodología
- clinics
- experiencias internacionales
- inscripciones
- horarios
- desarrollo del futbolista

Sé cercano, profesional y claro.

Si el usuario quiere inscribirse, recomiéndale completar el formulario de la web.
`;

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "No response",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
