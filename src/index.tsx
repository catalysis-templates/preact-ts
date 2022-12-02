import { h, render} from 'preact'
import Router from 'preact-router'
import {RandomEmoji} from './RandomEmoji'

function Render () {
    return (
        <div>
            <header>App Header Here</header>
            <Router>
                <RandomEmoji path="/2" />
            </Router>
        </div>
    )
}

render(<Render />, document.body)
