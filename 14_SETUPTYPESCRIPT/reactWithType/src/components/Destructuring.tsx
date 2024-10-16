import React from 'react'

type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    // enum
    category: Category
}

export enum Category {
  JS = "JavaScipt",
  TS = "TypeScript",
  P = "Python"
}

const Destructuring = ({title, content, commentsQty, tags, category}:Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Comments: {commentsQty}</p>
        <div>
            {tags.map((tag) => {
                return <span>#{tag}</span>;
            })}
        </div>
        <h4>{category}</h4>
    </div>
  )
}

export default Destructuring