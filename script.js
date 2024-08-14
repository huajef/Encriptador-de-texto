document.addEventListener('DOMContentLoaded', function() {
    const replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const reverseReplacements = Object.fromEntries(Object.entries(replacements).map(([key, value]) => [value, key]));

    function encrypt(text) {
        return text.split('').map(char => replacements[char] || char).join('');
    }

    function decrypt(text) {
        for (let [key, value] of Object.entries(reverseReplacements)) {
            text = text.split(key).join(value);
        }
        return text;
    }

    document.getElementById('processBtn').addEventListener('click', () => {
        const text = document.getElementById('textInput').value;
        const action = document.getElementById('actionSelect').value;
        let result = '';

        if (action === 'encrypt') {
            result = encrypt(text);
        } else if (action === 'decrypt') {
            result = decrypt(text);
        }

        document.getElementById('resultText').value = result;
    });

    document.getElementById('copyBtn').addEventListener('click', () => {
        const resultText = document.getElementById('resultText');
        resultText.select();
        document.execCommand('copy');
    });
});
