let text = document.getElementById('wrapper').innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

