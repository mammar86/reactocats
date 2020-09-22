import React, { Component } from 'react'
import { Article } from './Article'
import { Footer } from './Footer'
import { Header } from './Header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Article
          title="Terracottocat"
          link="https://octodex.github.com//terracottocat/"
          imageSrc="https://octodex.github.com//images/Terracottocat_Single.png"
          authorNum="149"
          authorLink="https://github.com/chubbmo"
          authorName="chubbmo"
          authorImage="https://github.com/chubbmo.png"
        />

        <Article
          title="Octogatos"
          link="https://octodex.github.com//octogatos/"
          imageSrc="https://octodex.github.com//images/Octogatos.png"
          authorNum="148"
          authorLink="https://github.com/cameronfoxly"
          authorName="cameronfoxly"
          authorImage="https://github.com/cameronfoxly.png"
        />
        <Article
          title="Sentrytocat"
          link="https://octodex.github.com//sentrytocat/"
          imageSrc="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
          authorNum="143"
          authorLink="https://github.com/cameronmcefee"
          authorName="cameronmcefee"
          authorImage="https://github.com/cameronmcefee.png"
        />
        <Article
          title="Boxertocat"
          link="https://octodex.github.com//boxertocat/"
          imageSrc="https://octodex.github.com//images/boxertocat_octodex.jpg"
          authorNum="141"
          authorLink="https://github.com/rubyjazzy"
          authorName="rubyjazzy"
          authorImage="https://github.com/rubyjazzy.png"
        />

        <Article
          title="Surftocat"
          link="https://octodex.github.com//suftocat/"
          imageSrc="https://octodex.github.com//images/surftocat.png"
          authorNum="140"
          authorLink="https://github.com/jeejkang"
          authorName="jeejkang"
          authorImage="https://github.com/jeejkang.png"
        />

        <Article
          title="Scubatocat"
          link="https://octodex.github.com//scubatocat/"
          imageSrc="https://octodex.github.com//images/scubatocat.png"
          authorNum="138"
          authorLink="https://github.com/cameronfoxly"
          authorName="cameronfoxly"
          authorImage="https://github.com/cameronfoxly.png"
        />

        <Article
          title="Dinotocat"
          link="https://octodex.github.com//dinotocat/"
          imageSrc="https://octodex.github.com//images/dinotocat.png"
          authorNum="130"
          authorLink="https://github.com/kimestoesta"
          authorName="kimestoesta"
          authorImage="https://github.com/kimestoesta.png"
        />

        <Article
          title="Spidertocat"
          link="https://octodex.github.com//spidertocat/"
          imageSrc="https://octodex.github.com//images/spidertocat.png"
          authorNum="88"
          authorLink="https://github.com/jeejkang.png"
          authorName="jeejkang"
          authorImage="https://github.com/jeejkang.png"
        />

        <Footer />
      </>
    )
  }
}

export default App
