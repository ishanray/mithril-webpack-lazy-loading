import m from 'mithril'
import Loader from './Loader'

class UserList {
    view(vnode) {
        return <div class="user-list">
            {vnode.attrs.users.map(user =>
                <p key={user.id}>
                    {user.name ? user.name : user}
                </p>
            )}
        </div>
    }
}

class Users {
    users = []

    async onClickHandler() {
        this.loading = true
        this.users = await m.request('https://jsonplaceholder.typicode.com/users')
        this.loading = false
    }

    view() {
        return <div>
            <h1>My app <a href="/home" oncreate={m.route.link}>home</a></h1>
            <Loader loading={this.loading} />
            <UserList users={this.users} />
            <button onclick={e => this.onClickHandler()}>load users</button>
        </div>
    }
}

export default Users
