'use client'
import React, { useState } from 'react'
import PptxGenJS from 'pptxgenjs'

export default function Home () {
  const [lyrics, setLyrics] = useState('')

  const handleGeneratePPT = () => {
    const pptx = new PptxGenJS()
    const verses = lyrics.split('\n\n') // Split by blank lines

    verses.forEach(verse => {
      pptx.addSlide().addText(verse, {
        x: '3%',
        y: '5%',
        w: '94%',
        h: '90%',
        autoFit: true,
        fontFace: 'Arial',
        fontSize: 30,
        align: 'left',
        valign: 'top',
        shadow: {
          type: 'outer',
          angle: 45,
          blur: 4,
          color: 'black',
          offset: 3,
          opacity: 0.66
        },
        wrap: false
      })
    })

    pptx.writeFile({ fileName: 'powerpoint-lyrics.pptx' })
  }

  return (
    <div>
      <textarea
        rows='20'
        cols='50'
        placeholder='Enter song lyrics (separate verses with blank lines)'
        value={lyrics}
        onChange={e => setLyrics(e.target.value)}
      />
      <button onClick={handleGeneratePPT}>Generate PowerPoint</button>
    </div>
  )
}
