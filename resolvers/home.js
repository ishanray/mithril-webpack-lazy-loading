import m from 'mithril'
import Layout from '../components/Layout'

export default {
    onmatch: function() {
        return new Promise(resolve => {
            require(['../components/Home'], resolve)
        })
    },
    render: (vnode) => {
        let Home = vnode.tag
        return <Layout>
            <Home />
        </Layout>
    }
}
