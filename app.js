import m from 'mithril'
import Users from './components/Users'
import Layout from './components/Layout'
import homeResolver from './resolvers/home'

m.route(document.getElementById('app'), '/users', {
    '/users': {
        render: () =>
            <Layout>
                <Users />
            </Layout>
    },
    '/home': homeResolver
})
