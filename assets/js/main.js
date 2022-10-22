
async function sendContact(ev) {
    ev.preventDefault();

    const sendusername = document.getElementById('username').value;
    const sendercontent = document.getElementById('content').value;

    const webhookBody = {
        embeds: [{
            title: 'Feedback!',
            color: 741568,
            fields: [
                {name: 'Username:', value: sendusername},
                {name: 'Feedback:', value: sendercontent},
            ]
        }],
    };

    const webhookUrl = '#';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('Feedback sent!');
    } else {
        alert('There was an error submitting Feedback!');
    }
}