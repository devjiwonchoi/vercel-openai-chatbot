'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const {
    messages,
    input,
    isLoading,
    data,
    handleInputChange,
    handleSubmit,
    stop,
    reload,
  } = useChat()

  return (
    <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col">
      <section className="mb-auto m">
        {messages.map((m) => (
          <div className="mb-4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          Send
        </button>
        {isLoading ? (
          <button
            className="border-solid border-2 border-white p-2 rounded-md whitespace-nowrap"
            onClick={stop}
          >
            Stop Generating
          </button>
        ) : (
          data && (
            <button
              className="border-solid border-2 border-white p-2 rounded-md whitespace-nowrap"
              onClick={() => reload()}
            >
              Regenerate
            </button>
          )
        )}
      </form>
    </main>
  )
}
