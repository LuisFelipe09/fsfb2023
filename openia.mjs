import Openai from 'openai';
import 'dotenv/config'

const openai = new Openai({
    apiKey: process.env.OPEN_AI_API_KEY  // This is also the default, can be omitted
});

export const getJson = async (texto) => {
    // Define la solicitud de generación de texto
    const prompt = `ayúdame a generar un resumen para un paciente mayor de la siguiente información para que pueda cuidarse en casa en formato json: "${texto}"`;

    let response =  await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": prompt }],
    })

    return response.choices[0].message.content
}
