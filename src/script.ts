const inputArea = document.getElementById('input-area') as HTMLTextAreaElement;
const decodeBtn = document.getElementById('decode-btn') as HTMLButtonElement;
const outputList = document.getElementById('output-list') as HTMLUListElement;

const decodeLinks = (): void => {
  outputList.innerHTML = '';
  const lines = inputArea.value.split('\n');

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) continue;

    let decoded: string;

    try {
      const urlObj = new URL(line);
      const param = urlObj.searchParams.get('url');
      decoded = param ? decodeURIComponent(param) : line;
    } catch {
      decoded = line;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = decoded;
    a.textContent = decoded;
    a.target = '_blank';
    a.className = 'output-link';

    const btn = document.createElement('button');

    btn.textContent = 'Copy';
    btn.className = 'copy-btn';

    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(decoded);
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });

    li.append(a, btn);
    outputList.append(li);
  }
}

decodeBtn.addEventListener('click', decodeLinks);

inputArea.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault();
    decodeLinks();
  }
});
