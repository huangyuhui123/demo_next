import css from "./index.less"

import { Button } from 'antd'

function Home() {
  return (
    <div>
       <p className={css.example}>Welcome to next.js!</p>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default Home