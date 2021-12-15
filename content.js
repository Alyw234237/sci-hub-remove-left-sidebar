var pdf = document.body.querySelector("embed[type='application/pdf']");
if (pdf) {
  var pdf_url = pdf.src;
  // pdf_url = pdf_url.replace(/#.+$/, '');
  var page_title = document.title;

  document.documentElement.innerHTML = '';
  document.body.style = 'padding: 0px; margin: 0px; width: 100vw; height: 100vh;'
  document.title = page_title;

  var embed = document.createElement('embed');
  embed.src = pdf_url;
  embed.type = 'application/pdf';
  embed.style = 'width: 100vw; height: 100vh; border: none; overflow: hidden;';
  document.body.appendChild(embed);
}

