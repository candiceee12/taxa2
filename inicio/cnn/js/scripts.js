// global-loader.js
// === EDITE AQUI APENAS ESSA VAR COM OS SEUS SNIPPETS ===
const SNIPPETS = {
  head: `
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  async
  defer
></script>

<script>
  window.pixelId = "6949757ae38914f396ec32b3";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>

  `.trim(),

  body: `

  `.trim()
};
// =======================================================
// NÃO PRECISA MEXER NO RESTANTE
(function () {
  function hashStr(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h) + s.charCodeAt(i);
    return (h >>> 0).toString(36);
  }

  function parseAndInject(html, targetName) {
    if (!html) return;
    const marker = 'data-injected-hash';
    const parser = new DOMParser();
    const doc = parser.parseFromString('<div id="__tmp__">' + html + '</div>', 'text/html');
    const container = doc.getElementById('__tmp__');
    if (!container) return;

    const nodes = Array.from(container.childNodes);
    nodes.forEach(node => {
      let nodeHtml = node.nodeType === 1 ? node.outerHTML : (node.nodeValue || '');
      const h = hashStr(nodeHtml);
      if (document.querySelector('[' + marker + '="' + CSS.escape(h) + '"]')) return;

      const target = (targetName === 'body') ? (document.body || document.getElementsByTagName('body')[0]) : (document.head || document.getElementsByTagName('head')[0]);


      const doAppend = function() {
        const realTarget = (targetName === 'body') ? (document.body || document.getElementsByTagName('body')[0]) : (document.head || document.getElementsByTagName('head')[0]);
        if (!realTarget) return;

        if (node.nodeName && node.nodeName.toLowerCase() === 'script') {
          const s = document.createElement('script');
          if (node.attributes) {
            Array.from(node.attributes).forEach(a => s.setAttribute(a.name, a.value));
          }
          if (node.src) {
            s.src = node.src;
          } else {
            s.textContent = node.textContent || node.innerText || '';
          }
          s.setAttribute(marker, h);
          realTarget.appendChild(s);
        } else if (node.nodeName && node.nodeName.toLowerCase() === 'noscript') {
          const dest = document.body || document.getElementsByTagName('body')[0];
          if (!dest) return;
          const ns = document.createElement('noscript');
          ns.innerHTML = node.innerHTML || '';
          ns.setAttribute(marker, h);
          dest.appendChild(ns);
        } else {
          try {
            const imported = document.importNode(node, true);
            if (imported.nodeType === 1) imported.setAttribute(marker, h);
            realTarget.appendChild(imported);
          } catch (e) {
            const wrapper = document.createElement('div');
            wrapper.setAttribute(marker, h);
            wrapper.innerHTML = nodeHtml;
            realTarget.appendChild(wrapper);
          }
        }
      };

      if ((targetName === 'body' && document.body) || (targetName === 'head' && document.head)) {
        doAppend();
      } else {
        document.addEventListener('DOMContentLoaded', doAppend);
      }
    });
  }

  try { parseAndInject(SNIPPETS.head, 'head'); } catch (e) { console.error(e); }
  try { parseAndInject(SNIPPETS.body, 'body'); } catch (e) { console.error(e); }
})();
