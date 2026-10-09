// Renders the Instructions page from INSTRUCTIONS_DATA (see
// instructions-data.js, generated from the Flutter app's
// assets/assessment_info/*.toml and assets/question_info/*.toml).
//
// Mirrors lib/ui/instructions_page.dart's behavior:
//   - a jurisdiction dropdown; nothing else shows until one is picked.
//   - two sections ("Step 1 — Existing Need" / "Step 2 — Existing
//     Infrastructure"), each a list of accordion cards.
//   - only one question can be expanded at a time, across the whole page.
//   - a question's resource link, hint, markdown instructions, and (if
//     present) instructional video all live inside its card body.
(function () {
  var DATA = window.INSTRUCTIONS_DATA;
  if (!DATA) return;

  var select = document.getElementById('jurisdiction-select');
  var section = document.getElementById('questions-section');
  var wrap = document.getElementById('questions-wrap');

  var expandedKey = null; // "<sectionIndex>:<questionId>", or null.

  function populateSelect() {
    DATA.jurisdictions.forEach(function (j) {
      var opt = document.createElement('option');
      opt.value = j.id;
      opt.textContent = j.name;
      select.appendChild(opt);
    });
  }

  function videoEmbed(videoId) {
    var outer = document.createElement('div');
    outer.className = 'qa-video';
    var inner = document.createElement('div');
    inner.className = 'qa-video-aspect';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://drive.google.com/file/d/' + videoId + '/preview';
    iframe.allow = 'autoplay';
    iframe.loading = 'lazy';
    iframe.setAttribute('allowfullscreen', '');
    inner.appendChild(iframe);
    outer.appendChild(inner);
    return outer;
  }

  function buildCardBody(question) {
    var body = document.createElement('div');
    body.className = 'qa-card-body';
    body.hidden = true;

    var divider = document.createElement('hr');
    divider.className = 'qa-divider';
    body.appendChild(divider);

    if (question.url) {
      var resource = document.createElement('p');
      resource.className = 'qa-resource';
      resource.textContent = question.useUrl + ' ';
      var link = document.createElement('a');
      link.href = question.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'inline-link';
      link.textContent = 'available here';
      resource.appendChild(link);
      body.appendChild(resource);
    }

    if (question.hint) {
      var hint = document.createElement('p');
      hint.className = 'qa-hint';
      hint.textContent = question.hint;
      body.appendChild(hint);
    }

    var markdown = document.createElement('div');
    markdown.className = 'qa-markdown';
    markdown.innerHTML = window.marked
      ? window.marked.parse(question.instructionsMarkdown || '')
      : (question.instructionsMarkdown || '');
    body.appendChild(markdown);

    if (question.videoId) {
      body.appendChild(videoEmbed(question.videoId));
    }

    return body;
  }

  function buildCard(sectionIndex, indexInSection, question) {
    var key = sectionIndex + ':' + question.id;
    var label = 'S' + (sectionIndex + 1) + 'Q' + (indexInSection + 1);

    var card = document.createElement('div');
    card.className = 'qa-card';
    card.id = 'qa-' + key.replace(':', '-');

    var header = document.createElement('button');
    header.type = 'button';
    header.className = 'qa-card-header';
    header.setAttribute('aria-expanded', 'false');

    var labelSpan = document.createElement('span');
    labelSpan.className = 'qa-label';
    labelSpan.textContent = label;

    var textSpan = document.createElement('span');
    textSpan.className = 'qa-question-text';
    textSpan.textContent = question.questionText;

    var icon = document.createElement('span');
    icon.className = 'qa-icon';
    icon.textContent = '▾'; // ▾

    header.appendChild(labelSpan);
    header.appendChild(textSpan);
    header.appendChild(icon);

    var body = buildCardBody(question);

    header.addEventListener('click', function () {
      toggle(key, card, header, body);
    });

    card.appendChild(header);
    card.appendChild(body);
    return card;
  }

  function toggle(key, card, header, body) {
    var currentlyExpanded = expandedKey === key;

    if (expandedKey !== null) {
      var prevCard = document.querySelector('.qa-card.qa-expanded');
      if (prevCard) {
        prevCard.classList.remove('qa-expanded');
        var prevHeader = prevCard.querySelector('.qa-card-header');
        var prevBody = prevCard.querySelector('.qa-card-body');
        prevHeader.setAttribute('aria-expanded', 'false');
        prevHeader.querySelector('.qa-icon').textContent = '▾';
        prevBody.hidden = true;
      }
    }

    if (currentlyExpanded) {
      expandedKey = null;
      return;
    }

    expandedKey = key;
    card.classList.add('qa-expanded');
    header.setAttribute('aria-expanded', 'true');
    header.querySelector('.qa-icon').textContent = '▴'; // ▴
    body.hidden = false;
  }

  function renderJurisdiction(jurisdiction) {
    expandedKey = null;
    wrap.innerHTML = '';

    jurisdiction.sections.forEach(function (questions, sectionIndex) {
      if (sectionIndex > 0) {
        var spacer = document.createElement('div');
        spacer.className = 'step-section-spacer';
        wrap.appendChild(spacer);
      }

      var heading = document.createElement('h3');
      heading.className = 'section-heading section-heading-sm';
      heading.textContent =
        DATA.stepLabels[sectionIndex] || 'Step ' + (sectionIndex + 1);
      wrap.appendChild(heading);

      questions.forEach(function (question, indexInSection) {
        wrap.appendChild(buildCard(sectionIndex, indexInSection, question));
      });
    });

    section.hidden = false;
  }

  select.addEventListener('change', function () {
    var jurisdiction = DATA.jurisdictions.find(function (j) {
      return j.id === select.value;
    });
    if (jurisdiction) renderJurisdiction(jurisdiction);
  });

  populateSelect();

  // Optional deep link: instructions.html?jurisdiction=<id>
  var params = new URLSearchParams(window.location.search);
  var initialId = params.get('jurisdiction');
  if (initialId) {
    var initial = DATA.jurisdictions.find(function (j) {
      return j.id === initialId;
    });
    if (initial) {
      select.value = initial.id;
      renderJurisdiction(initial);
    }
  }
})();
