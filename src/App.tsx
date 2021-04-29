import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import md2sb from 'md2sb'

export const App = () => {
  const [textareaValue, setTextareaValue] = useState<string>('')
  const [sb, setSb] = useState<string>('')
  const textareaReff = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const load = async () => {
      const convertedSbText = await md2sb(textareaValue)
      setSb(convertedSbText)
    }
    load()
  }, [textareaValue])

  useEffect(() => {
    textareaReff.current?.focus()
  }, [])

  return (
    <div className='App'>
      <Header>
        <h1>Markdown記法 → Scrapbox記法</h1>
      </Header>
      <Editor>
        <TextArea
          value={textareaValue}
          onChange={(event) => {
            setTextareaValue(event.target.value)
          }}
          ref={textareaReff}
        />
        <DisplayArea value={sb} />
      </Editor>
    </div>
  )
}

const Header = styled.div`
  height: 3rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  background: #1ba1ff;
  color: #fff;
`

const Editor = styled.div`
  flex: 1;
  display: flex;
  height: 40rem;
`

const TextArea = styled.textarea`
  background: #333;
  color: #fff;
  font-size: 16px;
  flex: 1;
  padding: 1rem;
`

const DisplayArea = styled.textarea`
  font-size: 16px;
  flex: 1;
  padding: 1rem;
`
