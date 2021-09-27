
import React from 'react'
import Cite from 'citation-js'

const DefaultBibJson = {
    "title": "Open Bibliography for Science, Technology and Medicine",
    "author":[
        {"name": "Richard Jones"},
        {"name": "Mark MacGillivray"},
        {"name": "Peter Murray-Rust"},
        {"name": "Jim Pitman"},
        {"name": "Peter Sefton"},
        {"name": "Ben O'Steen"},
        {"name": "William Waites"}
    ],
    "type": "article",
    "year": "2011",
    "journal": {"name": "Journal of Cheminformatics"},
    "link": [{"url":"http://www.jcheminf.com/content/3/1/47"}],
    "identifier": [{"type":"doi","id":"10.1186/1758-2946-3-47"}]
}

const Citation = ({ bibjson, format='html', template='apa', ClipboardComponent, ...rest }) => {
  if (!bibjson && !window.CITATION_DEMO) {
    return (
      <section {...rest}>
        <p>Not yet available, stay tuned!</p>
      </section>
    )
  }
  const cite = new Cite(bibjson ?? DefaultBibJson)

  if (format === 'bibtex') {
    const output = cite.format(format)
    return (
      <>
      <section {...rest}>
        <pre>{output}</pre>

      </section>
      <ClipboardComponent text={output}/>
      </>
    )
  }
  const output = cite.format('bibliography', {
    format,
    template
  })
  return (
    <>
    <section {...rest}>
      <p dangerouslySetInnerHTML={{__html:output}} />

    </section>
    <ClipboardComponent text={output}/>
    </>
  )
}

export default Citation