export const arrayItems = [
    {
        name: 'Q&A',
        id: 'q&a',
        description: 'Answer questions based on existing knowledge',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Grammar corrector',
        id: 'grammarCorrector',
        description: 'Corrects your grammar',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Translate English into other languages',
        id: 'translate',
        description: 'Translates English into other languages',
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Code explaination',
        id: 'explainCode',
        description: 'Explains code',
        option: {
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        }
    },
    {
        name: 'JavaScript to Python',
        id: 'jsToPy',
        description: 'Translates JavaScript into Python code',
        option: {
            model: "code-davinci-002",
            prompt: "#JavaScript to Python:\nJavaScript: \ndogs = [\"bill\", \"joe\", \"carl\"]\ncar = []\ndogs.forEach((dog) {\n    car.push(dog);\n});\n\nPython:",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Movie to Emoji',
        id: 'movieEmoji',
        description: 'Will convert a movie title into an emoji',
        option: {
            model: "text-davinci-003",
            prompt: "Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \nStar Wars:",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    }
]