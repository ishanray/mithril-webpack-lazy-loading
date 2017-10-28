import m from 'mithril'

class Home {
    view() {
        return <div>
            <h1>Home</h1>
            <a href="/users" oncreate={m.route.link}>go to users</a>
        </div>
    }
}

module.exports = Home
